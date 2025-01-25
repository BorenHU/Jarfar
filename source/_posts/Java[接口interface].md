---
title: '接口[Extend][Java]'
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
abbrlink: 34189
date: 2020-03-24 19:43:10
img:
coverImg:
password:
thumbnail: 
---

接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。

<!-- more -->

---

接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。

一个类通过继承接口的方式，从而来继承接口的抽象方法。

接口并不是类，编写接口的方式和类很相似，但是它们属于不同的概念。

类描述对象的属性和方法。接口则包含类要实现的方法。

除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。

接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。另外，在 Java 中，接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。

初步理解，接口是一个特殊的抽象类，当抽象类中全部是抽象方法时，可以通过接口的形式来体现；

class定义类，

extends继承；
interface定义接口，

implements实现；

接口中成员的格式：固定的。
(1)全局常量：public static final String NAME=“张三”;(说明：public，static，final这些修饰符的位置理论上可以随意放置，不分前后顺序。)
(2)抽象方法：public abstract void fangfa();

接口中只能出现public修饰符，如使用private等会报错；

接口不可以创建对象，因为接口是特殊的抽象类，抽象类是不能创建对象的。

接口需要被子类实现，子类对接口中的所有抽象方法实现后，子类才能够实例化，否则子类就是一个抽象类。说明，这里所谓的“实现”就是重写的意思，只不过在接口中叫“实现”。

抽象类不能用new关键字创建对象，但在内存中还是存在的，而接口不仅不能创建对象，在内存中也是不存在的。既然接口在内存中都没有对象，那自然不能在接口中定义构造函数初始化了，连对象都没有，哪来的构造，因此接口是没有构造函数的。

语义：类是继承，接口是实现
继承的角度：是猫和狗继承自动物，来源于动物。
接口的角度：是猫和狗实现了动物的特点，把动物具体化。

接口与类相似点
一个接口可以有多个方法。

接口文件保存在 .java 结尾的文件中，文件名使用接口名。

接口的字节码文件保存在 .class 结尾的文件中。

接口相应的字节码文件必须在与包名称相匹配的目录结构中。

接口与类的区别
接口不能用于实例化对象。

接口没有构造方法。

接口中所有的方法必须是抽象方法。

接口不能包含成员变量，除了 static 和 final 变量。

接口不是被类继承了，而是要被类实现。

接口支持多重继承。

接口特性
接口中每一个方法也是隐式抽象的,接口中的方法会被隐式的指定为 public abstract（只能是 public abstract，其他修饰符都会报错）。

接口中可以含有变量，但是接口中的变量会被隐式的指定为 public static final 变量（并且只能是 public，用 private 修饰会报编译错误。

接口中的方法是不能在接口中实现的，只能由实现接口的类来实现接口中的方法。

抽象类和接口的区别
抽象类中的方法可以有方法体，就是能实现方法的具体功能，但是接口中的方法不行。

抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是 public static final 类型的。

接口中不能还有静态代码块以及静态方法(用 static 修饰的方法)，而抽象类是可以有静态代码块和静态方法。

一个类只能继承一个抽象类，而一个类却可以实现多个接口。

```java
interface Animal{
    public static final String NAME="动物";  
    public abstract void say();
    public abstract void ff();
    /*
    也可以如下这么写，因为在接口中，系统会默认添加前面的一系列修饰符。
    所以说接口中没有成员变量这一说，因为就算你写了int i=100，接口中前面也会默认添加public，static，final，变成常量。
    String NAME="动物";
    void say();
    void ff();
    所以接口中不管是常量还是方法，只能有public权限，因为都是默认添加的，所以也不能使用别的权限了。
    */
}

class Cat implements Animal{
    //注意：接口的方法前面有默认的public，所以这里也要加，否则权限不一样了，不加是default权限
    public void say(){
        System.out.println("喵喵的唱");
        System.out.println(NAME);
    }
    public void ff(){   
    }
}
class Dog implements Animal{
    public void say(){
        System.out.println("汪汪的唱");
        System.out.println(NAME);
    }
    public void ff(){   
    }
}
public class jiekou {
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

java不支持多继承，因为存在安全隐患，但是java保留了这种机制，使用“多实现”这种形式来完成，即接口。因此通俗的说接口可以实现多继承。
因为在常规继承中当子类拥有多个父类的时候，系统不确定到底执行哪个了：
class Smoke{
    void smoke(){
        System.out.println("抽烟");
    }
}
class Drink{
    void drink(){
        System.out.println("喝酒");
    }
        }
class Man extends Smoke,Drink{//报错，哪个父亲说的算啊？
        }
从接口多实现的角度，就可以解决多继承了：
    interface Smoke{
    void smoke();
        }
interface Drink{
    void drink(); 
        }
class Man implements Smoke,Drink{ //男人实现了抽烟和喝酒的特点
    public void smoke(){
        System.out.println("吸烟");
            }
    public void drink(){
        System.out.println("喝酒");
            }
        }
public class jiekou{
    public static void main(String[] args){
        Man m=new Man();
        m.smoke();
        m.drink();
                    }
        }


```

接口的实现
当类实现接口的时候，类要实现接口中所有的方法。否则，类必须声明为抽象的类。

类使用implements关键字实现接口。在类声明中，Implements关键字放在class声明后面。

实现一个接口的语法，可以使用这个公式：

```java
Animal.java 文件代码：
…implements 接口名称[, 其他接口, 其他接口…, …] …

实例
MammalInt.java 文件代码：

/* 文件名 : MammalInt.java */ 
public class MammalInt implements Animal{ 
public void eat(){ 
System.out.println("Mammal eats"); } 
public void travel(){ 
System.out.println("Mammal travels"); } 
public int noOfLegs(){ 
return 0; } 
public static void main(String args[]){ 
MammalInt m = new MammalInt(); 
m.eat(); 
m.travel(); } }

```

以上实例编译运行结果如下:

Mammal eatsMammal travels
1
重写接口中声明的方法时，需要注意以下规则：

类在实现接口的方法时，不能抛出强制性异常，只能在接口中，或者继承接口的抽象类中抛出该强制性异常。

类在重写方法时要保持一致的方法名，并且应该保持相同或者相兼容的返回值类型。

如果实现接口的类是抽象类，那么就没必要实现该接口的方法。

在实现接口的时候，也要注意一些规则：

一个类可以同时实现多个接口。

一个类只能继承一个类，但是能实现多个接口。

一个接口能继承另一个接口，这和类之间的继承比较相似。

接口的继承
一个接口能继承另一个接口，和类之间的继承方式比较相似。接口的继承使用extends关键字，子接口继承父接口的方法。

下面的Sports接口被Hockey和Football接口继承：

```java
// 文件名: Sports.java 
public interface Sports { 
public void setHomeTeam(String name); 
    public void setVisitingTeam(String name); } 
// 文件名: Football.java 
public interface Football extends Sports { 
    public void homeTeamScored(int points); 
    public void visitingTeamScored(int points); 
    public void endOfQuarter(int quarter); } 
// 文件名: Hockey.java 
public interface Hockey extends Sports { 
    public void homeGoalScored(); 
    public void visitingGoalScored(); 
    public void endOfPeriod(int period); 
    public void overtimePeriod(int ot); }

```

Hockey接口自己声明了四个方法，从Sports接口继承了两个方法，这样，实现Hockey接口的类需要实现六个方法。

相似的，实现Football接口的类需要实现五个方法，其中两个来自于Sports接口。

接口的多重继承
在Java中，类的多重继承是不合法，但接口允许多重继承。

在接口的多重继承中extends关键字只需要使用一次，在其后跟着继承接口。 如下所示：

public interface Hockey extends Sports, Event
1
以上的程序片段是合法定义的子接口，与类不同的是，接口允许多重继承，而 Sports及 Event 可能定义或是继承相同的方法

标记接口
最常用的继承接口是没有包含任何方法的接口。

标识接口是没有任何方法和属性的接口.它仅仅表明它的类属于一个特定的类型,供其他代码来测试允许做一些事情。



首先接口是两者之间衔接的部分，比如插排，就是插头和电之间衔接的部分。

电脑的USB接口，就是电脑和优盘之间衔接的部分。

我们在后期的学习中，很多插件，很多库，都定义好了很多同类的方法，封装在了后台，然后给我提供了接口，衔接了我们和这些方法，我们可以通过这些接口去对这些方法进行实现，就像implements音乐，地图，钱，之后，我们可以写实现的方法。

上面的案例，接口是我们自己写的，那我们做开发时，接口是已经写好的，我们直接实现就可以了。



其次，接口表示一种能力，它是接口最本质最核心的思想。

比如把插头插在插座上，就通电了，怎么通电的用户不关心。

把u盘插在usb接口上，就可以传输文件了，怎么传输的用户不关心，用户关心需要的是这个插座和usb口的传输能力，所以说接口是一种能力。
那对于我们开发人员来说，这个能力需要我们来写，比如提供了一个Map接口，我们去实现它的导航功能，然后把这个Map接口放在前台，用户通过这个接口去使用导航就ok了。
所以我们说接口的能力是体现在接口中的的方法上的。
关心实现类有何能力，而不关心实现细节：就是手机类有何种能力，是取决于实现了哪些接口。

实现了Map接口，才能有导航的功能，实现了钱的接口，才能有转账的功能。

面向接口的约定而不考虑具体实现：就是我们在定义接口时，因为是抽象的，没有主体，所以就只是定义好了方法就行，那么这个接口是怎么具体实现的，不在接口里写，不归接口管。

就像定义了地图和钱的接口后，具体的实现是在手机那个类中去重写。
