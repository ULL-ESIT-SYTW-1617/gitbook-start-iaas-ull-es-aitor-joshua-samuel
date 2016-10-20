//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var iaas = require('./lib/lib.js');
var json = ('./package.json');

gulp.task('deploy', function() {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});

gulp.task('deploy-github', shell.task([
  'git add .',
  'git commit -m "modificando"',
  'git push origin master'
]));

gulp.task('deploy-iaas', function() {
  deploy()
});
