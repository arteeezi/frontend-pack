'use strict';

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
let gp = require('gulp-load-plugins')();
import yargs from "yargs";
import browsersync from "browser-sync";
const argv = yargs.argv,
    production = !!argv.production;

    gulp.task("sass",()=>{
        return gulp.src(paths.sass.src)
            .pipe(gp.if(!production, gp.sourcemaps.init()))
            .pipe(gp.plumber())
            .pipe(gp.sass())
            .pipe(gp.concat('style.css'))
            .pipe(gp.groupCssMediaQueries())
            .pipe(gp.if(production,gp.autoprefixer()))
            .pipe(gp.if(production, gp.cleanCss({
                compatibility: "ie8", level: {
                    1: {
                        specialComments: 0,
                        removeEmpty: true,
                        removeWhitespace: true
                    },
                    2: {
                        mergeMedia: true,
                        removeEmpty: true,
                        removeDuplicateFontRules: true,
                        removeDuplicateMediaBlocks: true,
                        removeDuplicateRules: true,
                        removeUnusedAtRules: false
                    }
                }
            })))
            .pipe(gp.plumber.stop())
            .pipe(gp.if(!production, gp.sourcemaps.write("./maps/")))
            .pipe(gulp.dest(paths.sass.dist))
            .pipe(gp.debug({
                "title": "CSS files"
            }))
            .pipe(browsersync.stream());

    });