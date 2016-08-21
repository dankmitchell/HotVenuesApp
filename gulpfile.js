var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ pattern: '*' });

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('browser-sync', function() {
  $.browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
    .pipe($.browserSync.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', $.browserSync.reload);
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
