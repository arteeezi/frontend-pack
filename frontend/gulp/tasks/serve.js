module.exports = function () {
    gulp.task('serve', function() {
        browserSync.init({
            server: {
                baseDir: "../public_html"
            }
        });
        browserSync.watch('../public_html', browserSync.reload)
    });

}