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
	
	//表单的取值
	echo $_POST['name'] . "+++" .$_POST['tel'];
	
	//
	
?>