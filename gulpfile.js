var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;
var sass 		 = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename 		 = require('gulp-rename');
// Save a reference to the `reload` method

gulp.task('sass', function () {
	gulp.src("./scss/*.scss")
		.pipe(sass())
		.pipe(autoprefixer({
		  browsers: ['last 2 versions'],
		  cascade: false
		}))
		.pipe(rename("style.css"))
		.pipe(gulp.dest("./"));
});

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init(["scss/*.scss", "*.html", "*php"],{
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'serve'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});
