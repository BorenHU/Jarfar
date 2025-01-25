---
title: 'LinkedList特点和底层实现[Java]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Java
  - 数据结构与算法
categories:
  - Java
abbrlink: 48707
date: 2020-03-25 22:25:50
img:
coverImg:
password:
thumbnail: 
---

LinkedList特点和底层实现

<!-- more -->

---


LinkedList底层用双向链表实现的存储。

特点：查询效率低，增删效率高，线程不安全。

双向链表也叫双链表，是链表的一种，它的每个数据节点中都有两个指针，分别指向前一个节点和后一个节点。所以，从双向链表中的任意一个节点开始，都可以很方便地找到所有节点。

![](https://img-blog.csdnimg.cn/20200325222950337.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

每个节点都应该有三部分内容：

```java
class	Node{
		Node previous;	//前一个节点
		Object element;	//本节点保存的数据
		Node next;		//后一个节点
}
```

我们查看LinkedList的源码，可以看到里面包含了双向链表的相关代码：

```java
package cn.LinkedList;
public class Node {
	Node previous;
	Node next;
	Object element;	
	public Node(Node previous,Node next,Object element) {
		super();
		this.previous = previous;
		this.next = next;
		this.element = element;
	}
	public Node(Object element) {
		super();
		this.element = element;
	}	
}
```

```java
package cn.LinkedList;
/**
 * 自定义一个链表
 * @author HQF
 *
 */
public class LinkedList01 {
	private Node first;	//第一个节点
	private Node last;	//最后一个节点
	private int size;	//大小，有多少元素	
	//[]
	//['a','b','c']
	public void add(Object object) {
		Node node = new Node(object);	
		if (first==null) {
			first = node;
			last = node;
		}else {		
			node.previous = last;
			node.next = null;	
			last.next = node;
			last = node;
		}
	}
	@Override
	public String toString() {
		//[a,b,c]	first = a,	last = c;
		StringBuilder sBuilder = new StringBuilder("[");
		Node temp = first;
		while (temp!=null) {
			sBuilder.append(temp.element+",");
			temp = temp.next;
		}
		//setCharAt要使用单引号，否则会报错		sBuilder.setCharAt(sBuilder.length()-1, ']');
		return sBuilder.toString();
	}
	public static void main(String[] args) {
		LinkedList01 linkedList = new LinkedList01();
		linkedList.add("a");
		linkedList.add("b");
		linkedList.add("c");
	System.out.println(linkedList);
	}
}
```

```java
['a','b','c']
```

---

## LinkedList_get查询_节点遍历

```java
package cn.LinkedList;
/**
 * 自定义一个链表
 * @author HQF
 *
 */
public class LinkedList01 {
	private Node first;
	private Node last;
	private int size;
	
	//取出C元素，索引数为2
	public Object get(int index) {
		System.out.println(size);
		//异常处理
		if ((index<0)||(index>size-1)) {
			throw new RuntimeException("索引数字不合法"+index);
		}
		
		Node temp = null;
		
		//如果index大于size一半则从后便利，否则从前面遍历
		if (index<=(size>>1)) {//size>>1相当于除以2
			temp = first;
			for (int i = 0; i < index; i++) {
				temp = temp.next;
			}		
		}else {
			temp = last;
			for (int i = size-1; i > index; i--) {
				temp = temp.previous;
			}
		}
		return temp.element;
	}
	
	//[]
	//['a','b','c']
	public void add(Object object) {
		Node node = new Node(object);
		
		if (first==null) {
			first = node;
			last = node;
		}else {
			
			node.previous = last;
			node.next = null;
			
			last.next = node;
			last = node;
		}
		size++;
	}
	@Override
	public String toString() {
		//[a,b,c]	first = a,	last = c;
		StringBuilder sBuilder = new StringBuilder("[");
		Node temp = first;
		while (temp!=null) {
			sBuilder.append(temp.element+",");
			temp = temp.next;
		}
		//setCharAt要使用单引号，否则会报错
		sBuilder.setCharAt(sBuilder.length()-1, ']');
		return sBuilder.toString();
	}
	
	public static void main(String[] args) {
		LinkedList01 linkedList = new LinkedList01();
		
		linkedList.add("a");
		linkedList.add("b");
		linkedList.add("c");
		linkedList.add("d");
		linkedList.add("e");
		linkedList.add("f");
		
		System.out.println(linkedList);
		System.out.println(linkedList.get(4));
	}
}

```

---

## LinkedList_remove移除节点

```java
package cn.LinkedList;

/**
 * 自定义一个链表
 * @author HQF
 *
 */
public class LinkedList01 {
	private Node first;
	private Node last;
	private int size;
	
	//移除指定的元素
	public void remove(int index) {
		Node temp = getNode(index);
		
		if (temp!=null) {
			Node up = temp.previous;
			Node down = temp.next;
			
			if (up!=null) {
				up.next = down;
			}
			
			if (down!=null) {
				down.previous = up;
			}
			
			if (index == 0) {
				first = down;
			}
			
			if (index == size-1) {
				last = up;
			}
			size--;
		}
	}
	
	//取出C元素，索引数为2
	public Object get(int index) {
		System.out.println(size);
		//异常处理
		if ((index<0)||(index>size-1)) {
			throw new RuntimeException("索引数字不合法"+index);
		}
		Node temp = getNode(index);
		
		return temp!=null?temp.element:null;
	}
	
	public Node getNode( int index) {
		Node temp = null;
		
		//如果index大于size一半则从后便利，否则从前面遍历
		if (index<=(size>>1)) {//size>>1相当于除以2
			temp = first;
			for (int i = 0; i < index; i++) {
				temp = temp.next;
			}		
		}else {
			temp = last;
			for (int i = size-1; i > index; i--) {
				temp = temp.previous;
			}
		}
		return temp;
	}
	
	//[]
	//['a','b','c']
	public void add(Object object) {
		Node node = new Node(object);
		
		if (first==null) {
			first = node;
			last = node;
		}else {
			
			node.previous = last;
			node.next = null;
			
			last.next = node;
			last = node;
		}
		size++;
	}
	@Override
	public String toString() {
		//[a,b,c]	first = a,	last = c;
		StringBuilder sBuilder = new StringBuilder("[");
		Node temp = first;
		while (temp!=null) {
			sBuilder.append(temp.element+",");
			temp = temp.next;
		}
		//setCharAt要使用单引号，否则会报错
		sBuilder.setCharAt(sBuilder.length()-1, ']');
		return sBuilder.toString();
	}
	
	public static void main(String[] args) {
		LinkedList01 linkedList = new LinkedList01();
		
		linkedList.add("a");
		linkedList.add("b");
		linkedList.add("c");
		linkedList.add("d");
		linkedList.add("e");
		linkedList.add("f");
		
		System.out.println(linkedList);
		System.out.println(linkedList.get(4));
		linkedList.remove(0);
		System.out.println(linkedList);
	}
}
```

**代码实现**

```java
[a,b,c,d,e,f]
6
e
[b,c,d,e,f]
```

---

## LinkedList_插入节点

```java
//添加节点
	public void add(int index,Object obj) {
		Node newNode = new Node(obj);
		Node temp = getNode(index);
		
		
		if (temp!=null) {
			Node up = temp.previous;
			
			up.next = newNode;
			newNode.previous = up;
			
			newNode.next = temp;
			temp.previous = newNode;
		}
	}
```

```java
linkedList.add(3,"JF");
		System.out.println(linkedList);
```

```java
//输出
[a,b,c,JF,d,e,f]
```

---

## LinkedList完善_增加泛型

```java
package cn.LinkedList;

/**
 * 自定义一个链表
 * @author HQF
 *
 */
public class LinkedList01<E> {
	private Node first;
	private Node last;
	private int size;
	
	//添加节点
	public void add(int index,E element) {//alt+shirt +r 替换
		Node newNode = new Node(element);
		Node temp = getNode(index);
		
		if (temp!=null) {
			Node up = temp.previous;
			
			up.next = newNode;
			newNode.previous = up;
			
			newNode.next = temp;
			temp.previous = newNode;
		}
	}
	
	//移除指定的元素
	public void remove(int index) {
		
		checkRange(index);
		
		Node temp = getNode(index);
		
		if (temp!=null) {
			Node up = temp.previous;
			Node down = temp.next;
			
			if (up!=null) {
				up.next = down;
			}
			
			if (down!=null) {
				down.previous = up;
			}
			
			if (index == 0) {
				first = down;
			}
			
			if (index == size-1) {
				last = up;
			}
			size--;
		}
	}
	
	//取出C元素，索引数为2
	public E get(int index) {
		System.out.println(size);

		Node temp = getNode(index);
		
		return temp!=null?(E)temp.element:null;
	}
	
	//处理索引的index合不合法
	private void checkRange(int index) {
		//异常处理
		if ((index<0)||(index>size-1)) {
			throw new RuntimeException("索引数字不合法"+index);
		}
	}
	
	private Node getNode( int index) {
		checkRange(index);
		
		Node temp = null;
		
		//如果index大于size一半则从后便利，否则从前面遍历
		if (index<=(size>>1)) {//size>>1相当于除以2
			temp = first;
			for (int i = 0; i < index; i++) {
				temp = temp.next;
			}		
		}else {
			temp = last;
			for (int i = size-1; i > index; i--) {
				temp = temp.previous;
			}
		}
		return temp;
	}
	
	//[]
	//['a','b','c']
	public void add(E element) {
		Node node = new Node(element);
		
		if (first==null) {
			first = node;
			last = node;
		}else {
			
			node.previous = last;
			node.next = null;
			
			last.next = node;
			last = node;
		}
		size++;
	}
	@Override
	public String toString() {
		//[a,b,c]	first = a,	last = c;
		StringBuilder sBuilder = new StringBuilder("[");
		Node temp = first;
		while (temp!=null) {
			sBuilder.append(temp.element+",");
			temp = temp.next;
		}
		//setCharAt要使用单引号，否则会报错
		sBuilder.setCharAt(sBuilder.length()-1, ']');
		return sBuilder.toString();
	}
	
	public static void main(String[] args) {
		LinkedList01<String> linkedList = new LinkedList01<>();
		
		linkedList.add("a");
		linkedList.add("b");
		linkedList.add("c");
		linkedList.add("d");
		linkedList.add("e");
		linkedList.add("f");
		
		System.out.println(linkedList);
		System.out.println(linkedList.get(4));
		linkedList.add(3,"JF");
		System.out.println(linkedList);
		System.out.println(linkedList.get(1));
	}
}

```