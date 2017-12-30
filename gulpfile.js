const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const eslint = require('gulp-eslint');
const gUtil = require('gulp-util');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const mocha = require('gulp-mocha');
const guppy = require('git-guppy')(gulp);
const fs =    require('fs');
const path =  require('path');
const liveReload = require('livereload');




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


//angular sass convertsion files
const isNotAngularFolder = (file) => file.indexOf('angular_version') === -1;
const isNotUtils = (file) => file.indexOf('utils') === -1;
const isNotSVGIcons = (file) => file.indexOf('svg-icons') === -1;

const is = (ext) => (file) => file.substr(file.length - ext.length) === ext;

const dirname = (file) => path.dirname(file);

const getDestination = (src) => {
  return dirname(src);
};

const scanDir = (dir) =>
    fs.readdirSync(dir).reduce((files, file) =>
            fs.statSync(path.join(dir, file)).isDirectory() ?
                files.concat(scanDir(path.join(dir, file))) :
                files.concat(path.join(dir, file)),
        []);

const compileScss = (file, destination) => {
  return gulp.src(file).
      pipe(sass().on('error', sass.logError)).
      pipe(gulp.dest(destination));
};

gulp.task('compile-scss', () => {
  return scanDir('views/angularComponents').
      filter(isNotAngularFolder).
      filter(isNotUtils).
      filter(isNotSVGIcons).
      filter(is('.scss')).
      map((file) => compileScss(file, getDestination(file)));
});

//watch and liverelaod front end angular;

gulp.task('watch-reload',['compile-scss'],()=>{

 const liveReloadServer = liveReload.createServer();

    /* Watch scss */
  gulp.watch('views/angularComponents/**/*.scss', (file) => {
     console.log('path:', getDestination(file.path));
    compileScss(file.path, getDestination(file.path)).on('end', () => {
      let fn = path.basename(file.path, '.scss');
      liveReloadServer.refresh(`${fn}.css`);
    });
  });

  /* Watch js */
  gulp.watch(['views/angularComponents/**/*.js', '!views/angularComponents/**/*_test.js'], (file) => {
    liveReloadServer.refresh(file.path);
  });

  /* Watch html */
  gulp.watch('views/angularComponents/**/*.html', (file) => {
   liveReloadServer.refresh(server.gerCurrentUrl().href);
  });
})


/*gulp.task('watch', () => {
    gulp.watch('./styles/scss/style.scss', function() {
        buildCss();
    });
});*/
//gulp.watch('./styles/scss/style.scss',['buildCss']); 
        
gulp.task('buildCss', () => {
    buildCss();
});

gulp.task('default', () => {
    buildCss();
});

//it has to be there for some reson for git to commit;
gulp.task('pre-commit', []);
