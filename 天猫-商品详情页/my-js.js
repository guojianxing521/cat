//放大镜
$(function() {
	var oBox1 = document.getElementById('fd');
	var oBox2 = document.getElementById('fdx');
	var oBox3 = document.getElementById('fdj');
	//console.log(oBox1);
	oBox1.onmouseover = function() {
		oBox3.style.display = 'block';
		oBox2.style.display = 'block';
	}

	oBox1.onmousemove = function(ev) {

		var st = document.documentElement.scrollTop || document.body.scrollTop;
		ev = ev || event;
		var dn = document.getElementsByClassName("xiatu")[0];
		var disx = ev.clientX - oBox2.offsetWidth / 2 - dn.offsetLeft;
		var disy = ev.clientY - oBox2.offsetHeight / 2 - dn.offsetTop + st;
		//小盒子
		disx = disx < 0 ? 0 : disx;
		disx = disx > this.offsetWidth - oBox2.offsetWidth ? this.offsetWidth - oBox2.offsetWidth : disx;
		disy = disy < 0 ? 0 : disy;
		disy = disy > this.offsetHeight - oBox2.offsetHeight ? this.offsetHeight - oBox2.offsetHeight : disy;

		oBox2.style.left = disx + 'px'; //相对于box1的left值
		oBox2.style.top = disy + 'px';

		var left = -disx * 1.73;
		var top = -disy * 1.73;
		oBox3.style.backgroundPosition = "" + left + "px " + top + "px";
		return false;
	}
	oBox1.onmouseout = function() { //leave
		oBox2.style.display = 'none';
		oBox3.style.display = 'none';
	}

	$('.xiaoxiatu>ul>li>a').click(function() {
		var o = $(this).parent().index();
		var k = $('#fdx>a').eq(o).attr('href')
		//console.log(k);
		$('#fd>img').attr('src', $(this).attr('href'));

		$('#fdj').css('background', "url(" + k + ") no-repeat");

		return false;
	})
})

//轮播

$(function() {
	//获取变量
	var aLun = document.getElementById('lunbo');
	//	 console.log(aLun)
	var oUl = document.getElementById('u');
	var aLi = oUl.getElementsByTagName('li');
	var aImg = oUl.getElementsByTagName('img');
	var xLun = document.getElementsByClassName('lun-x')[0];
	var xLi = xLun.getElementsByTagName('li');
	var k = 1;
	var timer = null;

	aLun.onmouseover = function() {
		clearInterval(timer);
		timer = null;
	}
	aLun.onmouseout = function() {

		timer = setInterval(autoplay, 1500);
	}

	oUl.style.top = -aLi[0].offsetHeight * k + 'px';
	xLi[0].className = 'current';
	var dis = -aLi[0].offsetHeight * k;

	//添加两张照片

	var last = aLi[0].cloneNode(true);
	oUl.appendChild(last);
	var first = aLi[aLi.length - 2].cloneNode(true);
	oUl.insertBefore(first, aLi[0]);
	//定时器
	timer = setInterval(autoplay, 1500);

	function autoplay() {
		if(k > 8) {
			k =1
			oUl.style.top = -aLi[0].offsetHeight + 'px';
		}
		k++;
		if(k < - 1) {
			k = 1;
			oUl.style.top = -aLi[0].offsetHeight - 1 + 'px';
		}
		dis = -aLi[0].offsetHeight * k;
		//move之前清除别的move
		//  	clearInterval(oUl.timer);
		move(oUl, 'top', 20, dis, function() {
			//如果到达最后一张照片，move完之后，定位到第二张图片
			if(k == 8) {
				k = 1;
				oUl.style.top = -aLi[0].offsetHeight - 1 + 'px';
			}
			for(var i = 0; i < xLi.length; i++) {
				xLi[i].className = '';
			}
			xLi[k - 1].className = 'current';
		});

	}
	//小圆圈
	for(var i = 0; i < xLi.length; i++) {
		xLi[i].index = i;

		xLi[i].onmouseover = function() {
			 k = this.index + 1; //注意
			dis = -aLi[0].offsetHeight * k;

			for(var i = 0; i < xLi.length; i++) {
				xLi[i].className = '';
			}
			xLi[k - 1].className = 'current';

			move(oUl, 'top', 20, dis);
			k=this.index;
			
		}
	
		
	}
	

})

//计价器

$(function() {
	//获取元素
	var oShu = document.getElementsByClassName('shu')[0];
	var aIpt = oShu.getElementsByTagName('input')[0];
	var os = oShu.getElementsByClassName('s')[0];
	var ox = oShu.getElementsByClassName('x')[0];
	var oP = document.getElementById('aaa');
	var xg = document.getElementById('xga');
	var kg = document.getElementById('kg');
	var jian = document.getElementById('jian');
	//console.log(oP);
	os.onclick = function() {
		if(aIpt.value < 10) {
			aIpt.value++;
			oP.innerHTML = parseFloat(oP.innerHTML) + 119.00 + '.00元';
			xg.style.fontSize = '';
			xg.style.fontWeight = 'normal';
			kg.innerHTML = parseFloat(kg.innerHTML) + 2 + '.00kg';
			jian.innerHTML = parseFloat(jian.innerHTML) + 1 + '件';
		}
		if(aIpt.value == 10) {
			xg.style.fontSize = '30px';
			xg.style.fontWeight = 'bold';
		}

	}
	ox.onclick = function() {
		if(aIpt.value > 1) {
			aIpt.value--;
			oP.innerHTML = parseFloat(oP.innerHTML) - 119.00 + '.00元';
			xg.style.fontSize = '';
			xg.style.fontWeight = 'normal';
			kg.innerHTML = parseFloat(kg.innerHTML) - 2 + '.00kg';
			jian.innerHTML = parseFloat(jian.innerHTML) - 1 + '件';
		}

	}
});

//所有产品分类、
$(function() {
	var yiji = document.getElementById('yiji');
	var erji = document.getElementById('erji');
	var ul1 = document.getElementsByClassName('ul1')[0];
	var aLi = ul1.getElementsByTagName('li');
	var sanji = document.getElementsByClassName('sanji')[0];
	var aImg = sanji.getElementsByTagName('img');
	var timer = null;
	console.log(aImg);
	yiji.onmouseover = function() {
		erji.style.display = 'block';
	}
	for(var i = 0; i < aLi.length - 1; i++) {
		aLi[i].index = i;
		var t = 1;
		aLi[i].onmouseover = function() {
			if(4 > this.index >= 1) {
				t = this.index * 71 - 3;
				sanji.style.top = '' + t + 'px';
			} else {
				t = 3 * 71 - 3;
				sanji.style.top = '' + t + 'px';
			}

			for(var j = 0; j < aLi.length - 1; j++) {
				aImg[j].style.display = 'none';
				aLi[j].style.backgroundColor = '';
			}
			sanji.style.display = 'block';
			this.style.backgroundColor = '#e3193a';
			aImg[this.index].style.display = 'block';

		}

	}
	aLi[7].onmouseover = function() {
		for(var j = 0; j < aLi.length - 1; j++) {
			aImg[j].style.display = 'none';
			aLi[j].style.backgroundColor = '';
		}
		sanji.style.display = 'none';
		this.style.backgroundColor = '#e3193a';
	}
	aLi[7].onmouseout = function() {

		this.style.backgroundColor = '';
	}

	yiji.onmouseout = function() {

		erji.style.display = 'none';
	}

})

//购物车部分 右上角

$(function() {
	//	console.log($('#qwq'))
	$('#gwq').mouseenter(function() {

		$('#gwq').stop().animate({ 'width': 230 }, 400, function() {
			$('#xiala').stop().slideDown(400);
		});
	})
	$('#gwq').mouseleave(function() {
		$('#xiala').stop().slideUp(1000, function() {
			$('#gwq').stop().animate({ 'width': 204 }, 200);
		});

	})

})

//导航栏固定效果

$(document).ready(function() {

	var topH = $(".top").outerHeight(true) + $(".top2").outerHeight(true) + 22;

	$(window).scroll(function() {

		var scrollT = $("html").scrollTop();
		//如果 垂直方向滚动过的距离 大于等于 顶部div 的高度  
		if(scrollT >= topH) {
			// 让导航div 加上 一个固定定位的类
			$(".nav").addClass("fixed");
			// 让顶部div 加上一个下边距margin-bottom ： 应该是导航的div 的高度
			$(".top2").css("margin-bottom", $(".nav").outerHeight());
		} else {
			$(".nav").removeClass("fixed");
			// 让顶部div 去掉下边距margin-bottom ：0
			$(".top2").css("margin-bottom", 0);
		}

	})

})

//右侧轮播图
//jQuery写法
$(function() {
	var i = 1;
	//获取元素
	//   console.log($('#yc-lun'));
	$('.rr').click(function() {
		//      if(i>4||i<0){
		//      	i=1;
		//      	$('#yc-lun').css('top',-182*3);
		//      }
		i++;
		$('#yc-lun').animate({
			top: -182 * 3 * i
		}, 1000, "linear", function() {

			if(i == 4) {
				i = 1;
				$('#yc-lun').css('top', -546);
			}
		})
	})

	$('.ll').click(function() {
		//       if(i>4||i<0){
		//      	i=1;
		//      	$('#yc-lun').css('top',-182*3);
		//      }
		i--;
		$('#yc-lun').animate({
			top: -182 * 3 * i
		}, 1000, "linear", function() {
			if(i == 0) {
				i = 3;
				$('#yc-lun').css('top', -182 * 3 * i);
			}
		})
	})

})

//北京  一级目录

$(function() {

	//
	$('#beijing').mouseover(function() {

		$('#bei').attr('src', 'image/u.png')
		$('.bj-img').css('display', 'block')
	})
	$('#beijing').mouseout(function() {

		$('#bei').attr('src', 'image/w.png')
		$('.bj-img').css('display', 'none')
	})
})