// Requis
var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
// Variables de chemins
var source = '/slick/*.scss"'; // dossier de travail
var destination = 'slick/*.css'; // dossier à livrer

gulp.task('sass', function () {
  gulp.src(source)
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest(destination));
});
