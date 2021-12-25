<?php
    session_start();
    
	header("Content-Type:text/html; charset=utf-8");
	
	//设置页面是使用缓存
	header("Cache-Control:no-cache");
	//设置页面无缓存
	header("Cache-Control: no-cache, must-revalidate");
	$mysql_server_name="localhost"; //数据库服务器名称
    $mysql_username="root"; // 连接数据库用户名
    $mysql_password="d100456ca7"; // 连接数据库密码
    $mysql_database="renzhao"; // 数据库的名字

    $conn=mysql_connect($mysql_server_name, $mysql_username, $mysql_password);
    mysql_query("set names utf8;"); 
    mysql_query("set character set 'utf8'");
    mysql_select_db($mysql_database, $conn);
//  UPDATE Persons SET AGE = 66 WHERE Name='二狗' AND AGE=12
	if($_GET['aa'] != ''){
		//点击抽奖修改参数
		//获取字符状态
		$mysql_server_name="localhost"; //数据库服务器名称
	    $mysql_username="root"; // 连接数据库用户名
	    $mysql_password="d100456ca7"; // 连接数据库密码
	    $mysql_database="renzhao"; // 数据库的名字
	
	    $conn=mysql_connect($mysql_server_name, $mysql_username, $mysql_password);
	    mysql_query("set names utf8;"); 
	    mysql_query("set character set 'utf8'");
	    mysql_select_db($mysql_database, $conn);
		
		
		
		$recount = $_GET['aa'];
		echo $_GET['aa'];
		$recount1 = json_encode($recount);
		
		//数量
	    $unumber = $_GET['bb'];
	    $uuid = $_SESSION['user']['openid'];
	    
	    $sql5="UPDATE uu SET getstate='{$recount}' , ucount='{$unumber}' where uid='{$uuid}'";
		
		if(!mysql_query($sql5)){
			echo mysql_error();
		}
		mysql_close($conn);
	}
	


    $result = mysql_query("SELECT * FROM uu");
    
    //如果表不存在
	if (!$result) {
	    printf("Error: %s\n", mysql_error($conn));
	    exit();
	}else{
		//返回数据
		$data = array();
		while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
			$count = count($row);
			for($i=0;$i<$count;$i++){
				unset($row[$i]);
			}
			array_push($data,$row);
		}
		
		//输出数组	
		$jobj=new stdclass();
		foreach($data as $key=>$value){
			$jobj->$key=$value;
		}
		
		//1231123123
		echo json_encode($jobj);
	}
	
	mysql_close($conn);
?>