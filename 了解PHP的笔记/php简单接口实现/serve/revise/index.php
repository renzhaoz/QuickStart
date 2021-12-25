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

#修改数据
	//将Name=二狗,年龄为12的这条数据改为年龄66
	mysql_query("UPDATE Persons SET AGE = 66 WHERE Name='二狗' AND AGE=12");
	
	
	
	
	mysql_close($con);
	
	

	
?>