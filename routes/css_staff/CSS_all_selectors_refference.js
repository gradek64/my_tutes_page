var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('css_staff/CSS_all_selectors_refference');
});

module.exports = router;
