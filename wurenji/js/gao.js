$(function () {
	$(window).scroll(function() {
		var top = 0;
		if ($('body').scrollTop()) {
			top = $('body').scrollTop();
		}else{
			top = $('html').scrollTop();
		}


		if (top>400) {
			$('.dafanhui').fadeIn(2000);
		}else{
			$('.dafanhui').fadeOut(2000);
		}
	});
	$('.dafanhui').click(function() {
			$('html,body').animate({scrollTop:0},1000);
		});
})
