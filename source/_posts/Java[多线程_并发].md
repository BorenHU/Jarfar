---
title: '多线程_并发[Java]'
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
abbrlink: 22997
date: 2020-04-24 14:24:13
img:
coverImg:
password:
thumbnail: 
---
多线程\_并发\_非同步\_三大经典案例

<!-- more -->

---
## 多线程\_并发\_非同步\_三大经典案例

**并发：**同一个对象多个线程同时操作。

**Ⅰ**

```java
package cn.syn;
/**
 * 线程不安全
 * 数据有负数，有相同的情况
 * @author HQF
 *
 */
public class UnsafeTest01 {

	public static void main(String[] args) {
		UnsafeSleep01 web12306 = new UnsafeSleep01();
		System.out.println(Thread.currentThread().getName());

		new Thread(web12306,"码畜").start();
		new Thread(web12306,"码农").start();
		new Thread(web12306,"码蟥").start();
	}

}
class UnsafeSleep01 implements Runnable{
	//票数
	private int ticketNums = 10;
	private boolean flag = true;
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
	while(flag) {
		test();
	}	
	}
	
	public void test() {
			if (ticketNums < 0) {
				flag = false;
				return;
			}
	
			//模拟网络延时
			try {
				Thread.sleep(200);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName() + "-->" + ticketNums--);
		}
	}



```

**Ⅱ**

```java
package cn.Thread;
/**
 * 取钱线程不安全
 * @author HQF
 *
 */
public class UnsafeTest02 {
	
	public static void main(String[] args) {
		//账户
		Acount acount = new Acount(100, "结婚礼金");
		Drawing you = new Drawing(acount, 80, "可悲的你");
		Drawing wife = new Drawing(acount, 80, "happy的她");
		you.start();
		wife.start();

	}
	
}

//账户
class Acount{
	int money;
	String name;
	public Acount(int money, String name) {
		this.money = money;
		this.name = name;
	}
	
}

//模拟取款
class Drawing extends Thread{
	Acount acount;//取钱的账户
	int drawingMoney;//取得钱数
	int drawingTotal;//取得总数
	int packetTotal;//口袋的总数
	
	
	public Drawing(Acount acount, int drawingMoney,String name) {
		super(name);
		this.acount = acount;
		this.drawingMoney = drawingMoney;
	}

	@Override
	public void run() {
		if (acount.money - drawingMoney < 0) {
			return;
		}
		
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		acount.money -= drawingMoney;
		packetTotal += drawingMoney;
		System.out.println(this.getName() + "-->账户余额为：" + acount.money);
		System.out.println(this.getName() + "-->账户余额为：" +packetTotal);

	}
}
```

**Ⅲ**

```java
package cn.Thread;

import java.util.ArrayList;
import java.util.List;

/**
 * 线程不安全：操作容器
 * @author HQF
 *
 */
public class UnsafeTest03 {

	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		for (int i = 0; i < 10000; i++) {
			new Thread(()->{
				list.add(Thread.currentThread().getName());
			}).start();
		}
	System.out.println(list.size());
	}
}

```

---

## 多线程\_并发\_同步\_队列与锁

现实生活中，我们会遇到“同一个资源，多个人都想使用”的问题。比如：派发礼品，多个人都想获得。天然的解决办法就是，在礼品前，大家排队。前一个人领取完后，后一个人再领取。

处理多线程问题时，多个线程访问同一个对象，并且某些线程还想修改这个对象。这时候，我们就需要用到“线程同步”。线程同步其实就是一种等待机制，多个需要同时访问此对象的线程进入这个对象的等待池形成队列，等待前面的线程使用完毕后，下一个线程再使用。

由于同一进程的多个线程共享同一块存储空间，在带来的方便的同时，也带来了访问冲突的问题。为了保证数据在方法中被访问时的正确性，在访问时加入锁机制（synchronized），当一个线程获得对象的排他锁，独占资源，其他线程必须等待，使用后释放锁即可。存在以下问题：

- 一个线程持有锁会导致其他所有需要此锁的线程挂起；
- 在多线程竞争下，加锁，释放锁会导致比较多的上下文切换和调度延时，引起性能问题；
- 如果一个优先级高的线程等待一个优先级低的线程释放锁会导致优先级倒置，引发性能问题。

由于我们可以通过private关键字来保证数据对象只能被方法访问，所以我们只需针对方法提出一套机制，这套机制就是synchronized关键字，它包括两种方法：synchronized方法和synchronized块。

- 同步方法

  public synchronized void method(int args){}

synchronized 方法控制对“成员变量 | 类变量” 对象的访问：每个对象对应一把锁，每个synchronized方法都必须获得调用该方法的对象的锁方能执行，否则所属线程阻塞，方法一旦执行，就独占该锁，直到从该方法返回时才将锁释放，此后被阻塞的线程方法能获得该锁，重新进入可执行状态。

缺陷 : 若将一个大的方法声明为synchronized将会大大影响效率。

难点：保证数据的准确，保证性能。

---

同步块：synchronized(obj){	},obj称之为同步监视器

- obj可以是任何对象，但是推荐使用共享资源作为同步监视器
- 同步方法中无需指定同步监视器，因为同步方法的同步监视器是this即该对象本身，或class即类的模子

同步监视器的执行过程：

- 第一个线程访问，锁定同步监视器，执行其中代码
- 第二个线程访问，发现同步监视器的锁定，无法访问
- 第一个线程访问完毕，解锁同步监视器
- 第二个线程访问，发现同步监视器未锁，锁定并访问

---

## 多线程\_并发\_同步\_快乐影院

```java
package cn.Thread;

import java.util.ArrayList;

import java.util.List;

/**
 * 快乐影院
 * @author HQF
 *
 */
//顾客
public class HappyCineme {
	Cineme cineme;
	int seats;
	public static void main(String[] args) {
		//可用的位置
		List<Integer> available = new ArrayList<Integer>();
		available.add(1);
		available.add(2);
		available.add(3);
		available.add(6);
		available.add(7);
		
		//顾客需要的位置
		List<Integer> seats1 = new ArrayList<Integer>();
		seats1.add(1);
		seats1.add(2);
		
		List<Integer> seats2 = new ArrayList<Integer>();
		seats2.add(4);
		seats2.add(5);
		seats2.add(6);
		
		Cineme c = new Cineme(available, "happy sxt");
		new Thread(new HappyCustomer(c, seats1),"老高").start();
		new Thread(new HappyCustomer(c, seats2),"老裴").start();

	}
}

class HappyCustomer implements Runnable{
	Cineme cineme;
	 List<Integer> seats;
	public HappyCustomer(Cineme cineme, List<Integer> seats) {
		this.cineme = cineme;
		this.seats = seats;
	}


	@Override
	public void run() {
		synchronized (cineme) {
			// TODO Auto-generated method stub
			boolean flag = cineme.bookTickets(seats);
			if (flag) {
				System.out.println("出票成功" + Thread.currentThread().getName() + "-<位置为:" + seats);
			}else {
				System.out.println("出票失败" + Thread.currentThread().getName() + "-<位置不够");
			}
		}
		}
}

//影院
class Cineme{
	 List<Integer> available;//可用的位置
	String name;//名称
	public Cineme( List<Integer> available, String name) {
		this.available = available;
		this.name = name;
	}
	
	//购票
	public boolean bookTickets( List<Integer> seats) {
		System.out.println("可用的位置: " + available);
		List<Integer> copy = new ArrayList<Integer>();
		copy.addAll(available);
		
		//相减
		copy.removeAll(seats);
		//判断大小
		if (available.size() - copy.size() != seats.size()) {
			return false;
		}
		
		//成功
		available = copy;
		return true;
	}
}
```