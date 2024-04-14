import { src, dest, pipe, series, parallel } from "gulp";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import mqpacker from "css-mqpacker";
import concat from "gulp-concat";
import log from "fancy-log";
import pluginError from "plugin-error";
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import prettify from "gulp-jsbeautifier";

const sass = require('gulp-sass')(require('sass'));

function bootstrapCustomCss() {
  var processors = [
    autoprefixer,
    mqpacker
  ];
  return src("./assets/src/scss/bootstrap-custom.scss")
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(dest("./assets/css/"));
}

function fokusCss(cb) {
  var processors = [
    autoprefixer,
    mqpacker
  ];

  return src(["./assets/src/scss/fokus.scss", "./assets/src/scss/fokus-print.scss"])
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(dest("./assets/css/"));
}

function combineCss(cb) {
  var processors = [
    autoprefixer,
    mqpacker
  ];
  return src(["./assets/css/bootstrap-custom.css", "./assets/css/fokus.css"])
    .pipe(concat("fokus-full.css"))
    .pipe(postcss(processors))
    .pipe(dest("./assets/css/"));
}

// Compile Javascript
function packjs(cb) {
  const myConfig = Object.assign({}, webpackConfig);
  webpack(myConfig, (err, stats) => {
    if (err) throw new pluginError("webpack", err);
    log(`[webpack] ${stats.toString({
      colors: true,
      progress: true
    })}`);
    cb();
  });
}

function prettifyjs(cb) {
  src("./assets/js/fokus_template.js")
    .pipe(prettify({
      indent_size: 4,
      js: {
        indent_size: 2
      }
    }))
    .pipe(dest("./assets/js"));
  cb();
}

exports.jsbuild = series(packjs, prettifyjs);
exports.cssbuild = series(bootstrapCustomCss, fokusCss, combineCss);
exports.default = series(exports.cssbuild, exports.jsbuild);
