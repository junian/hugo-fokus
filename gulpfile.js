var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mqpacker = require("css-mqpacker");
var concat = require('gulp-concat');

gulp.task('bootstrap-custom-css', function() {
    var processors = [
        autoprefixer,
        mqpacker
    ];
    gulp.src('./assets/scss/bootstrap-custom.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('fokus-css', function() {
    var processors = [
        autoprefixer,
        mqpacker
    ];

    gulp.src(['./assets/scss/fokus.scss', './assets/scss/fokus-print.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('css', ['bootstrap-custom-css', 'fokus-css'], function(){
    var processors = [
        autoprefixer,
        mqpacker
    ];
    return gulp.src(['./assets/css/bootstrap-custom.css', './assets/css/fokus.css'])
    .pipe(concat('fokus-full.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/css/'));
});
