$(document).ready(function () {
	$('#fullpage').fullpage({
		//Navigation
		// 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
		menu: false,
		lockAnchors: false,
		// 定义锚链接
		anchors: ['大头贴', '关于我', '我的技能', '我的经历', '我的展望'],
		// 是否显示项目导航
		navigation: true,
		// 项目导航的位置，可选 left 或 right
		navigationPosition: 'right',
		// 项目导航的颜色
		navigationColor: 'red',
		// 项目导航的 tip
		navigationTooltips: [],
		showActiveTooltip: false,
		// 是否显示左右滑块的项目导航
		slidesNavigation: false,
		// 左右滑块的项目导航的位置，可选 top 或 bottom
		slidesNavPosition: 'bottom',

		//Scrolling
		// 是否使用 CSS3 transforms 滚动
		css3: true,
		// 滚动速度，单位为毫秒
		scrollingSpeed: 1000,
		// 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
		autoScrolling: true,
		fitToSection: true,
		scrollBar: false,
		// 滚动动画方式
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		// 滚动到最底部后是否滚回顶部
		loopBottom: false,
		// 滚动到最顶部后是否滚底部
		loopTop: false,
		// 左右滑块是否循环滑动
		loopHorizontal: false,
		// 设置背景颜色
		slidesColor: '',
		// 循环演示
		// 是否循环滚动，与 loopTop 及 loopBottom 不兼容
		continuousVertical: true,
		normalScrollElements: '#element1, .element2',
		// 内容超过满屏后是否显示滚动条
		scrollOverflow: false,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,

		//Accessibility
		// 是否使用键盘方向键导航
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		// 左右滑块的箭头的背景颜色
		controlArrows: true,
		// 内容是否垂直居中
		verticalCentered: true,
		// 字体是否随着窗口缩放而缩放
		resize: true,
		sectionsColor: ['#ccc', '#fff'],
		// 与顶部的距离
		paddingTop: '3em',
		// 与底部距离
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
		onLeave: function (index, nextIndex, direction) {
			switch (index) {
			case 1:
				backsection1();
				break;
			case 2:
				backsection2();
				break;
			case 3:
				backsection3();
				break;
			case 4:
				backsection4();
				break;
			case 5:
				backsection5();
			}

		},
		// 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
		afterLoad: function (anchorLink, index) {
			switch (index) {
			case 1:
				section1();
				break;
			case 2:
				section2();
				break;
			case 3:
				section3();
				break;
			case 4:
				section4();
				break;
			case 5:
				section5();
			}
		},
		// 页面结构生成后的回调函数， 或者说页面初始化完成后的回调函数
		afterRender: function () {
			section1();
		},
		afterResize: function () {},
		// 滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
		// 某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
	});
});
// 第一张图（大头贴）
function section1() {
	$("#head").animate({
		"margin-top": "-15%"
	}, 1500);
	$(".section1").animate({
		"opacity": 1,
		"top": "100px"
	}, 2000);
}

function backsection1() {
	$("#head").animate({
		"margin-top": "0"
	}, 100);
	$(".section1").animate({
		"opacity": 0,
		"top": "0"
	}, 100);
}

// 第二张图（关于我）
function section2() {
	$(".bg22").animate({
		"width": "200px"
	}, 2000);
	$(".bg23").animate({
		"opacity": "0.9"
	}, 2000);
	$(".bg24").animate({
		"height": "300px"
	}, 2000);
}

function backsection2() {
	$(".bg22").animate({
		"width": "0"
	}, 100);
	$(".bg23").animate({
		"opacity": "0"
	}, 100);
	$(".bg24").animate({
		"height": "0"
	}, 100);
}

// 第三张图(我的技能)
function section3() {
	$(".bg32").animate({
		"width": "200px"
	}, 2000);
	$("p[name='pHTML']").animate({
		"opacity": 1
	}, 1000, function () {
		$("p[name='pCSS']").animate({
			"opacity": 1
		}, 1000, function () {
			$("p[name='pJavaScript']").animate({
				"opacity": 1
			}, 1000, function () {
				$("p[name='pAngularJS']").animate({
					"opacity": 1
				}, 1000, function () {
					$("p[name='pOther']").animate({
						"opacity": 1
					}, 1000);
				});
			});
		});
	});
}

function backsection3() {
	$(".bg32").animate({
		"width": "0"
	}, 200);
}
// bootstrap的pop
$(function () {
	$("[data-toggle='popover']").popover({
		html: true,
		animation: true,
		trigger: 'hover',
		delay: {
			show: 200,
			hide: 100
		}
	});
});

// 第四张图（我的经历）
function section4() {
	$(".bg42 hr").animate({
		"width": "200px"
	}, 2000);
}

function backsection4() {
	$(".bg42 hr").animate({
		"width": "0"
	}, 200);
}
// 第五张图（很高兴遇见你）
function section5() {
	$("p[name='p1']").animate({
		"opacity": "1"
	}, 2000, function () {
		$("p[name='p2']").animate({
			"opacity": "1"
		}, 2000, function () {
			$("p[name='p3']").animate({
				"opacity": "1"
			}, 2000, function () {
				$("p[name='p4']").animate({
					"opacity": "1"
				}, 2000, function () {
					$("p[name='p5']").animate({
						"opacity": "1"
					}, 2000, function () {
						$("p[name='p6']").animate({
							"opacity": "1"
						}, 2000, function () {
							$("p[name='p7']").animate({
								"opacity": "1"
							}, 2000);
						});
					});
				});
			});
		});
	});
}

function backsection5() {
	$(".51 p").css('opacity', '0');
}
