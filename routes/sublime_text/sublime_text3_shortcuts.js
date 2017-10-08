var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sublime_text/sublime_text3_shortcuts');
});

module.exports = router;
