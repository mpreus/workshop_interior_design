var gulp = require("gulp");
var sass = require("gulp-sass");

// skompilowane pliki do katalogu:
var cssDest = "style";

// pliki wyjściowe:
var cssInputFile = "source/style.scss";

// pliki obserwowane:
var watchedFiles = "source/**/*.scss";

// zadania 'gulpa':
gulp.task("buildcss", function() {
	return gulp.src(cssInputFile)
	.pipe(sass({
		outputStyle: "compressed"
	}))
	.pipe(gulp.dest(cssDest));
});
