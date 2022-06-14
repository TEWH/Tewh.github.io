	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on("load", function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});

	(function ($) {
		"use strict";

		/* ========================================================================= */
		/*	Project Filter Video Setup
		/* =========================================================================  */
		$('.play-icon i').click(function () {
			var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
			$(this).replaceWith(video);
		});

		/* ========================================================================= */
		/*	Project Filter Setup
		/* =========================================================================  */
		setTimeout(function () {
			var projectfilterizd = $('.projectfiltr-container').filterizr({filter : 'ongoing'});
			//Change which category is displayed as active after clicking
			$('.projectfiltr-control').on('click', function () {
				$('.projectfiltr-control').removeClass("active");
				$(this).addClass("active");
			});
		}, 500);

		/* ========================================================================= */
		/*	Member Resources Filter Setup
		/* =========================================================================  */
		setTimeout(function () {
			var resourcefilterizd = $('.resourcefiltr-container').filterizr({filter : 'all'});
			//Change which category is displayed as active after clicking
			$('.resourcefiltr-control').on('click', function () {
				$('.resourcefiltr-control').removeClass("active");
				$(this).addClass("active");
			});
		}, 500);

		/* ========================================================================= */
		/*	Testimonial Carousel
		/* =========================================================================  */

		//Init the slider
		$('.testimonial-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});


		/* ========================================================================= */
		/*	Clients Slider Carousel
		/* =========================================================================  */

		//Init the slider
		$('.clients-logo-slider').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
		});

		/* ========================================================================= */
		/*	Company Slider Carousel
		/* =========================================================================  */
		$('.company-gallery').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
		});

		/* ========================================================================= */
		/*	Awars Counter Js
		/* =========================================================================  */
		$('.counter').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');

			$({
				countNum: $this.text()
			}).animate({
					countNum: countTo
				},

				{
					duration: 1500,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}

				});
		});
	})(jQuery);