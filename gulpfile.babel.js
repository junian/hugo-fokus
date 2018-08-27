import gulp from "gulp";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import mqpacker from "css-mqpacker";
import concat from "gulp-concat";
import log from "fancy-log";
import pluginError from "plugin-error";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

const browserSync = BrowserSync.create();

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

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new pluginError("webpack", err);
    log(`[webpack] ${stats.toString({
      colors: true,
      progress: true
    })}`);
    browserSync.reload();
    cb();
  });
});
