'use strict';
// import swiper from './vendors/swiper';
let swiper = require('./vendors/swiper');
let container = document.querySelector('.swiper-container');
new swiper('.swiper-container');

const func  = ()=>{
    console.log("ok");
};
func();