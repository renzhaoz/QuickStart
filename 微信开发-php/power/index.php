<?php 
//scope=snsapi_base 实例
$appid='wx36237765672c6a9f';
$redirect_uri = urlencode ( 'http://www.xahearty.com/power/getUserInfo.php');
$url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$redirect_uri&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
header("Location:".$url);
?>