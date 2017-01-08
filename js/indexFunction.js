// 用户相关方法
// 登录模态框
var $loginModal = $('#login-modal');
// 登录错误信息
var $loginErrorMessage = $("#loginErrorMessage");
// 登录模态框标题
var $loginModalTitle = $("#loginModalTitle");
// 登录模态框标题变换
var $loginModalTitleI = $("#loginModalTitleI");
// 用户名框
var $usernameRegister = $("#usernameRegister");
// 用户名注册检验
var usernameRegex = /^[a-zA-z]\w{5,14}$/;
// 用户名注册错误信息
var $usernameRegisterErrorMessage = $("#usernameRegisterErrorMessage");
// 密码检验
var passwordRegex = /^[0-9A-Za-z_]{6,15}$/;
// 密码框
var $passwordRegister = $("#passwordRegister");
// 密码注册错误信息
var $passwordRegisterErrorMessage = $("#passwordRegisterErrorMessage");
// 密码确认检验
var $passwordRegisterConfirm = $("#passwordRegisterConfirm");
// 密码确认出错信息
var $passwordRegisterConfirmErrorMessage = $("#passwordRegisterConfirmErrorMessage");
// 邮箱验证
var emailRegex = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
// 邮箱框
var $emailRegister = $("#emailRegister");
// 邮箱格式错误信息
var $emailRegisterErrorMessage = $("#emailRegisterErrorMessage");
// 昵称框
var $nameRegister = $("#nameRegister");
// 昵称错误信息
var $nameRegisterErrorMessage = $("#nameRegisterErrorMessage");
// 注册按钮
var $register = $("#register");
// 头像
var $headPortrait = $("#headPortrait");
// iframe框架
var $iframe = $("#iframe");
// 尘埃按钮
var $nav1 = $('#nav1');
// 注册模态框
var $registModal = $('#register-modal');

var UserOperation = function () {

};
UserOperation.prototype = {
	// 登录
	login: function ($username, $password) {
		var url = 'php/login.php';
		if ($username.length !== 0 && $password.length !== 0) {
			$.ajax({
				url: url,
				type: 'post',
				data: {
					username: $username,
					password: $password
				},
				dataType: 'text',
				success: function (data) {
					if (data === 'success') {
						// 用户名且密码正确
						$loginModal.modal('hide');
						// 设置cookie
						$.cookie("username", $username, {
							expires: 7,
							path: "/",
						});
						$.cookie("password", $password, {
							expires: 7,
							path: "/",
						});
						$.cookie("flag", 'true', {
							expires: 7,
							path: "/",
						});
						$iframe.attr('src', './view/userCenter/userCenter.html');
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
	},
	// 忘记密码
	forgetPassword: function () {
		$loginModal.modal('hide');
	},
	// 新用户
	newUser: function () {
		$loginModal.modal('hide');
	},
	// 注册
	// 用户名注册失去焦点
	usernameRegisterBlur: function () {
		var $usernameRegisterVal = $("#usernameRegister").val();
		if (!usernameRegex.exec($usernameRegisterVal)) {
			$usernameRegisterErrorMessage.html("只允许6-15位的英文(开头)、数字和下划线");
		} else {
			$usernameRegisterErrorMessage.html("&nbsp;");
		}
	},
	// 密码注册失去焦点
	passwordRegisterBlur: function () {
		var $passwordRegisterVal = $("#passwordRegister").val();
		if (!passwordRegex.exec($passwordRegisterVal)) {
			$passwordRegisterErrorMessage.html("只允许6-15位的英文、数字和下划线");
		} else {
			$passwordRegisterErrorMessage.html("&nbsp;");
		}
	},
	// 密码确认失去焦点
	passwordRegisterConfirmBlur: function () {
		var $passwordRegisterConfirmVal = $("#passwordRegisterConfirm").val();
		if ($passwordRegisterConfirmVal == $("#passwordRegister").val()) {
			$passwordRegisterConfirmErrorMessage.html("&nbsp;");
		} else {
			$passwordRegisterConfirmErrorMessage.html("两次密码不一致！");
		}
	},
	// email注册失去焦点
	emailRegisterBlur: function () {
		var $emailRegisterVal = $("#emailRegister").val();
		if (!emailRegex.exec($emailRegisterVal)) {
			$emailRegisterErrorMessage.html("邮箱地址是错的，表骗偶！");
		} else {
			$emailRegisterErrorMessage.html("&nbsp;");
		}
	},
	// 昵称注册失去焦点
	nameRegisterBlur: function () {
		var $nameRegisterVal = $("#nameRegister").val();
		if ($nameRegisterVal.length === 0) {
			$nameRegisterErrorMessage.html("昵称不能为空噢！");
		} else {
			$nameRegisterErrorMessage.html("&nbsp;");
		}
	},
	// 注册按钮事件
	register: function () {
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
						alert("注册成功~请亲自登录一下");
						$registModal.modal('hide');
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
	},
	iframeTo: function (url) {
		$iframe.attr('src', url);
	}
};
