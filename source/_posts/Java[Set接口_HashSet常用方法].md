---
title: 'Set接口_HashSet常用方法[Java]'
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
abbrlink: 47880
date: 2020-04-10 12:28:26
img:
coverImg:
password:
thumbnail: 
---

Set接口继承自Collection,Set接口中没有新增方法，方法和Collection保持完全一致。我们在前面通过List学习的方法，在Set中仍然适用。因此学习Set的使用将没有任何难度。



<!-- more -->

---


![接口](https://img-blog.csdnimg.cn/20200410123109904.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

- Set接口继承自Collection,Set接口中没有新增方法，方法和Collection保持完全一致。我们在前面通过List学习的方法，在Set中仍然适用。因此学习Set的使用将没有任何难度。
- Set容器特点：无序，不可重复。无序指Set中的元素没有索引，我们只能遍历查找；不可重复指不允许加入重复的元素。更确切地讲，新元素如果和Set中某个元素通过equals（）方法对比为true，则不能加入；甚至，Set中也只能放入一个null元素，不能多个。
- Set常用的实现有：HashSet，TreeSet等，我们一般使用HashSet。

![HashSet方法](https://img-blog.csdnimg.cn/20200410125650172.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

---

### 手动实现HashSet

```java
package cn.set;

import java.util.HashMap;

/**
 * 手动实现一个HashSet，更深刻理解HashSet底层原理
 * @author HQF
 *
 */

public class JhashSet {
		
	HashMap map;
	private static final Object PRESENT = new Object();
	
	public JhashSet() {
		map = new HashMap();
	}
	
	public int size() {
		return map.size();
	}
	
	public void add(Object o) {
		map.put(o,PRESENT);
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		for (Object key:map.keySet()) {
			sb.append(key + ",");
		}
		sb.setCharAt(sb.length() - 1, ']');
		return sb.toString();
	}
	
	public static void main(String[] args) {
		JhashSet set = new JhashSet();
		set.add("H");
		set.add("u");
		set.add("q");
		set.add("i");
		set.add("A");
		System.out.println(set);
	}
}

```