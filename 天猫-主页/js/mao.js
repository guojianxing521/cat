$(function() {

	var timer = null;
	//鼠标移上时淘宝变样
	$('#tao').mouseover(function() {
		clearInterval(timer);
		timer = null;
		$('#tao').css("color", "#FF0036");
		$(this).addClass("taobian");
		$("#xia1").show();
	});
	$('#tao').mouseout(function() {
		// clearInterval(timer);
		// timer=null;
		timer = setInterval(function() {
			$('#tao').removeClass("taobian");
			$('#tao').css("color", "#999");
			$("#xia1").hide();
		}, 100);

		$("#xia1").mouseover(function() {
			clearInterval(timer);
			timer = null;
			$('#tao').css("color", "#FF0036");
			$('#tao').addClass("taobian");
			$(this).show();
		});

		$("#xia1").mouseout(function() {
			$(this).hide();
			$('#tao').removeClass("taobian");
			$('#tao').css("color", "#999");
		})

		$("#xia1 span").mouseover(function() {

			$(this).css("color", "#FF0036").siblings().css("color", "#999");

		})

	});

	$("#xia1 span").mouseout(function() {
		$(this).css("color", "#999");

	})

});

//2
$(function() {

	var timer = null;
	//鼠标移上时淘宝变样
	$('#jia').mouseover(function() {
		clearInterval(timer);
		timer = null;
		$('#jia').css("color", "#FF0036");
		$(this).addClass("taobian");
		$("#xia2").show();
	});
	$('#jia').mouseout(function() {
		// clearInterval(timer);
		// timer=null;
		timer = setInterval(function() {
			$('#jia').removeClass("taobian");
			$('#jia').css("color", "#999");
			$("#xia2").hide();
		}, 100);

		$("#xia2").mouseover(function() {
			clearInterval(timer);
			timer = null;
			$('#jia').css("color", "#FF0036");
			$('#jia').addClass("taobian");
			$(this).show();
		});

		$("#xia2").mouseout(function() {
			$(this).hide();
			$('#jia').removeClass("taobian");
			$('#jia').css("color", "#999");
		})

		$("#xia2 span").mouseover(function() {

			$(this).css("color", "#FF0036").siblings().css("color", "#999");

		})

	});

	$("#xia2 span").mouseout(function() {
		$(this).css("color", "#999");

	})
});

//3
$(function() {

	var timer = null;

	$('#shang').mouseover(function() {
		clearInterval(timer);
		timer = null;
		$('#shang').css("color", "#FF0036");
		$(this).addClass("taobian");
		$("#xia3").show();
	});
	$('#shang').mouseout(function() {
		// clearInterval(timer);
		// timer=null;
		timer = setInterval(function() {
			$('#shang').removeClass("taobian");
			$('#shang').css("color", "#999");
			$("#xia3").hide();
		}, 100);

		$("#xia3").mouseover(function() {
			clearInterval(timer);
			timer = null;
			$('#shang').css("color", "#FF0036");
			$('#shang').addClass("taobian");
			$(this).show();
		});

		$("#xia3").mouseout(function() {
			$(this).hide();
			$('#shang').removeClass("taobian");
			$('#shang').css("color", "#999");
		})

		$("#xia3 span").mouseover(function() {

			$(this).css("color", "#FF0036").siblings().css("color", "#999");

		})

	});

	$("#xia3 span").mouseout(function() {
		$(this).css("color", "#999");

	})
});

//4
$(function() {

	var timer = null;

	$('#hang').mouseover(function() {
		clearInterval(timer);
		timer = null;
		$('#hang').css("color", "#FF0036");
		$(this).addClass("taobian");
		$("#xia4").show();

	});
	$('#hang').mouseout(function() {
		// clearInterval(timer);
		// timer=null;
		timer = setInterval(function() {
			$('#hang').removeClass("taobian");
			$('#hang').css("color", "#999");
			$("#xia4").hide();
		}, 100);

		$("#xia4").mouseover(function() {
			clearInterval(timer);
			timer = null;
			$('#hang').css("color", "#FF0036");
			$('#hang').addClass("taobian");
			$(this).show();
		});

		$("#xia4").mouseout(function() {
			$(this).hide();
			$('#hang').removeClass("taobian");
			$('#hang').css("color", "#999");
		})

		$("#xia4 span").mouseover(function() {

			$(this).css("color", "#FF0036").siblings().css("color", "#999");

		})

	});

	$("#xia4 span").mouseout(function() {
		$(this).css("color", "#999");

	})
});

//轮播图
$(function() {
	//鼠标移上事件，背景变白，对应的图片	
	$("#nbb>li").mouseover(function() {
		var idx = $(this).index();
		k = idx;
		$(this).addClass("color").siblings().removeClass("color");
		console.log(this);

		$("#img>img").eq(idx).fadeIn(800).siblings().fadeOut(800);
	});

	var k = 0;
	var timer = null;
	timer = setInterval(autoplay, 3000);

	function autoplay() {
		k++;
		if(k > $("#img>img").length - 1) {
			k = 0;
		}
		$("#img>img").eq(k).fadeIn(800).siblings().fadeOut(800);
		$("#nbb>li").eq(k).addClass("color").siblings().removeClass("color");
	}

	//图片移上事件，停止轮播
	$("#banner-z").mouseover(function() {
		clearInterval(timer);
		timer = null;
	});
	$("#banner-z").mouseout(function() {
		timer = setInterval(autoplay, 3000);
	});

});

//img盒子移上时实现透明度变换
$(function() {
	$('#patu img').mouseover(function() {
		$(this).stop().fadeTo(300, 0.7);
	});
	$('#patu img').mouseout(function() {
		$(this).stop().fadeTo(300, 1);
	});

	$('#title img').mouseover(function() {
		$(this).stop().fadeTo(500, 0.7);
	});
	$('#title img').mouseout(function() {
		$(this).stop().fadeTo(500, 1);
	});

	$('#gongneng3-z img').mouseover(function() {
		$(this).stop().fadeTo(100, 0.7);
	});
	$('#gongneng3-z img').mouseout(function() {
		$(this).stop().fadeTo(100, 1);
	})

});

//移上黑色盒子显示
$(function() {

	$("#xin li").mouseenter(function() {

		$(this).stop().fadeTo(200, 1).siblings().stop().fadeTo(200, 0);
	});
	$("#xin li").mouseleave(function() {

		$(this).fadeTo(100, 0);
	});
})

//选项卡
$(function() {
	$('#ka>span').mouseover(function() {
		console.log($('#ka>span'));
		console.log($(this));
		$(this).css("backgroundColor", "#00B262").siblings("span").css("backgroundColor", "#F5F5F5");
		$('#ka>div').eq($(this).index()).show().siblings("div").hide();
	});

	$('#ka').mouseover(function() {
		$('#ka img').stop().fadeTo(200, 0.8);
	});
	$('#ka').mouseout(function() {
		$('#ka img').stop().fadeTo(200, 1);
	});

	var timer = null;
	var k = 0;
	timer = setInterval(autoplay, 2000);

	function autoplay() {
		k++;
		if(k > $('#ka>span').length - 1) {
			k = 0;
		}
		$('#ka>span').eq(k).css("backgroundColor", "#00B262").siblings("span").css("backgroundColor", "#F5F5F5");
		$('#ka>div').eq(k).show().siblings("div").hide();
	}

});

//楼层特效
$(function() {
	//滚动的时候  自动添加类
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		//console.log(top);
		if(top > 700) {
			$('#left').stop().fadeIn(200);
		} else {
			$('#left').stop().fadeOut(200);
		}
		$("#main>div").each(function(i, ele) {
			var arr = ["#FF0036", "pink", "yellowgreen", "orange", "skyblue", "#8b4bc7"]
			var index = $(ele).index();
			console.log(index);
			if(top <= $(ele).offset().top + $(ele).outerHeight() / 2) {
				$("#left a").eq(index).css("backgroundColor", arr[i]).siblings("a").css("backgroundColor", "");
				return false;
			}
		})
	});

	$("#left a:eq(6)").click(function() {
		console.log(1);
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
	});

	$("#left a").not(":last").click(function() {
		var index = $(this).index();
		console.log(index);
		$(this).addClass("active").siblings("a").removeClass("active");
		console.log($(this));
		var top = $("#main>div").eq(index).offset().top;
		console.log(top);
		$("html,body").animate({
			scrollTop: top
		}, 1000);

	})

});

//吸顶效果
$(function() {
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if(top > 700) {
			$("#xi").stop().slideDown(100);
		} else {
			$("#xi").stop().slideUp(100);
		}
	})

});

//商品分类
$(function() {
	$("#naa li").mouseover(function() {
		var idx = $(this).index();
		$("#zhankai img").eq(idx).stop().show().siblings().hide();
		$("#zhankai ").stop().show();
	});
	$("#naa li").mouseout(function() {
		$("#zhankai img").hide();
		$("#zhankai").hide();
	})
});

$(function() {
	$("#shi").mouseover(function() {
		$("#shi>img").fadeTo(300, 0.8);
	});
	$("#shi").mouseout(function() {
		$("#shi>img").fadeTo(300, 1);
	});
	$("#ul-li>li").mouseenter(function() {
		var index = $(this).index();
		$("#ul-li>li>img").eq(index).stop().fadeTo(100, 0.8).parent().siblings().children("img").fadeTo(100, 1);

	});

	$("#ul-li>li").mouseleave(function() {
		var index = $(this).index();
		$("#ul-li>li>img").fadeTo(100, 1);
	});

})

$(function() {
	$("#shi2").mouseover(function() {
		$("#shi2>img").eq(0).fadeTo(300, 0.8);
	});
	$("#shi2").mouseout(function() {
		$("#shi2>img").eq(0).fadeTo(300, 1);
	});
	$("#person>li").mouseenter(function() {
		var index = $(this).index();
		$("#person>li>img").eq(index).stop().fadeTo(100, 0.8).parent().siblings().children("img").fadeTo(100, 1);

	});

	$("#person>li").mouseleave(function() {
		var index = $(this).index();
		$("#person>li>img").fadeTo(100, 1);
	});

});

$(function() {
	$("#shi3").mouseover(function() {
		$("#shi3>img").eq(0).fadeTo(300, 0.8);
	});
	$("#shi3").mouseout(function() {
		$("#shi3>img").eq(0).fadeTo(300, 1);
	});
	$("#ul3>li").mouseenter(function() {
		var index = $(this).index();
		$("#ul3>li>img").eq(index).stop().fadeTo(100, 0.8).parent().siblings().children("img").fadeTo(100, 1);

	});

	$("#ul3>li").mouseleave(function() {
		var index = $(this).index();
		$("#ul3>li>img").fadeTo(100, 1);
	});

});

$(function() {
	$("#shi4").mouseover(function() {
		$("#shi4>img").eq(0).fadeTo(300, 0.8);
	});
	$("#shi4").mouseout(function() {
		$("#shi4>img").eq(0).fadeTo(300, 1);
	});
	$("#ul4>li").mouseenter(function() {
		var index = $(this).index();
		$("#ul4>li>img").eq(index).stop().fadeTo(100, 0.8).parent().siblings().children("img").fadeTo(100, 1);

	});

	$("#ul4>li").mouseleave(function() {
		var index = $(this).index();
		$("#ul4>li>img").fadeTo(100, 1);
	});

})