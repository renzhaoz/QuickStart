<?php
	session_start();
	header("Content-Type:text/html; charset=utf-8");
	
	//设置页面是使用缓存
	header("Cache-Control:no-cache");
	//设置页面无缓存
	header("Cache-Control: no-cache, must-revalidate");
	echo $_SESSION['user'];
	//上传数据  
    $mysql_server_name="localhost"; //数据库服务器名称
    $mysql_username="root"; // 连接数据库用户名
    $mysql_password="d100456ca7"; // 连接数据库密码
    $mysql_database="renzhao"; // 数据库的名字

    $conn=mysql_connect($mysql_server_name, $mysql_username, $mysql_password);
    mysql_query("set names utf8;"); 
    mysql_select_db($mysql_database, $conn);

    $sql1="select count(*) as count from `uu` where uid='".$_SESSION['user']['openid']."'";
    $result1 = mysql_query($sql1, $conn);
    $rower=mysql_fetch_array($result1);
    $countOfResult=$rower["count"];
	$state1 = "0,0,0,0,0,0";
//	$tstate = json_encode($state1);
	$timeNow = date("Y/m/d");
	$nickname = $_SESSION['user']['nickname'];
	$uid = $_SESSION['user']['openid'];
	$url = $_SESSION['user']['headimgurl'];
    if($countOfResult<=0){
    	//如果不存在
    	$sql3 = "INSERT INTO uu (uid, getstate, pretime, nowtime, unickname, uimgurl) VALUES ('$uid', '$state1','$timeNow' ,'$timeNow', '$nickname', '$url')";
		if(!mysql_query($sql3,$conn)){
			die('Error: ' . mysql_error());
		}else{
			echo "数据创建成功!";
		};
    };
	if($countOfResult>0){
		//如果存在
		echo 'qqqqqqqqqqqqqqqqqq';
    }
    mysql_close($conn);
?>