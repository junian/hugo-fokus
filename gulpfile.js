var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var mqpacker = require("css-mqpacker");

gulp.task('css', function() {
    var processors = [
        autoprefixer,
        mqpacker
    ];
    gulp.src('./assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        // .pipe(postcss(processors))
        .pipe(gulp.dest('./assets/css/'));
});
