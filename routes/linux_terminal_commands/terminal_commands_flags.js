var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('linux_terminal_commands/terminal_commands_flags');
});

module.exports = router;
