<?php
	header("Content-type: text/html; charset=utf-8"); 
	$servername = "localhost";
	$username = "root";
	$password = "d100456ca7";
	 
	// 创建连接
	$conn = mysqli_connect($servername, $username, $password);
	 
	// 检测连接
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	echo "连接成功!";
	
	//设置字符集
	$sql = "set names utf8";
	mysqli_query($conn,$sql);
	
	//选择数据库
	mysqli_select_db($conn,"renzhao");
	
	//选择数据库中的表
	$res = mysqli_query($conn,"SELECT * FROM student");
	//如果表不存在
	if(!$res){
		//刷新输出缓冲,返回错误信息
		printf("Error: %s\n", mysqli_error($conn));
		//强制退出
		exit();
	}else{
		//查询到结果,返回json
		$data = array();
		while($row = mysqli_fetch_array($res,MYSQL_ASSOC)){
			$count = count($row);
			for($i=0;$i<$count;$i++){
				unset($row[$i]);
			}
			array_push($data,$row);
		}
	}
	
	$json = json_encode($data,JSON_UNESCAPED_UNICODE);
	echo urldecode($json);
		
	mysqli_close($conn);
?>