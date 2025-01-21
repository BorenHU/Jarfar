---
title: '抽象[abstract][Java]'
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
abbrlink: 41513
date: 2020-03-24 20:38:04
img:
coverImg:
password:
thumbnail: https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/25.jpg
---

抽象类与接口紧密相关。

然接口又比抽象类更抽象，这主要体现在它们的差别上：

1. 类可以实现无限个接口，但仅能从一个抽象（或任何其他类型）类继承，从抽象类派生的类仍可实现接口，从而得出接口是用来解决多重继承问题的。
2. 抽象类当中可以存在非抽象的方法，可接口不能且它里面的方法只是一个声明必须用public来修饰没有具体实现的方法。
3. 抽象类中的成员变量可以被不同的修饰符来修饰，可接口中的成员变量默认的都是静态常量（static final）。
4. 这一点也是最重要的一点本质的一点”抽象类是对象的抽象，然接口是一种行为规范”。

<!-- more -->

---

## 为什么使用抽象类?

> 抽象类与接口紧密相关。
>
> 然接口又比抽象类更抽象，这主要体现在它们的差别上：
>
> 1. 类可以实现无限个接口，但仅能从一个抽象（或任何其他类型）类继承，从抽象类派生的类仍可实现接口，从而得出接口是用来解决多重继承问题的。
> 2. 抽象类当中可以存在非抽象的方法，可接口不能且它里面的方法只是一个声明必须用public来修饰没有具体实现的方法。
> 3. 抽象类中的成员变量可以被不同的修饰符来修饰，可接口中的成员变量默认的都是静态常量（static final）。
> 4. 这一点也是最重要的一点本质的一点”抽象类是对象的抽象，然接口是一种行为规范”。

------





java

```java
class Cat{
    void fun(){
        System.out.println("唱歌");
            }
}
class Dog{
    void fun(){
        System.out.println("唱歌");
            }
}
public class chouxiang{
    public static void main(String[] args){
                    }
        }
```

因为Cat和Dog两个类有相同的功能，因此我们可以进行抽取，建立父类并且继承（继承中的知识点）：





java

```java
class Animal{
    void fun(){
        System.out.println("唱歌");
            }
}

class Cat extends Animal{}
class Dog extends Animal{}

public class chouxiang{
    public static void main(String[] args){
                    }
        }
```

但是，如果猫和狗对继承后的具体实现不满意，我们又可以进行重写（多态中的知识点）：





java

```java
class Animal{
      void fun(){
          System.out.println("唱歌");
              }
  }

  class Cat extends Animal{
      void fun(){
          System.out.println("喵喵的唱歌");
              }
  }

  class Dog extends Animal{
      void fun(){
          System.out.println("汪汪的唱歌");
              }
  }

public class chouxiang{
    public static void main(String[] args){
        Cat c=new Cat();
        Dog d=new Dog();
        function(c);
        function(d);
    }
    static void function(Animal a){
        a.fun();
    }
}
```

至此，在多态之后，我们发现，Animal中的方法主体已经没有意义了，既然没有意义，我们是否可以去掉主体部分？





java

```java
class Animal{
    void fun();
}
class Cat extends Animal{
    void fun(){
        System.out.println("喵喵的唱歌");
            }
}
class Dog extends Animal{
    void fun(){
        System.out.println("汪汪的唱歌");
            }
}
```

但是，直接去掉会报错，因为缺少主体是不符合java规范的，在父类和方法前加上abstract修饰就可以解决，这就是抽象类：





java

```java
abstract class Animal{
      abstract void fun();
  }
class Cat extends Animal{
    void fun(){
        System.out.println("喵喵的唱歌");
            }
}
class Dog extends Animal{
    void fun(){
        System.out.println("汪汪的唱歌");
            }
}
public class chouxiang{
    public static void main(String[] args){
        Cat c=new Cat();
        Dog d=new Dog();
        function(c);
        function(d);
    }
    static void function(Animal a){
        a.fun();
    }
}
```

------

1. abstract只能修饰类和方法，不能修饰变量；
2. 当我们多个类存在相同的方法时，但是方法的主体不同，这时进行向上抽取，只抽取方法的定义，不抽取方法的主体；
3. 抽象类和抽象方法必须都要被abstract关键字修饰，并且抽象方法一定要在抽象类中；
4. 抽象类是不能直接被实例化的(new对象)，因为抽象方法无意义，自然new出来的对象也无意义；
5. 抽象类中的方法要被使用，必须由子类重写抽象类中的方法，然后创建子类对象来调用(直接创建或多态)。所以抽象类就是用来继承和使用多态的；
6. 抽象类中可以定义非抽象的方法(普通方法)。有时我们需要此类不能被new对象时，可以用abstract将此类变成抽象类，换句话说就是抽象类是不能使用new关键字创建对象，但在内存中抽象类还是有对象的，因为不要忘记在继承中的子类的构造函数中有一条隐性的super语句，既然能调用super，就证明有对象；





java

```java
abstract class Animal{
           abstract void fun();
         void ff(){    
            System.out.println("hello");
                   }
           }
   class Cat extends Animal{
    void fun(){
        System.out.println("喵喵的唱歌");
                    }
            }

public class chouxiang{
public static void main(String[] args){
    Animal c=new Cat();--向上转型
    c.fun();
    c.ff();---抽象类不能new对象，所以想调用抽象类中的普通方法，要利用向上转型。
                    }
    }
```





java

```java
abstract class Animal{
    Animal(){
          System.out.println("***");
        }
    abstract void fun();
    void ff(){
        System.out.println("hello");
            }
}
class Cat extends Animal{
    Cat(){
        super();
          System.out.println("###");
        }
    void fun(){
        System.out.println("喵喵的唱歌");
            }
}
class Dog extends Animal{
    void fun(){
        System.out.println("汪汪的唱");
    }
}
public class chouxiang {
    public static void main(String[] args){
        Cat c=new Cat();
        Dog d=new Dog();
        function(c);
        function(d);
        Animal a= new Dog();
        a.ff();
    }
    static void function(Animal a){
        a.fun();
    }
}
```

------

1. 如果抽象类中的抽象方法要被使用，子类必须重写该抽象方法；
   报错：





java

```java
abstract class Animal{
     abstract void say();
     abstract void ff();--报错，子类没有重写抽象方法
}
class  Cat extends Animal{
    void say(){
        System.out.println("喵喵的唱");
    }   
}
class Dog extends Animal{
    void say(){
        System.out.println("汪汪的唱");
    }   
}
public class chouxiang {
    public static void main(String[] args){
        Cat c=new Cat();
        Dog d=new Dog();
        function(c);
        function(d);
    }
    static void function(Animal a){
        a.say();
    }
}
```

不报错：





java

```java
abstract class Animal{
     abstract void say();
     abstract void ff();
}
class  Cat extends Animal{
    void say(){
        System.out.println("喵喵的唱");
    }   
    void ff(){}
}
class Dog extends Animal{
    void say(){
        System.out.println("汪汪的唱");
    }
    void ff(){
    }
}
public class chouxiang {
    public static void main(String[] args){
        Cat c=new Cat();
        Dog d=new Dog();
        function(c);
        function(d);
    }
    static void function(Animal a){
        a.say();
    }
}
```