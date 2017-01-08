<?php

header('content-type:text/html;charset=utf-8');
mysql_query('set names utf8');
// 包含连接sql的文件
include 'sqlLogin.php';

// ajax传输过来的值
$username = $_POST['username'];

// 查询用户名
$searchUsername = "SELECT * FROM login WHERE username = '{$username}'";

// 用户名结果
$resultUsername = mysql_query($searchUsername);

// 转化为数组
$results = mysql_fetch_assoc($resultUsername);

// 数组转化为json
echo  json_encode(array('userInfo' => $results));

mysql_close($link);
