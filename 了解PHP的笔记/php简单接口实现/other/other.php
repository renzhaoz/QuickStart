<?php
	#时间方法
		//date(格式,默认当前时间如果有输入则是输入时间); //处理时间戳
		date_default_timezone_set("PRC");//重置格林时间
		echo date("Y/m/d") . "</br>";//2018/12/11
		//date_default_timezone_set("Asia/Shanghai");//返回当地的时间
		echo date("Y-m-d-h-i-s-a") . "</br>";
		
		//创建时间点,然后解析处不同时间
		/* strtotime(time,now) */
		$time=strtotime("10:38pm April 15 2015");//tomorrow next Saturday +3 Months这些字符串都可以使用
		echo "创建日期是 " . date("Y-m-d h:i:sa", $time);
	
		//相隔时间点之间的日期输出
		
			//相隔周
		$startdate = strtotime("Saturday");
		$enddate = strtotime("+6 weeks",$startdate);
		while ($startdate < $enddate) {
		  echo date("M d", $startdate),"<br>";//输出未来的6个周末的日期
		  $startdate = strtotime("+1 week", $startdate);
		}
		
		
			//相隔天
		$d1=strtotime("December 3");
		$d2=ceil(($d1-time())/60/60/24);
		echo "距离十二月三十一日还有：" . $d2 ." 天。";
		
		
	#引入外部php
		//1.include '1.php';  当文件不是必须时使用,当请求文件出错时,程序继续执行
		//2.require '2.php';  当请求文件是必须文件时使用,请求文件出错,程序终止
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
?>