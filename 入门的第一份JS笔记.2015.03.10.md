# JS

这是来自2015年的一份开始学习js的笔记。本来准备删掉。后台又整理了下放到这里。

## Js特点

1. 轻量级语言
2. 可插入HTML
3. 通用于所有浏览器
4. 避免关键词://"Identifier Expected"

## Js严谨性

敏感大小写  忽略空格 反斜杠换行 逐行解析(其余是先编译再解析)

## window操作

### 窗口

	window.open();//打开窗口
	window.close();//关闭窗口
	window.moveTo();//移动窗口到
	window.resizeTo();//调整当前窗口尺寸

### 尺寸

	window.innerHeight;//内部高度
	window.documentElement.clientHeight;//窗口可视高度
	==window.body.clientheight
	screen.availWidth //可用的屏幕宽度
	screen.availHeight //可用的屏幕高度
	window.location.[详细属性:location];
	history.back() //与在浏览器点击后退按钮相同
	history.forward() //与在浏览器中点击按钮向前相同
	history.length;//历史url的长度
	history.go(-1/url);//加载history中某个页面
			

## 弹出框

1. alert("1232");//警告框
2. confirm("是否xuanze");//提示框
			//such:
				var r=confirm("Press a button!");
				if (r==true){	{
					alert("You pressed OK!");
				}else{
					alert("You pressed Cancel!");
				}

3.prompt(); //对话框应用类似confirm

	

## 鼠标事件:

1. 函数调用(点击调用, 滑过..)
	调用方式:
	a.onchange HTML改变
	b.onclick 鼠标点击
	c.onmouseover HTML上移动鼠标
	d.onmouseout 一口鼠标时
	e.onkeydown 按下键盘按键
	f.onload 浏览器已完成页面的加载

## Js类型

	1. Number 数字
	2. String 字符
	3. Array 数组
	4. Object 对象
	5. Function 函数

## DOM编辑

	// such:修改字符
	function Myfun(){
		document.getElementById('Mydemo').innerHTML='你不是我的';
		document.getElementById('Mydiv').innerHTML='就是的';
		};

	

## 转义

	1.\,逗号
	//3.\\"引号
	3.\\反斜杠
	4.\n换行
	5.\r回车
	6.\t制表符(空)
	7.\b退格符
	8.\f换页符
	&&	and;	||	or;	!	not

## 字符串方法

	1.charAt()	返回指定索引位置的字符
	2.charCodeAt()	返回指定索引位置字符的Unicode值
	3.match()	找到一个或多个正则表达式的匹配(第几个字符)
	4.formCharCode()	将Unicode转换为字符串
	5.indexOf()		返回字符串中首次出现的索引位置
	6.lastIndex()	返回字符串中最后一次出现的索引位置
	7.localeCompare()	用本地特定的顺序来比较两个字符串
	8.concat()	拼接两个或多个字符串,返回拼接后的字符串
	9.replace()		替换相应位置的字串
	10.search()		检索与正则表达式相匹配的值
	11.slice()		提取字符串的片段,并返回提取的部分
	12.split()		把字符串分割为字符串数组
	13.substr()		从起始位置开始检索字符指定数目的字符
	14.substring()		提取字符串中两个指定的索引之间的字符
	15.toLocaleLowerCase()/toLowerCase()	大写变小写
	16.toLocaleUpperCase()/toUpperCase()		小写变大写
	17.toString()	返回字符串索引
	18.trim()	移除字符串首尾空白
	19.valueOf()	返回某个字符串对象的原始值

## 循环语法

		// if...else
		if(条件){

			//当条件为真执行语句

		} else{

			//当if条件为假执行语句

		}

		switch case/break在先知条件下执行
		var n=['ni', 'wo', 'ta']
		switch(n){

			case'ni':;//值为ni时执行语句
			break;

			case'wo':;//值为我时执行语句
			break;

			default:'期待别人' //如果不是ni/wo则输出期待别人

		}

		//for循环类型:
		//单循环(遍历)

		for (var i=0; i<cars.length; i++){
			document.write(cars[i] + "<br>"); 

		}

		//for in循环(遍历)
		var b={age:21, name:'南华', sex:'nv'}
		for(d in b){

			//遍历b
			document.write(b[d]);

		}

		//while循环
		while (条件){

			//当条件满足时

		}

## 计数器

		setInterval(func, x); //隔秒无限次调用函数
		setTimeout(func, x); //隔开x秒调用函数(一次)
		clearTimeout(func); //清楚函数func的计数表

## navigator

navigator.appCodeName  //浏览器代码名的字符串表示 在所有以 Netscape 代码为基础的浏览器中，它的值是 "Mozilla"。
// 为了兼容起见，在 Microsoft 的浏览器中，它的值也是 "Mozilla"。
navigator.appName  //返回官方浏览器名的字符串表示  
navigator.appVersion  //返回浏览器版本信息的字符串表示  
navigator.cookieEnabled  //如果启用cookie返回true，否则返回false
navigator.platform  //浏览器所在计算机平台的字符串表示(window/os)  
navigator.userAgent  //用户代理的字符串表示

console.log(navigator.appCodeName); //浏览器
console.log(navigator.appName); //浏览器名称
console.log(navigator.appVersion); //浏览器信息
console.log(navigator.platform); //浏览器平台
//通过浏览器的userAgent 可以判断当前浏览器的 品牌
console.log(navigator.userAgent); //浏览器品牌

## location

location//页面属性检索
location.href//文档链接
location.protocal; //协议
location.host; //主机(服务器名字)
location.hostname; //主机名 
location.port; //端口
location.pathname; //链接路径
location.search; //搜索内容
location.hash; //链接中#后的内容
assign()	//加载新的文档。
reload()	//重新加载当前文档。
replace()	//用新的文档替换当前文档。
console(window.location.hash); 

//应用
// 改变链接属性 location.href='http://www.baidu.com';
// 链接检索
location.href === 'https://www.baidu.com:8080/s?wd=%E7%8E%8B%E6%B5%A9&rsv_spt=1&rsv_iqid=0xd20dd4030000b159&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=9&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=2325&rsv_sug4=2705#achor1'; 
location.protcol === 'https'; //协议
location.host === 'www.baidu.com'; //网址
location.hostname === 'baidu.com'; //域名
location.port === '8080'; //一般默认端口号是8080
location.search === '?wd=%E7%8E%8B%E6%B5%A9&rsv_spt=1&rsv_iqid=0xd20dd4030000b159&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=9&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=2325&rsv_sug4=2705'; 
//格式: ?key1=value1&key2=value2&key3=vaue3...
location.hash === '#achor1'; //#之后拼接的内容

## DOM操作

// 获取节点
document.getElementById(id); //获取特定ID元素的节点
document.getElementsByTagName(div)[0]; //数列  获取相同元素的节点列表
document.getElementsByClassName(classname)[0]; //数列  获取元素为指定class的节点
document.getElementsByName(ip1)[0]; //获取相同NAME值的节点列表
document.querySelector('ul input'); //通过选择器来选择
document.querySelectorAll('ul li'); //选择器选择ul的所有li

// 获取节点属性
getAttribute(name, value); //获取特定元素节点属性的值
setAttribute(name, value); //设置节点的值
removeAttribute(name, value); //移除指定节点的属性																																													

//获取/返回节点的属性
nodeName; //返回字符串(节点内容); 
nodeType; //返回一个整数, 这个数值代表给定节点的类型; 
nodeValue; //返回节点的当前值
tagName; //获取元素节点的标签名
innerHTML; //获取元素节点的内容
// such: document.getElementById('myDiv').tagName; myDiv

//子节点的查询
childNodes; //返回一个数组, 这个数组由给定元素的子节点构成, 包括换行
children; //返回一个数组(元素子集节点构成), 不包括换行
firstChild; //返回第一个子节点
lastChild; //返回最后一个节点
parentNode; //返回父级节点
nextSibling; //返回节点的下一个节点/空格解析
previousSibling; //返回节点的上一个节点/空格解析

//节点的操作
createElement(tagName); //创建新的元素节点
appendChild(some); //将指定内容拼接到节点内容的最后
insertBefore(newChild, refChild); //将指定内容拼接到指定节点的最前面
removeChild(oldChild); //从一个给定元素中删除子节点
replaceChild(newChild, oldChild); //替换父级元素中的指定节点

// 鼠标事件
onmouseover; //鼠标划过
onmousedown; //鼠标点击下
onmouseup; //鼠标点下松开时
onclick; //鼠标点击时
ondblclick; //鼠标双击时
// 注意: down>up>click>down>up>click>doubleclick(执行顺序)
// 
onmousemove; //触发率非常高  控制:1, 两次move的时间差   2, 两次move的距离

onmouseenter; //鼠标进去区域时生效
onmouseover; //鼠标进入区域时生效, 对子元素也生效

onmouseout; //鼠标离开时触发, 子集元素也会触发
onmouseleave; //鼠标离开时触发.`

oncontextmenu; //右击事件 , 子集也触发

onscroll; //滚轮事件, 内容要有滚动条
onmousewheel; //滚轮事件.
