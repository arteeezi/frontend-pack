"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        server: paths.server,
        port: 4000,
        notify: true
    });

    gulp.watch(paths.sass.watch, gulp.parallel("sass"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});