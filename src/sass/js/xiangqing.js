// JavaScript Document
$(function(){
		var $smallpic=$('.smallpic');
		var $box=$('#box');
		var $bigpic=$('#bigpic');
		$bigpic.hide();
		$smallpic.hide()
		$box.on('mousemove',function(e){		
			$bigpic.show();
			$smallpic.show();
			var nleft=$box.offset().left;
			var ntop=$box.offset().top;						
			var w=e.clientX-nleft-50
			var h=e.clientY-ntop+$(window).scrollTop()-50;
					if(w<=0){
						w=0;
					}else if(w>=180){
						w=180;
					}
					if(h<=0){
						h=0
					}else if(h>=242){
						h=242;
					}					
			$smallpic.css({left:w,top:h});		
			$('#bp').css({left:-w*2,top:-h*2});
			
		}).on('mouseleave',function(){
				$bigpic.hide();
			$smallpic.hide()
		})
	})
	
/*-------------切换图片-------*/

$(function(){
	var $hidepic=$('#box img');
	
	var $smallpic=$('.goods_part li');
	$smallpic.on('mouseenter',function(){
		$(this).css({
			'border':'1px solid #999999',			
		})
		 index=$(this).index();	
		$hidepic.hide().eq(index-1).show() 
	}).on('mouseleave',function(){
		$(this).css({'border':0})
	})	
})
/*------------------------购物车飞入效果--------------------------*/
$(function(){
	var $bt=$('#bt');
	var $bp=$('#bp');
	var $copypic=$bp.clone();
	var $list_con_right=$('.list_con_right');
	var $car=$('.car');

	//把复制的img加入到页面	
	$bt.on('click',function(){
		$copypic.css({
		position:'absolute',
		left:$bp.offset().left,
		top:$bp.offset().top,
		dispaly:'none'
	}).appendTo('body')
		$copypic.animate({
			left:$list_con_right.offset().left,			
			top:$car.offset().top + $car.outerHeight(),
			width:0
		})
		
	})
	
})
/*----------点击加商品数量---------------*/
$(function(){
	var $fuhao=$('.add');
	var jian=$('.jian');
	
	
	var $shuliang=$fuhao.parent().find('input').val();	
	$fuhao.on('click',function(){		
		$shuliang=parseInt($shuliang)+1;
	
		$fuhao.parent().find('input').val($shuliang);
		
	
	})
	jian.on('click',function(){
		$shuliang=parseInt($shuliang)-1;
		
		if($shuliang>=0){
			$fuhao.parent().find('input').val($shuliang);
		}
	})
	
})
/*-------------json（js）----------------*/
function Pro() {
			var Province = document.getElementById("province");
			for(var i = 0; i < pro.length; i++) {
				var objpro = document.createElement("option");

				objpro.innerHTML = pro[i].name;
				objpro.value = pro[i].id;
				Province.appendChild(objpro);

			}
			selected(Province)
		}

		function selected(obj) {

			var selectcity = obj.value;

			for(var i = 0; i < pro.length; i++) { //确定出你选择的是那个省（市），
				if(selectcity == pro[i].id) {
					break;
				}
			}
			var objselectcity = pro[i].city; //把确定好的省的城市付给变量	
			var City = document.getElementById("city");
			City.length = 0;
			for(var j = 0; j < objselectcity.length; j++) {
				var objcity = document.createElement("option");
				objcity.innerHTML = objselectcity[j].name;
				objcity.value = objselectcity[j].id;
				City.appendChild(objcity);
			}
		}