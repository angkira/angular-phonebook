const gulp          = require('gulp'),
      sass          = require('gulp-sass'),
      jade          = require('gulp-jade'),
      minifycss     = require('gulp-minify-css'),
      concat        = require('gulp-concat'),
      autoprefixer  = require('gulp-autoprefixer'),
      minifier      = require('gulp-uglify/minifier'),
      rename        = require('gulp-rename'),
      uglify        = require('uglify-js-harmony');

const UGFoptions = {
  'mangle': false, 
  'compress': true,
};

const CSSstock = [
    'src/lib/css/*.*ss',
    'src/sass/*.s*ss',
    ]

gulp.task('sass', function(){
    return gulp.src(CSSstock)
      .pipe(sass({outputStyle: 'uncompressed'}))
      .pipe(concat('main.css'))      
      .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true
        }))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/css/'))

    });


gulp.task('jade', function() {
    gulp.src(['src/jade/index.jade'])
      .pipe(jade({pretty:true}))
      .pipe(gulp.dest('dist/'));
    gulp.src(['src/jade/templates/*.jade'])
      .pipe(jade({pretty:true}))
      .pipe(gulp.dest('dist/templates/'))
});


gulp.task('scripts', function() {
    return gulp.src([
        'src/js/controllers.js',
        'src/js/directives.js', 
        'src/js/app.js',       
        ])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/script/'))
      .pipe(minifier(UGFoptions,uglify))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/script/'));
});


gulp.task('files', function() {
    return  gulp.src('src/lib/js/*.js')
            .pipe(gulp.dest('dist/script/')), 
            gulp.src('src/img/**/*')
            .pipe(gulp.dest('dist/img/')),
            gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('dist/fonts/'));
});


gulp.task('watch', function () {
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch(['src/jade/**/*.jade'], ['jade']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/lib/**/*', ['files']);
});


gulp.task('default', [ 'jade', 'files', 'sass', 'scripts'], function() {
    gulp.start('watch');
});