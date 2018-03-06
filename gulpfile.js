

const gulp = require("gulp"); //gulp
const sass = require("gulp-sass"); //sass
const rename = require("gulp-rename"); // 文件更名


//创建任务
gulp.task("hello",function(){
  console.log("day day up");
})

//合并文件  压缩文件 复制
gulp.task("img",function(){
  gulp.src("./images/**/*.png")   //源文件
    .pipe(gulp.dest("./img"))    // 输送目标文件
})


gulp.task("sass",function(){
  gulp.src(["./**/*.scss", "!node_modules/**/*"])  //除去node_modules 外的所有以scss结尾的文件 都将执行这个命令
    .pipe(sass().on("error", sass.logError))  //报错不会终止程序//该任务调用的模块
  .pipe(rename(function(path){    //把xscc文件的后缀换成 scss
    path.extname = ".wxss";
  }))
    .pipe(gulp.dest("./"))   //找到根文件
})

//配置监听后  保存后自动讲scss文件编译成css文件
gulp.task("watch",function(){
  gulp.watch("./pages/**/*.scss",["sass"]); //监听page里的sass文件
    gulp.watch("./*.scss", ["sass"]);  //监听同级的以scss结尾的文件 执行sass这个命令
})


gulp.task("default", ["hello", "img"], function () {
  console.log("done")
})