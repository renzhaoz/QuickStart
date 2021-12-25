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
	
#查找数据
	//书写方法SELECT column_name(s) FROM table_name
	
	//找到Persons表格
	$result = mysql_query("SELECT * FROM Persons");
	
	//echo "<table border='1'>
		//<tr>
		//<th>Name</th>
		//<th>AGE</th>
		//<th>auu</th>
		//</tr>";
	
	
	//循环所有的数据,按索引为Name和AGE字符的数据,打印
	
	
	//输出table格式数据
	//while($row = mysql_fetch_array($result)){
		//echo "<tr>";
		//echo "<td>" . $row['Name'] . "</td>";
	    //echo "<td>" . $row['AGE'] . "</td>";
	    //echo "<td>" . $row['auu'] . "</td>";
		//echo "</tr>";
	//}
	
	
	//输出所有数据
//	while($row = mysql_fetch_array($result)){
//		echo $row["Name"] . "-" . $row['TEL'] . "-" . $row['AGE'] . "-".$row['auu'];
//	}
	
	//echo "</table>";	


	//条件搜索,name=小明
//	$result = mysql_query("SELECT * FROM Persons WHERE Name='小明'");
//	while($row = mysql_fetch_array($result)){
//		echo $row['Name'] . " " . $row['auu'];
//		echo "</br>";
//	}
	
	
	//排序
		//order by 默认升序排序,多个表排序用逗号隔开
		//order by age DESC降序排序
		$result = mysql_query("SELECT * FROM Persons ORDER BY AGE");
		while($row = mysql_fetch_array($result)){
			echo $row['Name'] . " " . $row['AGE'];
			echo "</br>";
		}
	
	mysql_close($con);
	
	

	
?>