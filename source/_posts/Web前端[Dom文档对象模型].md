---
title: Dom文档对象模型[Web前端][JavaScript]
top: false
cover: false
toc: true
mathjax: false
author: 
tags:
  - Web前端
categories:
  - Web前端
abbrlink: 37228
date: 2020-04-23 21:40:14
img:
coverImg:
password:
summary: 
---

Dom文档对象模型[Web前端]

<!-- more -->

---


**四种获取html元素的方法**

1. 用Id获取元素的方法

```javascript
<script type="text/javascript">
			function check(){
			var username = document.getElementById("username");
			var usernameMsg = document.getElementById("usernameMsg");
			var emailMsg = document.getElementById("emailMsg");
			var passworldMsg = document.getElementById("passwordMsg");
			var repassworldMsg = document.getElementById("repasswordMsg");
<tr align="center">
</script>
					
					
<td colspan="">用户名:</td>
<td align="left"><input type="text" name="" id="username" onblur="checkUsername(this)"/>
<font color="red" id="usernameMsg"></font>
</td>
</tr>
```

2. 通过标签名

```javascript
document.getElementsByTagName("div");
console.log(div);

var div = documents.getElementsByTagName("span");
//调用div对象的所有(span)子元素,返回的都是数组。
var arr1 = div.getElementsByTagName("span");
console.log(arr1);
```

3. 通过类名，调用元素

```javascript
<div class = "two">
</div>

var arr1 = document.getElementsByClassName("two");
console.log(arr1);
```

4. 通过Name属性

```javascript
var arr1 = document.getElementsByName("last");
console.log(arr1);
```

---

