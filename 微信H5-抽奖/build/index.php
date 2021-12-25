<?php
		
	//执行session_start()获取用户信息
	session_start();
	header("Content-Type:text/html; charset=utf-8");
	////设置页面过期时间
//	header ( " Expires: Mon, 26 Jul 1970 05:00:00 GMT " );
	//设置页面最后更新时间
//	header ( " Last-Modified:" . gmdate ( " D, d M Y H:i:s " ). "GMT " );
	
	
	//设置页面是使用缓存
	header("Cache-Control:no-cache");
	//设置页面无缓存
	header("Cache-Control: no-cache, must-revalidate");
	
	echo $_SESSION['user']['openid'];
	
	
	if ($_SESSION['user']['openid'] != '') {
		//如果用户关注了,判断时间
		
		header("Location:http://www.xahearty.com/getMoety/index.html");
	}else {
		//如果用户未进行关注,跳转页面获取授权
	    $state=2; 
	    $_SESSION['state'] = $state; 
	    $appid = "wxe92f5557dbb975f0";
	    $redirect_uri="http://www.xahearty.com/getMoety/build/code.php";
	    $url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$appid.'&redirect_uri='.urlencode($redirect_uri).'&response_type=code&scope=snsapi_userinfo&state='.$state.'#wechat_redirect';
	    header("Location:".$url);
	};
	
	

//  $sql1="select count(*) as count from `2017huazhu513` where openid='".$_SESSION['user']['openid']."'";
//  $result1 = mysql_query($sql1, $conn);
//  $rower=mysql_fetch_array($result1);
//  
//  
//  $countOfResult=$rower["count"];
//  // mysql_close($con);
//
//  if($countOfResult<=0){
//  	
//  };
//	if($countOfResult>0){
//  	$sql2="select `audioUrl`,id from `2017huazhu513` where openid='".$_SESSION['user']['openid']."'";
//      $result2 = mysql_query($sql2, $conn);
//      $rower1=mysql_fetch_array($result2);
//      $audioUrl=$rower1["audioUrl"];
//      $userId=$rower1["id"];
//      mysql_close($con);
//  }

?>
