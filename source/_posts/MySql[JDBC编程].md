---
title: 'JDBC编程和MySql数据库[MySql]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - MySql
categories:
  - MySql
abbrlink: 8339
date: 2020-04-10 23:29:58
img:
coverImg:
password:
---

什么是JDBC编程？

<!-- more -->

---

## 什么是JDBC编程？

Java Database Connectivity

简单来说就是使用Java里面提供的一些类和方法，利用程序链接数据库，进行增删改查操作。这个过程就叫做JDBC编程。

## 跟数据库相关的操作命令

1. create database db_name;

   //创建数据库

2. show database;

   //展示数据库

3. drop database db_name;

   //删除数据库

4. use db_name;

   //使用数据库

5. select database();

   //查看当前正在使用的数据库

6. create table tab name(

   字段名	类型（长度）	[约束],

   字段名	类型（长度）	[约束]

   );

   //创建表

   //create table user(id int primary key auto increment, username varchar(16), password varchar(16));

7. show tables

   //展示表

8. drop table table_name

   //删除表

9. desc tab_name;

   //查看表结构

10. insert into tab_name values(null , 'siki' , '123');

    //插入用户

    select * from tab_name;

    //查询表

    delete from user where id = 3;

    //删除user表中id为3的字段

    update user set username = 'Micheal' where id = 5;

    //修改user的id = 5的表明为'Micheal'

    insert into user(username,password) values('Jack' , '123123');

    //指定某些列插入

    rename table user to jf_user;

    //修改表名

## JDBC

1. 安装MySql Connector for Java
2. 先导入MySql驱动（通过驱动里面的API访问MySql数据库）

```java
package JDBC;

import java.sql.DriverManager;
import java.sql.SQLException;

public class jdbcdemo01 {

	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");//使用什么驱动连接数据库
		
		String url = "jdbc:mysql://localhost:3306/testweb";
//		指定编码形式
//			String url = "jdbc:mysql://localhost:3306/testweb?useUnicode=true&characterEncoding=UTF8";
			String user = "root";
			String password = "";
			Connection con =DriverManager.getConnection(url, user, password);
		
			Statement stmt = con.createStatement();
			Resultset rs = stmt.executeQuery("select * fromuser");
			
			while(rs.next()) {
				System.out.println(rs.getInt(1) + "," + rs.getString(2) + "," + rs.getString(3));
				
			}
			
			if (rs != null) rs.close();
			if (stmt != null) rs.close();
			if (con != null) con.close();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
}

```

> -2k
>
> bug太多
>
> 看不懂
>
> 写不下去了



