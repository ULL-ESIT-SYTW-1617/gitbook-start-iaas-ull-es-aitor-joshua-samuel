var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', () => {
  return gulp.src(['./local/*.js','./db/*.js','./*.js','./db/*/*.js','./local/*/*.js','./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
