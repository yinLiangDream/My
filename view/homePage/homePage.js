// 轮播图定时器
$('.carousel').carousel({
	interval: 5000 //changes the speed
});

// 轮播图滑动---------------------------------------------------------
// 变量声明
var startX;
var endX;
// 获取起始点的位置
$('.carousel-inner').on('touchstart', function (event) {
	startX = event.originalEvent.touches[0].clientX;
	endX = startX;
});
// 获取终点位置
$('.carousel-inner').on('touchmove', function (event) {
	endX = event.originalEvent.touches[0].clientX;
});
// 触摸结束一瞬间判断并决定是否滑动
$('.carousel-inner').on('touchend', function (event) {
	var distance = Math.abs(startX - endX);
	if (distance > 50) {
		startX > endX ? $(".right").click() : $(".left").click();
	}
});
