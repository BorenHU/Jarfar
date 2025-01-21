---
title: '文件的拷贝[Java]'
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
abbrlink: 9677
date: 2020-04-15 09:33:12
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

输入流读取数据，输出流写入数据，在输入的同时，进行输出实现数据的拷贝

<!-- more -->

---


- 输入流读取数据，输出流写入数据，在输入的同时，进行输出实现数据的拷贝

![文件的拷贝](https://img-blog.csdnimg.cn/20200415093219490.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

```java
package cn.io;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
/**
 * 文件拷贝：文件字节输入，输出流
 * 
 * @author HQF
 *
 */
public class Copy {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//1. 创建源 将abc拷贝到ab
		File desFile = new File("abc");
		File srcFile = new File("ab.txt");
		//2. 选择流
		OutputStream oStream = null;
		InputStream iStream = null;
		
		try {
			oStream = new FileOutputStream(srcFile,true);
			iStream = new FileInputStream(desFile);
			//3. 操作(分段读取)
			byte[] flush = new byte[1024];//缓冲容器
			int len = -1;//接受长度
			while((len = iStream.read(flush)) != -1) {
				//字节数组-->字符串（解码）
				oStream.write(flush,0,len);
			}
			oStream.flush();
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			//分别释放资源，先打开的后关闭
			if (null != oStream) {
				oStream.close();
			}
			
			if (null != iStream) {
				iStream.close();
			}
		}
	}

}

```

![](https://img-blog.csdnimg.cn/20200415101324563.png)



![](https://img-blog.csdnimg.cn/20200415101405631.png)

---

## 最后进行封装，复制任何文件

```java
package cn.io;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * 文件拷贝：文件字节输入，输出流
 * 
 * @author HQF
 *
 */
public class Copy {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
	copy("E:\\JAVA\\cn.shangxuetang\\image\\2.jpg", "2copy.jpg");
	}

	public static void copy(String srcStream,String destStream) throws IOException {
		//1. 创建源
		File desFile = new File(srcStream);//源头
		File srcFile = new File(destStream);//目的地
		//2. 选择流
		OutputStream oStream = null;
		InputStream iStream = null;
		
		try {
			oStream = new FileOutputStream(srcFile,true);
			iStream = new FileInputStream(desFile);
			//3. 操作(分段读取)
			byte[] flush = new byte[1024];//缓冲容器
			int len = -1;//接受长度
			while((len = iStream.read(flush)) != -1) {
				//字节数组-->字符串（解码）
				oStream.write(flush,0,len);
			}
			oStream.flush();
			
	
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			//分别释放资源，先打开的后关闭
			if (null != oStream) {
				oStream.close();
			}
			
			if (null != iStream) {
				iStream.close();
			}
		}
	}
}

```