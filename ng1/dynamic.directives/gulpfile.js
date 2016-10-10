'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();


  gulp.task('js-watch', [], function (done) {
      browserSync.reload();
      done();
  });

  // use default task to launch Browsersync and watch JS files
  gulp.task('serve', [], function () {

      // Serve files from the root of this project
      browserSync.init({
          server: {
              baseDir: "./"
          }
      });

      // add browserSync.reload to the tasks array to make
      // all browsers reload after tasks are complete.
      gulp.watch(['./*.js', './**/*.js', './*.html', './**/*.html'], ['js-watch']);
  });

  gulp.task('default', ['serve']);
