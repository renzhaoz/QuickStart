<?php
	$servername = "localhost:3306";
	$username = "root";
	$password = '';
	
#创建连接
	
	/*方法1*/	
	$con = mysql_connect($servername,$username,$password);
		#new mysql();
		//该链接方法不安全,是最老旧的链接方式
	
	/*方法2*/
	#$coo = 'mysql:host='.$dbhost.';dbname'.$dbdatabase.';'
	#$boo = new PDO($coo,$username,$userpass);
		
	/*方法3*/
	//$con = new mysqli($servername,$username,$password);
		#mysqli_connect()
		//该方法是现今推荐的链接方法
	
	if(!$con){
		die("连接失败!" . mysql_error($con));
	}
	
#创建数据库
	//链接成功的操作
	if(mysql_query("CREATE DATABASE table123",$con)){
	 echo "数据库创建成功!";
	}else{
		echo "数据库创建失败:" . mysql_error($con);
	}
	
#创建数据库中的表
	//选择数据库中的table32数据库
	$data = mysql_select_db('table123',$con);
	if($data){
		echo "找到data数据库!";
	}else{
		echo "未找到data数据库" . mysql_error($con);
	}
	
	
	
	//创建表名为Persons的表	
		//每一个表格数据推荐设置独立ID切不能为空,自动递增
	$sql = "CREATE TABLE NewTable (
		ManID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
		Name varchar(15),
		AGE int,
		TEL int,
		AUU varchar(12)
	)";
	//提交表到数据库
	if(mysql_query($sql,$con)){
		echo "数据表NewTable创建成功!";
	}else{
		echo "数据表创建失败!" . mysql_error($con);
	};
	
	
	
	mysql_close($con); 		//操作完成  关闭链接
	
		

	
	
	
	

	
?>