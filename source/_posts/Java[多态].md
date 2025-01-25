---
title: '多态[Java]'
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
abbrlink: 15174
date: 2020-03-24 20:38:04
img:
coverImg:
password:
thumbnail: 
---

<!-- more -->

---


> 多态：事物的多种形态。即：
> 不同的对象收到相同的消息，产生不同的结果。
> 相同的对象收到不同的消息，产生不同的结果。

比如：
张三收到一部手机，会打游戏
李四收到一部手机，会发微信
王五收到一部手机，会听歌曲
赵六收到一部手机，会看电影
即，不同的人收到相同的手机，产生不同的玩法，就是不同的对象收到相同的消息，产生不同的结果。
因此说，手机这个事物具有多种形态，叫多态。

比如：
张三接到领导的电话，电话里说，小张..........
张三接到老婆的电话，电话里说，老公..........
张三接到父母的电话，电话里说，儿子..........
张三接到朋友的电话，电话里说，哥们..........
即，相同的人收到不用的消息，产生不同的称呼，就是相同的对象收到不同的消息，产生不同的结果。
因此说，张三这个人具有多种形态，叫多态。

多态如何用代码一步步实现的：

1. 提高代码的复用性和扩展性：

```java
class Animal{
    void sing(){
        System.out.println("唱歌");
}
class Cat extends Animal{
    void sing(){
        System.out.println("喵喵的唱歌");
                }
}
class Dog extends Animal{
    void sing(){
        System.out.println("汪汪的唱歌");
            }
}
public class duotai{
    public static void main(String[] args){
        Cat c1=new Cat();
        c1.sing();
        Cat c2=new Cat();
        c2.sing();
        Cat c3=new Cat();
        c3.sing();

        Dog d1=new Dog();
        d1.sing();
        Dog d2=new Dog();
        d2.sing();
        Dog d3=new Dog();    
        d3.sing();                
                    }
}
```

我们可以看到，每new出一个对象，就需要去调用方法，很麻烦，我们可以写一个函数，进行传参，如下：

```java
public class duotai{
       public static void main(String[] args){
           Cat c1=new Cat();
           Cat c2=new Cat();
           Cat c3=new Cat();
           function(c1);
           function(c2);
           function(c3);
        Dog d1=new Dog();
        Dog d2=new Dog();
        Dog d3=new Dog();
        function(d1);
        function(d2);
        function(d3);                    
    public static void function(Cat mao){//形参是Cat类型的变量
        mao.sing();}
    
    public static void function(Dog gou){//形参是Dog类型的变量
        gou.sing();}
}
```

2. 多态：上面虽然提高了代码的复用性，但还是麻烦，因为每new一个类对象，就需要写一个函数，因此可以这样写

```java
public class mlx{
       public static void main(String[] args){
           Cat c1=new Cat();
           Cat c2=new Cat();
           Cat c3=new Cat();
           function(c1);
           function(c2);
           function(c3);

        Dog d1=new Dog();
        Dog d2=new Dog();
        Dog d3=new Dog();
        function(d1);
        function(d2);
        function(d3);                    
       }
    static void function(Animal a){
        a.sing();        
    }

//形参可以是Animal类型的变量，因为Cat和Dog都继承自它,
//等同于Animal a=new Cat()   Animal a=new Dog() 向上转型,
//这就是多态。
}
```



- 多态的好处：不仅可以提高代码的复用性，还可以提高代码的可扩展性。

- 多态的体现：父类引用指向子类对象，即向上转型了。

多态成员变量的特点(原理)：

1. 编译时，参阅的是引用型变量所属的类中是否有调用的方法；

2. 运行时，参阅的是对象所属类中是否有调用的方法；

   意思是，编译时是向上转型，看父类中是否有调用的方法，运行时，是看传进来的对象有没有方法可以重写。

---

## 多态的使用

多态的前提：

1. 类与类之间必须存在关系，可以是继承关系，也可以是实现关系；
2. 父类中一定要有sing()方法，因为向上转型，只能访问父类的方法，如果父类中没有该方法，就报错了；
3. 必须要有重写，否则多态没有意义更不能实现多态了，因为正常向上转型后只能访问父类成员，
      如果方法没有重写，就输出“唱歌”了，有重写才能输出自己的sing()方法，喵喵或旺旺的唱；
4. 多态=向上转型+重写;

多态的弊端：

- 只能用父类的引用，访问到父类的成员，再看是否有重写；

最后说明：主函数中如果定义方法，一定要设置static静态，我们知道当建立这篇java文档时，主函数类就已经存在了，因此在主函数中的写的方法要加静态，静态是伴随着类的存在而存在，如果不加，这个方法就访问不到了，必须让方法和主函数一起存在。

```java
static void function(Animal a){
        a.sing();
                }
```

3. 多态中的向下转型：

4. 如下，因为多态只能看到父类成员，所以如果子类成员中有非重写的方法，就访问不到了，可以使用向下转型。

```java
class Dog extends Animal{
    void sing(){
        System.out.println("汪汪的唱歌");
            }
    void fangfa(){
        System.out.println("多管闲事");
            }
}
public class duotai{
    public static void main(String[] args){
        Dog d1=new Dog();
        function(d1);                
                    }
    static void function(Animal a){
        a.sing();
        Dog d=(Dog)a;//向下转型
        d.fangfa();
                }
}
```

提示：如果不是特殊需要，也没必要在多态中向下转型访问非重写方法，在上面d1.fangfa()，单独调用就ok了，可操性也很大。因为在多态中向下转型反而要和重写方法一起输出，如果不想一起输出就麻烦了，况且如果只需要访问非重写方法，更没必要使用多态了，向上又向下来回转型，反而麻烦了。