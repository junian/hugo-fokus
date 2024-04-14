const { src, dest, pipe, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const concat = require("gulp-concat");
const log = require("fancy-log");
const pluginError = require("plugin-error");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const prettify = require("gulp-jsbeautifier");

function bootstrapCustomCss() {
  var processors = [
    autoprefixer,
    mqpacker
  ];
  return src("./src/scss/bootstrap-custom.scss")
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

  return src(["./src/scss/fokus.scss", "./src/scss/fokus-print.scss"])
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
exports.default = parallel(exports.cssbuild, exports.jsbuild);
