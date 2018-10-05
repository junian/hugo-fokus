import gulp from "gulp";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import mqpacker from "css-mqpacker";
import removeimportant from "@buddye/postcss-remove-important";
import concat from "gulp-concat";
import log from "fancy-log";
import pluginError from "plugin-error";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import prettify from "gulp-jsbeautifier";
import uncss from "gulp-uncss";

gulp.task("bootstrap-custom-css", () => {
  var processors = [
    autoprefixer,
    mqpacker
  ];
  gulp.src("./assets/src/scss/bootstrap-custom.scss")
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))
    .pipe(postcss(processors))
    /*
    .pipe(uncss({
      html: [
        "http://localhost:1313/page/2/",
        "http://localhost:1313/privacy-policy/",
        "http://localhost:1313/about/",
        "http://localhost:1313/archives/",
        "http://localhost:1313/xamarin-forms-video-background/"
      ]
    }))
    */
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("fokus-css", () => {
  var processors = [
    autoprefixer,
    mqpacker
  ];

  gulp.src(["./assets/src/scss/fokus.scss", "./assets/src/scss/fokus-print.scss"])
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
gulp.task("packjs", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);
  webpack(myConfig, (err, stats) => {
    if (err) throw new pluginError("webpack", err);
    log(`[webpack] ${stats.toString({
      colors: true,
      progress: true
    })}`);
    cb();
  });
});

gulp.task("js", ["packjs"], () => {
  gulp.src("./assets/js/fokus_template.js")
    .pipe(prettify({
      indent_size: 4,
      js: {
        indent_size: 2
      }
    }))
    .pipe(gulp.dest("./assets/js"));
});

gulp.task("default", ["css", "js"]);
