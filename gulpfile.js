var gulp = require('gulp')
var sass = require('gulp-sass')
var exec = require('child_process').exec

gulp.task('sass', function() {
	gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('.'))
})

gulp.task('watch', ['sass'], function() {
	gulp.watch('scss/*.scss', ['sass'])
})

gulp.task('default', ['watch'], function(){
	exec('live-server')
})