var gulp         = require('gulp'),
		less         = require('gulp-less'),
		cssmin       = require('gulp-minify-css'),
		autoprefixer = require('gulp-autoprefixer'),
		sourcemaps   = require('gulp-sourcemaps');

gulp.task('default', function () {
	gulp.src(['less/running100.less'])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['>.01%'],
		}))
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'));
});
