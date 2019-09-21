'use strict';

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browserSync from "browser-sync";
let gp = require('gulp-load-plugins')();

gulp.task("vendor-css",()=>{
    return gulp.src(paths.vendorCss.src)
        .pipe(gp.concat('vendor.css'))
        .pipe(gulp.dest(paths.vendorCss.dist))
        .pipe(gp.debug({
            "title": "CSS-vendor files"
        }))
        .pipe(browserSync.stream());

});
