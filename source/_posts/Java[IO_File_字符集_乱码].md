---
title: 'IO_File_字符集_乱码[Java]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Java
categories:
  - Java
abbrlink: 16083
date: 2020-04-14 16:02:59
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

IO_File\_字符集_乱码

<!-- more -->

---


**字符集 :**Java字符使用16位的双字节存储，但是在实际文件存储的数据有各种字符集，需要正确操作，否则就有乱码的发生。

![字符集](https://img-blog.csdnimg.cn/20200414225410123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

```java
package cn.io;

import java.io.UnsupportedEncodingException;

/**
 * 编码：字符串-->字节
 * @author HQF
 *
 */
public class ContentEncode {

	public static void main(String[] args) throws UnsupportedEncodingException {
		// TODO Auto-generated method stub
		String msg = "性命 生命 使命";
		//编码：字节数组
		byte[] datas = msg.getBytes();
		System.out.println(datas.length);
	
		//解码：字符串 String(byte[] bytes , int offset , int length , String charsetName)
		msg = new String(datas , 0 , datas.length , "GBK");
		System.out.println(msg);
	
		//乱码：
		//1. 字节数不够
		msg = new String(datas , 0 , datas.length-1, "GBK");
		System.out.println(msg);
	
		//2. 字符集不统一
		msg = new String(datas , 0 , datas.length-1, "utf8");
		System.out.println(msg);
	
	}

}

```

---

```java
14
性命 生命 使命
性命 生命 使? // 因为字节不够
???? ???? ?? // 因为字符集不统一

```

