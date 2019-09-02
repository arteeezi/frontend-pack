module.exports = function () {
    gulp.task('watch',function () {
        gulp.watch('src/sass/**/*.sass',gulp.series('sass'));
    });

};