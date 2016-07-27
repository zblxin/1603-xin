/*------------------快递--------*/
$(function(){
	var $kuaidi=$('.kuaidi')
	
	$kuaidi.on('click',function(){
		
		$(this).children().toggle()
	})
})
/*----------点击加商品数量---------------*/

$(function(){
	var $fuhao=$('.add');
	var jian=$('.jian');
	var $shuliang=$fuhao.parent().find('input').val();	
	var $subtotal=$('.subtotal');
	var $but2_int=$('.but2_int');
	var $but1=$('.but1 span');
	
	$fuhao.on('click',function(){		
		$shuliang=parseInt($shuliang)+1;
		$fuhao.parent().find('input').val($shuliang);
		$subtotal.html($shuliang*49).css({'color':'red'});
		$but2_int.val($subtotal.html()).css({'color':'red'});;
		$but1.html($shuliang).css({'color':'red'});;
	})
	jian.on('click',function(){
		$shuliang=parseInt($shuliang)-1;		
		if($shuliang>=0){
			$fuhao.parent().find('input').val($shuliang);
			$subtotal.html($subtotal.html()-49).css({'color':'red'});
			$but2_int.val($subtotal.html()).css({'color':'red'});;
			$but1.html($shuliang).css({'color':'red'});;
		}
	})	
})
$(function(){
	var $all_select=$('.all_select');
	var $subtotal=$('.subtotal');
	var $fuhao=$('.add');
	var $but2_int=$('.but2_int');
	var $shuliang=$fuhao.parent().find('input').val();	
	$all_select.on('click',function(){		
		$subtotal.html(49).css({'color':'red'});;
		$but2_int.val(49).css({'color':'red'});
	})
})
/*------删除--*/
$(function(){
	var $del=$('.del');
	var $cen=$('#cen')
	$del.on('click',function(){
		$cen.remove()
	})
})
