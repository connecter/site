var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.sass.src + "**/*",   ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.pages.src, ['pages']);
  gulp.watch(config.pages.partials, ['pages']);
  gulp.watch(config.blog.src, ['blog']);
  gulp.watch(config.blog.partials, ['blog']);
  gulp.watch(config.scripts.src, ['scripts']);
});