<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>表单验证</title>
	</head>

	<body>
		<?php
			#清空所有的值
			$name = $email = $gender = $comment = $website = "";
			
			
			#如果请求方法是POST,获取所有值进行赋值
			if ($_SERVER["REQUEST_METHOD"] == "POST") {
			   $name = test_input($_POST["name"]);
			   $email = test_input($_POST["email"]);
			   $website = test_input($_POST["website"]);
			   $comment = test_input($_POST["comment"]);
			   $gender = test_input($_POST["gender"]);
			}
			
			#对获取的值进行验证
			function test_input($data) {
			   #清除两侧空白值
			   $data = trim($data);
			   
			   #剥离反斜杠
			   $data = stripslashes($data);
			   
			   #将<>转换成html实体
			   $data = htmlspecialchars($data);
			   
			   #输出data
			   return $data;
			}
		?>

			<h2>PHP 验证实例</h2>
			<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
				姓名：<input type="text" name="name">
				<br><br> 电邮：
				<input type="text" name="email">
				<br><br> 网址：
				<input type="text" name="website">
				<br><br> 评论：
				<textarea name="comment" rows="5" cols="40"></textarea>
				<br><br> 性别：
				<input type="radio" name="gender" value="female">女性
				<input type="radio" name="gender" value="male">男性
				<br><br>
				<input type="submit" name="submit" value="提交">
			</form>

			<?php
				echo "<h2>您的输入：</h2>";
				echo $name;
				echo "<br>";
				echo $email;
				echo "<br>";
				echo $website;
				echo "<br>";
				echo $comment;
				echo "<br>";
				echo $gender;
			?>
	</body>

</html>