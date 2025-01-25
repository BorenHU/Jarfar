---
title: '多线程编程②[Java]'
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
abbrlink: 30829
date: 2020-04-22 17:35:24
img:
coverImg:
password:
thumbnail: 
---

多线程编程②[Java]

<!-- more -->

---


- 线程就是独立的执行路径
- 在程序运行时，即使没有自己创建线程，后台也会存在多个线程，如gc线程，主线程。
- main（）称之为主线程，为系统的入口点，用于执行整个过程；
- 在一个进程中，如果开辟了多个线程，线程的运行由调度器安排调度，调度器是与操作系统紧密相关的，先后顺序是不能人为的干预的；
- 对同一份资源操作时，会存在资源抢夺的问题，需要加入并发控制；
- 线程会带来额外的开销，如cpu调度时间，并发控制开销。
- 每个线程在自己的工作内存交互，加载和存储主内存控制不当会造成数据不一致。

---

## 创建线程的三种方式

- 继承Thread类
- 实现Runnable接口
- 实现Callable接口

## 线程方法

- sleep（）
  - 使线程停止运行一段时间，将处于阻塞状态
  - 如果调用了sleep方法之后，没有其他等待执行的线程，这个时候当前线程不会马上恢复执行！
- join（）
  - 阻塞指定线程等到另一个线程完成以后再继续执行。
- yield（）
  - 让当前正在执行线程暂停，不是阻塞线程，而是将线程转入就绪状态；
  - 调用了yield方法之后，如果没有其他等待执行的线程，此时当前线程就会马上恢复执行！
- setDaemon（）
  - 可以将指定的线程设置成后台线程，守护线程；
  - 创建用户线程的线程结束时，后台线程也随之消亡；
  - 只能在线程启动之前把它设为后台线程
- setPriority（int newPriority） getPriority（）
  - 线程的优先级代表的是概率
  - 范围从1到10，默认为5
- stop（）停止线程
  - 不推荐使用

---

1. 继承Thread类

```java
package cn.Thread;
 /**
  * 创建线程方式一：
  * 1. 创建：继承Thread + 重写run
  * 2. 启动：创建子类对象 + start
  * 
  * @author HQF
  *
  */
public class StartThread extends Thread{
/**
 * 线程入口点
 * @param args
 */
	
	@Override
	public void run() {
		for (int i = 0; i < 20; i++) {
			System.out.println("一边听歌");
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//启动线程
		StartThread startThread = new StartThread();
		startThread.start();
		
		for (int i = 0; i < 20; i++) {
			System.out.println("一边coding");
		}
	}
}

```

---

![](https://img-blog.csdnimg.cn/2020042109582452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

## 多线程——抢票

多线程并发要考虑线程安全。

```java
package cn.Thread;
//共享资源
public class Web12306 implements Runnable{
		//票数
		private int ticketNums = 99;
		
		public void run() {
			while(true) {
				if (ticketNums < 0) {
					break;
				}
				try {
					Thread.sleep(200);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				System.out.println(Thread.currentThread().getName() + "-->" + ticketNums--);
			}
		}
		
		public static void main(String[] args) {
			Web12306 web12306 = new Web12306();
			System.out.println(Thread.currentThread().getName());

			new Thread(web12306,"码畜").start();
			new Thread(web12306,"码农").start();
			new Thread(web12306,"码蟥").start();

		}
	}


```

---

## 模拟龟兔赛跑

```java
package cn.Thread;
/**
 * 模拟龟兔赛跑
 * @author HQF
 *
 */
public class Racer implements Runnable{
	private static String winner;
	@Override
	public void run() {
		for (int step = 1; step <= 100; step++) {
			//模拟休息
			if (Thread.currentThread().getName().equals("rabbit") && step%25 == 0
				) {
				try {
					Thread.sleep(100);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			System.out.println(Thread.currentThread() + "-->" + step);
			//比赛是否结束
			boolean flag = gameOver(step);
			if (flag) {
				break;
			}
		}
	}
	private boolean gameOver(int step) {
		if (winner != null) {//存在胜利者
			return true;
		}else {
			if (step == 100) {
				winner = Thread.currentThread().getName();
				System.out.println("winner==>" + winner );
				return true;
			}
		}
		return false;
	}
	
	public static void main(String[] args){
		// TODO Auto-generated method stub
		Racer racer = new Racer();
		new Thread(racer,"tortoise").start();
		new Thread(racer,"rabbit").start();
	}
}

```

---

## 静态代理

```java
package cn.Thread;

/**
 * 静态代理
 * 1. 真实角色
 * 2. 代理角色
 * @author HQF
 *
 */
public class StaticProxy {
	public static void main(String[] args) {
		new WeddingCompany(new You()).happyMarry();
		
		//new Thread(线程对象).start();
	}
}

interface Marry{
	void happyMarry();
}

class You implements Marry{
	
	@Override
	public void happyMarry() {
		System.out.println("你和嫦娥终于奔月了...");
	}
	
}

//代理角色
class WeddingCompany implements Marry{
	
	//真实角色
	private Marry target;
	public WeddingCompany(Marry target) {
		this.target = target;
	}
	@Override
	public void happyMarry() {
		ready();
		this.target.happyMarry();
		after();
		
	}
	
	private void ready() {
		System.out.println("布置猪窝。。。");
	}
	
	private void after() {
		System.out.println("闹玉兔。。。");
	}
}
```

---

