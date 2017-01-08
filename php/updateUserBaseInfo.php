<?php

header('content-type:text/html;charset=utf-8');
// 包含连接sql的文件
include 'sqlLogin.php';

// ajax传输过来的值
// 注册用
$username = $_POST['username'];
$email = $_POST['email'];
$name = $_POST['name'];
$sex = $_POST['sex'];
// 执行查询语句
$update = "UPDATE login SET name='{$name}',email='{$email}',sex='{$sex}' WHERE username='{$username}'";
// 执行
$result = mysql_query($update);
// 判断是否成功
if (mysql_affected_rows()) {
    echo 'success';
} else {
    echo 'failed';
}
mysql_close($link);
