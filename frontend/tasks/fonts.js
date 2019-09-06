"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
let gp = require('gulp-load-plugins')();

gulp.task("fonts", () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(gp.debug({
            "title": "Fonts"
        }));
});