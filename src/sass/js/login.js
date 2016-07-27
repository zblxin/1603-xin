// JavaScript Document

$(function(){
	var $login_btn=$('.login_btn');	
	var  $userName=$('.userName').val();	
	if($userName ===' '){
	$login_btn.on('click',function(){
			var  $userName=$('.userName').val();	
			var $password=$('.password').val();
			var $tanchubox=$('.tanchubox');
			var $tanchubox2=$('.tanchubox2');		
		if($userName.length==0){
			$tanchubox.show().html("*用户名不能为空");
		}else if($userName.length<6 || $userName.length>20){
			$tanchubox.show().html("*用户名6到20之间");
		}else if(true){
			$tanchubox.show().html("用户名正确").css({"color":"blue"});
		}
		if($password.length == 0){
			$tanchubox2.show().html("*密码不能为空")
		}else if($password.length<6 || $password.length>20){
			$tanchubox2.show().html("*密码6到20之间")
		}else{
			$tanchubox2.show().html("密码正确").css({"color":"blue"});
		}
		if($tanchubox.html() == "用户名正确" && 	$tanchubox2.html() == "密码正确"){
				alert("恭喜你,登录成功");
				
		}
		
	})
	}
	
})


