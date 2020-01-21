const gulp = require("gulp");
// const imagemin = require("gulp-imagemin");
// var uglify = require("gulp-uglify");
// var pipeline = require("readable-stream").pipeline;
var sass = require("gulp-sass");
// var babel = require("gulp-babel");
// var connect = require("gulp-connect");
// var proxy = require("http-proxy-middleware");
// const config = require("config");
// const API = config.get("API");
// const PROXY = config.get("PROXY");

sass.compiler = require("node-sass");

gulp.task("sassBuild", function() {
  return gulp
    .src(["src/*/assets/sass/*.scss"], { base: "./src/" })
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public/"));
});

// function sassBuild() {
//   return gulp
//     .src(["./src/*/sass/*.scss"], { base: "./src/" })
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("./public/assets/"));
// }

// function message(cb) {
//   console.log("gulp running");
//   cb();
// }

// function copyHtml() {
//   return gulp.src("src/h5/*.html").pipe(gulp.dest("dist/h5"));
// }

// function imageMin(cb) {
//   gulp
//     .src("src/images/*")
//     .pipe(imagemin())
//     .pipe(gulp.dest("dist/images"));
//   cb();
// }

// function compress() {
//   return pipeline(
//     gulp.src("src/js/*.js"),
//     babel({
//       presets: ["@babel/preset-env"]
//     }),
//     uglify(),
//     gulp.dest("dist/js")
//   );
// }

// function dev() {
//   connect.server({
//     root: ["./dist"],
//     middleware: function(connect, opt) {
//       return [
//         proxy(`/${API}`, {
//           target: `${PROXY}`,
//           changeOrigin: true
//         })
//       ];
//     }
//   });
// }

// function watch() {
//   gulp.watch(["./src/h5/*.html"], function() {
//     return gulp.src("src/h5/*.html").pipe(gulp.dest("dist/h5"));
//   });
// }

// exports.build = gulp.parallel(message, copyHtml, compress, sassBuild);

// exports.dev = gulp.parallel(message, watch, dev);
