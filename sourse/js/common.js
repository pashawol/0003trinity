const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
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

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {

				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu 
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};
function eventHandler() {
	JSCCommon.mobileMenu();
	JSCCommon.modalCall();
	// JSCCommon.inputMask();
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv

	document.createElement("picture");
	// для свг
	svg4everybody({});


	function onMouseWheel(e) {
		clearTimeout($.data(this, 'timer'));

		$(".swiper-wrapper").addClass('mousewheel');

		$.data(this, 'timer', setTimeout(function () {
			$(".swiper-wrapper").removeClass('mousewheel')

		}, 150));
	};
	window.addEventListener('mousewheel', onMouseWheel, false)
	window.addEventListener('DOMMouseScroll', onMouseWheel, false)
	// init controller
	var controller = new ScrollMagic.Controller({
		container: "#swiper-container", vertical: false
	});
	// var controller = new ScrollMagic.Controller();


	var mainSlider = undefined;
	function heightses() {

		const w = $(window).width();
		var screenWidth = $(window).width();
		// конец добавил
		if (screenWidth > 992 && mainSlider == undefined) {
			let mainSlider = new Swiper('.main-slider-js', {

				slidesPerView: "auto",
				freeMode: true,
				keyboard: true,
				speed: 1600,

				//...
				lazy: {
					loadPrevNext: true,
					loadPrevNextAmount: 4
				},
				// initialSlide: 2,
				hashNavigation: {
					replaceState: true,
				},
				mousewheel: {
					sensitivity: 1.5,
					// releaseOnEdges: true,
					// forceToAxis: true,

				},

			});

			$(".menu-mobile__inner a").click(function (e) {
				e.stopPropagation();
				e.preventDefault();
				var slide = $(this).data('slide');
				$(this).addClass("active").parent().siblings().find('a').removeClass("active");
				mainSlider.slideTo(slide, 600, false);
			})

		}
		else if (screenWidth < 991 && mainSlider != undefined) {
			mainSlider.destroy();
			mainSlider = undefined;
			jQuery('.swiper-wrapper').removeAttr('style');
			jQuery('.swiper-slide').removeAttr('style');

			$(".menu-mobile__inner a").click(function (e) {

				e.stopPropagation();
				e.preventDefault();
				const elementClick = $(this).attr("href");
				const destination = $(elementClick).offset().top;

				$('html, body').animate({ scrollTop: destination }, 1100);

				return false;
			})
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();



	var width = $('#header-block').width();
	var height = $('#header-block').height();
	let offsetEl = width * .52
	var durationEl = ($(window).width() - offsetEl) * 1.2;
	// build tween
	// main animate

	let tweens = [
		TweenMax.to("#target1", 100, {
			x: '-90%',
			y: '-290%',
			opacity: 0,
			scale: 0.5,
			ease: "elastic",
			rotation: 60,
		}
		),
		TweenMax.to("#target2", 100, {
			y: "10%",
			x: "600%",
			opacity: 0,
			// scale: 0,
			ease: "elastic",
			rotation: 30,
		}
		),
		TweenMax.to("#target3", 100, {
			x: "-400%",
			y: "10%",
			rotation: 120,
			opacity: 0,
			scale: 0,
			ease: "elastic",
			rotation: 40,
		}
		),
		TweenMax.to("#target4", 100, {
			x: "-350%",
			y: "350%",
			opacity: 0.5,
			scale: 0.9,
			ease: "elastic",
		}
		),
		TweenMax.to("#target5", 100, {
			x: "-10%",
			y: "-400%",
			ease: "elastic",
			rotation: 140,
		}
		),
	]

	// build scene 
	for (var i = 0, l = tweens.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({ triggerElement: "#header-block", duration: durationEl, offset: offsetEl })
			.setTween(tweens[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
	// main animate
	// contact animate

	let tweensContact = [
		TweenMax.from("#target-contact1", 100, {
			x: "100%",
			y: "-700%",
			opacity: 0,
			scale: 0.5,
			ease: "elastic",
			rotation: 60,
		}
		),
		TweenMax.from("#target-contact2", 100, {
			y: "-150%",
			x: "-800%",
			scale: 0.6,
			ease: "elastic",
			rotation: 90,
		}
		),
		TweenMax.from("#target-contact3", 100, {
			y: "5%",
			x: "-300%",
			rotation: 240,

			scale: 0.8,
			ease: "elastic",
			// rotation: 260,
		}
		),
		TweenMax.from("#target-contact4", 100, {
			// yPercent: 10,
			y: "10%",
			x: "-550%",
			yPercent: 50,
			rotation: 120,
			scale: 0.5,
		}
		),
		TweenMax.from("#target-contact5", 100, {
			x: "-700%",
			yPercent: 50,
			rotation: 120,
			scale: 0.5,
			ease: "elastic",
		}
		),
	]

	// build scene 
	for (var i = 0, l = tweensContact.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({ triggerElement: "#contact", duration: durationEl * 1.4, offset: -offsetEl / 1 })
			.setTween(tweensContact[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
	let tweensServises = [
		TweenMax.to("#target-servise1", 11, {
			x: "-100%",
			y: "100%",
			ease: "elastic",
			rotation: 160,
		}
		),
		TweenMax.to("#target-servise2", 11, {
			x: "200%",
			y: "-500%",
			ease: "elastic",
			// opacity: 0.5,
			scale: 0.5,
			rotation: 130,
		}
		),

	]
	// contact animate
	// build scene 
	for (var i = 0, l = tweensServises.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({ triggerElement: "#visual", duration: durationEl, offset: offsetEl })
			.setTween(tweensServises[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
	// / servises1 animate
	// servises2 animate
	let tweensServises2 = [

		TweenMax.to("#target-servise21", 11, {
			// x: 1000,
			x: "-100%",
			y: "-200%",
			ease: "elastic",
			// opacity: 0.5,
			scale: 0.5,
			rotation: 130,
		}
		),

	]

	// build scene 
	for (var i = 0, l = tweensServises2.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({ triggerElement: "#content", duration: durationEl, offset: offsetEl })
			.setTween(tweensServises2[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
	// /servises2 animate
	// servises2 animate
	let tweensServises3 = [

		TweenMax.to("#target-servise31", 11, {
			x: "100%",
			y: "-200%",
			ease: "elastic",
			// opacity: 0.5,
			scale: 0.5,
			rotation: 130,
		}
		),
	]


	// build scene 
	for (var i = 0, l = tweensServises3.length; i < l; i++) {
		var scene = new ScrollMagic.Scene({ triggerElement: "#project-management", duration: durationEl, offset: offsetEl })
			.setTween(tweensServises3[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
	// /servises2 animate




	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });
	});

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

