var gulp = require('gulp')
var sass = require('gulp-sass') //sass && scss compiler
var less = require('gulp-less') //less compiler
var sourceMaps = require('gulp-sourcemaps') //map css to scss
var browserSync = require('browser-sync').create()
var autoPrefixer = require('gulp-autoprefixer')
var rename = require('gulp-rename')

var styleSRC = './src/less/*.less'
var styleDest = './src/css'

//this is the task
gulp.task( 'less', function () {
  return gulp.src( styleSRC ) //where to get files
    //always first
    .pipe( sourceMaps.init() )

    //sass compiler
    .pipe(less({
      errorLogToConsole: true,
      // outputStyle: 'compressed'
    }))

    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }
    ))

    // .pipe( rename( { suffix: '.min' } ) ) //create a min file
    .pipe( sourceMaps.write( './' ) ) //put the map file as same as dest
    .pipe( gulp.dest( styleDest ) ) //where to ouput the files
});

//watch anything changes in ' xx ', then call 'task'
gulp.task( 'watch' , function () {
  gulp.watch(styleSRC, ['less'] )

})



//set default task , so u can go gulp
gulp.task('default',['less','watch'])
