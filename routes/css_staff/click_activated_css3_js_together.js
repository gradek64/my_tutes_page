var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('css_staff/click_activated_css3_js_together');
});

module.exports = router;
