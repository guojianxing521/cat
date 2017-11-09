//1.点击登录部分右上角切切换登录方式

$("#landing-in-icon1").click(function() {
	$("#landing-in").hide();
	$("#landing-in2").show()
})
$("#landing-in2-icon-1").click(function() {
	$("#landing-in2").hide();
	$("#landing-in").show()
})

//2.鼠标移上二维码 显示小手机扫描图片
$("#erweima>img").mouseenter(function() {

	$("#erweima>img").stop(true, false).animate({ left: 30 }, 800);

	$("#tel-pic>img").stop(true, false).delay(800).fadeTo(800, 1);
});

$("#erweima>img").mouseleave(function() {

	$("#erweima>img").stop(true, false).delay(800).animate({ left: 100 }, 800);

	$("#tel-pic>img").stop(true, false).fadeTo(800, 0);
})

//3.当光标在用户姓名上 显示删除号

var oUsername = document.getElementById("username");
var oIconX = document.getElementById("icon-x");

oUsername.oninput = function() {

	if(oUsername.value != "") {
		oIconX.style.display = "block";
	} else {
		oIconX.style.display = "none";
	}
}

//4.点击删除号 清空	文字 
oIconX.onclick = function() {

	oUsername.value = "";
	oIconX.style.display = "none";
	oUsername.style.border = "1px solid #DDD";
}

//5.正则判断用户名

oUsername.onblur = function() {

	var str = oUsername.value;

	var re = /^\d{11}$/;

	if(!re.test(str)) {
		alert("☺请您输入正确的手机号码！");
		this.style.border = "1px solid red";
	}

}

//
//var rules = [
//{
//	name: "username",
//	reg: /[\u4e00-\u9fa5]/,
//	tip: "请输入正确的会员名字！"
//},
//{
//	name: "email",
//	reg: /^\w+@[a-z0-9]+(.[a-z]+){1,3}$/,
//	tip: "请输入正确的邮箱地址！"
//},	
//{
//	name: "phone",
//	reg: /^\d{11}$/,
//	tip: "请输入正确的手机号码！"
//},
//];

//	bind(oUsername,"blur",function(){
//		
//		var str = oUsername.value;
//		var num=-100;
//		for(var i = 0;i<rules.length;i++){
//			var reg=rules[i].reg;
//			if(reg.test(str)) {
//				 num=i;
//				 break;
//			}
//			
//		}
//		if(num==-100){
//			alert("aaaaa")
//		}
//	})
//	oUsername.onblur = function() {
//		var str = oUsername.value;
//		if(!reg.test(str)) {
//			alert(tip);
//		}
//	}

// 这是一个绑定方式的兼容性函数
//function bind(obj,evType,evFn) {
//	// 根据浏览器能力进行检测  如果识别支持addEventListener 
//	//就直接使用这个绑定方式
//	// 如果不支持这个方法 则按照后面的方式进行绑定
//	obj.handle = function(){
//		evFn.call(obj);
//	}
//	if(obj.addEventListener){
//		// 标准浏览器
//		obj.addEventListener(evType,evFn,false);
//		obj.handle = evFn;
//	}else if(obj.attachEvent) {
//		//IE6 7 8 
//		obj.attachEvent("on"+evType,obj.handle);
//	} else {
//		// 以上方法都不支持的很老的浏览器 
//		obj["on"+evType] = evFn;
//	}
//}

//addCheck(rules[0].reg,rules[0].tip);
//addCheck(rules[1].reg,rules[1].tip);
//addCheck(rules[2].reg,rules[2].tip);