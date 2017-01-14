// 音乐播放控件
var myAudio = document.getElementById('music');
var radomMusic = Math.random();
console.log(radomMusic);
if (radomMusic < 0.33) {
	myAudio.setAttribute('src', 'mp3/増田俊郎 - 託された想い.mp3');
	myAudio.play();
} else if (radomMusic > 0.33 && radomMusic < 0.66) {
	myAudio.setAttribute('src', 'mp3/MANYO.mp3');
	myAudio.play();
} else {
	myAudio.setAttribute('src', 'mp3/世界上不存在的歌.mp3');
	myAudio.play();
}
// 两种状态切换
function playPause() {
	if (myAudio.paused) {
		myAudio.play();
		$("#musicButton").find('a')[0].style.display = "none";
		$("#musicButton").find('a')[1].style.display = "inline-block";
	} else {
		myAudio.pause();
		$("#musicButton").find('a')[0].style.display = "inline-block";
		$("#musicButton").find('a')[1].style.display = "none";
	}
}

// 起源回归主页
$("#begin").click(function () {
	var homePageUrl = './view/homePage/homePage.html';
	UserOperation().iframeTo(homePageUrl);
});

// 新生 跳转到newLife
$("#nav2").click(function () {
	var newLifeUrl = './view/newLife/newLife.html';
	UserOperation().iframeTo(newLifeUrl);
});


// 关于我 跳转到vita
$("#aboutMe").click(function () {
	var vitaUrl = './view/vita/vita.html';
	UserOperation().iframeTo(vitaUrl);
});

// 模态框禁止自动关闭
$(function () {
	$('#login-modal').modal({
		backdrop: 'static',
		keyboard: false,
		show: false
	});
	$('#register-modal').modal({
		backdrop: 'static',
		keyboard: false,
		show: false
	});
});

// login判断
$(function () {
	$('#login').click(function () {
		var $username = $('#username').val();
		var $password = $('#password').val();
		UserOperation().login($username, $password);
	});
});

// 忘记密码
$(function () {
	$("#forgetPassword").click(function () {
		UserOperation().forgetPassword();
	});
});

// 新注册
$(function () {
	$("#newUser").click(function () {
		UserOperation().newUser();
	});
});

// 注册详细信息
$(function () {
	// 用户名注册检验
	$usernameRegister.blur(function () {
		UserOperation().usernameRegisterBlur();
	});
	// 密码检验
	$passwordRegister.blur(function () {
		UserOperation().passwordRegisterBlur();
	});
	// 密码确认检验
	$passwordRegisterConfirm.blur(function () {
		UserOperation().passwordRegisterConfirmBlur();
	});
	// 邮箱验证
	$emailRegister.blur(function () {
		UserOperation().emailRegisterBlur();
	});
	// 昵称验证
	$nameRegister.blur(function () {
		UserOperation().nameRegisterBlur();
	});
	// 注册按钮
	$register.click(function () {
		UserOperation().register();
	});
});



// 初始化页面是否要登录判断
$(function () {
	if ($.cookie('flag') === 'true') {
		// 模态框不打开
		$('#nav1').attr('data-target', '');
	} else {
		// 模态框打开
		$('#nav1').attr('data-target', '#login-modal');
	}
});

// 头像点击事件
var userCenterUrl = './view/userCenter/userCenter.html';
$headPortrait.click(function () {
	if ($.cookie('flag') === 'true') {
		UserOperation().iframeTo(userCenterUrl);
	} else {
		alert('请先登录！');
	}
});

// 尘埃点击事件
$nav1.click(function () {
	if ($.cookie('flag') === 'true') {
		$('#nav1').attr('data-target', '');
		UserOperation().iframeTo(userCenterUrl);
	} else {
		$('#nav1').attr('data-target', '#login-modal');
	}
});
