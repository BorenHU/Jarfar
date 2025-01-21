---
title: '结构体类型[C语言]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - C语言
categories:
  - C语言
abbrlink: 8314
date: 2020-04-02 16:58:00
img:
coverImg:
password:
---

结构体类型

<!-- more -->

---

## 

**一，结构体类型**

```c
struct	student

{	int	sn;
	int	age;
	char	sex;
	int	s[3];
};
```

注：

	1. 定义成员的方式与定义普通变量的方式一样。
 	2. 成员列表必须用一对花括号括起。
 	3. 结构体名可以省略。

**结构变量的初始化及引用**

1. 在定义结构体变量的同时可以将各成员的初值按顺序放在一对花括号中，来进行对结构体变量的初始话。若初值个数多于成员个数则出错，若初值个数少于成员个数，则多余成员自动赋0.

```c
struct aa
{	int	a;
	char	b[10];
	float	c;
}a1 = {30,"china",40.5},a2 = {60,"kunming"},a3;
```

2. 结构体变量不能整体引用，只能引用它的成员。（同数组相似）

3. 引用结构体成员的方式：

   结构体变量名.成员名

   其中( . )为成员运算符。

```c
printf("a1 = %d, %s, %f", a1);	非法
printf("a1 = %d, %s, %f", a1.a, a1.b, a1.c);
a1.a = 80;
a1.b = strcpy(a1.b,"xinjiang");
a1.c = 60.5;
```

**二，指向结构体数据类型的指针**

1. 指向结构体变量的指针

```c
struct student
{	int num;
	char name[20];
	char sex;
	float score;
};
struct student aa = {1001,"zhang",'M',80.5};
struct student *p = &aa;
char *q = aa.name;
int  *r = &aa.num;

```

```c
struct student aa = {1001,"zhang",'M',80.5};
struct student *p = &aa;
char   *q = aa.name;
int	   *r = aa.num;
当指针变量p指向结构体变量aa时，引用aa中成员的方式有三种：
aa.num;
(*p).num;
p->num;	->指向运算符
aa.score	//普通变量
(*p).score
p->score
```

```c
//指向结构体数组的指针
struct student
{
	int num;
	char name[20];
	char sex;
	float score;
};
//构造好结构体类型.(结构体变量 先后，同时，省略)
struct student stu[3] ={
{1002,"zhang",'M',60.5},
{1003,"wang",'W',90.9}
};
struct student *p = stu;//结构体指针变量
```

1. 可以用结构体变量的成员作为实参，它与普通变量作为实参的用法一样。
2. 结构体变量作为实参时，要求形参必须是同一结构体类型的变量，传递后形参与实参各对应成员值是一样的。
3. 也可以用结构体类型的地址（指针变量或数组）作为实参，要求形参必须是同一结构体类型的指针变量或数组。只要是地址传递，则可以通过形参来改变实参的值。