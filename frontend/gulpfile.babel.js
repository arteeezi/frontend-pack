"use strict";
import gulp from "gulp";

const requireDir = require("require-dir");
let src =  'src',
    dist = '../public_html/assets',
    server = '../public_html/';
const paths = {
    sass:{
        src: `${src}/sass/style/**/*.sass`,
        dist: `${dist}/css/`,
        watch: `${src}/sass/**/*.sass`
    },
    clean: {
        dist : dist
    },fonts: {
        src: `${src}/fonts/**/*.{woff,woff2}`,
        dist: `${dist}/fonts/`,
        watch: `${src}/fonts/**/*.{woff,woff2}`
    }, favicons: {
        src: `${src}/static/favicon/*.{jpg,jpeg,png,gif}`,
        dist: `${dist}/favicons/`,
    }, images: {
        src: `${src}/img/**/*.{jpg,jpeg,png,gif,tiff,svg}`,
        dist: `${dist}/img/`,
        watch: `${src}/img/**/*.{jpg,jpeg,png,gif,tiff,svg}`
    },
    server: server

};

requireDir('./tasks/');

export { paths };
export const development = gulp.series("clean",
    gulp.parallel([ "sass", "images", "fonts"]),
    "serve");


export const prod = gulp.series(
    "clean",
    gulp.series(["sass","fonts","images"])
);

export default development;