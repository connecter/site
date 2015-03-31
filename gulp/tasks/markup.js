var gulp = require('gulp');
var config = require('../config').markup;
var browserSync  = require('browser-sync');
var handlebars = require('gulp-compile-handlebars');
var handleErrors = require('../util/handleErrors');
var rename = require('gulp-rename');


gulp.task('markup', function() {
  options = {
    batch : ['./src/partials']
  }

  return gulp.src(config.src)
    .pipe(handlebars({}, options))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});