var express = require('express');
var router = express.Router();
var note = require('./make_note_route');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// make note route;
router.route('/make_note').get(note.make_note);
router.route('/make_note_submit').post(note.make_note_submit);
router.route('/delete_note').post(note.delete_note);

module.exports = router;
