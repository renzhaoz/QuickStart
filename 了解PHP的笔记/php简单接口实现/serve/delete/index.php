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
	
#删除数据
	//根据条件删除数据
	mysql_query("DELETE FROM Persons WHERE AGE='66'");
	
	

	mysql_close($con);
	
	

	
?>