'use strict';

const $ = require('jquery');

class App {

	constructor( options ) {

		$(function(){
			setTimeout(function(){
				$('body').addClass('page-ready');
			}, 400);
		});
		if ( 'ontouchstart' in window ) {
			document.documentElement.classList.add('is-touch');
		} else {
			document.documentElement.classList.add('no-touch');
		}

		if(window.location.hostname == 'localhost' | window.location.hostname == '127.0.0.1'){
			document.body.classList.add('localhost');
		}

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('darkmode');
		}

		// function link_is_external(link_element) {
		// 	return (link_element.host !== window.location.host);
		// }
		// $('.site-header a').each(function() {
	  //   if (link_is_external(this)) {
	  //       $(this).addClass('external-link');
	  //   }
		// });
		//
		// $('.site-header a:not(.external-link), .js-fade, .site-footer a').on('click touchstart:not(touchmove)', function(e) {
    //   e.preventDefault();
    //   let url = this.href;
    //   document.body.classList.add('fade-out');
    //   setTimeout(function(){
    //     window.location = url;
    //   }, 600);
    //   return false;
    // });

		$('.js-back').on('click', function(evt) {
	    if (document.referrer != "") {
        evt.preventDefault();
        history.back();
	    }
	  });
	}
}

module.exports = App;
