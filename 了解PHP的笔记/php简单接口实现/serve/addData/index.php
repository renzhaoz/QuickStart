<?php
	$servername = "localhost:3306";
	$username = "root";
	$password = '';
	
	$con = mysql_connect($servername,$username,$password);
	if (!$con){
 		die('链接失败' . mysql_error());
 	}
	
	//选择表table12
	mysql_select_db("table12",$con);
	
	//对指定字符段进行插值
	mysql_query("INSERT INTO Persons (Name, AGE, TEL, auu) VALUES ('二狗', '12', '911', '112')");
	mysql_query("INSERT INTO Persons (Name, AGE, TEL, auu) VALUES ('小明', '18', '100', '10')");
	
	
	
	
	mysql_close($con); 		//操作完成  关闭链接
	

	
?>