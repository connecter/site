var gulp = require('gulp');

gulp.task('build', function(){
  gulp.start(['markup', 'images', 'minifyCss', 'meta', 'uglifyJs'])
});
