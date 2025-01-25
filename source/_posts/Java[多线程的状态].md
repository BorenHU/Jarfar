---
title: '多线程的状态[Java]'
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
abbrlink: 62354
date: 2020-04-23 00:36:34
img:
coverImg:
password:
thumbnail: 
---

多线程的终止[Java]

<!-- more -->

---




- 不使用JDK提供的stop()方法（它们本身也被JDK废弃了）
- 提供一个boolean型的终止变量，当这个变量置为false，则终止线程的运行

```java
package cn.Thread;

/**
 * 终止线程
 * 1. 线程正常执行完毕--》次数
 * 2. 外部干涉--》加入标识
 * 不要使用stop destroy
 * @author HQF
 *
 */
public class TerminateThread implements Runnable{
	//1. 加入标记 标记线程体是否可以运行
	private boolean flag = true;
	private String name;
	
    public TerminateThread(String name) {
		// TODO Auto-generated constructor stub
    	super();
    	this.name = name;
	}
	
	@Override
	public void run() {
		int i = 0;
		//2. 关联标识，true --》运行  false --》停止
		while(flag) {
			System.out.println(name + "-->" + i++);
		}
	}
	//对外提供方法改变标识
	public void terminate() {
		this.flag = false;
	}
	
	public static void main(String[] args) {
		TerminateThread tt = new TerminateThread("c罗");
		new Thread(tt).start();
		
		for (int i = 0; i <= 99; i++) {
			if (i == 88) {
				tt.terminate();//3. 线程的终止
				System.out.println("tt game over");
			}
			System.out.println("main-->" + i);
		}
	}
	
	
}

```

---

## 多线程的暂停[Java]

- new一个对象，实现新生状态
- 使用start（）方法，实现就绪状态
- CPU分配好时间片调度进行运行状态
- 线程执行完毕，进入死亡状态

**sleep**

- sleep(时间)指定当前线程阻塞的毫秒数。
- sleep存在异常InterruptedException；
- sleep时间达到后线程进入就绪状态。
- sleep可以模拟网络延时，倒计时等。
- 每一个对象都有一个锁，sleep不会释放锁

```java
package cn.Thread;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * sleep模拟网络延时，放大了发生问题的可能性
 * @author HQF
 *
 */
public class BlockedSleep03 {
		
	public static void main(String[] args) throws InterruptedException {
		//倒计时
		Date endTime = new Date(System.currentTimeMillis() + 1000*10);
		long end = endTime.getTime();
		
		while(true) {
			
			System.out.println(new SimpleDateFormat("mm:ss").format(endTime));
			Thread.sleep(1000);
			endTime = new Date(endTime.getTime() - 1000);
			if (end - 10000 > endTime.getTime()) {
				break;
			}
			
			
		}
		
	}
	
	public static void test() throws InterruptedException {
		//倒数10个数，1秒一个
				int num = 10;
				while(true) {
					Thread.sleep(1000);
					System.out.println(num--);
				}
	}
	}


```

---

## 多线程礼让[Java]

- 礼让线程，让当前正在执行线程暂停。
- 不是阻塞线程，而是将线程从运行状态转入就绪状态
- 让cpu调度器重新调度

```java
package cn.Thread;

public class YieldDemo01 {
	public static void main(String[] args) {
	
		MyYield myYield = new MyYield();
		new Thread(myYield,"a").start();
		new Thread(myYield,"b").start();

}
}
class MyYield implements Runnable{
	@Override
	public void run() {
		System.out.println(Thread.currentThread().getName() + "-->start");
		Thread.yield();
		System.out.println(Thread.currentThread().getName() + "-->end");

	}
}

```

---

```java
package cn.Thread;

public class YieldDemo02 {

	public static void main(String[] args) {
		new Thread(()-> {
			for (int i = 0; i < 100; i++) {
				System.out.println("lambda..." + i);
			}
		}).start();
		
		for (int i = 0; i < 100; i++) {
			if (i % 20 == 0) {
				Thread.yield();//main 礼让
			}
			System.out.println("main..." + i);
		}
	}
}

```

---

## 多线程插队[Java]

- join合并线程，待此线程执行完成后，在执行其他线程，其他线程阻塞。

```java
package cn.Thread;
/**
 * join:合并线程，插队线程
 * @author HQF
 *
 */
public class BlockedJoin01 {
	public static void main(String[] args) throws InterruptedException {
		Thread t= new Thread(()-> {
			for (int i = 0; i < 100; i++) {
				System.out.println("lambda..." + i);
			}
		});
		t.start();
		
		for (int i = 0; i < 100; i++) {
			if (i % 20 == 0) {
				t.join();//插队 main主线程被阻塞了
			}
			System.out.println("main..." + i);
		}
	}
}

```

---

