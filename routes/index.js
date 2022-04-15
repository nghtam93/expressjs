var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
  res.render('pages/dashboard/index', { title: 'Dashboard' });
});

module.exports = router;
