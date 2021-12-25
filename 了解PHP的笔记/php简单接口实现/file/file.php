<?php
	header("Content-type: text/html; charset=utf-8");
	#读取文件
		//1.方法1
			require "C:\Users\Administrator\Desktop\infor.txt";
			echo "</br>";
			
		//2.方法2
			echo readfile("C:\Users\Administrator\Desktop\infor.txt");//echo会输出文件的内容和字数节
			echo "</br>";
			
		//3.方法三
			//fopen(file,打开模式);
			$text = fopen("C:\Users\Administrator\Desktop\infor.txt","r") or die('12346');//以只读模式找到并打开text
		
			//fread(打开的文件,filesize(text))  参数二是读取的最大字数节,如果写文件就是默认全读
			echo fread($text,filesize("C:\Users\Administrator\Desktop\infor.txt"));//输出模式
			echo "</br>";
			
			//fclose()关闭文件
			fclose($text);//关闭
			
			
			//fgets()从文件读取文件的单行
			$text = fopen("C:\Users\Administrator\Desktop\infor.txt","r+") or die('12346');
			echo fgets($text);//输出文本的第一行
			echo fgets($text);//输出文本的第二行
			echo fgets($text) . "</br>";//输出文本的第三行
			fclose($text);//关闭
			
			
			//循环输出文本内容
			//fgets()按行输出
			//fgetc()按单个字符输出
			echo "shuchusuoyouhang:" . "</br>";
			$text = fopen("C:\Users\Administrator\Desktop\infor.txt","r+") or die('12346');
			while(!feof($text)) {
			  echo fgets($text) . "<br>";
			}
			
			fclose($text);//关闭
			
			
			
			//创建文件
			$newfile = fopen("test.txt","w") or die("创建新文件失败!");
			if($newfile){
				echo "new 1 file";
			};
			$txt = "你好啊,xiaoer!";
			fwrite($newfile,$txt);
			fclose($newfile);
			
			
			//覆盖内容
			$newtest = fopen("test1.txt","w") or die("创建新文件失败!");
			if($newfile){
				echo "new 1 file";
			};
			$txt = "Minnie Mouse\n";// 文字末端加上\n会覆盖原有内容
			fwrite($newtest, $txt);//替换第一行,第二次执行会替换第二行,第三次执行会替换第三行
			fclose($newtest);
			
			
			//接受通过form提交的表单
			if ($_FILES["file"]["error"] > 0){
				//如果文件为空?
			  	echo "Error: " . $_FILES["file"]["error"] . "<br />";
			}else{
				//不为空,向远程服务器上传文件
			  	echo "Upload: " . $_FILES["file"]["name"] . "<br />";
			  	echo "Type: " . $_FILES["file"]["type"] . "<br />";
			  	echo "oriName" . $_FILES["file"]["tmp_name"] . "</br>";
			  	echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
			  	echo "Stored in: " . $_FILES["file"]["tmp_name"] . "</br>";
			}
			
			//上传文件
			move_uploaded_file($_FILES["file"]["tmp_name"], "E:/server/upfile/" . $_FILES["file"]["name"]);
            echo "文件存储在: " . "upload/" . $_FILES["file"]["name"];	
?>