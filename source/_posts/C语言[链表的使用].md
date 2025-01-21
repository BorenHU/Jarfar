---
title: '什么是链表？如何使用？[C语言]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - C语言
  - 数据结构与算法
categories:
  - C语言
abbrlink: 36483
date: 2020-04-01 16:30:10
img:
coverImg:
password:
---

为什么会有链表？这门技术解决了什么问题？

<!-- more -->

---

## 

或许这是让每一个IT初学者很头痛的问题，明明我们在之前已经接触了数组，感到数组已经是万能的数据存储位置了，但是，如果我们一直使用比较复杂的数据（也就是比较多的数据时），我们肯定会感到很反感，因为对于数组这种数据结构，在你自己使用之前，一定要对其大小进行一番定义，这样一来，它的存储空间在数据处理过程中显得极为不方便，因为谁也不想对将要处理的数据做一个空间的预算，这是我们每一个程序员都很忌讳的，并且还要让其空间足够大，这样才能满足我们的要求（但是如果分配的太多，难免会浪费内存），上面的一切都证明使用数组需要注意的东西真的很多很多，这样一来，我们就开始说说链表，链表也是一种数据结构，它弥补了数组带来的诸多不便，让我们可以任意为一些数据进行空间的分配，根据需要进行内存单元的开辟。

而对于链表而言，分为静态链表和动态链表，根据处理数据的方向又分为单向链表和双向链表。

提到链表我们都知道还有一个比较重要的知识点就是指针，因为前后数数据要有关联，必须要进行一系列的连接和指向处理，那么扮演这个角色的就是指针，并且，在现在的编程语言中，指针是任何东西都没有办法去替代的。可见它的重要性。

当然在学习了结构体之后，我们对链表的了解应该就比较轻松，说白了，链表就是通过指针连接的多个结构体。知识每一个结构体中有一个存放指针的成员变量，并且，这个成员的类型是该结构体类型的。每一个链表，都有这个自己的结点，这些结点是结构体的变量，当然，他们也是结构体类型的变量。

![链表生成结构](https://img-blog.csdnimg.cn/20200403094641997.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)



## 什么是链表？

链表是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer).采用动态分配存储单元方式。它能够有效地节省存储空间（同数组比较）。

从本质上来讲,链表与数组的确有相似之处,他们的相同点是都是线性数据结构,这与树和图不同,而它们的不同之处在于数组是一块连续的内存,而链表可以不是连续内存,链表的节点与节点之间通过指针来联系.

## 链表如何使用？

由于链表中的结点是一个结构体类型，并且结点中有一个成员用于指向下一个结点。所以定义作为结点的格式：

```c
struct	结构体名

{	定义数据成员；

	 struct	结构体名	*指针变量名；

}；

例如：	struct	student

{	int	num；

	 float	score；

	 struct	student	*next；

}；

struct	student	a，*p；
//如果结构体中出现一个指向自身的指针，我们叫自身指针，那一定是结点的类型。
```

**动态存储分配函数<stdlib.h>**

1. malloc()函数

   格式：malloc(size)

作用是在内存的动态存储区中分配一个长度为size个字节的连续空间，函数返回值为一个指向分配域起始地址的指针若分配失败则返回NULL。

例如：开辟一个用于存放struct	student数据的内存空间,并让P指向该空间：

struct	student	*p = (struct	student *)malloc(sizeof(struct student));

2. free()函数

   格式：free（p）；

   作用是释放用malloc（）分配的内存。

**链表的操作**

1. 建立动态链表（假定若输入的成员为0则表示结束）

```c
#include<stdlib.h>
struct	node
{
    int data;
    struct node *next;
};
struct node *head,*p,*q;
//申请一个结点
p = (struct node *)malloc(sizeof(struct node));
p->data = 10;
q = (struct node *)malloc(sizeof(struct node));
q ->data = 20;
q ->next = NULL;
p ->next = q;
```

![链表](https://img-blog.csdnimg.cn/20200403104004422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

2. 链表的操作
   - 访问链表

```c
struct	node
{
    int	data;
    struct	node	*next;
};
struct	node	*p;
int		sum = 0;
p = head;
while(p != NULL)
{
    sum += p->data;
    p = p ->next;
}
```

- 链表结点的删除

  如：

1. 请将结点p从链表中删除

![删除中间结点](https://img-blog.csdnimg.cn/20200403144807870.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

2. 请将节点a从链表中删除并让head重新指向链表的第一个结点。

![删除头结点](https://img-blog.csdnimg.cn/2020040314503886.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

3. 删除尾结点

   将尾结点前一个置为空，q->next = NULL

- 增加结点

1. 在中间添加结点（一定要先连后断）

![在中间添加元素](https://img-blog.csdnimg.cn/20200403145640818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

2. 在头结点上添加

![头结点添加结点](https://img-blog.csdnimg.cn/20200403145900219.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

3. 在最后添加结点

将新节点的指针域为s，则：

```c
s -> next = NULL;
q -> next = s;
```