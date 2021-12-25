$.ajax({
	type: "get",
	dataType: "json",
	url: 'http://www.xahearty.com/tok/jsdk/return.php',
	success: function(res) {
		console.log(res);
		wx.config({
			debug: true,
			appId: res.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
			timestamp: res.timestamp, // 必填，生成签名的时间戳
			nonceStr: res.nonceStr, // 必填，生成签名的随机串
			signature: res.signature, // 必填，签名，见附录1
			jsApiList: [
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				"onMenuShareQQ",
				"openLocation",
				"uploadImage",
				"chooseImage",
				"getLocation",
				"startRecord",
				"stopRecord",
				"onVoiceRecordEnd",
				"playVoice",
				"pauseVoice",
				"stopVoice",
				"onVoicePlayEnd",
				"uploadVoice",
				"downloadVoice",

			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	}
});




//方法二
//$.ajax({
//	url: 'http://www.xahearty.com/lucheng/jsdk1/getwx.php',
//	type: "get",
//	dataType: "json",
//	timeout: 5000,
//	data:{
//		Type:"config",
//		url1:"http://www.xahearty.com:80/lucheng/jsdk1/getwx.php"
//	},
//	success: function(res) {
//		console.log(res);
//		console.log(res.appId);
//		wx.config({
//			debug: true,
//			appId:"wxe92f5557dbb975f0", // 必填，企业号的唯一标识，此处填写企业号corpid
//			timestamp: res.timestamp, // 必填，生成签名的时间戳
//			nonceStr: res.nonceStr, // 必填，生成签名的随机串
//			signature: res.signature, // 必填，签名，见附录1
//			jsApiList: [
//				'onMenuShareTimeline',
//				'onMenuShareAppMessage',
//				"onMenuShareQQ",
//				"openLocation",
//				"uploadImage",
//				"chooseImage",
//				"getLocation",
//				"startRecord",
//				"stopRecord",
//				"onVoiceRecordEnd",
//				"playVoice",
//				"pauseVoice",
//				"stopVoice",
//				"onVoicePlayEnd",
//				"uploadVoice",
//				"downloadVoice",
//
//			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//		});
//	}
//});