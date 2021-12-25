<?php
 require_once "./weixin.php";
 $jssdk = new JSSDK("wxe92f5557dbb975f0", "4b9a56fe413695ede72f4e091b97c79e");
 $signPackage = $jssdk->GetSignPackage();
 echo $uul;
 class Config{ 
	 var $appId; 
	 var $timestamp; 
	 var $nonceStr; 
	 var $signature; 
	 var $url;
	 var $jsdk;
	 var $acc;
 };
  
 $config = new Config(); 
 $config -> appId = $signPackage["appId"]; 
 $config -> timestamp = $signPackage["timestamp"]; 
 $config -> nonceStr = $signPackage["nonceStr"]; 
 $config -> signature = $signPackage["signature"];
 $config -> url = $signPackage["url"]; 
 $config -> jsdk = $signPackage["jsdk"]; 
 $config -> acc = $signPackage["acc"]; 
  
 echo json_encode($config);
?>