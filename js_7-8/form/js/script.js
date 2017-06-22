$(function() {
	'use strict';
  $('.tabs__item').focus(function() {
    $(this).addClass('item--active')
           .siblings().removeClass('item--active');

    $('.tabs__content').addClass('content--active').eq($(this).index())
                       .siblings().removeClass('content--active');
  });
});