<?php
	header("Content-type:text/html;charset=utf-8");//字符编码设置  
	$servername = "localhost:3306";
	$username = "root";
	$password = '';
	
	$con = mysql_connect($servername,$username,$password);
	if (!$con){
 		die('链接失败' . mysql_error());
 	}
	
	//选择表table12
	mysql_select_db("table12",$con);
	$result = mysql_query("SELECT * FROM Persons");
	
	//如果表不存在
	if (!$result) {
	    printf("Error: %s\n", mysqli_error($con));
	    exit();
	}
	
//返回json格式的数据
	$data = array();
	while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
		$count = count($row);
		for($i=0;$i<$count;$i++){
			unset($row[$i]);
		}
		array_push($data,$row);
	}
	
	//处理数组成json
	//JSON_UNESCAPED_UNICODE 不需要转码
	$json1 = json_encode($data,JSON_UNESCAPED_UNICODE);
	
	//输出json
	echo urldecode($json1);
	
	mysql_close($con);
	
	

	
?>