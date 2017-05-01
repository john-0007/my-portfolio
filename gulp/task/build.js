var gulp=require("gulp"),
    imagemin=require("gulp-imagemin"),
     del=require("del"),
     usemin=require("gulp-usemin"),
     rev=require("gulp-rev"),
     cssnano=require("gulp-cssnano"),
     uglify=require("gulp-uglify"),
     browserSync=require("browser-sync").create();



gulp.task("previewDist",function(){
   browserSync.init({
      notify:false,
      server:{
          baseDir:"dist"
      } 
   }); 
});


gulp.task("deleteDistFolder",["icon"],function(){
    return del("./dist");
});

gulp.task("copyGeneralFile",["deleteDistFolder"],function(){
       var pathsToCopy=[
           "./app/**/*",
           "!./app/assets/images/**",
           "!./app/assets/styles/**",
           "!./app/assets/scripts/**",
           "!./app/tem",
           "!./app/tem/**",
       ];
    return gulp.src(pathsToCopy)
          .pipe(gulp.dest("./dist"));
});

gulp.task("usemin",["styles","scripts"],function(){
   return gulp.src("./app/index.html")
        .pipe(usemin({
       css:[function(){return rev();},function(){return cssnano();}],
       js:[function(){return rev();},function(){return uglify();}]
   }
   ))
         .pipe(gulp.dest("./dist"));
});

gulp.task("useminTrigger",["deleteDistFolder"],function(){
    
    gulp.start("usemin");
});



gulp.task("optimizeImage",["deleteDistFolder"],function(){
   return gulp.src(["./app/assets/images/**/*","!./app/assets/images/icons/","!./app/assets/images/icons/**/*"])
    .pipe(imagemin({
       progressive:true,
       interlaced:true,
       multipass:true,
   }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("build",["deleteDistFolder","copyGeneralFile","optimizeImage","useminTrigger"]);