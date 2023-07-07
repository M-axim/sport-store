module.exports = function () {

    const
        babel = require('gulp-babel'),
        uglify = require('gulp-uglify'),
        rigger = require('gulp-rigger'),
        ts = require('gulp-typescript'),
        rename = require('gulp-rename'),
        sourcemap = require('gulp-sourcemaps');


    const path = {
        build: { // готовые после сборки файлы
            js: 'build/js',
        },
        src: { // исходники
            js: "#src/js/*.ts",
        },
    }

    $.gulp.task('js', () => {
        return $.gulp.src(path.src.js)
            .pipe(sourcemap.init())
            .pipe(rigger())
            .pipe(ts({
                "compilerOptions": {
                    "target": "es5",
                    "module": "commonjs",
                    "sourceMap": true
                }
            }))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(sourcemap.write())
            .pipe($.gulp.dest('build/js'))
            .pipe(rename({suffix: '.min'}))
            // .pipe(babel({
            //     presets: ['@babel/env']
            // }))
            .pipe(uglify())
            .pipe($.gulp.dest(path.build.js))
            .pipe($.browserSync.reload({stream: true}))

    });
}