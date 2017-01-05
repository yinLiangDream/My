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
	var $iframe = $("#iframe");
	var homePageUrl = './view/homePage/homePage.html';
	$iframe.attr('src', homePageUrl);
});

// 关于我 跳转到vita
$("#aboutMe").click(function () {
	var $iframe = $("#iframe");
	var vitaUrl = './view/vita/fullPage.html';
	$iframe.attr('src', vitaUrl);
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
var $loginModal = $('#login-modal');
$(function () {
	$("#login").click(function () {
		var $username = $("#username").val();
		var $password = $("#password").val();
		var url = 'php/login.php';
		var $loginErrorMessage = $("#loginErrorMessage");
		var $loginModalTitle = $("#loginModalTitle");
		var $loginModalTitleI = $("#loginModalTitleI");
		if ($username.length !== 0 && $password.length !== 0) {
			$loginModalTitle.css('display', 'none');
			$loginModalTitleI.css('display', 'inline-block');
			$.ajax({
				url: url,
				type: 'post',
				data: {
					username: $username,
					password: $password
				},
				dataType: 'text',
				success: function (data) {
					if (data == 'success') {
						// 用户名且密码正确
						$loginModal.modal('hide');
					} else if (data == 'inexistence') {
						$loginModalTitle.css('display', 'inline-block');
						$loginModalTitleI.css('display', 'none');
						// 用户名不存在
						$loginErrorMessage.html("该用户不存在！");
					} else {
						$loginModalTitle.css('display', 'inline-block');
						$loginModalTitleI.css('display', 'none');
						// 用户名或密码不正确
						$loginErrorMessage.html("用户名或密码不正确！");
					}
				},
				error: function () {
					// 传值失败
					alert("数据库挂了……");
				}
			});
		}

	});
});

// 忘记密码
$(function () {
	$("#forgetPassword").click(function () {
		$loginModal.modal('hide');
	});
});

// 新注册
$(function () {
	$("#newUser").click(function () {
		$loginModal.modal('hide');
	});
});

// 注册详细信息
$(function () {
	// 用户名注册检验
	var usernameRegex = /^[a-zA-z]\w{5,14}$/;
	var $usernameRegister = $("#usernameRegister");
	var $usernameRegisterErrorMessage = $("#usernameRegisterErrorMessage");
	$usernameRegister.blur(function () {
		var $usernameRegisterVal = $("#usernameRegister").val();
		if (!usernameRegex.exec($usernameRegisterVal)) {
			$usernameRegisterErrorMessage.html("只允许6-15位的英文(开头)、数字和下划线");
		} else {
			$usernameRegisterErrorMessage.html("&nbsp;");
		}
	});
	// 密码检验
	var passwordRegex = /^[0-9A-Za-z_]{6,15}$/;
	var $passwordRegister = $("#passwordRegister");
	var $passwordRegisterErrorMessage = $("#passwordRegisterErrorMessage");
	$passwordRegister.blur(function () {
		var $passwordRegisterVal = $("#passwordRegister").val();
		if (!passwordRegex.exec($passwordRegisterVal)) {
			$passwordRegisterErrorMessage.html("只允许6-15位的英文、数字和下划线");
		} else {
			$passwordRegisterErrorMessage.html("&nbsp;");
		}
	});
	// 密码确认检验
	var $passwordRegisterConfirm = $("#passwordRegisterConfirm");
	var $passwordRegisterConfirmErrorMessage = $("#passwordRegisterConfirmErrorMessage");
	$passwordRegisterConfirm.blur(function () {
		var $passwordRegisterConfirmVal = $("#passwordRegisterConfirm").val();
		if ($passwordRegisterConfirmVal == $("#passwordRegister").val()) {
			$passwordRegisterConfirmErrorMessage.html("&nbsp;");
		} else {
			$passwordRegisterConfirmErrorMessage.html("两次密码不一致！");
		}
	});
	// 邮箱验证
	var emailRegex = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	var $emailRegister = $("#emailRegister");
	var $emailRegisterErrorMessage = $("#emailRegisterErrorMessage");
	$emailRegister.blur(function () {
		var $emailRegisterVal = $("#emailRegister").val();
		if (!emailRegex.exec($emailRegisterVal)) {
			$emailRegisterErrorMessage.html("邮箱地址是错的，表骗偶！");
		} else {
			$emailRegisterErrorMessage.html("&nbsp;");
		}
	});
	// 昵称验证
	var $nameRegister = $("#nameRegister");
	var $nameRegisterErrorMessage = $("#nameRegisterErrorMessage");
	$nameRegister.blur(function () {
		var $nameRegisterVal = $("#nameRegister").val();
		if ($nameRegisterVal.length === 0) {
			$nameRegisterErrorMessage.html("昵称不能为空噢！");
		} else {
			$nameRegisterErrorMessage.html("&nbsp;");
		}
	});
	// 注册按钮
	var $register = $("#register");
	$register.click(function () {
		if ($("#usernameRegister").val().length !== 0 &&
			$("#passwordRegister").val() !== 0 &&
			$("#passwordRegisterConfirm").val() !== 0 &&
			$("#emailRegister").val() !== 0 &&
			$("#nameRegister").val() !== 0 &&
			$("#usernameRegisterErrorMessage").html() == "&nbsp;" &&
			$("#passwordRegisterErrorMessage").html() == "&nbsp;" &&
			$("#passwordRegisterConfirmErrorMessage").html() == "&nbsp;" &&
			$("#nameRegisterErrorMessage").html() == "&nbsp;" &&
			$("#emailRegisterErrorMessage").html() == "&nbsp;") {
			// 所有信息输入正确
			var url = 'php/register.php';
			var $usernameRegisterVal = $("#usernameRegister").val();
			var $passwordRegisterVal = $("#passwordRegister").val();
			var $emailRegisterVal = $("#emailRegister").val();
			var $nameRegisterVal = $("#nameRegister").val();
			var $sexRegister = $("input[name='sexRegrist']:checked").val();
			$.ajax({
				url: url,
				type: 'post',
				data: {
					usernameRegister: $usernameRegisterVal,
					passwordRegister: $passwordRegisterVal,
					emailRegister: $emailRegisterVal,
					nameRegister: $nameRegisterVal,
					sexRegister: $sexRegister
				},
				dataType: 'text',
				success: function (data) {
					if (data != "finish") {
						alert("用户名已经被占用啦！");
					} else {
						alert("注册成功！");
					}
				},
				error: function () {
					// 传值失败
					alert("注册失败！");
				}
			});

		} else {
			// 有信息出错
		}
	});
});

// 头像点击跳转
var $headPortrait = $("#headPortrait");
$headPortrait.click(function () {
	alert(111);
});
