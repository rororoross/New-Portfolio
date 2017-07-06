var gulp = require('gulp') ,
sass = require('gulp-sass') ,
scsslint = require('gulp-scss-lint') ,
autoprefixer = require('gulp-autoprefixer') ,
browserSync = require('browser-sync') ,
ejs = require('gulp-ejs') ,
plumber = require('gulp-plumber') ,
reload = browserSync.reload;

var SOURCE = {
	scss: 'scss/**/*.scss',
	css: 'public/css/',
	ejs: 'views/**/*.ejs',
	js: 'js/*.js',
	img: 'img/**/*'
};

var AUTOPREFIXER_BROWSERS = [
'ie >=10',
'ie_mob >=10',
'ff >=30',
'chrome >=34',
'safari >=7',
'opera >=23',
'ios >=7',
'android >=4.4',
'bb >=10'
];

gulp.task('browser-sync', function(){
	browserSync({
		proxy: 'localhost:3000',
		notify: false
	});
});

gulp.task('bs-reload', function(){
	browserSync.reload();
});

gulp.task('js', function(){
  gulp.src('js/*.js')
    .pipe(gulp.dest('public/js'))
		.pipe(browserSync.stream());
	});

gulp.task('img', function(){
  gulp.src('img/**.*')
    .pipe(gulp.dest('public/img'))
		.pipe(browserSync.stream());
	});

gulp.task('sass', function(){
  gulp.src('scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
	});

gulp.task('build', ['img', 'sass', 'js']);

gulp.task('default', ['sass', 'js', 'img', 'browser-sync'], function(){
	gulp.watch(SOURCE.scss, ['sass']);
	gulp.watch([SOURCE.ejs, SOURCE.js], ['bs-reload']);
});
