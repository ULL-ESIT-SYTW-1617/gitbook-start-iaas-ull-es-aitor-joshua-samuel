//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var deploy = require('gulp-deploy-git');

gulp.task('deploy', function() {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});



gulp.task('deploy-github', function() {
  return gulp.src('.')
    .pipe(deploy({
      repository: require('package.json').repository.url
    }));
});
