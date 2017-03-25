var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-clean-css'),
    imageopt = require('gulp-image-optimization');

// Minifies and combines all js files into js/min/app.min.js
gulp.task('scripts', function(){
   return gulp.src('js/*.js')
              .pipe(uglify())
              .pipe(concat('app.min.js'))
              .pipe(gulp.dest('js/min/'));
});

// Minifies and combines all css files into css/min/app.min.css
gulp.task('styles', function(){
   return gulp.src('css/*.css')
              .pipe(minifyCSS())
              .pipe(concat('app.min.css'))
              .pipe(gulp.dest('css/min/'));
});

// Optimizes images into images/opt
gulp.task('images', function() {
   return gulp.src('img/*.png')
              .pipe(imageopt({
                 optimizationLevel: 5
              }))
              .pipe(gulp.dest('img/opt'));
});

// Start watch for changes to all js and css files
gulp.task('watch', function(){
   gulp.watch('js/*.js', ['scripts']);
   gulp.watch('css/*.css', ['styles']);
});

// Set default to run all gulp tasks
gulp.task('default', ['styles', 'scripts', 'images', 'watch']);
