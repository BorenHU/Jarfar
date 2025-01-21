---
title: '普通方法和构造方法的区别[Java]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Java
categories:
  - Java
abbrlink: 65065
date: 2020-04-08 09:30:38
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

普通方法和构造方法的区别

<!-- more -->

---


构造方法:

①方法名和 类名相同

②在方法名的前面没有返回值类型的声明

③在方法中不能使用return语句返回一个值

④在创建对象时，要调用new，如:book b1=new book();

⑤当没有指定构造方法时，系统会自动添加无参的构造方法

⑥当有指定构造方法时，无论该构造方法是有参，还是无参，系统都不会再自动添加无参的构造方法

⑦构造方法的重载：方法名相同，但参数不同的多个方法，调用时会自动根据不同的参数选择相应的方法

 

无参的构造方法

class person{

　　public person(){

　　　　System.out.println("无参的构造方法被调用了。。。");

　　}

}

class Ex11{

　　public static void main(String[] args){

　　　　　person p=new person();

　　}

}

 

有参的构造方法（目的就是为了给对象实例变量赋值）

class person{

　　int age;

　　public person(int a){

　　　　age=a;

　　}

　　public void speak(){

　　　　System.out.println("I am "+age+" years old");

　　}

}

class Ex11{

　　public static void main(String[] args){

　　　　person p=new person();

　　　　p.speak();

　　}

}

普通方法有返回类型，方法名小写，不能和类名相同，如:

void XX(){}　　

普通方法：代表对象可以干什么

构造方法是初始化对象的重要途径，

如:student s=new student(); 

 s这个实例，是通过构造方法初始化的　　

构造方法：可创建一个对象，并可初始化对象的值

构造方法有对类属性得初始化的功能，

如:public people(String name){this name=name;}

或public people(){name="zangsan";age=11;}  

完成了people类属性name或age的初始化

 

普通方法用来定义对象的功能行为，构造方法用来初始化。