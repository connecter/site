var gulp = require('gulp');
var config = require('../config').markup;
var browserSync  = require('browser-sync');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');


gulp.task('markup', function() {
  options = {
    batch : ['./src/partials']
  }

  return gulp.src(config.src)
    .pipe(handlebars({}, options))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});