---
title: '多线程编程①[Java]'
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
abbrlink: 24855
date: 2020-03-17 19:40:22
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

多线程编程

<!-- more -->

---


java给多线程编程提供了内置的支持。

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/7.jpg)

> 多线程：是多任务的一种特别的形式。

> 进程：一个进程包括操作系统分配的内存空间，包含一个或多个线程。

一个线程不能独立存在，它必须是进程的一部分。一个进程一直运行，直到所有的非守护线程都结束运行后才能结束。

多线程能满足程序员编写高效率的程序来达到充分利用CPU的目的。

---

### 一个线程的生命周期

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/3.jpg)

- 新建状态：

  ​		使用new关键字和Thread类或其子类建立一个线程对象后，该线程对象就处于新建状态。它保持这个状态直到程序start()这个线程。

- 就绪状态：

  ​		当线程调用start()方法之后，该线程就进入就绪状态。就绪状态的线程处于就绪队列中，要等待JVM里线程调度器的调度。

- 运行状态：

  ​		如果就绪状态的线程获取CPU资源，就可以执行run()，此时线程处于运行状态。处于运行状态的线程最为复杂，可以变成阻塞状态，就绪状态和死亡状态。

- 阻塞状态：

  ​		如果一个线程执行了sleep（睡眠），suspend（挂起）等方法，失去所占用资源之后，该线程就从运行状态进入阻塞状态。在睡眠时间已到，或获得设备资源后可以重新进入就绪状态。可以分为三种：

  - 等待阻塞：运行状态中的线程执行wait()方法，使线程进入到等待阻塞状态。
  - 同步阻塞：线程在获取synchronized同步锁失败（因为同步锁被其他线程占用）。
  - 其他阻塞：通过调用线程的sleep()或join()发出了I/O请求时，线程就会进入到阻塞状态。当sleep()状态超时，join()等待线程终止或超时，或者I/O处理完毕，线程重新转入就绪状态。

- 死亡状态：

  ​		一个运行状态的线程完成任务或者其他终止条件发生时，该线程就切换到终止状态。
  
  ![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/8.png)

---

### 线程的优先级

Java线程的优先级是一个整数，其取值范围是1 - 10。

默认情况下，每一个线程都会分配一个优先级 5。

具有较高优先级的线程对程序更重要，并且应该在低优先级的线程之间分配处理器资源。

但是，线程优先级不能保证线程执行的顺序。

---
### 并发与并行
- 并发：是指同一个时间段内多个任务同时都在执行，并且都没有执行结束。并发任务强调在一个时间段内同时执行，而一个时间段由多个单位时间累计而成，所以说并发的多个任务在单位时间内不一定同时在执行。
- 并行：是说在单位时间内多个任务同时在执行。

在多线程编程实践中，线程的个数往往多于CPU的个数，所以一般都称多线程并发编程而不是多线程并行编程。

### 创建线程

Java提供了三种创建线程的方法：

- 通过实现Runnable()接口：

​	覆写Runnable()接口实现多线程，而后同样覆写run()，覆写Runnable()接口实现多线程可以避免单继承局限。

- 通过继承Thread类本身：

​	run()为线程类的核心方法，相当于主线程的main方法，是每个线程的入口。

- 通过Callable和Future创建线程

---

#### 通过实现Runnable接口来创建线程

创建线程最简单的方法就是创建一个实现Runnable()接口的类。

为了实现Runnable，一个类只需要执行一个方法调用run()

>public void run()

你可以重写该方法，重要的是理解run()可以调用其他方法，使用其它类，并声明变量，就像主线程一样。

再创建一个实现Runnable接口的类之后，你可以在类中实例化一个线程对象。

Thread定义了几个构造方法，下面的这个是我们经常使用的：

>Thread（Runnable threadOb，String threadName）;

threadOb是一个实现Runnable接口的类的实例，并且threadName指定新线程的名字。

新线程创建后，调用它的start()方法它才会运行。

>void start()

实例：

```java
public class RunableTest implements Runnable {
    @Override
    public void run() {
        while (true) {
            System.out.println("Hello World");
        }
    }
    public static void main(String[] args) {
        RunableTest runableTest1 = new RunableTest();
        RunableTest runableTest2 = new RunableTest();
        new Thread(runableTest1).start();
        new Thread(runableTest1).start();
        new Thread(runableTest2).start();
    }
}
```

---

#### 通过继承Thread来创建线程

​	创建一个线程的第二种方法是创建一个新的类，该类继承Thread类，然后创建一个该类的实例。

继承类必须重写run()方法，该方法是新线程的入口点。它也必须调用start()方法才能执行。

该方法尽管被列为一种多线程实现方式，但是本质上也是实现了Runnable接口的一个实例。

```java
public class ThreadRuning extends Thread{

    public ThreadRuning(String name){  
//重写构造，可以对线程添加名字
        super(name);
    }
    @Override
    public void run() {
        while(true){
            System.out.println("Hello World");
//在run方法里，this代表当前线程
            System.out.println(this);
        }
    }
    public static void main(String[] args){
        ThreadRuning threadRuning = new ThreadRuning("1111");
        threadRuning.start();
    }
}
```

---

### Threa类的一些重要方法

1. public void start()

   ​	使该线程开始执行；Java虚拟机调用该线程的run方法。

2. public void run()

   ​	如果该线程是使用独立的Runnable运动对象构造的，则调用该Runnable对象的run方法；否则，该方法不执行任何操作并返回。

3. public final void setName(String name)

   ​	改变线程的名称，与name相同。

4. public final void setPriority（int priority）

   ​	更改线程的优先级。

5. public final void setDaemon（boolean on）

   ​	将该线程标记为守护线程或用户线程。

6. public final void join（long millisec）

   ​	等待线程终止的时间最长为millis毫秒。

7. public void interrupt()

   ​	中断线程。

8. public final boolean isAlive()

   ​	测试线程是否处于活动状态。

---

下面的方法是Thread类的静态方法。

1. public static void yield()

   ​	暂停当前正在执行的线程对象，并执行其他线程。

2. public static void sleep(long millisec)

   ​	在指定的毫秒数内让当前正在执行的线程休眠（暂停执行），此操作收到系统计时器和调度程序精度和准确性的影响。

3. public static boolean holdsLock（object x）

   ​	而且仅当当前线程在指定的对象上保持监视器锁时，才返回true。

4. public static Thread currentThread()

   ​	返回对当前正在执行的线程对象的引用。

5. public static void dumpStack()

   ​	将当前线程的堆栈跟踪打印至标准错误流。

---

### 通过Callable和Future创建线程

1. 创建Callable接口的实现类，并实现call()方法，该call()方法将作为线程执行体，并且有返回值。
2. 创建Callable实现类的实例，使用FutureTask类来包装Callable对象，该FutureTask对象封装了该Callable对象的call()方法的返回值。
3. 使用FutureTask对象作为Thread对象的target创建并启动线程。
4. 调用FutureTask对象的get方法来获得子线程执行结束后的返回值。

```java
public class CallTest implements Callable {
    @Override
    public Object call() throws Exception {
        return "hello world";
    }
 
    public static void main(String[] args){
        FutureTask<String> futureTask = new FutureTask<String>(new CallTest());
        new Thread(futureTask).start();
        try {
            String result = futureTask.get();
            System.out.println(result);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

---

### 创建线程的三种方式的对比

1. 采用实现Runnable，Callable接口的方式创建多线程时，线程类只是实现了Runnable接口或Callable接口，还可以继承其他类。
2. 使用继承Thread类的方式创建多线程时，编写简单，如果需要访问当前线程，则无需使用Thread.currentThread()方法，直接调用this即可获得当前线程。

---

### 线程几个主要的概念

- 线程同步
- 线程间通信
- 线程死锁
- 线程控制：挂起，停止和恢复

---

### 多线程的使用

有效利用多线程的关键是理解程序是并发执行的。例如：

程序中有两个子系统需要并发执行，这时候就需要利用多线程。

通过对多线程的使用，可以编写出非常高效的程序。