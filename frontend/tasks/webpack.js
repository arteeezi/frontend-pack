"use strict";

import { paths } from "../gulpfile.babel";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import browsersync from "browser-sync";
import yargs from "yargs";
let gp = require('gulp-load-plugins')();

const webpackConfig = require("../webpack.config.js"),
    argv = yargs.argv,
    production = !!argv.production;

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

gulp.task("webpack", () => {
    return gulp.src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest(paths.scripts.dist))
        .pipe(gp.debug({
            "title": "JS files"
        }))
        .on("end", browsersync.reload);
});