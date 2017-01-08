<?php

header('content-type:text/html;charset=utf-8');

// 包含连接sql的文件
include 'sqlLogin.php';

// ajax传输过来的值
// 注册用
$usernameRegister = $_POST['usernameRegister'];
$passwordRegister = $_POST['passwordRegister'];
$emailRegister = $_POST['emailRegister'];
$nameRegister = $_POST['nameRegister'];
$sexRegister = $_POST['sexRegister'];

// 执行查询语句
$search = 'SELECT * FROM login';

// 查询用户名
$searchUsernameRegister = "SELECT * FROM login WHERE username = '{$usernameRegister}'";

// 所有结果
$result = mysql_query($search);

// 用户名结果
$resultUsernameRegister = mysql_query($searchUsernameRegister);

// 注册用判断
if (!mysql_num_rows($resultUsernameRegister)) {
    $insertUserInfomation = "INSERT INTO login (username,password,name,email,sex) VALUES ('{$usernameRegister}','{$passwordRegister}','{$nameRegister}','{$emailRegister}','{$sexRegister}')";
    // 插入用户数据
    mysql_query($insertUserInfomation);
    echo 'finish';
} else {
    // 返回已存在该用户
    echo 'exist';
}

mysql_close($link);
