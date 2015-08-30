var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('copy:data', function() {
  return gulp.src('./data/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['copy:data'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
