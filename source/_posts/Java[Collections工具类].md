---
title: 'Collections工具类[Java]'
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
abbrlink: 20994
date: 2020-04-10 22:44:54
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

类java.util.Collections提供了对Set, List, Map进行排序，填充，查找元素的辅助方法。

<!-- more -->

---


类java.util.Collections提供了对Set, List, Map进行排序，填充，查找元素的辅助方法。

1. void sort(List)// 对List容器内的元素排序，排序的规则是按照升序进行排序。
2. void shuffle(List) //对List容器内的元素进行随机排列。
3. void reverse(List) //对List容器内的元素进行逆续排列。
4. void fill(List, Object)//用一个特定的对象重写整个List容器。
5. int binarySearch(List, Object)//对于顺序的List容器，采用折半查找的方法查找特定对象。

---

```java
package cn.collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * 辅助类的使用
 * Collection是接口，Collections是工具类
 * @author HQF
 *
 */
public class TestCollections {
	public static void main(String[] args) {
		List<String> list = new ArrayList<>();
		for (int i = 0; i < 10; i++) {
			list.add("TestCollections" + i);
		}
		
		System.out.println(list);
		
		//随机排列list中的元素
		Collections.shuffle(list);
		System.out.println(list);
		
		//逆序排列
		Collections.reverse(list);
		System.out.println(list);
		
		//按照递增的方式排序。自定义的类使用：Comparable接口。
		Collections.sort(list);
		System.out.println(list);
		
		//二分法查找，或者：折半查找
		System.out.println(Collections.binarySearch(list, "JF"));
		
	}
}

```



























