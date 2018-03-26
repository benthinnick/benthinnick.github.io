"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", () => {
    return gulp.src("./src/styles/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dist/styles"));
});

gulp.task("sass:watch", () => {
    gulp.watch("./src/styles/**/*.scss", ["sass"]);
});