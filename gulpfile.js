'use strict';
const { src , dest , watch , parallel , series} = require('gulp');
const pug  = require('gulp-pug');
const prefixer = require('gulp-autoprefixer');
const concat   = require('gulp-concat');
// const cleancss = require('gulp-clean-css');
const notify      = require('gulp-notify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

const files = {
    scssPath: 'src/scss/**/*.scss',
    pugPath : 'src/page/index.pug',
    htmlPath: 'dist/index.html',
    jsPath  : 'src/js/components/*.js'
}

// sass task
function styles() {
    return src(files.scssPath)
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        // .pipe(prefixer('last 3 versions'))
        // .pipe(cleancss())
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

// pug Task
const html = () => {
    return src(files.pugPath)
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('dist'))
        // .pipe(notify('تمام كده pug  اتعملها compile و جاهزة'))
}

const js = () => {
    return src(files.jsPath)
        .pipe(concat('script.js'))
        .pipe(dest('dist/js'))
        // .pipe(notify('تمام ملفات js اتنظمت واتحفظت'))
        .pipe(browserSync.stream());
}

const watcher = () => {
    notify('كلو تمام التاسك خلص وفتح في سيرفر محلي ').write('')
    browserSync.init({
        server: { baseDir: 'dist' }
    })
    watch([files.jsPath], js).on('change', browserSync.reload)
    watch([files.pugPath], html).on('change', browserSync.reload)
    watch([files.scssPath], styles)
    watch(files.htmlPath).on('change', browserSync.reload)
}

exports.default = series(parallel( html, styles, js), watcher);