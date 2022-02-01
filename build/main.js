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
const Viewport = __webpack_require__(3);
const Header = __webpack_require__(4);
// const Tabs = require('./modules/tabs.js');
// const ScrollTo = require('./modules/scrollTo.js');
//const Carousel = require('./modules/carousel.js');
//const Accordion = require('./modules/accordion.js');
//const Form = require('./modules/form.js');
const Draw = __webpack_require__(5);
const Click = __webpack_require__(7);
// const Filters = require('./modules/filters.js');

$(function(){
	let app = new App();
	let viewport = new Viewport();
	let header = new Header();
	//let tabs = new Tabs();
	//let scrollTo = new ScrollTo();
	//let carousel = new Carousel();
	//let accordion = new Accordion();
	let draw = new Draw();
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
			document.getElementById('favicon').setAttribute('href', '/wp-content/themes/polarisprogram/build/images/favicons/favicon-light.png');
		}

		function link_is_external(link_element) {
			return (link_element.host !== window.location.host);
		}
		$('.site-header a').each(function() {
	    if (link_is_external(this)) {
	        $(this).addClass('external-link');
	    }
		});

		$('.site-header a:not(.external-link), .js-fade, .site-footer a').on('click touchstart:not(touchmove)', function(e) {
      e.preventDefault();
      let url = this.href;
      document.body.classList.add('fade-out');
      setTimeout(function(){
        window.location = url;
      }, 600);
      return false;
    });

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


class Viewport {

	constructor( options ) {
		this.events();
	}

	events() {

		var items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]'),
		pageOffset = window.pageYOffset;

		function isScrolledIntoView(el) {
			var rect = el.getBoundingClientRect(),
			elemTop = rect.top,
			elemBottom = rect.top + el.offsetHeight,
			bottomWin = pageOffset + window.innerHeight;

			return (elemTop < bottomWin && elemBottom > 0);
		}

		function detect() {

			for(var i = 0; i < items.length; i++) {
				if ( isScrolledIntoView(items[i]) ) {
					if( !items[i].classList.contains('in-view') ) {
						items[i].classList.add('in-view');

						if( items[i].getAttribute('data-count') ) {
							var item = items[i];
							let el = jQuery(items[i]);
							let count = el.attr('data-count');
							let fin = el.text();
							let counter = { var: 0 };
							el.html('0');

							setTimeout(function(){
								TweenLite.to(counter, 2, {
									val: count,
									roundProps:"val",
									onUpdate:function(){
										var num = Math.ceil(counter.val);
										el.html(num);
									},
									onComplete: function() {
										el.html(fin);
									},
									ease:Circ.easeOut
								});
							}, 300);
						}

					}
				}
			}
		}

		window.addEventListener('scroll', detect);
		window.addEventListener('resize', detect);

		for(var i = 0; i < items.length; i++) {
			var d = 0,
			el = items[i];

			if( items[i].getAttribute('data-animate-in-delay') ) {
				d = items[i].getAttribute('data-animate-in-delay') / 1000 + 's';
			} else {
				d = 0;
			}
			el.style.transitionDelay = d;
		}

		detect();


		gsap.set(".dragon", {yPercent:15, scale: "1.2", rotate:"-5deg", transformOrigin:"50% 50%"});
		gsap.to(".dragon", {
			yPercent:0, scale: "1", rotate:"0deg",
			scrollTrigger: {
				trigger: ".dragon",
				start: "top center",
				end: "bottom center",
				scrub: 1,
			},
			duration: .5
		});

		gsap.set(".dawn-earth", {autoAlpha:1, yPercent:0, xPercent: -10, scale: "1.2", transformOrigin:"50% 50%"});
		gsap.to(".dawn-earth", {
			autoAlpha:.6, yPercent:8, xPercent: -10, scale: "1",
			scrollTrigger: {
				trigger: ".dawn-earth",
				start: "top center",
				end: "bottom center",
				scrub: 1,
			},
			duration: .5
		});

		gsap.set(".fuel", {xPercent:5, scale: "1.1", rotate:"20deg", transformOrigin:"100% 100%"});
		gsap.to(".fuel", {
			xPercent:0, scale: ".9", rotate:"0deg",
			scrollTrigger: {
				trigger: ".fuel",
				start: "top bottom",
				end: "bottom center",
				scrub: 1
			},
			duration: 2
		});

		gsap.set(".starship", {xPercent:-5, yPercent:-5, scale: ".9", rotate: "0deg", transformOrigin:"100% 100%"});
		gsap.to(".starship", {
			xPercent:0, scale: "1", yPercent: 0, rotate: "5deg",
			scrollTrigger: {
				trigger: ".starship",
				start: "top center",
				end: "bottom center",
				scrub: 1
			},
			duration: 2
		});


		var pop = document.querySelectorAll('.banner--para .banner__content');
		for(var i = 0; i < pop.length; i++) {
			let el = pop[i];
			let par = el.closest('.banner--para');
		  gsap.set(el, {yPercent:-30});
			gsap.to(el, {
				yPercent:30,
				scrollTrigger: {
					trigger: par,
					start: "top center",
					end: "bottom top",
					scrub: 1,
				},
				duration: 1
			});
		}

		var pop = document.querySelectorAll('.banner--para .banner__img');
		for(var i = 0; i < pop.length; i++) {
			let el = pop[i];
			let par = el.closest('.banner--para');
		  gsap.set(el, {yPercent:0});
			gsap.to(el, {
				yPercent:-10,
				scrollTrigger: {
					trigger: par,
					start: "top bottom",
					end: "bottom center",
					scrub: 1,
				},
				duration: .5
			});
		}

		gsap.set(".js-dragon", {yPercent:7, scale: ".9", transformOrigin:"50% 50%"});
		gsap.to(".js-dragon", {
			yPercent:-7, scale: "1",
			scrollTrigger: {
				trigger: ".js-dragon",
				start: "top bottom",
				end: "bottom center",
				scrub: 1,
			},
			duration: .5
		});

		gsap.set(".js-horizon", {xPercent:-5, scale: ".95", transformOrigin:"50% 50%"});
		gsap.to(".js-horizon", {
			xPercent:0, scale: "1",
			scrollTrigger: {
				trigger: ".js-horizon",
				start: "top bottom",
				end: "bottom center",
				scrub: 1,
			},
			duration: .5
		});


	}

}

module.exports = Viewport;


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const $ = __webpack_require__(0);
const draw = __webpack_require__(6);

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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function i(){return"undefined"!=typeof window}function j(){return t||i()&&(t=window.gsap)&&t.registerPlugin&&t}function m(e){return Math.round(1e4*e)/1e4}function n(e){return parseFloat(e||0)}function o(e,t){return n(e.getAttribute(t))}function q(e,t,s,r,i,o){return P(Math.pow((n(s)-n(e))*i,2)+Math.pow((n(r)-n(t))*o,2))}function r(e){return console.warn(e)}function s(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function v(e){if(!(e=k(e)[0]))return 0;var t,n,i,a,f,h,d,l=e.tagName.toLowerCase(),u=e.style,c=1,g=1;s(e)&&(g=e.getScreenCTM(),c=P(g.a*g.a+g.b*g.b),g=P(g.d*g.d+g.c*g.c));try{n=e.getBBox()}catch(e){r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var _=n||{x:0,y:0,width:0,height:0},p=_.x,x=_.y,y=_.width,m=_.height;if(n&&(y||m)||!M[l]||(y=o(e,M[l][0]),m=o(e,M[l][1]),"rect"!==l&&"line"!==l&&(y*=2,m*=2),"line"===l&&(p=o(e,"x1"),x=o(e,"y1"),y=Math.abs(y-p),m=Math.abs(m-x))),"path"===l)a=u.strokeDasharray,u.strokeDasharray="none",t=e.getTotalLength()||0,c!==g&&r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(c+g)/2,u.strokeDasharray=a;else if("rect"===l)t=2*y*c+2*m*g;else if("line"===l)t=q(p,x,p+y,x+m,c,g);else if("polyline"===l||"polygon"===l)for(i=e.getAttribute("points").match(b)||[],"polygon"===l&&i.push(i[0],i[1]),t=0,f=2;f<i.length;f+=2)t+=q(i[f-2],i[f-1],i[f],i[f+1],c,g)||0;else"circle"!==l&&"ellipse"!==l||(h=y/2*c,d=m/2*g,t=Math.PI*(3*(h+d)-P((3*h+d)*(h+3*d))));return t||0}function w(e,t){if(!(e=k(e)[0]))return[0,0];t=t||v(e)+1;var s=h.getComputedStyle(e),r=s.strokeDasharray||"",i=n(s.strokeDashoffset),o=r.indexOf(",");return o<0&&(o=r.indexOf(" ")),t<(r=o<0?t:n(r.substr(0,o))||1e-5)&&(r=t),[Math.max(0,-i),Math.max(0,r-i)]}function x(){i()&&(h=window,l=t=j(),k=t.utils.toArray,d=-1!==((h.navigator||{}).userAgent||"").indexOf("Edge"))}var t,k,h,d,l,b=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,M={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},P=Math.sqrt,a={version:"3.1.1",name:"drawSVG",register:function register(e){t=e,x()},init:function init(e,t){if(!e.getBBox)return!1;l||x();var r,i,o,a,f=v(e)+1;return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function _parse(e,t,s){var r,i,o=e.indexOf(" ");return i=o<0?(r=void 0!==s?s+"":e,e):(r=e.substr(0,o),e.substr(o+1)),r=~r.indexOf("%")?n(r)/100*t:n(r),(i=~i.indexOf("%")?n(i)/100*t:n(i))<r?[i,r]:[r,i]}(t,f,(r=w(e,f))[0]),this._length=m(f+10),0===r[0]&&0===i[0]?(o=Math.max(1e-5,i[1]-f),this._dash=m(f+o),this._offset=m(f-r[1]+o),this._offsetPT=this.add(this,"_offset",this._offset,m(f-i[1]+o))):(this._dash=m(r[1]-r[0])||1e-6,this._offset=m(-r[0]),this._dashPT=this.add(this,"_dash",this._dash,m(i[1]-i[0])||1e-5),this._offsetPT=this.add(this,"_offset",this._offset,m(-i[0]))),d&&(a=h.getComputedStyle(e)).strokeLinecap!==a.strokeLinejoin&&(i=n(a.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",i,i+.01)),this._live=s(e)||~(t+"").indexOf("live"),this._props.push("drawSVG"),1},render:function render(e,t){var n,s,r,i,o=t._pt,a=t._style;if(o){for(t._live&&(n=v(t._target)+11)!==t._length&&(s=n/t._length,t._length=n,t._offsetPT.s*=s,t._offsetPT.c*=s,t._dashPT?(t._dashPT.s*=s,t._dashPT.c*=s):t._dash*=s);o;)o.r(e,o.d),o=o._next;r=t._dash,i=t._offset,n=t._length,a.strokeDashoffset=t._offset,1!==e&&e?a.strokeDasharray=r+"px,"+n+"px":(r-i<.001&&n-r<=10&&(a.strokeDashoffset=i+1),a.strokeDasharray=i<.001&&n-r<=10?"none":i===r?"0px, 999999px":r+"px,"+n+"px")}},getLength:v,getPosition:w};j()&&t.registerPlugin(a),e.DrawSVGPlugin=a,e.default=a;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/***/ }),
/* 7 */
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
		if( $('[data-click]').length ) {
			this.events();
		} else {
			return;
		}
	}

	events() {

    const targetOpen = $('*[data-click]');

    targetOpen.on('click touchstart:not(touchmove)', function(event) {
      event.preventDefault();
      let el = $(this);
      let trigger = el.attr('data-click');
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