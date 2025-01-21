---
title: '文件字符流[Java]'
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
abbrlink: 51726
date: 2020-04-15 11:36:26
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

文件字符流[Java]

<!-- more -->

---


![文件字符流](https://img-blog.csdnimg.cn/20200415144952650.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

**文件字节流和字符流的操作步骤一样**

```java
package cn.io;
//FileReader
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.Reader;
/**
 * 四个步骤：分段读取 文件字符输入流
 * 1. 创建流
 * 2. 选择流
 * 3. 操作
 * 4. 释放资源
 * @author HQF
 *
 */
public class IoTest5 {

	public static void main(String[] args) throws IOException {
		//1. 创建源
		File srcFile = new File("abc");
		//2. 选择流
		Reader reader = null;
		try {
			reader = new FileReader(srcFile);
			//3. 操作(分段读取)
			char[] flush = new char[1024];
			int len = -1;//接受长度
			while((len = reader.read(flush)) != -1) {
				//字节数组-->字符串
				String string = new String(flush,0,len);
				System.out.println(string);
			}
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			if (null != reader) {
				reader.close();
			}
		}
	}

}

```

---

```java
package cn.io;
//FileWrite
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;

/**
 * 文件字节输出流
 * 1. 创建源
 * 2. 选择流
 * 3. 操作（写出内容）
 * 4. 释放资源
 * @author HQF
 *
 */
public class IoTest6 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//1. 创建源
		File srcFile = new File("ab.txt");
		//2. 选择流
		Writer writer = null;
		try {
			writer = new FileWriter(srcFile,true);
			//3. 操作
			//写法一
//			String msgString = "IO is so easy";
//			//字符串 --> 字符数组
//			char[] datas = msgString.toCharArray();
//			writer.write(datas,0,datas.length);
			
			//写法二
//			String msgString = "my name is JF";
//			writer.write(msgString);
//			writer.flush();

			//写法三
			String msgString = "Welcome to my blog";
			writer.write(msgString);
			
			writer.flush();
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			if (null != writer) {
				writer.close();
			}
		}
	}

}

```

---

## 字节数组流

![字节数组流](https://img-blog.csdnimg.cn/20200415151536728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

**字节数组输入流**

```java
package cn.io;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
/**
 * 字节数组输入流
 * 1. 创建源 : 字节数组，不要太大
 * 2. 选择流
 * 3. 操作
 * 4. 释放资源
 * @author HQF
 *
 */
public class IoTest7 {

	public static void main(String[] args) throws IOException {
		//1. 创建源
		byte[] srcFile = "take is cheak show me the code".getBytes();
		//2. 选择流
		InputStream iStream = null;
		try {
			iStream = new ByteArrayInputStream(srcFile);
			//3. 操作(分段读取)
			byte[] flush = new byte[1024*50];//缓冲容器
			int len = -1;//接受长度
			while((len = iStream.read(flush)) != -1) {
				//字节数组-->字符串（解码）
				String string = new String(flush,0,len);
				System.out.println(string);
			}
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

```

---

**字节数组输出流**

```java
package cn.io;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * 文件数组输出流ByteArrayOutputStream
 * 1. 创建源 : 源头由内部来维护
 * 2. 选择流 ：不关联源
 * 3. 操作（写出内容）
 * 4. 释放资源 ： 可以不用
 * @author HQF
 *获取数据 ： toByteArray();
 */
public class IoTest8 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		//1. 创建源
		byte[] dest = null;
		//2. 选择流(新增方法)
		ByteArrayOutputStream oStream = null;
	
		
		try {
			oStream = new ByteArrayOutputStream();
			//3. 操作
			String msgString = "show me the code";
			byte[] datas = msgString.getBytes();
			oStream.write(datas,0,datas.length);
			oStream.flush();
		//4. 获取数据
			dest = oStream.toByteArray();
			System.out.println(dest.length + "--->" + new String(dest,0,oStream.size()));
			
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

