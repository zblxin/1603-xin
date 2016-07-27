// JavaScript Document

;
$(function() {
		$stopall = $('.stopall');
		$down = $('.down');
		$allbaby = $('.allbaby');
		$menu = $('.menu')
		$down_menu = $('.down_menu')
		$godown = $('.godown');
		$goup = $('.goup');
		$menu.on('mouseenter', function() {

			$godown.hide();
			$down.show();
			$goup.show();

		}).on('mouseleave', function() {
			$godown.show()
			$down.hide()
			$goup.hide();
		});
		$down.on('mouseenter', function() {

			$down.show()
		}).on('mouseleave', function() {
			$down.hide()
		});
		$allbaby.on('mouseenter', function() {

			$allbaby.addClass('active');
			$down_menu.show();
		}).on('mouseleave', function() {
			$down_menu.hide()
		});

	})
	/*轮播图*/

$(function() {
		var $focus = $('#focus');
		var $oBigpic = $('#bigpic');
		var $oSmallpic = $('#smallpic');
		var $oButtons = $('#focus a');
		var $dian = $('.dian li')

		var index = 0; //显示图片索引
		var $imgs = $oBigpic.children('li');

		var $simgs = $oSmallpic.children('li');

		var timer = setInterval(next, 1000);

		showpic()
		$focus.on('mouseenter', function() {

			$oButtons.show();
			clearInterval(timer)

		}).on('mouseleave', function() {
			$oButtons.hide();
			timer = setInterval(next, 1000);
		}).on('click', '.prev', prev).on('click', '.next', next);

		function next() {
			index++;
			showpic()
		}

		function prev() {
			index--;
			showpic()
		}

		function showpic() {
			if(index < 0) {
				index = $imgs.length - 1
			} else if(index > $imgs.length - 1) {
				index = 0
			}
			$imgs.eq(index).animate({
				opacity: 1
			}).siblings().animate({
				opacity: 0
			});
			$dian.eq(index).css('background', '#bb0f2e').siblings().css('background', '#86685e')
		}

	})
	/*------楼梯-------*/
$(function() {
	var $floor = $('.floor')
	var $floornav = $('.floornav');
	//判断滚动距离的大小对楼梯进行相对应的操作
	//显示、隐藏楼梯
	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();

		if(scrollTop > 500) {
			$floornav.fadeIn()
		}
		if(scrollTop < 500) {
			$floornav.fadeOut()
		}

		//判断滚动距离的大小对楼梯进行相对应的操作
		//楼梯层数高亮,并对应内容
		$floor.each(function(idx, ele) {
			
			if(scrollTop >= $(ele).offset().top && scrollTop < $(ele).offset().top + $(ele).outerHeight() / 2) {

				$floornav.find('li').not('.last').removeClass('hover').eq(idx).addClass('hover');

				// 退出循环
				return false;
			}
		});
	});
		$floornav.on('click','li',function(){
					var index = $(this).index();
					var top;
					if($(this).hasClass('last')){
						top = 0;
					}else{
						top = $floor.eq(index).offset().top;
					}
					// $(window).scrollTop(top);
					$('html,body').animate({scrollTop:top});
				});
			

})