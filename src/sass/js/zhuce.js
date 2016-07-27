// JavaScript Document


$(function(){
					/*手机号码*/
					var $phonenumber=$('.phonenumber');
					$phonenumber.on('blur',function(){
					var reg=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])[0-9]{8}$/;
						
					
						if((reg.test($phonenumber.val()))){
							$box.html(' ')
						}else{
							$box.html("请正确输入手机号码").css({'color':'red'});
								return false
						}
					})
					/*验证码*/
					var $changeMa=$('#changeMa');
					var $yanzheng=$changeMa.prev('input');
					var $box=$('#box')
					$changeMa.on('click',function(){
					var arr = ["1","2","3","4","a","b","c","d"];
					var str ="";
					for(var i=0;i<4;i++){
						var index = parseInt(Math.random()*arr.length);
						str += arr[index];//str = str+arr[index];
					}
					
					$changeMa.html(str)
					})
					$yanzheng.on('blur',function(){
						if($yanzheng.val()!=$changeMa.html()){
							$box.html("验证码输入错误,请重新输入").css({'color':'red'});
							return false
						}else{
							$box.html(" ")
						}
					})
					/*密码验证*/
					var $password=$('.password');
					var $password_agin=$('.password_agin')
					$password.on('focus',function(){
						$password.val(' ')
					}).on('blur',function(){
						var reg1=/[\w]{6,20}$/;
						if(reg1.test($password.val())){
							$box.html(" ")
						}else{
							$box.html("请输入有效密码").css({'color':'red'});
								return false
						}
					})
					$password_agin.on('blur',function(){
						
						if($password_agin.val()!=$password.val()){
							$box.html("两次密码输入不一致").css({'color':'red'});
								return false
						}else{
							$box.html(" ")
						}
					})
					
				
				/*--------------VIP码----------------*/	
					var $choose=$('.choose');
					var $up=$('.up');
					var $hide=$(".hide")
					$choose.on('click',function(){
						$hide.toggle()
					})
					$up.on('blur',function(){
						$hide.slideUp()
					})
				})     
        