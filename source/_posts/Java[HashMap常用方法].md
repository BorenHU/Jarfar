---
title: 'Map接口_HashMap常用方法[Java]'
top: false
cover: false
toc: true
mathjax: false
summary: 
tags:
  - Java
  - 数据结构与算法
categories:
  - Java
abbrlink: 1556
date: 2020-03-28 14:52:42
author:
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

现实生活中，我们经常需要成对存储某些信息。比如，我们使用的微信，一个手机号只能对应一个微信账户。这就是一种成对存储的关系。

<!-- more -->

---


​	现实生活中，我们经常需要成对存储某些信息。比如，我们使用的微信，一个手机号只能对应一个微信账户。这就是一种成对存储的关系。

​	Map就是用来存储“键(key)-值(Value)对”的。Map类中存储的“键值对”通过键来标识，所以“键对象”不能重复。

​	Map接口实现类有HashMap，TreeMap，HashTable，properties。

```java
//源码
public interface Map<K, V> {
    // Query Operations

    /**
     * Returns the number of key-value mappings in this map.  If the
     * map contains more than {@code Integer.MAX_VALUE} elements, returns
     * {@code Integer.MAX_VALUE}.
     *
     * @return the number of key-value mappings in this map
     */
```

### 常见方法

![](https://img-blog.csdnimg.cn/20200328182018633.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

- Map中键不能重复，如果重复，新的会覆盖旧的。（是否重复是根据equals判断）

```java
package cn.Map;
import java.util.HashMap;
import java.util.Map;
/**
 * 测试Map
 * @author HQF
 *
 */
public class TestMap {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee e1 = new Employee(1001, "张三",100000);
		Employee e2 = new Employee(1001, "李四",100000);
		Employee e3 = new Employee(1001, "王五",100000);
		
		Map<Integer, Employee> map = new HashMap<>();
		
		map.put(1001, e1);
		map.put(1002, e2);
		map.put(1003, e3);
		
		Employee employee = map.get(1001);
		System.out.println(employee.getEname());	
	}
}
//雇员信息
class Employee{
	private int id;
	private String ename;
	private double salary;
	
	public Employee(int id, String ename, double salary) {
		super();
		this.id = id;
		this.ename = ename;
		this.salary = salary;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id:"+id+"name:"+ename+"salary:"+salary;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}
}
```



---

- HashMap底层实现采用了哈希表，这是一种非常重要的数据结构。
- 哈希表的基本结构就是“数组”+“链表”。

![](https://img-blog.csdnimg.cn/20200328194725827.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

```java
//Node源码
//说实话，看不懂！
    static class Node<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;

        Node(int hash, K key, V value, Node<K,V> next) {
            this.hash = hash;
            this.key = key;
            this.value = value;
            this.next = next;
        }

        public final K getKey()        { return key; }
        public final V getValue()      { return value; }
        public final String toString() { return key + "=" + value; }

        public final int hashCode() {
            return Objects.hashCode(key) ^ Objects.hashCode(value);
        }

        public final V setValue(V newValue) {
            V oldValue = value;
            value = newValue;
            return oldValue;
        }

        public final boolean equals(Object o) {
            if (o == this)
                return true;
            if (o instanceof Map.Entry) {
                Map.Entry<?,?> e = (Map.Entry<?,?>)o;
                if (Objects.equals(key, e.getKey()) &&
                    Objects.equals(value, e.getValue()))
                    return true;
            }
            return false;
        }
    }
```

![](https://img-blog.csdnimg.cn/20200328195900598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20200328200529968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

### 测试Hash算法

```java
package cn.Map;
/**
 * 测试Hash算法
 * @author HQF
 *
 */
public class Test {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int  h = 25860399;
		int length = 16;
		myHash(h,length);
	}
	public static int myHash(int h,int length) {
		System.out.println(h&(length-1));
		//length为2的整数幂情况下，和取余的值一样。
		System.out.println(h%length);
		return h&(length-1);
	}
}
```



- JDK8中，当链表长度大于8时，链表就转换为红黑树，这样大大提高了查找的效率。