---
title: 'JavaScript基础①[JavaScript]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - JavaScript
categories:
  - Web前端
abbrlink: 10186
date: 2020-04-04 23:20:26
img:
coverImg:
password:
---

JavaScript是干什么的？

<!-- more -->

---

## 1. JavaScript是干什么的？

- HTML是基本的网页（文字，图片，视频）

- CSS是通过布局和样式让网页更加美观
- JavaScript是给网页添加动画和一些其他的交互事件，让网页变得更加活泼。

JavaScript跟编程语言差不多，不过它不是编程语言，它是脚本语言，它的运行不需要编译，直接由解释器解释执行。它也有变量，函数。

**1.1 JavaScript可以完成的效果**

- 数据校验（输入的密码，年龄，用户名是否符合要求）

- 图片轮播

- 广告弹框

**1.2 JavaScript的特点**

1. 语法相对来说比较简单（弱类型的变量类型）
2. 跨平台（JavaScript脚本语言不依赖于操作系统，仅需要浏览器的支持）

**1.3 JavaScript代码在哪里书写**

第一种方式：网页内（可以放在网页的任意位置）

```javascript
<script	type = "text/javascript">
</script>
```

第二种方式：行内通过事件引入



第三种方式：外部引入方式

```javascript
<script type = "text/javascript" src = "test.js"></script>
```

警告框：

```javascript
window.alert('Hello World!');//alert('Hello World');
```

---

**1.4 JavaScript中的所有数据类型**

- 字符串（String）

- 数字 (number)
- 布尔(boolean)
- 数组(array)
- 对象(object)
- 空(null)
- 未定义(undefined)

输出的字符串里面包含单引号，则用双引号引用。

输出的字符串里面包含双引号，则用单引号引用。

或者使用转义字符。

---

**1.5变量的定义**

变量的定义用：var

```javascript
var str = "Hello World!"
alert(str);
```

---

注册表单的创建，以及函数的应用，焦点事件。

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script type="text/javascript">
			function check(){
			var username = document.getElementById("username");
			var usernameMsg = document.getElementById("usernameMsg");
			var emailMsg = document.getElementById("emailMsg");
			var passworldMsg = document.getElementById("passwordMsg");
			var repassworldMsg = document.getElementById("repasswordMsg");
			
			var	isPass = true;

				
				console.log(username);
				console.log(username.value);
				
				var length = username.value.length;
				if(length < 3 || length > 6)
				{
//					alert("用户名长度必须是3 - 6位");
					usernameMsg.innerText = "用户名长度必须是3 - 6位";
					isPass = false;
				}else{
					usernameMsg.innerText = "";
					isPass = false;
				}
				
			var email = document.getElementById("email").value;
				
			var p = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

			if(p.test(email) == false){
//				alert("邮箱格式不正确");
				emailMsg.innerText = "邮箱格式不正确!";
				isPass = false;
			}else{
				email.innerText = "";
			}
				
				
			var password = document.getElementById("password").value;
			var repassword = document.getElementById("repassword").value;
			if(password.length<6 || password.length>10)
			{
//				alert("密码必须在6 - 10位之间");	
				passworldMsg.innerText = "密码必须在6 - 10 位之间！";
				isPass = false;

			}else{
				if(password != repassword){
//					alert("两次输入密码不一致");
				repassworldMsg.innerText = "两次输入密码不一致！";
					isPass = false;
				}else{
				repassworldMsg.innerText = "";
				}
			}
//			if (isPass == false) {
//				return false;
//			} else{
//				return true;
//			}

			return isPass;
			
			
			}
			
				//onblur失去焦点开始调用
			function checkUsername(username){
				var usernameMsg = document.getElementById("usernameMsg");
				
				var length = username.value.length;
				if (length < 3 || length > 6) {
					usernameMsg.innerText = "用户名长度必须是3 - 6位";
				} else{
					usernameMsg.innerText = "";
				}
			}
			
			function checkEmail(email){
			var emailMsg = document.getElementById("emailMsg");
			var p = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

			if(p.test(email.value) == false){
				emailMsg.innerText = "邮箱格式不正确!";
			}else{
				emailMsg.innerText = "";
			}
			}
			
			function checkPassword(){
			var password = document.getElementById("password").value;
			var repassword = document.getElementById("repassword").value;
			if(password.length<6 || password.length>10)
			{
//				alert("密码必须在6 - 10位之间");	
				passworldMsg.innerText = "密码必须在6 - 10 位之间！";
				isPass = false;

			}else{
				if(password != repassword){
//					alert("两次输入密码不一致");
				repassworldMsg.innerText = "两次输入密码不一致！";
					isPass = false;
				}else{
				repassworldMsg.innerText = "";
				}
			}
			}
			
			function checkPassword(){
			var password = document.getElementById("password")
			var passworldMsg = document.getElementById("passwordMsg");
			var repassword = document.getElementById("repassword").value;
			if(password.value.length<6 || password.value.length>10)
			{
//				alert("密码必须在6 - 10位之间");	
				passworldMsg.innerText = "密码必须在6 - 10 位之间！";
				isPass = false;

			}else{
				passworldMsg.innerText = "";
				if(password.value != repassword){
				passworldMsg.innerText = "两次输入密码不一致！";
					isPass = false;
				}else{
				passworldMsg.innerText = "";
				}
			}
				
			}
		</script>
		
		
	
	</head>
	<body>
		
		<form action="register.jsp"  onsubmit="return check()">
			<table border="1" width="500px" height="500px">
				<tr>
					<td colspan="2" align="center">注册</td>
				
				</tr>
				<tr align="center">
					<td colspan="">用户名:</td>
					<td align="left"><input type="text" name="" id="username" onblur="checkUsername(this)"/>
					<font color="red" id="usernameMsg"></font>
					</td>
				</tr>
				<tr align="center">
					<td colspan="">邮箱：</td>
					<td align="left"><input type="text" name="" id="email" onblur="checkEmail(this)" />
					<font color="red" id = "emailMsg"></font>
					</td>
				</tr>
				<tr align="center">
					<td colspan="">密码：</td>
					<td align="left"><input type="password" name="" id="password" onblur="checkPassword(this)" />
					<font color="red" id="passwordMsg"></font>
					</td>
				</tr>
				<tr align="center">
					<td colspan="">重复密码：</td>
					<td align="left"><input type="password" name="" id="repassword" onblur="checkPassword(this)"/>
					<font color="red" id="repasswordMsg"></font>
					</td>
				</tr>
				
				<tr align="center">
					<td colspan="2"><input type="submit" name="注册"  /></td>				
				</tr>
			</table>
		</form>
	</body>
</html>

```

