"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const data = require("gulp-data");
const swig = require("gulp-swig");
const path = require("path");

gulp.task("sass", () => {
    return gulp.src("./src/styles/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dist/styles"));
});

gulp.task("sass:watch", () => {
    gulp.watch("./src/styles/**/*.scss", ["sass"]);
});

const getJsonData = function (file) {
    return require("./src/models/" + path.basename(file.path) + ".json");
};

gulp.task("pages", () => {
    return gulp.src("./src/views/*.html")
        .pipe(data(getJsonData))
        .pipe(swig())
        .pipe(gulp.dest("./"));
});