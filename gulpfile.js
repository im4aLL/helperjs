const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const reload       = browserSync.reload;
const sass         = require('gulp-sass');
const uglify       = require('gulp-uglify');
const rename       = require('gulp-rename');
const cssnano      = require('gulp-cssnano');
const watch        = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const babelify     = require('babelify');
const source       = require('vinyl-source-stream');
const browserify   = require('browserify');

let config = {
    sass: {
        source: './src/sass/style.scss',
        dist: './dist/css',
        fileName: 'style.css',
        minifiedFileName: 'style.min.css',
        watch: './src/sass/**/*.scss'
    },
    js: {
        source: './src/js/app.js',
        dist: './dist/js',
        fileName: 'app.js',
        minifiedFileName: 'app.min.js',
        watch: './src/js/**/*.js'
    },
    image: {
        source: './src/images/*',
        dist: './dist/images'
    },
    sync: {
        server: true
    }
};
// https://www.browsersync.io/docs/options/


// sass to css
gulp.task('sass', function () {
    gulp.src(config.sass.source)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.sass.dist))
        .pipe(browserSync.stream());
});

// browserify
gulp.task('js', function() {
    return browserify({ entries: [config.js.source] })
        .transform(babelify, {presets: ['es2015']}) // "es2015", "react"
        .bundle()
        .pipe(source(config.js.fileName))
        .pipe(gulp.dest(config.js.dist))
        .pipe(browserSync.stream());
});

// default task and watch
gulp.task('watch', ['sass', 'js'], function() {
    browserSync.init(config.sync);

    watch(config.sass.watch, function(){
        gulp.start('sass');
    });

    watch(config.js.watch, function(){
        gulp.start('js');
    });

    watch(['./*.html', './**/*.php'], function(){
        reload();
    });
});

// default task
gulp.task('default', ['watch']);

// gulp build and minify things
gulp.task('production', ['sass', 'js'], function(){
    gulp.src(config.js.dist + '/' + config.js.fileName)
        .pipe(uglify())
        .pipe(rename(config.js.minifiedFileName))
        .pipe(gulp.dest(config.js.dist));

    gulp.src(config.sass.dist + '/' + config.sass.fileName)
        .pipe(cssnano())
        .pipe(rename(config.sass.minifiedFileName))
        .pipe(gulp.dest(config.sass.dist));
});


// gulp watch
// gulp production

gulp.task('plugin-watch', () => {
    browserSync.init(config.sync);

    watch(config.js.watch, function(){
        gulp.start('js');
    });

    watch(['./*.html', './**/*.php'], function(){
        reload();
    });
});

gulp.task('plugin-release', ['js'], () => {
    gulp.src(config.js.dist + '/' + config.js.fileName)
        .pipe(uglify())
        .pipe(rename(config.js.minifiedFileName))
        .pipe(gulp.dest(config.js.dist));
});
