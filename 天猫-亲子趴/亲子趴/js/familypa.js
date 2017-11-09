//1.楼层效果
$(function() {

	//返回顶部
	$("#building-returntop").click(function() {

		$("body,html").stop().animate({

			scrollTop: 0

		}, 1000)

	});

	//楼层运动
	$("#building ul li").click(function() {

		var index = $(this).index();

		$(this).css("background-color", "#331564")
			.siblings().css("background-color", "#8035FB");
		//console.log($("body").find("[id=banner-juan99]"))
		var top = $("[id=banner-juan99]").eq(index).offset().top;

		//运动到对应的楼层
		$("body,html").stop().animate({
			scrollTop: top
		}, 1000)

	});

	//淡入淡出
	$(window).scroll(function() {

		var top = $(window).scrollTop();

		if(top >= 700) {

			$("#building").fadeIn();

		} else {

			$("#building").fadeOut();
		}
		$(".main>.banner-index").each(function(i, ele) {

			var index = $(ele).index();

			//console.log(index)
			if(top <= $(ele).offset().top + $(ele).outerHeight() / 2) {

				$("#building ul li").eq(index).css("background-color", "#331564")
					.siblings().css("background-color", "#8035FB");

				return false;
			}

		})

	})

});

//2.鼠标移上购物车滑入滑出盒子
$(function() {

	$("#buy-car").mouseenter(function() {

		$("#money>img").attr("src", "img/buy-car-down.png");
		$(this).stop().animate({ width: 240 }, 400, function() {
			$("#money-box").stop().slideDown();
		});

		$("#nav-in>span").stop().animate({ left: 100 });

	});

	$("#buy-car").mouseleave(function() {

		$("#money>img").attr("src", "img/nav-xia.bmp");

		$("#money-box").stop().slideUp(function() {

			$("#buy-car").stop().animate({ width: 200 }, 400);

			$("#nav-in>span").stop().animate({ left: 140 });

		});

	});

});

//3.地区选择

$(function() {

	$("#header-place").mouseenter(function() {
		$("#span,#city").show();
		$("#header-place>h3>img").attr("src", "img/header-hang.png");
	});

	$("#header-place").mouseleave(function() {
		$("#span,#city").hide();
		$("#header-place>h3>img").attr("src", "img/header-xia.bmp");
	});

	$("#city ul li").mouseenter(function() {

		var index = $(this).index();

		$(this).addClass("border").siblings().removeClass("border");
		$("#every-city>div").eq(index).show().siblings().hide();

	})

});

//4.导航栏固定

$(function() {

	var top = $("#header").outerHeight();

	$(window).scroll(function() {

		var scroll = $("html").scrollTop();

		if(scroll >= top) {
			console.log($("#nav").outerHeight())
			$("#nav").addClass("fixed");
			$("#header").css("margin-bottom", $("#nav").outerHeight());

		} else {

			$("#nav").removeClass("fixed");

			$("#header").css("margin-bottom", 0)
		}
	})

});

//5.所有产品列表显示隐藏

$(function() {

	$("#all").mouseenter(function() {

		$("#list-box").stop().show();

	});
	$("#all").mouseleave(function() {

		$("#list-box").stop().hide();

	});

	$("#list-box>ul>li").mouseenter(function() {

		var index = $(this).index();

		$(this).stop().addClass("bgcred").siblings().stop().removeClass("bgcred");

		$(this).find("#li-top>a,#li-top>span").css("color", "#fff").parent().parent().siblings().find("#li-top>a,#li-top>span").css("color", "#515151");

		$(this).find("#li-down>a").css("color", "#fff").parent().parent().siblings().find("#li-down>a").css("color", "#999");

		$(this).find("#box1,#box5,#box6,#box7").show().parent().siblings().find("#box1,#box5,#box6,#box7").hide();
	})

})