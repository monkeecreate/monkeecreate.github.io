var gulp = require('gulp');

var sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

var paths = {
  styles: 'css/app.scss',
  scripts: ['js/jquery-2.1.0.js', 'js/skel.min.js', 'js/init.js']
};

// gulp.task('styles', function () {
//   gulp.src(paths.styles)
//     .pipe(sass())
//     .pipe(rename('app.css'))
//     .pipe(gulp.dest('css/'))
//     .pipe(rename('app.min.css'))
//     .pipe(sass({style: 'compressed'}))
//     .pipe(gulp.dest('css/'))
//     .pipe(notify({ message: 'Styles task complete.' }));
// });

gulp.task('scripts', function() {
  // Minify and concat JS
  gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(notify({ message: 'Scripts task complete.' }));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts']);
  // gulp.watch('css/*.scss', ['styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);
