'use strict';

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
