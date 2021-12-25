<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>表单提交</title>
		<style>
			input {
				line-height: 36px;
			}
		</style>
	</head>

	<body>
		<!--一般表单-->
		<form action="form/index.php" method="post">
			姓名:<input type="text" name="name" /><br /> 年龄:
			<input type="text" name="age" /><br /> 电话:
			<input type="text" name="tel" /><br /> 备注:
			<input type="text" name="uaa" /><br />
			<input type="submit" />
		</form>

		<!--带验证的表单-->
		<!--<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"];?)>" method="post"></form>-->

		<!--这是超全局变量,返回当前执行脚本的文件名,执行会将表单数据发送到本网站进行表单验证-->据
		<!--$_SERVER["PHP_SELF"]-->
		
		<!--htmlspecialchars()这个方法会将提交到的特殊字符进行过滤,避免代码攻击-->
	</body>

</html>