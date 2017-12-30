	
/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
	
gulp.task('mytask', ()=> {
  //do stuff
});

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});

gulp.task('dependenttask', ['mytask'], function() {
  //do stuff after 'mytask' is done.
});

// create a default task and just log a message
gulp.task('default',['copyHtml'], () => {
  return gutil.log('Gulp is running! and copy html task')
});
