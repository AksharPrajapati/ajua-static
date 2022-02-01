'use strict';

const $ = require('jquery');

class Header {

	constructor( options ) {

		var header = document.getElementById('site-header'),
    w = $(window),
    b = $('body');
    var lastScrollTop = 0;

    document.addEventListener("scroll", function(){
      if (w.scrollTop() >= 120) {
        b.addClass('is-sticky');
      } else {
        b.removeClass('is-sticky');
      }

      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        if( b.hasClass('scrolling-up') ){
          b.removeClass('scrolling-up')
        }
      } else {
        if( !b.hasClass('scrolling-up') ){
          b.addClass('scrolling-up');
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);


		$('.js-menu-trigger').click(function(e){
			e.preventDefault();
			if( $('body').hasClass('menu-is-open') ) {
				$('body').removeClass('menu-is-open');
			} else {
				$('body').addClass('menu-is-open');
			}
		});

		const subnav = $('.menu-item-has-children > a');
		$('.navigation-drawer .sub-menu').hide();
		$('.navigation-drawer .current-menu-item').addClass('is-active');
		$('.navigation-drawer .current-menu-item .sub-menu').show();

		subnav.click(function(e){
			e.preventDefault();
			let el = $(this);
			let elPar = el.parent('li');
			let elTar = elPar.find('.sub-menu');

			if( elPar.hasClass('is-active') ) {
				elPar.removeClass('is-active');
				elTar.slideUp(400);
			} else {
				elPar.addClass('is-active');
				elTar.slideDown(400);
			}
		});

	}

}

module.exports = Header;
