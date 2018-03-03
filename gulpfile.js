'use strict';

var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');
var ftp         = require('vinyl-ftp');
var gulp        = require('gulp');
var ngAnnotate  = require('gulp-ng-annotate');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');

var jsSrcPath = 'src/js/';
var baseDir   = './src/';
var rmteDir   = '/blog.niekes.com/wp-content/themes/niekes_blog';
var tasks     = ['partials', 'scss', 'img', 'scripts', 'php', 'sitemap'];

gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('niekes_blog'))
        .pipe(browserSync.stream());
});

gulp.task('img', function(){
    return gulp.src(['src/img/**/*.ico', 'src/img/**/*.jpg', 'src/img/**/*.png', 'src/img/**/*.svg'])
        .pipe(gulp.dest('niekes_blog/img'))
        .pipe(browserSync.stream());
});

gulp.task('php', function(){
    return gulp.src('src/**/*.php')
        .pipe(gulp.dest('niekes_blog'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function(){
    return gulp.src([
        // LIBS
        jsSrcPath + 'libs/angular.min.js',
        jsSrcPath + 'libs/angular-resource.min.js',
        jsSrcPath + 'libs/angular-ui-router.min.js',
        jsSrcPath + 'libs/angular-animate.min.js',
        jsSrcPath + 'libs/angular-locale_de-de.min.js',
        // HIGHTLIGHT
        jsSrcPath + 'libs/highlight.min.js',
        // ANGULAR: App
        jsSrcPath + 'app.js',
        // ANGULAR: Controllers
        jsSrcPath + 'controllers/listCtrl.js',
        jsSrcPath + 'controllers/postCtrl.js',
        // ANGULAR: Services
        jsSrcPath + 'services/postService.js',
        jsSrcPath + 'services/userService.js',
        // ANGULAR: Filters
        jsSrcPath + 'filters/htmlFilter.js',
        // ANGULAR: constants
        jsSrcPath + 'constants/constants.js',

    ])
    .pipe(ngAnnotate())
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('niekes_blog/js'))
    .pipe(browserSync.stream());
});

gulp.task('partials', function(){
    return gulp.src('src/partials/*.html')
        .pipe(gulp.dest('niekes_blog/partials'))
        .pipe(browserSync.stream());
});

gulp.task('sitemap', function(){
    return gulp.src('src/sitemap.xml')
        .pipe(gulp.dest('niekes_blog'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    livereload.listen()
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', tasks, function () {
    browserSync.init({
        proxy: 'niekes-blog.test-dev',
        reloadOnRestart: true,
        open: false
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(baseDir + 'partials/*.html', ['partials-watch']);
    gulp.watch(baseDir + 'scss/**/*.scss', ['scss-watch']);
    gulp.watch(baseDir + '**/*.php', ['php-watch']);
    gulp.watch(baseDir + 'sitemap.xml', ['sitemap-watch']);
    gulp.watch(baseDir + 'js/**/*.js', ['scripts-watch']);
});


// create watch-tasks that ensures the tasks are complete before
// reloading browsers
gulp.task('partials-watch', ['partials'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scss-watch', ['scss'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('php-watch', ['php'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('sitemap-watch', ['sitemap'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scripts-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});

//////////////////////////////////////////
// DEPLOYMENT
//////////////////////////////////////////
gulp.task('deploy', function(){
    gulp.start(tasks);
});

gulp.task('push', function(){

    var conn = ftp.create({
        host     : process.env.NIEKES_HOST,
        user     : process.env.NIEKES_USER,
        password : process.env.NIEKES_PASSWORD,
        parallel : 10
    });

    var globs = ['./niekes_blog/**'];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return gulp.src(globs, { base: './niekes_blog/', buffer: false })
        .pipe(conn.newer(rmteDir))
        .pipe(conn.dest(rmteDir))
        .pipe(conn.clean(rmteDir + '/**', './niekes_blog', rmteDir));
});

