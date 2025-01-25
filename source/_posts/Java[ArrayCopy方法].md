---
title: 'ArrayCopy方法[Java]'
top: false
cover: false
toc: true
mathjax: false
summary: 
tags:
  - Java
categories:
  - Java
abbrlink: 21038
date: 2020-03-23 16:43:51
author:
img:
coverImg:
password:
thumbnail: 
---

作为小白一直在使用for循环对数组进行复制，添加和删除，学习过程中发现ArrayCopy（）方法在对数组进行删除，添加的时候更加高效，便利。

<!-- more -->

---

## ArrayCopy（）

作为小白一直在使用for循环对数组进行复制，添加和删除，学习过程中发现ArrayCopy（）方法在对数组进行删除，添加的时候更加高效，便利。

我们先来看一下底层源码：

```java
    public static native void arraycopy(Object src,  int  srcPos,
                                        Object dest, int destPos,
                                        int length);

    /**
     * Returns the same hash code for the given object as
     * would be returned by the default method hashCode(),
     * whether or not the given object's class overrides
     * hashCode().
     * The hash code for the null reference is zero.
     *
     * @param x object for which the hashCode is to be calculated
     * @return  the hashCode
     * @since   1.1
     * @see Object#hashCode
     * @see java.util.Objects#hashCode(Object)
     */
```

src：要复制的数组(原数组)

srcPos：复制源数组的起始位置

dest：目标数组

destPos：目标数组的下标位置

length：要复制的长度

直观的说就是：

- Arraycopy(被复制的数组, 从第几个元素开始复制, 要复制到的数组, 从第几个元素开始粘贴, 一共需要复制的元素个数);

---

### 使用ArrayCopy（）直接复制数组
```java
public class TestArrayCopy {
	public static void main(String[] args) {
		String[] s1 = {"aa","bb","cc","dd","ee"};
		String[] s2 = new String[10];
		
		System.arraycopy(s1,1,s2, 1, 3);
		
		for (int i = 0; i < s2.length; i++) {
			System.out.println(i+"--"+s2[i]);
		}
	}
}
```

- 通过Arraycopy（）方法，把s1数组第一个位置复制到s2第一个位置中，复制长度3.

![](https://img-blog.csdnimg.cn/2020032409024824.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_10,color_FFFFFF,t_70)
### 使用ArrayCopy（）删除数组中的蔡徐坤
给定一个明星数组，我们的目标是删除蔡徐坤。
```java
public class TestArrayCopy {
	public static void main(String[] args) {
		String[] s = {"胡歌","彭于晏","蔡徐坤","周润发","周星驰"};
		removeElement(s, 3);
	}
	public static String[] removeElement(String[] s,int index) {
		System.arraycopy(s,index,s,index-1,s.length-index);
		s[s.length-1] = null;
		for (int i = 0; i < s.length; i++) {
			System.out.println(i+"--"+s[i]);
		}
		return s;
	}
	}
```
![](https://img-blog.csdnimg.cn/2020032409302189.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

>通过对数组进行自身的复制，我们成功的把蔡徐坤删除。





