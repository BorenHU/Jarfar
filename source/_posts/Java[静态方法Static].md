---
title: 'Static静态方法[Java]'
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
abbrlink: 433
date: 2020-03-24 17:45:16
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

### static关键字

作用：是一个修饰符，用于修饰成员(成员变量,成员方法)

<!-- more -->

---


### static关键字

作用：是一个修饰符，用于修饰成员(成员变量,成员方法)

1. 被static 修饰后的成员变量只有一份

2. 当成员被static修饰之后，多了一种访问方式,除了可以对象调用之外，还可以被类直接调用（类名.静态成员）

#### static的特点

1. 随着类的加载而被加载

2. 优先于对象的存在

3. 被所有的对象所共享的

4. 可以直接被类名所调用

#### 存放位置

- 类变量随着类的加载而存在于data内存区

- 实例变量随着对象的建立而存在于堆内存。

#### 生命周期

1. 类变量生命周期最长，随着类的消失而消失

2. 实例变量生命比类变量短，它是随着对象的消失而消失

#### 静态方法注意事项

1. 静态的方法只能访问静态的成员

2. 非静态的方法既能访问静态的成员（成员变量，成员方法）也能访问非静态成员

3. 静态的方法中是不可以定义this super关键字

  因为静态优先于对象存在，所以静态方法不可以出现this

### 知识点

1. 当所有对象的某一个属性值一样时，可以在成员变量前加static，这样只需赋值一次，其它对象可以共享,节约内存.如果不加,则需一个个分别赋值。

2. 被static修饰过的成员变量也叫“静态变量或类变量”，普通成员变量也叫“非静态变量或实例变量”；

```java
class lei{
static int age;--------成员变量之静态变量，类变量。
       String name;----成员变量之非静态变量，实例变量。 
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang1=new lei();
  lei duixiang2=new lei();
  lei duixiang3=new lei();
  duixiang1.age=18;
  System.out.println(duixiang1.age);
  System.out.println(duixiang2.age);
  System.out.println(duixiang3.age);
     }
   }
```



### 原理

- 我们new对象后，堆空间里的每个对象都有name和age属性了，那如果三个人的年龄是一样的，我们也需要一个个的分别赋值。那我们可以把三个人相同的属性age拿出来，放在内存的数据区，这样，三个对象就可以共享这一个属性了，节约了堆空间。
- 还有，比如给张三的age赋值，那张三会连接对应的对象，对象会接入到数据区的age。李四的age也是由它对应的对象接入数据区的，由于所有的对象都接入的是一个数据区的age，所以自然用一个对象赋值age之后，其它对象都连接它的值了。

- 被static修饰过的成员变量如果多次赋值，执行“就近原则”；原理就是给变量连续赋值，一个顶一个。

```java
class lei{
static int age;
       String name; 
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang1=new lei();
  lei duixiang2=new lei();
  lei duixiang3=new lei();
  duixiang1.age=18;
  duixiang2.age=20;
  System.out.println(duixiang1.age);--都共享并输出20，因为输出语句离20最近
  System.out.println(duixiang2.age);
  System.out.println(duixiang3.age);
     }
   }
```




- 被static修饰过的成员变量，还可以用类名称访问。因为静态是随着类的加载而被加载，优先于对象而存在；

  如下，age是被static修饰后的静态，就会随着lei的出现而存储在内存中，和是否有一个对象无关，因此自然可以用类名称访问。

```java
class lei{
static int age;
       String name; 
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang=new lei();
  duixiang.age=18;
  duixiang.name="张三";
  System.out.println(lei.age);-----可以用类名称访问
  System.out.println(lei.name);----报错
     }
   }
```

```java
class lei{
  static int age=18;
  }
public class jingtai{
 public static void main(String[] args){
  System.out.println(lei.age);
  lei duixiang1=new lei();
  lei duixiang2=new lei();
  System.out.println(duixiang1.age);
  System.out.println(duixiang2.age);
      }
  }  
```



- 被static修饰过的成员方法

  静态方法只能访问静态变量，访问不了非静态变量，会报错。

  非静态方法(常规方法)既可以访问非静态也可以访问静态。因为，静态是伴随着类而出现，先有类才有对象，所以静态是优先于对象存在(先出现的不能访问后出现的，因为还没有。后出现的可以访问先出现的)。

  

  静态的方法中不可以有this，super等关键字。

  还是静态优先于对象存在的问题，this代表对象，先出现的不能访问后出现的。

```java
class lei{
 static int age;
        String name;
  public static void jingtai(){
  	System.out.println(this.age+this.name);
     }
  }
public class {
 public static void main(String[] args){
  lei duixiang=new lei();
  duixiang.age=18;
  duixiang.name="张三";
  duixiang.jingtai();
     }
   }
```

- 被static修饰过的成员方法，也可以用类名称访问；

```java
    public static void jingtai(){
      System.out.println("666");
  }
public class mlx{
 public static void main(String[] args){
  lei.fangfa();
     }
   }


```

- 什么时候使用静态(static)

1. 一个类里的所有对象的属性出现共享数据时:

```java
class lei{
 static int age;
        String name; 
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang1=new lei();
  lei duixiang2=new lei();
  lei duixiang3=new lei();
  duixiang1.age=18;
  System.out.println(duixiang1.age);
  System.out.println(duixiang2.age);
  System.out.println(duixiang3.age);
     }
   }
```

2. 当方法内部没有访问到非静态成员时(该方法和非静态成员变量无关)，那么该方法可以定义成静态方法，使语法更简洁：正常码：

```java
class lei{
 static int age;
        String name;
 public void fangfa(){
  System.out.println("hello");
    } 
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang=new lei();
  duixiang.fangfa();
     }
   }
```

- 使用静态方法码：

```java
class lei{
 static int age;
        String name;
 public static void fangfa(){--既然该方法就输出独立的一句话，而且和上面的成员变量无关，所以可以使用静态方法。
  System.out.println("hello");
    } 
  }
public class jingtai{
 public static void main(String[] args){
  lei.fangfa();---------静态方法可以用类名称直接输出。
     }
   }
```

- 构造方法，构造代码块和静态小结：构造函数是初始化某个相对应对象的，构造代码块是初始化所有对象的，静态是所有对象可以共享的属性值；

1. 构造方法和构造代码块：

```java
class lei{
 String name;
 lei(String name){
  this.name=name;
  System.out.println("我叫"+name);
   }
 {
  System.out.println("我在学习java"); 
  }
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang1=new lei("张三");
  lei duixiang2=new lei("李四");
     }
   }
```

2. 静态：

```java
class lei{
 static String str;
        String name;
 public void fangfa(String name){
  this.name=name;
  System.out.println("我叫"+this.name+str);
   }
  }
public class jingtai{
 public static void main(String[] args){
  lei duixiang1=new lei();
  lei duixiang2=new lei();
  duixiang1.str="我在学习java";
  duixiang1.fangfa("张三");
  duixiang2.fangfa("李四");
     }
   }
```



- 生命周期：静态成员变量>非静态成员变量>局部变量；

- 静态成员变量和方法伴随着类的存在而存在。

- 非静态成员变量和方法伴随着对象的存在而存在。

- 局部变量不赋值都会报错。


