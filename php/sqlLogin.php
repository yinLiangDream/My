<?php
// 设置数据库配置信息
$db_host = 'rm-bp1rks4wdlkd3mu5x.mysql.rds.aliyuncs.com:3306
';
$db_user = 'rm5u781562';
$db_pwd = '19920827cX';
header('content-type:text/html;charset=utf-8');
// PHP连接数据库
$link = @mysql_connect($db_host, $db_user, $db_pwd);
if (!$link) {
    //  echo '数据挂了……'.mysql_error();
    exit('数据挂了……');
} else {
    // 选择需要操作的数据库
    $link.mysql_select_db('rm5u781562');
    // 设置字符集
    mysql_query('set names utf8');
    // 查找表
    // $result = mysql_query('SELECT * FROM login');
    // // 以数组形式出现
    // $arr = mysql_fetch_row($result);
    // echo $arr;
    function dump($arr)
    {
        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    }
}
