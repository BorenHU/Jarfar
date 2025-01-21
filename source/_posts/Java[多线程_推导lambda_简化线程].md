---
title: '多线程_推导lambda_简化线程[Java]'
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
abbrlink: 10844
date: 2020-04-22 00:31:28
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

多线程\_推导lambda\_简化线程

<!-- more -->

---


```java
package cn.Thread;
 /**
  * Lambda表达式 简化线程(用一次)的使用
  * 
  * @author HQF
  *
  */
public class LambdaThread {
	//静态内部类
	static class Test implements Runnable{
	public void run() {
		for (int i = 0; i < 20; i++) {
			System.out.println("一边听歌");
		}
	}
	
	}
	public static void main(String[] args) {
		new Thread(new Test()).start();
		
		
		//局部内部类
		class Test2 implements Runnable{
			public void run() {
				for (int i = 0; i < 20; i++) {
					System.out.println("一边听歌");
				}
			}	
		}
		new Thread(new Test2()).start();
	
	//匿名内部类 必须借助接口或者父类
		new Thread(new Runnable() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				for (int i = 0; i < 20; i++) {
					System.out.println("一边听歌");
				}
			}
		}).start();
	
		
		//jdk8 简化 lambda
	new Thread( ()->new Runnable() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				for (int i = 0; i < 20; i++) {
					System.out.println("一边听歌");
				}
			}
		}).start();
	}
}

```

---

```java
package cn.Thread;
/**
 * Lambda推导
 * 
 * @author HQF
 *
 */
public class LambdaTest01 {
	//静态内部类
	static class Like2 implements ILike{
		
		@Override
		public void lambda() {
			System.out.println("i like lambda2");
		}
	}
	
	public static void main(String[] args) {
		ILike like = new Like1();
		like.lambda();
		
		like = new Like2();
		like.lambda();
		
		
		class Like3 implements ILike{
			
			@Override
			public void lambda() {
				System.out.println("i like lambda3");
			}
		}
		like = new Like3();
		like.lambda();

		//匿名内部类
		like = new ILike() {
			
			@Override
			public void lambda() {
				// TODO Auto-generated method stub
				System.out.println("i like lambda4");
			}
		};
		like.lambda();

		//lambda
		like = ()->{
			System.out.println("i like lambda5");
		};
		like.lambda();

	}
}


interface ILike{
	void lambda();
}


//外部类
class Like1 implements ILike{
	
	@Override
	public void lambda() {
		System.out.println("i like lambda1");
	}
}
```

- lambda推倒必须存在类型。