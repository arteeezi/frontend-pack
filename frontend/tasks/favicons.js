"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
let gp = require('gulp-load-plugins')();

gulp.task("favicons", () => {
    return gulp.src(paths.favicons.src)
        .pipe(gp.favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(gulp.dest(paths.favicons.dist))
        .pipe(gp.debug({
            "title": "Favicons"
        }));
});