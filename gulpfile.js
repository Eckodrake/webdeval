const gulp = require('gulp');
const rename = require('gulp-rename');
const resize = require('gulp-responsive');
const compass = require('gulp-compass');
const cleanCSS = require('gulp-clean-css');
const imageMIN = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('compass', () => {
    return gulp.src('public/assets/scss/*.scss')
    // Compile and prefix
        .pipe(compass({
            sass: 'public/assets/scss/',
            css: 'public/assets/css/'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('minimize', () => {
    return gulp.src('public/assets/css/global.css')
    // Rename and minimize
        .pipe(rename('global.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('resize', () => {
    return gulp.src('public/assets/img/vendor/*.{png,jpg}')
    // Thumbnails
        .pipe(resize({
            '*.{png,jpg}': {
                width: 70,
                quality: 80
            }
        }))
        .pipe(imageMIN())
        .pipe(gulp.dest('public/assets/img/thumbnails/'));
});

gulp.task('watch', function () {
    gulp.watch('public/assets/scss/*.scss', gulp.series(['compass', 'minimize']));
    gulp.watch('public/assets/scss/*/*.scss', gulp.series(['compass', 'minimize']));
    gulp.watch('public/assets/img/vendor/*', gulp.series(['resize']));
});