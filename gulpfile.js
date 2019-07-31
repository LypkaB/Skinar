var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var concatCSS    = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "/Users/l.b./HTML\ \&\ CSS/1.\ Training/Skynar.com/"
    });

    gulp.watch("/Users/l.b./HTML\ \&\ CSS/1.\ Training/Skynar.com/sass/*.sass", ['sass']);
    gulp.watch("/Users/l.b./HTML\ \&\ CSS/1.\ Training/Skynar.com/sass/sections/*.sass", ['sass']);
    gulp.watch("/Users/l.b./HTML\ \&\ CSS/1.\ Training/Skynar.com/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("/Users/l.b./HTML\ \&\ CSS/1.\ Training/Skynar.com/sass/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCSS('style.css'))
        .pipe(gulp.dest("/Users/l.b./HTML\ \&\ CSS/1.\ Training/Skynar.com/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);