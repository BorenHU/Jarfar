---
title: 'Iterator迭代器遍历容器元素(List,Set,Map)[Java]'
top: false
cover: false
toc: true
mathjax: false
summary: 
tags:
  - Java
categories:
  - Java
abbrlink: 24821
date: 2020-04-10 13:28:49
author:
img:
coverImg:
password:
thumbnail: 
---

为什么要有迭代器？

<!-- more -->

---


​		迭代模式是访问集合类的通用方法，只要集合类实现了Iterator接口，就可以用迭代的方式来访问集合类内部的数据，Iterator访问方式把对不同集合类的访问逻辑抽象出来，使得不用暴露集合内部的结构而达到循环遍历集合的效果。 
例如，如果没有使用Iterator，遍历一个数组的方法是使用索引：

```java
for(int i=0; i<array.length; i++) { … get(i) … }  
```

​		这种方法的缺点就是事先必须知道集合的数据结构，而且当我换了一种集合的话代码不可重用，要修改，比如我用set，就不能通过索引来遍历了。访问代码和集合是紧耦合，无法将访问逻辑从集合类和客户端代码中剥离出来，每一种集合类对应一种访问方式，代码不可重用。 为解决以上问题，Iterator模式总是用同一种逻辑来遍历集合。每一种集合类返回的Iterator具体类型可能不同，Array可能返回ArrayIterator，Set可能返回SetIterator，Tree 可能返回TreeIterator，但是它们都实现了Iterator接口，因此，客户端不关心到底是哪种Iterator，它只需要获得这个 Iterator接口即可，这就是面向对象的威力。 

这就是针对抽象编程的原则：对具体类的依赖性最小。

参考：https://blog.csdn.net/FST_XUAN/article/details/78042897

##  Iterator迭代器遍历容器元素(List,Set,Map)

**迭代器为我们提供了统一的遍历容器的方式**

### 迭代器遍历List

```java
package cn.Iterator;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * 测试迭代器遍历List，Set，Map
 * @author HQF
 *
 */
public class TestIterator {
	
	public static void main(String[] args) {
		testIteratorList();
	}
	
	public static void testIteratorList() {
		List<String> list = new ArrayList<>();
		list.add("aa");
		list.add("bb");
		list.add("cc");
		
		for (Iterator<String> iter = list.iterator(); iter.hasNext();) {
			String temp = iter.next();
			System.out.println(temp);
			
		}
	}
}

```

```java
aa
bb
cc
```

---

### 迭代器遍历Set

```java
package cn.Iterator;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

/**
 * 测试迭代器遍历List，Set，Map
 * @author HQF
 *
 */
public class TestIteratorSet {
	
	public static void main(String[] args) {
		testIteratorSet();
	}
	
	public static void testIteratorSet() {
		Set<String> set = new HashSet<>();
		set.add("aa");
		set.add("bb");
		set.add("cc");
		
		for (Iterator<String> iter = set.iterator(); iter.hasNext();) {
			String temp = iter.next();
			System.out.println(temp);
			
		}
	}
}

```

---

### 迭代器遍历Map①

```java
package cn.Iterator;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;



/**
 * 测试迭代器遍历List，Set，Map
 * @author HQF
 *
 */
public class TestIteratorMap {
	
	public static void main(String[] args) {
		testIteratorMap();
	}
	
	public static void testIteratorMap() {
		Map<Integer,String> map = new HashMap<>();
		map.put(100,"J");
		map.put(200,"F");
		map.put(300,"C");
		
		Set<Entry<Integer,String>> ss = map.entrySet();
		
		for (Iterator<Entry<Integer, String>>iter = ss.iterator(); iter.hasNext();) {
			Entry<Integer, String> temp = iter.next();
			
			System.out.println(temp.getKey() + "--" + temp.getValue());
		}
	}
}


```

### 迭代器遍历Map②

```java
package cn.Iterator;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

/**
 * 测试迭代器遍历List，Set，Map
 * @author HQF
 *
 */
public class TestIteratorMape {
	
	public static void main(String[] args) {
		testIteratorMape();
	}
	
	public static void testIteratorMape() {
		Map<Integer,String> map = new HashMap<>();
		map.put(100,"J");
		map.put(200,"F");
		map.put(300,"C");
		
		Set<Integer> keySet = map.keySet();
		
		for (Iterator<Integer> iter = keySet.iterator(); iter.hasNext();) {
			Integer key = iter.next();
			System.out.println(key + "--" + map.get(key));
		}
	}
}


```