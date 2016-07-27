// JavaScript Document

$(function() {
	var $putao = $('.putao');
	var $hide = $('.hide');
	var $bgimg = $('.bgimg');
	var $hide1 = $('.hide1');
	var $hide_more = $('.hide_more');
	var $more = $('.more');
	var $baijiu = $('.baijiu');
	var $content = $('.content');
	var $con_cen_6 = $('.con_cen_6');
	var $list_con_right=$('.list_con_right');
	
	$con_cen_6.on('mouseenter', function() {
		$(this).css({
			'border': '3px solid #970405',
		}).siblings('.con_cen_6').css({
			'border': '3px solid #dddbd2'
		})
	})
	$('.accordion h4').on('mouseenter', function() {

		$(this).next().show().siblings('.content').hide()
	})

	$putao.on('click', function() {

		$hide.toggle();
		$hide.css({
			background: '#ffffff',
			textIndent: 30
		})

	})

	$more.on('click', function() {
		$hide_more.toggle()
	})
	$baijiu.on('click', function() {
		$hide1.toggle();
		$hide1.css({
			background: '#ffffff',
			textIndent: 30
		})

	})
})
$(function(){
	var 
})
