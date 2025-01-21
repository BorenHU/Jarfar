---
title: 'HashMap手动实现[Java]'
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
abbrlink: 50515
date: 2020-03-29 22:36:48
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

JavaHashMap底层原理_查找键值对过程

<!-- more -->

---


![](https://img-blog.csdnimg.cn/20200329223435359.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20200329224132728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

## 手动实现HashMap

```java
package cn.Map;
/**
 * 自定义一个HashMap
 * 实现了put方法增加键值对，并解决了键重复的时候覆盖相应的节点。
 * 实现toString方法，方便查看Map中的键值对信息
 * @author HQF
 * @param <V>
 *
 */
public class TestHashMap<k,V> {
	Node2[] table;//位桶数组。bucket array
	int size;		//存放的键值对的个数。
	public TestHashMap() {
		table = new Node2[16];
	}
	
	public V get(k key) {
		int hash = myHash(key.hashCode(), table.length);
		V value = null;
		if (table[hash]!=null) {
			Node2 temp = table[hash];
			while (temp!=null) {
				if (temp.key.equals(key)) {
					//如果相等，则说明找到了键值对，返回value对象
					value = (V)temp.value;
					break;
				}else {
					temp = temp.next;
				}
			}
		}
		return value;
	}
	
	public void put(k key,V value) {
		//如果要完善，还需要考虑数组扩容问题。
		//定义了新的节点对象
		Node2 newNode = new Node2();
		newNode.hash = myHash(key.hashCode(), table.length);
		newNode.key = key;
		newNode.value = value;
		newNode.next = null;
		
		Node2 temp = table[newNode.hash];
		//正在遍历最后一个元素
		Node2 iterLast = null;
		boolean keyRepeat = false;
		
		if (temp==null) {
			//此处数组为空，则直接将新节点放进去
			table[newNode.hash] = newNode;
			size++;
		}else {
			//此处数组元素不为空。则遍历对应链表。
			while (temp!=null) {
				//判断key是否重复，如果重复，则覆盖
				if (temp.key.equals(key)) {
					keyRepeat = true;
				//只是覆盖value，其他的值（hash，key，next）保持不变。
					temp.value = value;
					break;
				}else {
				//key不重复，则遍历下一个
				iterLast = temp;
				temp = temp.next;
			}
				if (!keyRepeat) {
					//没有发生key重复的情况，则添加到链表最后
					iterLast.next = newNode;
					size++;
				}
		iterLast.next = newNode;
			}
	}
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		StringBuilder sBuilder = new StringBuilder("{")  ;
	
		for (int i = 0; i < table.length; i++) {
			Node2 temp = table[i];
			while(temp!=null) {
				sBuilder.append(temp.key+":"+temp.value+",");
				temp = temp.next;
			}
		}
		sBuilder.setCharAt(sBuilder.length()-1, '}');
		return sBuilder.toString();
	}
	
	public static int myHash(int v,int length) {
//		//直接位运算，效率高
//		System.out.println("hash in myHash:"+(v&(length-1)));
//		//取模运算，效率低
//		System.out.println("hash in myHash:"+(v%(length-1)));
		return v&(length-1);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TestHashMap<Integer,String> m = new	TestHashMap();
		m.put(10, "aa");
		m.put(20, "bb");

		System.out.println(m);	
//		for (int i = 10; i < 100; i++) {
//			System.out.println(i + "---"+myHash(i,16));//53,69,85 hash值相同
//		}
	System.out.println(m.get(53));
	}
}

```

