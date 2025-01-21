---
title: '垃圾回收机制[Java]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Java
  - 虚拟机
categories: Java
abbrlink: 50246
date: 2020-03-12 14:07:30
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

垃圾回收机制[Java]

<!-- more -->

---

Java虚拟机的内存可以分为三个区域：
- 栈 Stack
- 堆 Heap
- 方法区 Method Area

### 栈的特点

1. 栈描述的是方法执行的内存模型。每个方法被调用都会创建一个栈帧（存储局部变量，操作数，方法出口等）
2. JVM为每一个线程创建一个栈，用于存放该线程执行方法的信息（实际参数，局部变量等）
3. 栈属于线程私有，不能实现线程间的共享
4. 栈的存储特性是：“先进后出，后进后出”
5. 栈是由系统自动分配，速度快！栈是一个连续的存储空间。

### 堆的特点

1. 堆用于存储创建好的对象和数组（数组也是对象）。
2. JVM只有一个堆，被所有线程共享。
3. 堆是一个不连续的内存空间，分配灵活，速度慢。

### 方法区的特点

1. JVM只有一个方法区，被所有线程共享。
2. 方法区实际也是堆，只是用于存储类，常量相关的信息。
3. 用来存放程序中永远是不变式或唯一的内容。（类信息[Class对象]，静态变量，字符串常量）

<img src="https://gitee.com/BorenHU/BlogImage/raw/master/MarkDown/0.jpg" >

## Java垃圾回收机制

垃圾回收机制（Garbage Collection）

> 相关算法：1. 引用计数法 2. 引用可达法

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/1.jpg)

### 垃圾回收过程

1. 新创建的对象，绝大多数都会存储在Eden中。

2. 当Eden满了（达到一定比例）不能创建新对象，则触发垃圾回收（GC），将无用对象清理掉，然后剩余对象复制到某个Survivor中，如S1，同时清空Eden区。

3. 当Eden区再次满了，会将S1中的不能清空的对象存到另外一个Survivor中，如S2，同时将Eden区中的不能清空的对象，也复制到S1中，保证Eden和S1均被清空。

4. 重复多次（默认是15次）Survivor中没有被清理的对象，则会复制到老年代old（Tenured）区中。

5. 当Old区满了，则会触发一个一个完整地垃圾回收机制（FullGc）

   之前新生代的垃圾回收称为（MinorGc）。

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/2.png)