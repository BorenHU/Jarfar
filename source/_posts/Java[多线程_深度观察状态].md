---
title: '多线程_深度观察状态[Java]'
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
abbrlink: 54645
date: 2020-04-24 09:32:55
img:
coverImg:
password:
thumbnail: 
---

多线程_深度观察状态

<!-- more -->

---


### 线程的优先级

**priority**

Java提供一个线程调度器来监控控制程序中启动后进入就绪状态的所有线程。线程调度器按照线程的优先级决定应调度那个线程来执行。

- Thread.MIN_PRIORITY = 1
- Thread.MAX_PRIORITY = 10
- Thread.NORM_PRIORITY = 5

使用下述方法获得或设置线程对象优先级。

- int getPriority();
- void setPriority(int newPriority);

优先级的设定建议在start（）调用前

注意：优先级低只是意味着获得调度的概率低。并不是绝对调用优先级高后调用优先级低的线程。

```java
package cn.Thread;
/**
 * 线程优先级 1- 10
 * - Thread.MIN_PRIORITY = 1
 * - Thread.MAX_PRIORITY = 10
 * - Thread.NORM_PRIORITY = 5
 * @author HQF
 *
 */
public class PriorityTest {

	public static void main(String[] args) {
		System.out.println(Thread.currentThread().getPriority());
		
		MyPriority mp = new MyPriority();
		Thread t1 = new Thread(mp,"adidas");
		Thread t2 = new Thread(mp,"NIKE");
		Thread t3 = new Thread(mp,"回力");
		Thread t4 = new Thread(mp,"李宁");
		Thread t5 = new Thread(mp,"双星");
		Thread t6 = new Thread(mp,"puma");

		//设置优先级在启动前
		t1.setPriority(Thread.MAX_PRIORITY);
		t2.setPriority(Thread.MAX_PRIORITY);
		t3.setPriority(Thread.MAX_PRIORITY);
		t4.setPriority(Thread.MIN_PRIORITY);
		t5.setPriority(Thread.MIN_PRIORITY);
		t6.setPriority(Thread.MIN_PRIORITY);
		t1.start();
		t2.start();
		t3.start();
		t4.start();
		t5.start();
		t6.start();
		
	}
}

class MyPriority implements Runnable{
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println(Thread.currentThread().getName() + "-->"+Thread.currentThread().getPriority());
		Thread.yield();
	}
}
```

---

### 多线程_守护线程

- 线程分为用户线程和守护线程；
- 虚拟机必须确保用户线程执行完毕；
- 虚拟机不用等待守护线程执行完毕；
- 如后台记录操作日志，监控内存使用等。

```java
package cn.Thread;
/**
 * 守护线程 : 是为用户线程服务的
 * jvm停止不用等待守护线程执行完毕
 * 默认线程：用户线程，jvm等待用户线程执行完毕才会停止
 * @author HQF
 *
 */
public class DaemonTest {

	public static void main(String[] args) {
		God god = new God();
		Youu you = new Youu();
		Thread t = new Thread(god);
		t.setDaemon(true);//将用户线程调整为守护
		t.start();
		new Thread(you).start();
	}
}

class Youu implements Runnable {
	@Override
	public void run() {
		// TODO Auto-generated method stub
		for (int i = 0; i <= 365; i++) {
			System.out.println("happy life......");
		}
		System.out.println("oooooo......");
	}
}

class God implements Runnable{
	@Override
	public void run() {
		// TODO Auto-generated method stub
	for (; true; ) {
		System.out.println("bless you ......");
	}
	}
}
```

---

### 多线程\_基本信息\_网红思维[Java]

- isAlive():判断线程是否还活着，即线程是否还未终止。

- setName():给线程起一个名字。

- getName():获取线程的名字。
- currentThread():取得当前正在运行的线程对象，也就是获取自己本身。

```java
package cn.Thread;
/**
 * 其他方法
 * isAlive()表示线程是否还活着
 * thread.currentThread（）：当前线程
 * setName(),getName():代理名称
 * 程序员的劳斯莱斯
 * @author HQF
 *
 */
public class InfoTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(Thread.currentThread().isAlive());
	
	//设置名称：真实角色 + 代理角色
	MyInfo info = new MyInfo("战斗机");
	Thread t = new Thread(info);
	t.setName("公鸡");
	t.start();
	
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	System.out.println(t.isAlive());
	}

}

class MyInfo implements Runnable{
	private String name;
	
	public MyInfo(String name) {
		this.name = name;
		}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println(Thread.currentThread().getName() + "-->" + name);
	}
}
```

---

