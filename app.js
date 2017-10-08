var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var array_methods = require('./routes/vanilla_js_routes/array_methods');
var array_checks_and_loops = require('./routes/vanilla_js_routes/array_checks_and_loops');
var Object_properties_and_methods = require('./routes/vanilla_js_routes/Object_properties_and_methods');
var String_methods = require('./routes/vanilla_js_routes/String_methods');


//css staff
var CSS_all_selectors_refference = require('./routes/css_staff/CSS_all_selectors_refference');
var click_activated_css3_js_together = require('./routes/css_staff/click_activated_css3_js_together');


//git_esential_training_summary
var git_esential_training_summary = require('./routes/git/git_esential_training_summary');


//linux terminal commands
var terminal_commands_flags = require('./routes/linux_terminal_commands/terminal_commands_flags');
//sublime text
var  sublime_text3_shortcuts= require('./routes/sublime_text/sublime_text3_shortcuts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//vanila javascript 
app.use('/array_methods', array_methods);
app.use('/array_checks_and_loops', array_checks_and_loops);
app.use('/Object_properties_and_methods', Object_properties_and_methods);
app.use('/String_methods', String_methods);

//git_esential_training_summary
app.use('/git_esential_training_summary', git_esential_training_summary);

//css staff 
app.use('/CSS_all_selectors_refference', CSS_all_selectors_refference);
app.use('/click_activated_css3_js_together', click_activated_css3_js_together);

//linux terminal commands 
app.use('/terminal_commands_flags', terminal_commands_flags);

//sublime text
app.use('/sublime_text3_shortcuts', sublime_text3_shortcuts);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
