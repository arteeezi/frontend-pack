module.exports = function () {
    gulp.task('sass', function(){
        return gulp.src('src/sass/main.sass')
            .pipe(gp.sourcemaps.init())
            .pipe(gp.sass({}))
            .pipe(gp.autoprefixer({
                cascade: false,
            }))
            .on("error", gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Error running something"
            }))
            .pipe(gp.csso())
            .pipe(gp.sourcemaps.write())
            .pipe(gulp.dest('../public_html/assets/css/'))
            .pipe(browserSync.reload({
                stream: true
            }));
    });

}