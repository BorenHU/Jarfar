---
title: '封装[Java]'
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
abbrlink: 5692
date: 2020-03-24 17:13:02
img:
coverImg:
password:
thumbnail: 
---

封装[Java]

<!-- more -->

---


>封装：Private-私有的；Public-公开的。

1. 比如，后台的账号是张三，金额是100元，如果在后台主函数中随便的更改账号，随意的查看金额，就很不安全。

```java
class lei{
 String name="张三";
 int money=100;
}
public class fengzhuang {
 public static void main(String[] args){
  lei duixiang= new lei();
  duixiang.name="李四";
  System.out.println(duixiang.money);
 }
}
```

如果把成员变量的前面都加上私有化private，就不可以直接访问了，就会报错：

2. 封装：成员变量被私有化之后，只能在自己的类中访问，因此通过一对接口，对属性(成员变量)进行传参赋值和取值，这就是封装，接口就是一个公有方法。

- 首先使用private修改属性的访问权限来限制对属性的随意访问

- 为属性创建一对赋值和取值的方法，用于对属性进行访问。

   set和get是约定俗称的书写格式。

```java
class lei{
 private String name="张三";
 private int money=100;
 public void setname(String name){//set是设置
  if(this.name==name)
   getmoney();
  else
   System.out.println("账号不正确");
 }
 public void getmoney(){//get是得到
  System.out.println(money);
 }
}
public class fengzhuang {
 public static void main(String[] args){
  lei duixiang= new lei();
  duixiang.setname("张三");
 }
}
```



3. 跨作用域的赋值传值改值取值是不安全的，就像我随便可以进出你家拿东西放东西一样。

使用封装，用set和get进行赋值和取值，使线程更加安全。

```java
class lei{
 private String str; 
 public void setstr(String str){//set是设置
  this.str=str;
 } 
 public void getstr(){//get是得到
  System.out.println(this.str);
 }
}
public class fengzhuang {
 public static void main(String[] args){
  lei duixiang= new lei();
  duixiang.setstr("java");
  duixiang.getstr();  
 }
}
```



小结，封装就是把属性和操作包装起来，形成一个独立的实体单位，并尽量对外隐藏内部的细节，外部只能看到对象操作之后的反应，而不知道对象是如何做出这一反应的。封装的特点就是：隐藏细节，敞开接口。