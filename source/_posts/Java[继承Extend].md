---
title: '继承[Extend][Java]'
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
abbrlink: 53195
date: 2020-03-24 19:43:10
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

- “继承中的成员变量和方法”
- “继承中的构造方法”
- “继承中的对象转型”。

<!-- more -->

---


继承大致分为

- “继承中的成员变量和方法”
- “继承中的构造方法”
- “继承中的对象转型”。

继承的来源：如下有两个类，张三和李四，他俩都有姓名和年龄，那我们可以把这两个类共性的描述抽取出来，放在某个类中，然后让张三和李四继承这个类，就可以共享这个类中的姓名和年龄了。

1. 继承提高了代码的复用性，简化代码。而且只有建立了继承关系(向上转型)，才会有后面的多态特征的存在；

2. 继承本质是类与类之间的关系，是把子类共性的描述抽取出来，放在父类中。千万不要为了获取其它类的功能简化代码，而随意搭建继承关系(姓李的类继承了姓张的类)。

3. 子类拥有(继承)父类的成员(成员变量和成员方法)；

4. 继承是类与类之间的关系，static是同类里不同对象之间进行共享；


如下：因为zhang和li两个类中都有name，age和fangfa()

```java
class zhang {
 String name;
 int age;
 public void fangfa(){
  System.out.println("人类");
    }
 }
class li {
 String name;
 int age;
 public void fangfa(){
  System.out.println("人类");
    }
 }
public class jicheng{
 public static void main(String[] args){
      }
   }
```



所以如下：把共性的描述抽取出来，放在一个类中，建立继承关系

```java
class renlei{--父类，超类，基类
 String name;
 int age;
 public void fangfa(){
  System.out.println("人类");
    }
  }
class zhang extends renlei{---子类}
class li extends renlei{------子类}
public class jicheng{
 public static void main(String[] args){
  zhang zhangsan=new zhang();
  System.out.println(zhangsan.name);---子类拥有父类成员
  zhangsan.fangfa();
  li lisi=new li();
  System.out.println(lisi.name);---子类拥有父类成员
  lisi.fangfa();
 } }


```

5. 子类不能拥有父类中被private修饰后的成员；

```java
class fu{
 private String str;
  }
class zi extends fu{}
public class jicheng {
 public static void main(String[] args){    
  zi duixiang=new zi();
  duixiang.str="hello";---报错
  System.out.println(duixiang.str);---报错
 }
}
```



6. java可以搭建多层继承关系。在多层继承中最下层的子类拥有整个继承体系的成员，最上层的父类里面定义了所有子类的共性描述。多层继承也说明没有绝对的子父类，都是相对而言的；

```java
class ye{
 public void fangfa1(){
  System.out.println("爷");
    }
  }
class fu extends ye{
 public void fangfa2(){
  System.out.println("父");
    }
  }
class zi extends fu{
 public void fangfa3(){
  System.out.println("子");
    }
   }
public class jicheng{
 public static void main(String[] args){
  zi duixiang=new zi();
  duixiang.fangfa1();
  duixiang.fangfa2();
  duixiang.fangfa3();
      }
   }
```




