<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>php基本操作</title>
	</head>
	<body>
		<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
			name: <input type="text" name="username" />
			<input type="submit" />
		</form>
		<!--命名空间-->
			<!--避免命名冲突-->
			写法:
				namespace MyProject {
				    const CONNECT_OK = 1;
				    class Connection { /* ... */ }
				    function connect() { /* ... */  }
				}

				
		
		
		<?php 
			##基本操作
				/*基本语法*/
					/*<?php ?>*/
					//分号结尾,最后一行不必
					/*多行注释*/
					#单行注释
					
					#大小写 
						//php对用户定义的函数,方法,类关键字等大小写都不敏感
						//所有的变量对大小写敏感
						
				#变量
					//普通变量的声明	
						//变量会在首次使用时被创建并赋值
							$x=5;
							$y=6;
							$z=$x+$y;
							echo "$z</BR>";
						//变量名称需要字母或者下划线开头
							$text="你是谁?";
						//大小写敏感
						
					//其余变量
						//__LINE__  输出多少行
						//__FILE__  输出文件位置 
						//__DIR__   输出文件根目录
						//__FUNCTION__ 输出函数名
						//__CLASS__ 返回class名...
						
						echo '这是第 " '  . __LINE__ . ' " 行';
						echo "</br>";
					
					
					
						//作用域
							//local(局部)
							//global(全局)
								$q=32;
								function addnum(){
									$w=1;
									echo "这是函数内部q:$q</BR>";
									echo "这是函数内部w:$w</BR>";
								}
								addnum();
								echo "这是函数外部q:$q</BR>";
								echo "这是函数外部w:$w</BR>";
								echo "在php中全局变量不能引入方法中,局部变量在方法外部无法使用</BR>";
							 	
							 	
							 	//1.使用全局变量
							 		function userglo(){
							 			global $x,$y;
							 			$y=$y+$y;
							 		}
							 		echo "在使用全局变量前声明其全局变量是函数使用全局变量的唯一方法:global name;$y</br>";
							    //2.使用全局变量
							    	function and1(){
							    		 $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
							    	}
							    	and1();
							    	echo "$y+</br>";
							//static(静态)
								//静态值的调动每一次调用都是上次调用后的新值;
								function stat1(){
									static $b=10;
									echo "$b</br>";
									$b++;
								};							
								stat1();
								stat1();
								stat1();
								
							//超级作用域
									//$GLOBALS["name"]   全局作用域
									$GLOBALS['bb']=1;//这个值在所有区域都可以访问声明
									echo "$bb";      echo "</br>";
									
									//$_SERVER["name"]   //收集服务器信息
									echo $_SERVER['PHP_SELF'];
									echo "<br>";
									echo $_SERVER['SERVER_NAME'];
									echo "<br>";
									echo $_SERVER['HTTP_HOST'];
									echo "<br>";
									echo $_SERVER['HTTP_REFERER'];
									echo "<br>";
									echo $_SERVER['HTTP_USER_AGENT'];
									echo "<br>";
									echo $_SERVER['SCRIPT_NAME'];
									echo "<br>";
									
									//$_REQUEST[]	收集表单信息
										$name = $_REQUEST["username"];
										echo $name;
										echo "<br>";
										$name = $_POST["username"];
										echo "用户名:$name";
					
					
					
					
					
					
					
					#输出
						//1.echo
							$Arr = [0,1,2,3,q];
							//echo输出时双引号中的变量是会被计算的
							echo "<h1>你好啊</h1>";
							echo "This", " string", " was", " made", " with multiple parameters.</br>";
							echo "{$Arr[5-1]}</br>";
						//2.print
							//print和echo的输出方式一样,区别在于输出的数量上
							echo "a"," b"," c","</br>";//a b c
							print "a b c </br>";//a b c
								
						#输出类型
							//整数
								//整数可以用数字,十进制,十六进制,八进制声明
							$ii = 0x8C;//int 整数16进制 140
							$di = 2.4e3;//float 浮点数
							$di2 = 8E-5;//float 副点事
							$T = false;
							$noth = null;//空值
							$Arry = array("helo","小明",1);
							class Car{//对象
							  var $color;
							  function Car($color="green") {
							    $this->color = $color;
							  }
							  function what_color() {
							    return $this->color;
							  }
							};
							function print_vars($obj) {
							   foreach (get_object_vars($obj) as $prop => $val) {
							     echo "\t$prop = $val\n";
							   }
							}
							
							
							
							
							//输出类型
							var_dump($x);//int(5)
							echo "</br>";
							var_dump($text);//string 文本
							echo "</br>";
							var_dump($ii);//int 140 
							echo "</br>";
							var_dump($di);//float 2400
							echo "</br>";
							var_dump($di2);//float 8e-5
							echo "</br>";
							var_dump($T);//bool布尔
							echo "</br>";
							var_dump($Arry);//array(3) [0]string(2)"内容" [1]int(1) 
							var_dump($noth);//NULL
							
							//对象
							$herbie = new Car("white");
							echo "\herbie: Properties\n";
							print_vars($herbie);
							echo "</br>";
					
					
					
					#常量
						define("GREETING", "Welcome to W3School.com.cn!",true);
						//define(常量名,值,是否敏感大小写)
						echo greeting;		
						echo "</br>";		
						
					#运算符
						//+-*/%  与js一样	
						//运算式
							/*
								x = y 赋值
								x+= y 输出x+y
								串接符 	.
								串接赋值	.=
							 */	
							echo "hello"." nihao";
							echo "</br>";
							echo $x .= $text;//输出x+text
							echo "</br>";
							
							$nn = 2;
							echo ++$nn;				echo "</br>";//3先加再输出
							
							$mm =6;
							//先输出再加
							echo $mm++;				echo "</br>";//6先输出再加
							
							
					#判断符
						//判断符与js一样
						//and 与
						//or 或
						//xor 亦或
						//&& 与
						//|| 或
						//! 非
						var_dump(1 == 2); 	echo "</br>";			//bool false	
							
					
					#条件语句
						if(1>2){
							echo "1>2";
						}else{
							echo "1小于2";
						};					echo "</br>";
						
						if($mm<3){
							echo "小于3";
						}elseif(3<$mm && $mm<5){
							echo "大于三小于五!";
						}else{
							echo "大于5";
						};    				echo "</br>";
						
						
						//switch
						$n = 119;
						switch ($n){
							case 118:
							echo 118;
							break;
							case 117:
							echo 117;
							break;
							default:echo "不是118和117,是其他的数字!";
						};				echo "</br>";
						
						
						//while
							//while(条件){执行的代码}
							while($n>110){
								echo $x;
								echo "小于80";
								$n--;
							}
						//do{}while();   先执行在核对条件,最少执行一次;
						
						//foreach($arr as $value){
							//输出$value
						//}
						
					
					
					#数组
						//声明
							$name = array('xx','yy','oo');
							echo $name[0];						echo "</br>";
							echo count($name);					echo "</br>"; 						//输出数组长度			
							
							
						//遍历
							//数组的遍历和js一样;
							//关联数组
								//1. $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
								//2. $age['Peter']="35";
								//	 $age['Ben']="37";
								//	 $age['Joe']="43";
								//关联数组的遍历
									//foreach($age as $x=>$x_value)
									//{
									    //echo "Key=" . $x . ", Value=" . $x_value;
									    //echo "<br>";
									//}
						
						
						//数组排序
							//sort() 	从小到大(升序)
								$arry=array(12,0,33);
								$L = count($arry);
								sort($arry);
								for ($i=0;$i<$L;$i++){
									echo $arry[$i]; echo "</br>";
								}	
							//rsort()	从大到小(降序)
							//asort() 	关联数组,值升序排列
								$jj=array("BB"=>"35","aa"=>"37","CC"=>"43");
								asort($jj);
								foreach($jj as $x=>$x_value){
									echo "按值排序:$x+$x_value;";
								}
							//ksort() 	关联数组,键升序排列
							//arsort()  关联数组,键降序排列
							//krsort() 	关联数组,键降序排列
								
						
						
						
						
								
					#函数
						//function(){
							//return value; 返回值
						//}
						
								
								
		?>
	</body>
</html>
