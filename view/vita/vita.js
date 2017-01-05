var runPage;
runPage = new FullPage({
	id: 'pageContain', // id of contain
	slideTime: 800, // time of slide
	continuous: false, // create an infinite feel with no endpoints
	effect: { // slide effect
		transform: {
			translate: 'Y', // 'X'|'Y'|'XY'|'none'
			scale: [1, 1], // [scalefrom, scaleto]
			rotate: [0, 0] // [rotatefrom, rotateto]
		},
		opacity: [0, 1] // [opacityfrom, opacityto]
	},
	mode: 'wheel,touch,nav:navBar', // mode of fullpage
	start: 0, // which page will display when install
	easing: 'ease', // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
	// ,
	// onSwipeStart: function(index, thisPage) { // callback before pageChange
	// 	alert(index);
	// 	return 'stop';
	// },
	// beforeChange: function(index, thisPage) { // callback before pageChange
	// },
	callback: function (index, thisPage) { // callback when pageChange
		switch (index) {
		case 0:
			section1();
			backsection2();
			backsection3();
			backsection4();
			backsection5();
			break;
		case 1:
			section2();
			backsection1();
			backsection3();
			backsection4();
			backsection5();
			break;
		case 2:
			section3();
			backsection1();
			backsection2();
			backsection4();
			backsection5();
			break;
		case 3:
			section4();
			backsection1();
			backsection2();
			backsection3();
			backsection5();
			break;
		case 4:
			section5();
			backsection1();
			backsection2();
			backsection3();
			backsection4();
			break;
		}
	}
});
section1();
// 第一张图（大头贴）
function section1() {
	$("#head").animate({
		"margin-top": "15%"
	}, 1500, function () {
		$(".section1").animate({
			"opacity": 1,
		}, 2000);
	});
}

function backsection1() {
	$("#head").animate({
		"margin-top": "40%"
	}, 100);
	$(".section1").animate({
		"opacity": 0,
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
							}, 2000, function () {
								$(".bg51 p").animate({
									"opacity": "0",
								}, 2000);
							});
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
