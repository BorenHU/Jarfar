---
title: '多线程_高级主题[Java]'
top: false
cover: false
toc: true
mathjax: false
icons:
  - fas fa-star green
music:
  server: netease
  type: song
  id: 16846091
tags:
  - Java
  - 多线程
categories:
  - Java
thumbnail: 'https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg'
abbrlink: 10501
date: 2020-05-01 12:02:03
author:
img:
coverImg:
password:
summary:
---

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/23.jpg)<!-- more -->

---

## 1. 任务定时调度

某一个有规律的时间点干某件事：

- 每天早上8点，闹钟响起
- 每年4月1自己给当年暗恋女神发一封匿名贺卡
- 想每隔1小时，上传一下自己的学习笔记到云盘

通过Timer和Timetask，我们可以实现定时启动某个线程。

- java.util.Timer: 类似脑中的功能，本身实现的就是一个线程
- java.util.TimerTask: 一个抽象类，该类实现了Runnable接口，所以该类具备多线程的能力。

```java
package cn.TimerTest01;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Timer;
import java.util.TimerTask;

/**
 * 任务调度：
 * Timer 和 TimerTask类
 * @author HQF
 *
 */
public class TimerTest01{
	public static void main(String[] args) {
		Timer timer = new Timer();
		//执行安排
//		timer.schedule(new MyTask(),1000,200);
		//设置日历，在具体的时间执行某个线程
		Calendar cal = new GregorianCalendar(2099,12,31,21,53,54);
		timer.schedule(new MyTask(), cal.getTime(),200);//指定时间
		
	}
}

class MyTask extends TimerTask{
	@Override
	public void run() {
		// TODO Auto-generated method stub
	for (int i = 0; i < 10; i++) {
		System.out.println("放空大脑，休息一会");
	}	
	System.out.println("----------end----------");
	}
}
```

---

## 2. _quartz

Scheduler - 调度器，控制所有的调度

Trigger - 触发条件，采用DSL模式

JobDetail - 需要处理的JOB

 Job - 执行逻辑

DSL : Domain-specific language领域特定语言，针对一个特定的领域，具有受限表达性的一种计算机程序语言，即领域专用语言，声明式编程：

- Method Chaining 方法链 Fluent Style 流畅风格，builder模式构建器
- Nested Functions 嵌套函数
- Lambda Expressions/Closures
- Functional Sequence

## 3.HappenBefore

- 你写的代码很可能根本没按你期望的顺序执行，因为编译器和CPU会尝试重排指令使得代码更快地运行

## 4. Volatile

Volatile 保证线程间变量的可见性，简单地说就是当线程A对变量X进行了修改后，在线程A后面执行的其他线程能看到变量X的变动，更详细地说是要符合以下两个规则：

- 线程对变量进行修改之后，要立刻回写到主内存
- 线程对变量读取的时候，要从主内存中度，而不是缓存。

![Volatle](https://img-blog.csdnimg.cn/20200502115319793.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

各线程的工作内存间彼此独立，互不可见，在线程启动的时候，虚拟机为每个内存分配一块工作内存，不仅包括了线程内部定义的局部变量，也包含了线程所需要使用的共享变量（非线程内构造的对象）的副本，即为了提高执行效率。

volatile是不错的机制，但是volatile不能保证原子性

