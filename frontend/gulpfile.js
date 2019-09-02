'use strict';

gp.sass.compiler = require('node-sass');


global.$ ={
    gulp:require('gulp') ,
    gp: require('gulp-load-plugins')(),
    bs:require('browser-sync').create(),
    path: {
        tasks: './gulp/config/tasks.js'
    }
};

$.path.tasks.forEach(function (taskPath) {
   require(taskPath)();
});

gulp.task('default',gulp.series(
    gulp.parallel('sass'),
    gulp.parallel('watch', 'serve')

));
