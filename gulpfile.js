var gulp = require('gulp');

var browserSync = require('browser-sync').create();

var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');

gulp.task('sass', () => {
    console.log(gulp.src('./src/iui.scss'));
    return gulp.src('./src/iui.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({ stream: true}));
});

// gulp.watch('./src/iui.scss', ['sass']);
// gulp.watch('./src/components/*.scss', ['sass']);
gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});
gulp.task('reload', () => {
    browserSync.reload();
})


gulp.task('watch', () => {
    gulp.watch('./src/iui.scss', ['sass']);
    gulp.watch('./src/components/*.scss', ['sass']);
    gulp.watch('./dist/css/iui.css', ['reload']);
    gulp.watch('./dist/html/*.html', ['reload']);
});

gulp.task('default', ['sass', 'watch', 'server']);



