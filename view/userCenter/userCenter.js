// 读取数据并放在相应位置
$(function () {
	// 获取cookie
	var $cookieUsername = $.cookie('username');
	if ($.cookie('flag') === 'true') {
		$.ajax({
			url: '../../php/userInfo.php',
			type: 'post',
			data: {
				username: $cookieUsername
			},
			success: function (data) {
				// 将数据放置到页面位置上
				var jsonObject = JSON.parse(data);
				$('#name').attr('value', jsonObject.userInfo.name);
				$('#username').attr('value', jsonObject.userInfo.username);
				$('#email').attr('value', jsonObject.userInfo.email);
				if (jsonObject.userInfo.sex === 'male') {
					$('#sex').attr('value', '♂');
				} else if (jsonObject.userInfo.sex === 'female') {
					$('#sex').attr('value', '♀');
				} else {
					$('#sex').attr('value', '传说中的特殊体质');
				}
			},
			error: function () {
				alert("数据库挂了……");
			}
		});
	}
});

// dom操作
// 修改邮箱
$(function () {
	$email = $('#email');
	$('#updateEmail').click(function () {
		$email.removeAttr('readonly');
	});
	$email.blur(function () {
		$email.attr('readonly', 'true');
	});
});

// 修改属性
$(function () {

});

// 退出登录
$(function () {
	var homePageUrl = './view/homePage/homePage.html';
	$('#logOut').click(function () {
		$.cookie('flag', 'false', {
			path: '/'
		});
		$('#iframe', window.parent.document).attr('src', homePageUrl);
	});

});
