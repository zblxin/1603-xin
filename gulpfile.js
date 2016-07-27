var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var oReload = browserSync.reload;

//新建任务，用来编译sass源文件
gulp.task('buildSass',function(){
	  //找到sass源文件
	  gulp.src('./src/sass/style.scss')
	       //编译sass源文件
		   .pipe(sass())
		   
		   //输出到指定目录
		   .pipe(gulp.dest('/src/css'))
		   
		   .pipe(reload({stream:true}))
	});
	
gulp.task('autoBuild',function(){
	      browserSync({
		     server:"./src" 
		  });
	  
	  gulp.watch('./src/sass/style.scss',['bulidSass'])
	});
