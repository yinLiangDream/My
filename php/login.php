<?php

header('content-type:text/html;charset=utf-8');

// 包含连接sql的文件
include 'sqlLogin.php';

// ajax传输过来的值
// 登录用
$username = $_POST['username'];
$password = $_POST['password'];

// 执行查询语句
$search = 'SELECT * FROM login';

// 查询用户名
$searchUsername = "SELECT * FROM login WHERE username = '{$username}'";

// 所有结果
$result = mysql_query($search);

// 用户名结果
$resultUsername = mysql_query($searchUsername);

// 登陆用判断
if (!mysql_num_rows($resultUsername)) {
    echo 'inexistence';
} else {
    while ($arrUser = mysql_fetch_assoc($result)) {
        if ($arrUser[username] == $username && $arrUser[password] == $password) {
            echo 'success';
            break;
        } else {
            continue;
        }
    }
}
mysql_close($link);
