var gulp = require('gulp');
var config = require('../config').pages;
var browserSync  = require('browser-sync');
var handlebars = require('gulp-compile-handlebars');
var handleErrors = require('../util/handleErrors');

gulp.task('pages', function() {
  options = {
    batch : ['./src/partials']
  }

  return gulp.src(config.src)
    .pipe(handlebars({}, options))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});