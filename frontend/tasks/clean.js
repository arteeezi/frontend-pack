"use strict";

import gulp from "gulp";
let gp = require('gulp-load-plugins')();
import { paths } from "../gulpfile.babel";

gulp.task("clean", () => {
    return gulp.src(paths.clean.dist, {read: false,allowEmpty: true})
        .pipe(gp.clean({force:true}));
});