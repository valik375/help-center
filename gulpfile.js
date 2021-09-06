let projectFolder = "dist"
let sourceFolder = "src"

let path = {
    build: {
        html: projectFolder+'/',
        css: projectFolder + '/css/',
        js: projectFolder + '/js/',
        img: projectFolder + '/images/',
        fonts: projectFolder + '/fonts/'
    },
    src: {
        html: [sourceFolder+'/*.html', "!" + sourceFolder + '/_*.html'],
        css: sourceFolder + '/less/common.less',
        js: sourceFolder + '/js/script.js',
        img: sourceFolder + '/images/**/*.{jpg, png, svg, gif, ico, webp}',
        fonts: sourceFolder + '/fonts/*.ttf'
    },
    watch: {
        html: sourceFolder+'/**/*.html',
        css: sourceFolder + '/less/**/*.less',
        js: sourceFolder + '/js/**/*.js',
        img: sourceFolder + '/images/**/*.{jpg, png, svg, gif, ico, webp}'
    },
    clean: './' + projectFolder + '/'
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    fileInclude = require('gulp-file-include'),
    del = require('del'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer')

function browser(params) {
    browserSync.init({
        server: {
            baseDir: './' + projectFolder + '/'
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileInclude())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(less())
        .pipe(autoprefixer({cascade: true, overrideBrowserslist: ['last 5 version']}))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileInclude())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.stream())
}

function watchFiles() {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
}

function clean(params) {
    return del(path.clean)
}

let build = gulp.series(clean,  gulp.parallel(js, html, css, fonts))
let watch = gulp.parallel(build, browser, watchFiles);

exports.css = css
exports.fonts = fonts
exports.js = js
exports.html = html
exports.watch = watch
exports.build = build
exports.default = watch