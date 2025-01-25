---
title: 'IO_四大抽象类及标准步骤[Java]'
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
abbrlink: 14359
date: 2020-04-14 23:23:27
img:
coverImg:
password:
thumbnail: 
---

IO_四大抽象类

<!-- more -->

---

| 抽象类       | 说明                             | 常用方法                                                     |
| ------------ | -------------------------------- | ------------------------------------------------------------ |
| InputStream  | 字节输出流的父类，数据单位为字节 | 1. int read()                                                         2.void close() |
| OutputStream | 字节输出流的父类，数据单位为字节 | 1. void write(int)                                                       2. void flush()                                                                        3. void close() |
| Reader       | 字符输入流的父类，数据单位为字符 | 1. int read()                                                                2. void close() |
| Writer       | 字符输出流的父类，数据单位为字符 | 1. void write(String)                                                 2. void flush()                                                            3. void close() |

**具体方法，可以参考api文档**

- 字节流处理一切，字符只能处理文本

---

## 2. 标准步骤

```java
package cn.io;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/**
 * 第一个程序：理解操作步骤
 * 1. 创建源
 * 2. 选择流
 * 3. 操作
 * 4. 释放资源
 * @author HQF
 *
 */
public class IoTest01 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//1. 创建源
		File src = new File("abc");
		
		//2. 选择流
		try {
			InputStream iStream = new FileInputStream(src);
		
			//3. 操作(读取)
			int data1 = iStream.read(); // 第一个数据
			int data2 = iStream.read();
			int data3 = iStream.read();
			
			//4. 释放资源
			System.out.println((char)data1);
			System.out.println((char)data2);
			System.out.println((char)data3);
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

```

---

```java
package cn.io;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/**
 * 第一个程序：理解操作步骤
 * 1. 创建源
 * 2. 选择流
 * 3. 操作
 * 4. 释放资源
 * @author HQF
 *
 */
public class IoTest02 {

	public static void main(String[] args) throws IOException {
		//1. 创建源
		File src = new File("abc");
		InputStream iStream = null;
		//2. 选择流
		try {
			 iStream = new FileInputStream(src);
		
			//3. 操作(读取)
			int temp;
			while((temp = iStream.read()) != -1) {
				System.out.println((char)temp);
			}
				iStream.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}finally {
			iStream.close();
		}
	}

}

```

---

## 文件字节流 FileInputStream&FileOutputStream

- FileInputStream：通过字节的方式读取文件，适合读取所有类型的文件（图像，视频等），全字符请考虑FileReader

- FileOutputStream：通过字节的方式写出或追加数据到文件，适合所有类型的文件（图像，视频等），全字符请考虑FileWrite。

```java
package cn.io;
//FileInputStream
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public class IoTest03 {

	public static void main(String[] args) throws IOException {
		//1. 创建源
		File srcFile = new File("abc");
		//2. 选择流
		InputStream iStream = null;
		try {
			iStream = new FileInputStream(srcFile);
			//3. 操作(分段读取)
			byte[] flush = new byte[1024*50];//缓冲容器
			int len = -1;//接受长度
			while((len = iStream.read(flush)) != -1) {
				//字节数组-->字符串（解码）
				String string = new String(flush,0,len);
				System.out.println(string);
			}
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

```

---

## 文件输出流

```java
package cn.io;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * 文件字节输出流
 * 1. 创建源
 * 2. 选择流
 * 3. 操作（写出内容）
 * 4. 释放资源
 * @author HQF
 *
 */
public class IoTest04 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//1. 创建源
		File srcFile = new File("ab.txt");
		//2. 选择流
		OutputStream oStream = null;
	
		
		try {
			oStream = new FileOutputStream(srcFile,true);
			//3. 操作
			String msgString = "IO is so easy";
			byte[] datas = msgString.getBytes();
			oStream.write(datas,0,datas.length);
			oStream.flush();
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			if (null != oStream) {
				oStream.close();
			}
		}
	}

}

```