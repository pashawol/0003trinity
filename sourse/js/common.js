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
				speed: 1200,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
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
					sensitivity: 4.5,
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
			x: "120%",
			y: "350%",
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
	let contact = {
		x1: 1000,
		y1: 700,
		x2: 800,
		y2: 150,
	}

	let tweensContact = [
		new TimelineMax().add(TweenMax.fromTo("#target-contact1", 50, {
			xPercent: - contact.x1 - 1200 - 800,
		},
			{
				rotation: 260,
				scale: 0.8,
				xPercent: - contact.x1 - 1200,
				yPercent: - contact.y1 + 400,
			}))
			.add(TweenMax.fromTo("#target-contact1", 50, {
				scale: 1,
				rotation: 0,
			},
				{
					scale: 0.8,
					rotation: 260,
					xPercent: - contact.x1,
					yPercent: - contact.y1,
				}))

			.add(TweenMax.fromTo("#target-contact1", 50, {
				rotation: 60,
			},
				{
					scale: 1,
					rotation: 260,
					xPercent: 0,
					yPercent: 0,
				})),

		new TimelineMax().add(TweenMax.fromTo("#target-contact2", 50, {
			xPercent: -contact.x2 - 1000,
			yPercent: -contact.y2 - 300,
			rotation: 260,
			scale: 1,
		},
			{
				scale: 0.5,
				rotation: 10,
				xPercent: -contact.x2,
				yPercent: -contact.y2,
			}
		))
			.add(TweenMax.fromTo("#target-contact2", 50, {

				rotation: 60,
				rotation: -260,
			},
				{
					scale: 1,
					rotation: 0,
					xPercent: 0,
					yPercent: 0,
				}
			))

		,

		new TimelineMax().add(TweenMax.fromTo("#target-contact3", 50,
			{
				xPercent: -300 - 150,
				yPercent: -215,
				rotation: 360,

			}, {
			// xPercent: -300 - 150,
			yPercent: -15,
			rotation: 720,
		})).add(TweenMax.fromTo("#target-contact3", 50,
			{
				rotation: 640,

			}, {

			scale: 0.8,
			xPercent: -300,
			yPercent: -5,
			rotation: 1000,
		}))
			.add(TweenMax.fromTo("#target-contact3", 50,
				{

					rotation: 240,
					scale: 0.8,
				}, {

				rotation: 0,
				xPercent: 0, yPercent: 0,
			})),

		new TimelineMax().add(
			TweenMax.fromTo("#target-contact4", 50, {
				// yPercent: 10,
				xPercent: -1050,
				yPercent: -450,
				rotation: 420,

			}, {
				xPercent: -550,
				yPercent: 50,
				rotation: 220,
			}
			)).add(
				TweenMax.fromTo("#target-contact4", 50, {


					rotation: 160,
					scale: 0.5,
				},
					{

						rotation: 0,
						xPercent: 0,
						yPercent: 0,
						scale: 1
					}


				)),
		new TimelineMax().add(
			TweenMax.fromTo("#target-contact5", 50, {
				xPercent: -700,
				yPercent: 350,
				rotation: 220,
				scale: 1,
			}, {
				xPercent: -700,
				yPercent: 50,
				rotation: 120,
				scale: 0.5,
			}
			)).add(
				TweenMax.fromTo("#target-contact5", 50, {

				}, {
					xPercent: 0,
					yPercent: 0,
					rotation: 20,
					scale: 1,
				}
				))

	];

	// build scene 

	// var scene1_0 = new ScrollMagic.Scene({ triggerElement: "#documents", duration: durationEl * 2, offset: - durationEl * .8 })
	// 	.setPin("#target-contact1")
	// 	.setTween(tweensContact[0])
	// 	.addIndicators() // add indicators (requires plugin)
	// 	.addTo(controller);

	var scene0 = new ScrollMagic.Scene({ triggerElement: "#contact", duration: durationEl * 5, offset: -durationEl * 4 })

		.setTween(tweensContact[0])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	var scene1 = new ScrollMagic.Scene({ triggerElement: "#contact", duration: durationEl * 3, offset: -durationEl * 2 })

		.setTween(tweensContact[1])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	var scene2 = new ScrollMagic.Scene({ triggerElement: "#contact", duration: durationEl * 4, offset: -durationEl * 3 })

		.setTween(tweensContact[2])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	var scene3 = new ScrollMagic.Scene({ triggerElement: "#contact", duration: durationEl * 3, offset: -durationEl * 2 })

		.setTween(tweensContact[3])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	var scene4 = new ScrollMagic.Scene({ triggerElement: "#contact", duration: durationEl * 3, offset: -durationEl * 2 })

		.setTween(tweensContact[4])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);


	let tweensServises = [
		new TimelineMax().add(
			TweenMax.fromTo("#target-servise1", 50, {
				xPercent: -420,
				yPercent: 5,
				rotation: 360 * 2,
			},
				{
					xPercent: -300,
					yPercent: 15,
					rotation: 360,
				}
			)).add(
				TweenMax.fromTo("#target-servise1", 50, {

					rotation: 360 * 2,
				},
					{
						xPercent: -150,
						yPercent: 15,
						rotation: 360,
					}
				))
			.add(
				TweenMax.fromTo("#target-servise1", 50, {

					rotation: 360,
				},
					{
						xPercent: 0,
						yPercent: 0,
						rotation: 0,
					}
				)).add(
					TweenMax.to("#target-servise1", 50, {
						xPercent: 100,
						yPercent: 100,
						rotation: 160,
					}
					)),
		new TimelineMax().add(
			TweenMax.fromTo("#target-servise2", 50, {
				xPercent: -1200 - 300,
				yPercent: 10 - 10,
				rotation: 360 * 2,
			},
				{
					xPercent: -700,
					yPercent: 10,
					rotation: 360,
				}
			)).add(
				TweenMax.fromTo("#target-servise2", 50, {

					rotation: 500,
				},
					{
						xPercent: -500,
						yPercent: 10,
						rotation: 360,
					}
				)).add(
					TweenMax.fromTo("#target-servise2", 50, {

						rotation: 360,
					},
						{
							xPercent: 0,
							yPercent: 0,
							rotation: 0,
						}
					)).add(
						TweenMax.to("#target-servise2", 50, {
							xPercent: 200,
							yPercent: -500,
							// opacity: 0.5,
							scale: 0.5,
							rotation: 130,
						}
						)),

	]

	var scene = new ScrollMagic.Scene({ triggerElement: "#visual", duration: durationEl * 6, offset: -durationEl * 3.5 })
		.setTween(tweensServises[0])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	var scene = new ScrollMagic.Scene({ triggerElement: "#visual", duration: durationEl * 6, offset: -durationEl * 3.5 })
		.setTween(tweensServises[1])
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);

	// / servises1 animate
	// servises2 animate
	let tweensServises2 = [

		TweenMax.to("#target-servise21", 50, {
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

		TweenMax
			.to("#target-servise31", 50, {

				x: "100%",
				y: "-200%",
				ease: "elastic",
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

	new ScrollMagic.Scene({
		triggerElement: "#sHello",
		triggerHook: "onLeave",
		duration: "120%",
		offset: "-200%"
	})
		.setClassToggle("#title-block", "fixed") // add class toggle

		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);



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

