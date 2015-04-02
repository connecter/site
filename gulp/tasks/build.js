var gulp = require('gulp');

gulp.task('build', function(){
  gulp.start(['pages', 'blog', 'images', 'meta', 'minifyCss', 'uglifyJs'])
});
