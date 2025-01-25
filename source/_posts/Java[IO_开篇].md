---
title: 'IO_开篇[Java]'
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
abbrlink: 35
date: 2020-04-13 23:39:11
img:
coverImg:
password:
thumbnail: 
---

IO_开篇

<!-- more -->

---


**流：**流动，流向，从一端移动到另一端。流是一个抽象，动态的概念，是一连串连续动态的数据集合。

**数据源：** data source。提供原始数据的原始媒介，常见的：数据库，文件，其他程序，内存，网络连接，IO设备。

- 在Java程序中，对于数据的输入/输出操作以“流”（stream）方式进行；
- J2SDK提供了各种各样的“流”类，用以获取不同种类的数据：程序中通过标准的方法输入或输出数据。
- Java的流类型一般位于Java.io包中。

在整个java.io包中最重要的就是5个类和3个接口，掌握了这些IO的核心操作那么对于Java中的IO体系也就有了一个初步的认识。

| 类           | 说明       |
| ------------ | ---------- |
| File         | 文件类     |
| InputStream  | 字节输入流 |
| OutputStream | 字节输出流 |
| Reader       | 字符输入流 |
| Writer       | 字符输出流 |
| Closeable    | 关闭流接口 |
| Flushable    | 刷新流接口 |
| Serializabe  | 序列化接口 |

![流分类](https://img-blog.csdnimg.cn/20200414094154555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

![流分类](https://img-blog.csdnimg.cn/20200414094512272.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

![字节流](https://img-blog.csdnimg.cn/20200414094737400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

---

## IO_File_API使用规则_重要

- 看类的继承体系
- 看构造器
- 看方法

```java
//文件路径的获取	
public static void main(String[] args) {
		// TODO Auto-generated method stub
		String path = "E:\\JAVA\\cn.shangxuetang\\image\\2.jpg";
		System.out.println(java.io.File.separatorChar);	
		//建议
		//1. /
		path = "E:/JAVA/cn.shangxuetang/image/2.jpg";
		//2. 常量拼接	
	}
```

```java
package cn.io;

import java.io.File;
public class FileDemo01 {
/**
 * 构建File对象
 * 相对路径与绝对路径
 * 1. 存在盘符 ：绝对路径
 * 2. 不存在盘符 ：相对路径
 * @param args
 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String path = "E:/JAVA/cn.shangxuetang/image/2.jpg";
		
		//1. 构建File对象
		File src = new File(path);
		System.out.println(src.length());
	
		//2. 构建File对象
		src = new File("E:/JAVA/cn.shangxuetang/image","2.jpg");
		System.out.println(src.length());
	
		//3.构建File对象
		src = new File(new File("E:/JAVA/cn.shangxuetang/image"),"2.jpg");
		System.out.println(src.length());
	
		//绝对路径
		File src1 = new File(path);
		System.out.println(src1.getAbsolutePath());
		
		//相对路径
		System.out.println(System.getProperty("user.dir"));
		src1 = new File("IO.png");
		System.out.println(src1.getAbsolutePath());
	}
}

```

---

## IO_File_API学习

![](https://img-blog.csdnimg.cn/20200414104434754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

```java
//基本信息
File src = new File("E:/JAVA/cn.shangxuetang/image/2.jpg");
	
		//基本信息
		System.out.println("名称 ：" + src.getName() );
		System.out.println("路径 : " + src.getPath());
		System.out.println("绝对路径 : " + src.getAbsolutePath());
		System.out.println("父路径 : " + src.getParent());
		System.out.println("父对象：" + src.getParentFile().getName());
```

---

### 文件状态

- 不存在

- 存在

  文件：isFile

  文件夹：isDirectory

```java
		File src = new File("E:/JAVA/cn.shangxuetang/image/2.jpg");
	
		System.out.println("是否存在 ：" + src.exists() );
		System.out.println("是否文件 : " + src.isFile());
		System.out.println("是否文件夹 : " + src.isDirectory());

```

---

### 文件夹的创建

| API                | 说明                               |
| ------------------ | ---------------------------------- |
| mkdir() , mkdirs() | 创建目录，如果目录链不存在一同创建 |
| list()             | 下级名称                           |
| listFiles()        | 下级File                           |
| listRoots()        | 根路径                             |

```java
package cn.io;
import java.io.File;
/**
 * 创建目录
 * 1. mkdir（）：确保上级目录存在，不存在创建失败
 * 2. mkdirs（）：上级目录可以不存在，不存在一同来创建
 * 3. list() : 列出下级名称
 * 4. listFiles（）：列出下级File对象
 * 5. listRoots() : 列出所有的盘符：listRoots()
 *
 * @author HQF
 *
 */
public class Dir {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			File dir = new File("E:/JAVA/cn.shangxuetang");
			//创建目录
			boolean flag = dir.mkdir();
			System.out.println(flag);
			
			//列出下级名称	list
			String[] subNames = dir.list();
			for (String s : subNames) {
				System.out.println(s);
			}
			
			System.out.println("===================================");
			//下级对象 listFiles()
			File[] subFiles = dir.listFiles();
			for (File file : subFiles) {
				System.out.println(file);
			}
			
			System.out.println("===================================");
			//所有盘符
			File[] roots = dir.listRoots();
			for (File file : roots) {
				System.out.println(file);
			}
	}

}

```

---

**递归：方法自己调用自己**

**递归头：何时结束递归**

**递归体：重复调用**

```java
package cn.io;

public class DirDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		printTen(1);
	}
	
	public static void printTen(int n) {
		if (n > 10) {//递归头：结束递归
			return ;
		}
		System.out.println(n);
		printTen(n+1);//方法自己调用自己
	}
}

```

---

## 打印子孙级目录和文件的名称

```java
package cn.io;

import java.io.File;

/**
 * 递归:自己调用自己
 * 打印子孙级目录和文件的名称
 * @author HQF
 *
 */
public class DirDemo01 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		File src = new File("E:\\JAVA\\cn.shangxuetang\\src\\cn\\io");
		printName(src,0);
	}

	//打印子孙级目录和文件的名称
	public static void printName(File src,int deep) {
		for(int i = 0 ; i < deep ; i ++)
		{
			System.out.print("-");
		}
		
		System.out.println(src.getName());
		if (null == src || !src.exists()) {
			return ;
		}else if (src.isDirectory()) {
			for(File sFile:src.listFiles())
			{
				printName(sFile,deep + 1);
			}
		}
	}
}

```

---