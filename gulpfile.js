'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

var jsSrcPath = 'src/js/';

gulp.task('scss', function () {
	return gulp.src('src/scss/**/*.scss')
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    	.pipe(gulp.dest('niekes_blog'))
        .pipe(livereload());
});

gulp.task('img', function(){
    return gulp.src(['src/img/**/*.ico', 'src/img/**/*.jpg', 'src/img/**/*.png', 'src/img/**/*.svg'])
        .pipe(gulp.dest('niekes_blog/img'))
        .pipe(livereload());
});

gulp.task('php', function(){
	return gulp.src('src/**/*.php')
		.pipe(gulp.dest('niekes_blog'))
        .pipe(livereload());
});

gulp.task('scripts', function(){
  	return gulp.src([
  		// LIBS
        jsSrcPath + 'libs/angular.min.js',
        jsSrcPath + 'libs/angular-resource.min.js',
        jsSrcPath + 'libs/angular-ui-router.min.js',
        jsSrcPath + 'libs/angular-animate.min.js',
  		jsSrcPath + 'libs/angular-locale_de-de.min.js',
  		// ANGULAR: App
  		jsSrcPath + 'app.js',
        // ANGULAR: Controllers
        jsSrcPath + 'controllers/listCtrl.js',
        jsSrcPath + 'controllers/detailCtrl.js',
        // ANGULAR: Services
        jsSrcPath + 'services/postService.js',
        jsSrcPath + 'services/userService.js',
        // ANGULAR: Filters
        jsSrcPath + 'filters/htmlFilter.js',
	])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('niekes_blog/js'))
    .pipe(livereload());
});

gulp.task('partials', function(){
    return gulp.src('src/partials/*.html')
        .pipe(gulp.dest('niekes_blog/partials'))
        .pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/**/*.php', ['php']);
    gulp.watch('src/partials/*.html', ['partials']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['scss', 'img', 'php', 'scripts', 'partials', 'watch']);