/*--------------------------------登录注册（cookie）-----------*/
function setCookie(userName,uservalue,day){
	var date=new Date();
	date.setDate(date.getDate()+day	);
	document.cookie=(userName+"="+uservalue+"; expires="+date)
}
function fnCheckCookie(cookName){
//document.cookie 已知条件  , "username=张三; userpass=123456; key=value"
	var result = "";
	var aCookie = document.cookie.split("; ");
	//先拆分成键值对数组   ["username=张三", "userpass=123456", "key=value"];
	for(var i=0; i<aCookie.length; i++){
		var aCook = aCookie[i].split("="); //["username", "张三"];
		
		if(aCook[0] == cookName){
			result = aCook[1];
		}
	}
	return result;
}

function removeCookie(userName){
	 setCookie(userName,"",-1)
}
