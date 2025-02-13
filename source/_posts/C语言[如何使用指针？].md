---
title: '如何使用指针？[C语言]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - C语言
  - 指针
categories:
  - C语言
abbrlink: 21343
date: 2020-04-01 17:07:54
img:
coverImg:
password:
---

如何使用C语言？

<!-- more -->

---

## 

**一，指针变量的定义**

C语言有两种变量：

其中变量（普通变量）存储内容值；地址变量（指针变量）存储地址值。

注：

1. 定义变量（普通变量，指针变量）都必须再前面有类型名。
2. 在定义指针变量时，指针变量名前的“*”表示现定义的是一个指针类型的变量。星号并不是指针变量名的一部分，只有一个标志。
3. 指针变量专门用来存地址，禁止将一个整形值直接赋给一个指针变量。

**指针变量的引用**

- “&”取地址运算符，通过&运算符可以取出普通变量的地址。

- “\*”指针运算符，*可以取出指针变量所指向的普通变量的值，（间接引用普通量）
  - 前有类型后有“*”,该星是标志。
  - 地址变量得地址，得谁地址指向谁。
  - 有※是内容值，不是读就是写。
  - 无※是地址，意味着改指向。
- 可以通过赋值使一个指针变量“指向”某一普通变量（指针变量=&普通变量）。
- 在C语言中正确的做法是先让指针变量指向一个确定的存储单元后，再通过该指针变量引用它所指向的存储单元，
- 变量名（普通变量，指针变量）都表示其存储单元内的值。
- 若指针变量p指向变量a，即将变量a的地址赋给了指针变量p。

**二，指针数组**

1. 在C语言中规定：数组名代表数组的首地址，而且是一个地址常量。

2. 当指针变量指向数组中的某一个元素时，指针变量家1后指向数组的下一个元素，指针变量减1时指向数组中前一个元素。

3. 若两个指针变量指向同一个数组，则这两个指针变量可以进行大小比较如：

```c
char s[10];
char *p1 = s+3,*p2=&s[7];
则：这
p1>p2=>0
p1<p2=>1
p1-p2=>-4
p2-p1=>4
```

4. 在形参中的数组实际上是一个指针变量，并不是真正的数组，因为该“数组名”的值是可以改变的，而真正的数组名的值是不能改变的。

5. 若形参是数组或指针变量，则在函数中可以通过该形参改变实参的值

**二，指向多维数组的指针变量**

1. 指向多维数组的指针变量

   如：

```c
int a [3][4];
int *p = &a[0][3];
则：
p+1 指向元素a[1][0];
p+4 指向元素a[1][3];
p-2 指向元素a[0][1];
常用于取二维数组a元素地址的方式：
    &a[i][j] , a[i]+j , *(a+i)+j
 
```

2. 指向由m个元素组成的一维数组的指针变量，定义指向由m个元素组成的一维数组的指针变量的格式。：

   类型 （*指针变量名）[m];

   如：

```c
int a[5][7];
int (*p)[7];
p = a;
char b[10][80];
char (*r)[80];
r = b + 5;
```

**三，指向字符串的指针变量**

字符串常量：C语言对字符串常量是按首地址处理字符串常量

```c
char str[] = "China";
char *p = "China";
str = "Chinese";
p = "Chinese";
```

**四，指向函数的指针变量**

函数名与数组名一样，是起始地址，而且是一个地址常量。

定义指向函数的指针变量方式：

类型名		（*指针变量名）

注：

1. 在定义指向函数的指针变量时，要注意有两个小括号必须要有，不需要定义形参。
2. 单独的函数名代表函数的首地址（函数的入口地址）。
3. 函数的指针变量只能指向函数的入口处（函数的首地址），不能指向函数中的某条指令。（另外指向函数的指针变量加1是没有意义的）。
4. 给指定函数的指针变量赋值时，只写函数名即可，不必写参数。

返回指针的函数的定义方式为：

```c
类型名		*函数名（形参列表）
{
    return 地址值;
}
//决定了返回类型是 类型名 *
```

**五，指针数组和指向指针的指针变量**

1. 若一个数组的所有元素均为指针类型（地址），则称为指针数组。

   格式：

   ​		类型名		*数组名[常量表达式]

   ​		int 			  *s[10]；



2. 指向指针的指针变量

   用来存放指针变量地址的指针变量称为指向指针的指针变量。

   定义格式：

   ​					基类型名		**指针变量名；

**六，空指针**

指针变量可以有空值，即指针变量不指向任何变量，不指向任何有用的存储单元。

在系统中已将NULL定义为0，即NULL的值为0.

int a,b,c,*p = NULL;

此时p的值为空指针，即p不指向任何有用的存储单元。尽管NULL的值为0，但我们不能认为p指向了地址为0的存储单元。

注：

1. 当一个指针变量的值为空指针时，我们不能引用它所指向的存储单元。
2. 若某指针（地址）的基类型为void型，则有引用时应该进行相应的强制类型置换。









































