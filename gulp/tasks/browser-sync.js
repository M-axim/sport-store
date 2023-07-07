module.exports = function () {
    const rimraf = require('rimraf')

    const path = {
        clean: './build'
    };

    $.gulp.task('clean', (cb) => {
        rimraf(path.clean, cb)
    });

    $.gulp.task('browser-sync', () => {
        $.browserSync.init({
            server: {
                baseDir: './build'
            },
            // proxy: 'http://localhost/test/',
            notify: false
        });
    });
}