/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const $ = __webpack_require__(0);
const App = __webpack_require__(2);
//const Viewport = require('./modules/viewport.js');
const Header = __webpack_require__(3);
// const Tabs = require('./modules/tabs.js');
// const ScrollTo = require('./modules/scrollTo.js');
//const Carousel = require('./modules/carousel.js');
//const Accordion = require('./modules/accordion.js');
//const Form = require('./modules/form.js');
//const Draw = require('./modules/draw.js');
const Click = __webpack_require__(4);
// const Filters = require('./modules/filters.js');

$(function(){
	let app = new App();
	//let viewport = new Viewport();
	let header = new Header();
	//let tabs = new Tabs();
	//let scrollTo = new ScrollTo();
	//let carousel = new Carousel();
	//let accordion = new Accordion();
	//let draw = new Draw();
	let click = new Click();
	//let filters = new Filters();
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const $ = __webpack_require__(0);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const $ = __webpack_require__(0);

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const $ = __webpack_require__(0);

class Click {

	constructor( options ) {
		//setup any defaults
		this.defaults = {};
		//merge options with defaults
		this.settings = $.extend( true, {}, this.defaults, options );
		this.setup();
	}

	setup() {
		if( $('[data-modal]').length ) {
			this.events();
		} else {
			return;
		}
	}

	events() {

    const targetOpen = $('*[data-modal]');

    targetOpen.on('click touchstart:not(touchmove)', function(event) {
      event.preventDefault();
      let el = $(this);
      let trigger = el.attr('data-modal');
      let target = $("#" + trigger);

      if( target.hasClass('is-active') ) {
        target.removeClass('is-active');
        $('body').removeClass('modal-is-active');
        window.location.hash = '';
      } else {
        target.addClass('is-active');
        $('body').addClass('modal-is-active');
      }
    });

    $(document).ready(function(){
      let hash = window.location.hash.replace('#', '');
      $('.modal-wrap').each(function(){
        if( $(this).attr('id') === hash ) {
          $(this).addClass('is-active');
          $('body').addClass('modal-is-active');
        }
      });
    });

	}

}

module.exports = Click;


/***/ })
/******/ ]);