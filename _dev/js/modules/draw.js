'use strict';

const $ = require('jquery');
const draw = require('../library/DrawSVGPlugin');

class Draw {
  constructor( options ) {
    this.defaults = {};
    this.settings = $.extend( true, {}, this.defaults, options );
    this.setup();
  }

  setup() {
    if( $('.js-draw').length ) {
      this.events();
    } else {
      return;
    }
  }

  events() {

    let btns = $('.btn-draw'),
      main = $('.btn-draw .main'),
      underline = $('.btn-draw .underline');

    let btn = $('.btn-hover');

    $(document).ready(function(){
      $('.btn-hover > span').html(function (i, html) {
          var chars = $.trim(html).split("");
          return '<span>' + chars.join('</span><span>') + '</span>';
      });
    });

    function flicker(target) {
      let el = target.find('span');
      let spans = el.children();
      let re = spans[Math.floor(Math.random() * spans.length)];
      $(re).addClass("flicker");
      setTimeout(function(){
        $(re).removeClass("flicker");
      }, 400);
    }

    function setIntervalX(callback, delay, repetitions) {
      var x = 0;
      var intervalID = window.setInterval(function () {
        callback();
        if (++x === repetitions) {
          window.clearInterval(intervalID);
        }
      }, delay);
    }

    btn.each(function(){
      let el= $(this);
      let btnOutline = el.find('svg .outline');
      let btnUnderline = el.find('svg .underline');
      gsap.set(btnUnderline, {drawSVG:"50% 100%"});

      el.mouseenter(function(){
        if(!el.hasClass('is-animated')){
          el.addClass('is-animated');
          gsap.fromTo(btnUnderline, 1, {drawSVG:"50% 100%"}, {drawSVG:"0% 35%", stroke:"#006BED", ease: Expo.easeInOut});
          gsap.fromTo(btnOutline, .5, {drawSVG:"100% 0%"}, {drawSVG:"0% 0%", stroke:"#006BED", ease: Expo.easeIn });
        }
        setIntervalX(function(){
          flicker(el);
        }, 100, 10);

      });
      el.mouseleave(function(){
        if( el.hasClass('is-animated')){
          gsap.fromTo(btnUnderline, 1, {drawSVG:"0% 35%"}, {drawSVG:"50% 100%", stroke:"#ffffff", ease: Expo.easeInOut});
          gsap.fromTo(btnOutline, .5, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%", stroke:"#ffffff", ease: Expo.easeOut }).delay(.5);
          el.removeClass('is-animated');
        }
      });
    });
  }

}

module.exports = Draw;
