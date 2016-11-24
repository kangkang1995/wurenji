window.onload = function () {
		var div = document.getElementById('div')
		var bannerUl = document.getElementById('bannerUl');
		var shang = document.getElementById('shang');
		var xia = document.getElementById('xia');
		var liC = bannerUl.children[0].cloneNode(true);		//克隆
		bannerUl.appendChild(liC);
		bannerUl.style.width = bannerUl.children[0].offsetWidth*bannerUl.children.length+"px";
		var count = 0
		var t = null;
		//	count == 4-->	4=	ul.children.length-1;
		//	-1920*count -->	=  -ul.children[0].offsetWidth*count

		function xiaPage() {
			if (count<bannerUl.children.length-1) {
				count++;
				// ul.style.marginLeft = -300*count+"px"
				y(-bannerUl.children[0].offsetWidth*count,bannerUl);
				if(count==bannerUl.children.length-1){
				y(-bannerUl.children[0].offsetWidth*count,bannerUl,function(){
						count = 0;
						bannerUl.style.marginLeft = -bannerUl.children[0].offsetWidth*count+"px";
				})
			}
			changeActive(count)
			}
			// changeActive(count)
		}
		//		count = 3  -->ul.children.length-2
		//	-1920*(ul.children.length-1)+"px" = -ul.children[0].offsetWidth*(ul.children.length-1)+"px"
		function shangPage() {
			if (count>=0) {
				count--;
				y(-bannerUl.children[0].offsetWidth*count,bannerUl)
				if(count==-1){
				count = bannerUl.children.length-2;
				bannerUl.style.marginLeft = -bannerUl.children[0].offsetWidth*(bannerUl.children.length-1)+"px";
				y(-bannerUl.children[0].offsetWidth*count,bannerUl);
			}
				// ul.style.marginLeft = -300*count+"px"
				// changeActive(count)
			}
			changeActive(count)
		}


		xia.onclick = xiaPage;
		shang.onclick = shangPage;


		//	定时器;		这个是停留时间
		var col = setInterval(xiaPage,4000);
		xia.onmouseover = function(){
			clearInterval(col);
		}
		xia.onmouseout = function(){
			col = setInterval(xiaPage,4000);
		}
		
		function getElement(ele){
		if(ele.currentStyle){
			return ele.currentStyle;
		}else{
			return getComputedStyle(ele,null);
		};
	}

	//兼容ie无法使用getComputedStyle()



		function y(target,element,callback) {
			clearInterval(t);	//1清除计时器
			var speed = 0;		//2定义速度变量
			t = setInterval(function() {//设置一个计时器
			// getComputedStyle(element,null).marginLeft 兼容性
				if (target > parseInt(getElement(element).marginLeft)) {	//对比目标值和现在状态的大小关系
					speed = 10
					//如果目标值大于现在状态值，将speed设置为正数;则target+到状态值
				}else{
					speed = -10
					////如果目标值小于现在状态值，将speed设置为负数;则状态值-到target
				}if (target == parseInt(getElement(element).marginLeft)) {	//如果两个值相同，清除计时器
					clearInterval(t);
					if(callback){
					callback();
					}
				}else{
					bannerUl.style.marginLeft = parseInt(getElement(element).marginLeft)+speed+'px';
					//应用样式
				}

			},1.5)
			//	定时器;		这个是切换时间
		}



	//生成点
	var dot = document.getElementById('dot');
	var fr = document.createDocumentFragment('fr');//碎片
	for(var i = 0;i<bannerUl.children.length-1;i++){
		var span = document.createElement('span');
		span.index = i;
		fr.appendChild(span);
	}
	dot.appendChild(fr);
	dot.children[0].className = "active";
	function changeActive(count){
		//让所有的span的class都为空
		for(var i = 0;i<dot.children.length;i++){
			dot.children[i].className = "";
		}
		if(count == bannerUl.children.length-1){
			dot.children[0].className = 'active';
		}else{
			dot.children[count].className = 'active';
		}
	}

	for(var i = 0;i<dot.children.length;i++){
		dot.children[i].onclick = function(){
			clickActive(this);
		}
	}


	function clickActive(obj){
		clearInterval(col);
		for(var i = 0;i<dot.children.length;i++){
			dot.children[i].className = "";
		}
		obj.className = "active";
		count = obj.index;
		y(-bannerUl.children[0].offsetWidth*count,bannerUl);
		col = setInterval(xiaPage,4000);
	}
	
	}

$(function () {
	//返回
	$(window).scroll(function() {
		var top = 0;
		if ($('body').scrollTop()) {
			top = $('body').scrollTop();
		}else{
			top = $('html').scrollTop();
		}

		if (top>200) {
			$('.dafanhui').fadeIn(1000);
		}else{
			$('.dafanhui').fadeOut(1000);
		}


		if (top>250) {
			$('#videocenter').fadeIn(1000);
		}else{
			$('#videocenter').fadeOut(1000);
		}


		if (top>300) {
			$('.news').fadeIn(2000);
		}else{
			$('.news').fadeOut(2000);
		}

		if (top>350) {
			$('#end').fadeIn(2000);
		}else{
			$('#end').fadeOut(2000);
		}


	});
	$('.dafanhui').click(function() {
			$('html,body').animate({scrollTop:0},1000);
		});


})
