import gulp from "gulp";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import mqpacker from "css-mqpacker";
import concat from "gulp-concat";
import babel from "gulp-babel";

gulp.task("bootstrap-custom-css", () => {
  var processors = [
    autoprefixer,
    mqpacker
  ];
  gulp.src("./assets/scss/bootstrap-custom.scss")
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("fokus-css", () => {
  var processors = [
    autoprefixer,
    mqpacker
  ];

  gulp.src(["./assets/scss/fokus.scss", "./assets/scss/fokus-print.scss"])
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("css", ["bootstrap-custom-css", "fokus-css"], () => {
  var processors = [
    autoprefixer,
    mqpacker
  ];
  return gulp.src(["./assets/css/bootstrap-custom.css", "./assets/css/fokus.css"])
    .pipe(concat("fokus-full.css"))
    .pipe(postcss(processors))
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("js", () => {
  return gulp.src("./assets/src/**/*.js")
    .pipe(babel())
    .pipe(concat("fokus-full.js"))
    .pipe(gulp.dest("./assets/js"))
});
