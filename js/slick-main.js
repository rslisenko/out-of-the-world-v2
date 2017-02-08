;(function($) {
	"use strict";

	$(document).ready(function(){
			var $slider = $('.ba-slider');

			$slider.slick({
				dots: true,
				slide: ".ba-slider__item",
				prevArrow: ".ba-slider__prev",
				nextArrow: ".ba-slider__next",
				customPaging : function(slider, i) {
					var slides = $(slider.$slides[i]).data();
					return '<a>' + '0' + (i + 1) + '</a>';
				},
				responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false
					}
				},
				]
			});
			$('.current-slide').text('01');
			$('.ba-slider').on('afterChange', function(event, slick, currentSlide){
				$('.current-slide').text('0' + (currentSlide + 1));
			});
		});
})(jQuery);
