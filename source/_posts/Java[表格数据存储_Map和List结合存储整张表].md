---
title: '表格数据存储_Map和List结合存储整张表[Java]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Java
  - 多线程
categories:
  - Java
abbrlink: 42079
date: 2020-04-13 13:18:27
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/23.jpg)

<!-- more -->

---


![表格数据存储](https://img-blog.csdnimg.cn/20200413184142898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

**ORM思想：对象关系映射。**

```java
package cn.collection;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
/**
 * ORM思想的简单实验：map表示一行数据，多行数据是多个map；将多个map放到list中
 * @author HQF
 *
 */

public class TestStoreData {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Map<String, Object> row = new HashMap<>();
		row.put("id", 1001);
		row.put("姓名", "张三");
		row.put("年龄", 22);
		row.put("薪水", 20000);
		row.put("入职日期", "2018.4.5");
		
		Map<String, Object> row1 = new HashMap<>();
		row1.put("id", 1002);
		row1.put("姓名", "李四");
		row1.put("年龄", 30);
		row1.put("薪水", 30000);
		row1.put("入职日期", "2018.5.5");
		
		Map<String, Object> row2 = new HashMap<>();
		row2.put("id", 1003);
		row2.put("姓名", "王五");
		row2.put("年龄", 24);
		row2.put("薪水", 25000);
		row2.put("入职日期", "2018.6.5");
		
		List<Map<String,Object>> table = new ArrayList<>();
		table.add(row);
		table.add(row1);
		table.add(row2);
		
		for (Map<String, Object> row3:table) {
			Set<String> keySet = row3.keySet();
			for (String key:keySet) {
				System.out.print(key + " : " + row3.get(key) + " ");
			}
			System.out.println();
		}
	}

}

```

---

## 表格数据存储_bean和list结合存储整张表

每一行数据使用一个：javabean对象

整个表格使用一个Map/List

```java
package cn.collection;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
/**
 * 每一行数据使用javabean对象，多行使用放到map或list中
 * @author HQF
 *
 */
public class TestStoreData2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		User user1 = new User(1001,"张三",20000,"2018.5.5");
		User user2 = new User(1002,"李四",30000,"2019.5.5");
		User user3 = new User(1003,"王五",40000,"2020.5.5");
		User user4 = new User(1004,"赵六",50000,"2021.5.5");

		List<User> list = new ArrayList<>();
		list.add(user1);
		list.add(user2);
		list.add(user3);
		list.add(user4);
		
		for (User user : list) {
			System.out.println(user);
		}
		
		Map<Integer, User> map = new HashMap<>();
		map.put(1001, user1);
		map.put(1002, user2);
		map.put(1003, user3);
		map.put(1004, user4);
		
		Set<Integer> keySet = map.keySet();
		for (Integer integer : keySet) {
			System.out.println(integer + "=====" + map.get(integer));
		}
	}
}

//一个完整的javabean方法。要有set和get方法，以及无参构造器
class User{
	private int id;
	private String name;
	private double salary;
	private String hiredate;
	
	public User(int id, String name, double salary, String hiredate) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
		this.hiredate = hiredate;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getHiredate() {
		return hiredate;
	}
	public void setHiredate(String hiredate) {
		this.hiredate = hiredate;
	}
	
	@Override
	public String toString() {
		return "id :" + id + " name : " + name + "Salary : " + salary + "hiredate : " + hiredate; 
	}
}
	
	

```

