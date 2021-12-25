<?php
session_start();
header("Content-Type:text/html; charset=utf-8");
header("Cache-Control:no-cache");
session_set_cookie_params(12 * 60 * 60);//设置cookie的有效期
session_cache_expire(12 * 60);//设置session的有效期


if (empty($_SESSION['user']) || $_SESSION['user']['errcode'] == '41001') {

    if (isset($_GET['code'])) {
        $code = $_GET['code'];
    } else {
        echo "NO CODE";
    }


    $appid = "wxe92f5557dbb975f0";
    $secret = "4b9a56fe413695ede72f4e091b97c79e";
    $code = $_GET["code"];
    $get_token_url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' . $appid . '&secret=' . $secret . '&code=' . $code . '&grant_type=authorization_code';

    $access_token="";
    $openid="";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $get_token_url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        $res = curl_exec($ch);
        curl_close($ch);
        $json_obj = json_decode($res, true);

        //根据openid和access_token查询用户信息  
        $access_token = $json_obj['access_token'];
        $openid = $json_obj['openid'];

    $get_user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token=' . $access_token . '&openid=' . $openid . '&lang=zh_CN';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $get_user_info_url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    $res = curl_exec($ch);
    curl_close($ch);

    //解析json  
    $user_obj = json_decode($res, true);
    $_SESSION['user'] = $user_obj;
    // var_dump($user_obj);
    // die();
    $_SESSION['user']['openid']=$user_obj["openid"];
    $_SESSION['user']['username']=$user_obj["nickname"];
    $_SESSION['user']['headimgurl']=$user_obj["headimgurl"];
    
	header("Location:http://www.xahearty.com/getMoety/index.html");
} else {
	header("Location:http://www.xahearty.com/getMoety/index.html");
}



?>
