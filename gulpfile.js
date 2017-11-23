const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const eslint = require('gulp-eslint');
const gUtil = require('gulp-util');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const mocha = require('gulp-mocha');
const guppy = require('git-guppy')(gulp);



function logError(msg) {
    gUtil.log(gUtil.colors.red(msg));

}

function logSuccess(msg) {
    gUtil.log(gUtil.colors.green(msg));
}

function buildCss() {
    logSuccess(`build css for App`);

    return gulp.src(`./styles/scss/style.scss`)
        .pipe(sass({includePaths: ['node_modules']}).on('error', sass.logError))
        .pipe(gulp.dest(`./styles/css`))
        .on('end', () => {
            logSuccess('css has been built');
        });
}



gulp.task('watch', () => {
    gulp.watch('./styles/scss/style.scss', function() {
        buildCss();
    });
});

gulp.task('buildCss', () => {
    buildCss();
});
