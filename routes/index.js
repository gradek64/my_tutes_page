var express = require('express');
var router = express.Router();
var note = require('./make_note_route');




/* GET home page. */
router.route('/').get(function(req, res, next) {
   res.render('index',{ title: 'Express'});
});

// make note route;
router.route('/make_note').get(note.make_note);
router.route('/make_note_submit').post(note.make_note_submit);
router.route('/delete_note').post(note.delete_note);

//git pages;
router.route('/git_esential_training_summary').get(function(req, res, next) {
  res.render('git/git_esential_training_summary');
});

//css staff;
router.route('/CSS_all_selectors_refference').get(function(req, res, next) {
  res.render('css_staff/CSS_all_selectors_refference');
});
router.route('/click_activated_css3_js_together').get(function(req, res, next) {
  res.render('css_staff/click_activated_css3_js_together');
});

//vanila javascript 
router.route('/array_methods').get(function(req, res, next) {
  res.render('vanilla_js/array_methods');
});
router.route('/array_checks_and_loops').get(function(req, res, next) {
  res.render('vanilla_js/array_checks_and_loops');
});
router.route('/Object_properties_and_methods').get(function(req, res, next) {
  res.render('vanilla_js/Object_properties_and_methods');
});
router.route('/String_methods').get(function(req, res, next) {
  res.render('vanilla_js/String_methods');
});

//linux terminal commands 
router.route('/terminal_commands_flags').get(function(req, res, next) {
  res.render('linux_terminal_commands/terminal_commands_flags');
});

//sublime text
router.route('/sublime_text3_shortcuts').get(function(req, res, next) {
  res.render('sublime_text/sublime_text3_shortcuts');
});



module.exports = router;

