"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu 
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _TweenMax$from;

	JSCCommon.mobileMenu(); // JSCCommon.inputMask();
	// полифил для object-fit

	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({}); // добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Frame9.jpg);"></div>'); // /добавляет подложку для pixel perfect

	function onMouseWheel(e) {
		clearTimeout($.data(this, 'timer'));
		$(".swiper-wrapper").addClass('mousewheel');
		$.data(this, 'timer', setTimeout(function () {
			$(".swiper-wrapper").removeClass('mousewheel');
		}, 150));
	}

	;
	window.addEventListener('mousewheel', onMouseWheel, false);
	window.addEventListener('DOMMouseScroll', onMouseWheel, false); // init controller

	var controller = new ScrollMagic.Controller({
		container: "#swiper-container",
		vertical: false
	}); // var controller = new ScrollMagic.Controller();

	var mainSlider = new Swiper('.main-slider-js', {
		slidesPerView: "auto",
		freeMode: true,
		keyboard: true,
		speed: 1600,
		lazy: {
			loadPrevNext: true
		},
		// initialSlide: 2,
		hashNavigation: {
			replaceState: true
		},
		mousewheel: {
			sensitivity: 1.5 // releaseOnEdges: true,
			// forceToAxis: true,

		},
		// initialSlide:6,
		on: {
			init: function init() {
				/* do something */
				$(".moon-block").addClass("moon-block--active");
			}
		}
	});
	var width = $('#header-block').width();
	var offsetEl = width * .52;
	var durationEl = ($(window).width() - offsetEl) * .9; // build tween
	// main animate

	var tweens = [TweenMax.to("#target1", 1, {
		x: -800,
		y: -800,
		opacity: 0,
		scale: 0.5,
		ease: "elastic",
		rotation: 60
	}), TweenMax.to("#target2", 1, {
		y: 10,
		x: 500,
		opacity: 0,
		// scale: 0,
		ease: "elastic",
		rotation: 30
	}), TweenMax.to("#target3", 10, _defineProperty({
		x: -1800,
		y: -50,
		rotation: 120,
		opacity: 0,
		scale: 0,
		ease: "elastic"
	}, "rotation", 40)), TweenMax.to("#target4", 1, {
		x: -800,
		y: 1000,
		opacity: 0.5,
		scale: 0.9,
		ease: "elastic"
	}), TweenMax.to("#target5", 1, {
		x: -10,
		y: -1000,
		ease: "elastic",
		rotation: 140
	})]; // build scene 

	for (var i = 0, l = tweens.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#header-block",
			duration: durationEl,
			offset: offsetEl
		}).setTween(tweens[i]) // .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	} // main animate
	// contact animate


	var tweensContact = [TweenMax.from("#target-contact1", 10, {
		x: -800,
		y: -800,
		opacity: 0,
		scale: 0.5,
		ease: "elastic",
		rotation: 60
	}), TweenMax.from("#target-contact2", 10, {
		y: -400,
		x: -2400,
		scale: 0.6,
		ease: "elastic",
		rotation: 90
	}), TweenMax.from("#target-contact3", 10, {
		y: 10,
		x: -2400,
		rotation: 120,
		scale: 0.8,
		ease: "elastic" // rotation: 260,

	}), TweenMax.from("#target-contact4", 10, (_TweenMax$from = {
		yPercent: 200,
		x: -2000
	}, _defineProperty(_TweenMax$from, "yPercent", 50), _defineProperty(_TweenMax$from, "rotation", 120), _defineProperty(_TweenMax$from, "scale", 0.5), _TweenMax$from)), TweenMax.from("#target-contact5", 10, {
		x: -2900,
		yPercent: 50,
		rotation: 120,
		scale: 0.5,
		ease: "elastic"
	})]; // build scene 

	for (var i = 0, l = tweensContact.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#contact",
			duration: durationEl * 1.4,
			offset: -offsetEl / 1
		}).setTween(tweensContact[i]) // .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}

	var tweensServises = [TweenMax.to("#target-servise1", 11, {
		x: -800,
		y: 800,
		ease: "elastic",
		rotation: 160
	}), TweenMax.to("#target-servise2", 11, {
		x: 1000,
		y: -2000,
		ease: "elastic",
		// opacity: 0.5,
		scale: 0.5,
		rotation: 130
	})]; // contact animate
	// build scene 

	for (var i = 0, l = tweensServises.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#visual",
			duration: durationEl,
			offset: offsetEl
		}).setTween(tweensServises[i]) // .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	} // / servises1 animate
	// servises2 animate


	var tweensServises2 = [TweenMax.to("#target-servise21", 11, {
		// x: 1000,
		y: 800,
		ease: "elastic",
		// opacity: 0.5,
		scale: 0.5,
		rotation: 130
	})]; // build scene 

	for (var i = 0, l = tweensServises2.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#content",
			duration: durationEl,
			offset: offsetEl
		}).setTween(tweensServises2[i]) // .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	} // /servises2 animate
	// servises2 animate


	var tweensServises3 = [TweenMax.to("#target-servise31", 11, {
		x: 1000,
		y: -2300,
		ease: "elastic",
		// opacity: 0.5,
		scale: 0.5,
		rotation: 130
	})]; // build scene 

	for (var i = 0, l = tweensServises3.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({
			triggerElement: "#projectManagement",
			duration: durationEl,
			offset: offsetEl
		}).setTween(tweensServises3[i]) // .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	} // /servises2 animate

}

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}