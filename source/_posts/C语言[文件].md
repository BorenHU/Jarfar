---
title: '如何操作文件？[C语言]'
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
abbrlink: 53103
date: 2020-04-03 19:47:55
img:
coverImg:
password:
---

文件的概念

<!-- more -->

---

## 

### **一，文件的概念**

1. 文件：记录在外部存储介质（外存）上的数据的集合。

2. 文件的分类：

   ​		文本文件（ASCII码文件）：每个字符存储到文件中。

   ​		二进制文件：以二进制存储。

   C语言中对文件的存取是以字符（字节）为单位的。

3. 文件类型指针

   考试中，记住FILE就是文件类型名，它是一个结构体类型。

   一个文件进行操作，通过文件指针进行的，定义如下：

   FILE	*fp	*in	*out

   （指针读写后自动下移）

   (打开fopen，读写，关闭fclose)

### **二，文件的打开（fopen（）函数）**

格式：fopen（文件名，文件使用方式）

功能：按指定的“使用方式”打开文件，函数返回所打开文件的指针，该指针的基类型为文件类型。文件名和文件使用方式均为字符串。

如：以只读方式打开文件data.txt，并用指针变量fp指向它。

```c
FILE *fp
fp = fopen("data.txt","r")
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200403201507307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

注：

1. 文件使用方式只能用小写字母，文件名用大写或小写均一样。

如：

```c
FILE	*fp；
fp = fopen（“c:\\tc\\data.txt”,"w"）；
```

2. 在“文件使用方式”中若含有字母b，则打开的是一个二进制文件（bit）。
3. 当fopen“打开”失败时，函数返回NULL。

```
if((fp = fopen(文件名，文件使用方式)==NULL))
{
	printf("can not open this file\n");
	exit(0);
}
```

### **三，文件的关闭（fclose函数）**

文件使用完后应该关闭该文件。

格式：fclose（文件指针）

如：fclose（fp）；

#### **fputc()**

格式：fputc（字符，文件指针）

功能：把一个字符写到文件指针所指的文件中。其中字符可以是字符常量也可以是字符变量。若输出成功则函数返回输出的字符，失败则返回EOF（stdio.h中定义为-1）

#### **fgetc()**

格式：fgetc(文件指针)

功能：从文件指针所指文件中读取一个字符。若读取成功则函数返回读取的字符，失败（遇到文件结束）则返回EOF。

```c
char ch;
ch = fgetc(fp);
```

#### **fgets()**

格式：fgets(str,n,fp)

功能：其中str表示一个字符指针，可以是字符数组名也可以是字符指针变量名。从fp所指文件中读取n-1个字符（不是n 个字符），并在这些字符的最后加一个字符串结束符'\0'后赋给str。

函数返回str的首地址。

#### **fputs()**

格式：fputs(str,fp)

功能：向fp所指文件中写（输出）str中的字符串，str可以是字符串常量，字符数组或字符指针变量。在输出时字符串的结束符'\0'不输出。若输出成功则返回0，失败返回EOF。

#### **fread(),fwrite()**

格式：

fread(buffer,size,count,fp);

fwrite(buffer,size,count,fp);

其中：

buffer是数据的地址

size是每次读写的字节数

count表示让函数进行多少次的读写

fp是要进行读写的文件指针变量

功能：用来读写一个连续的数据块

注：

1. 这两个函数按二进制方式进行读写。

#### **fprintf(),fscanf()**

格式：（按格式进行读写）

fprintf(文件指针，格式说明符，输出列表)；

fscanf（文件指针，格式说明符，输出列表）；

功能：

按格式说明符所指定的格式向文件中读写（输入输出）数据。其中格式说明符和输入（输出）列表的用法与scanf和printf函数相同。

#### **feof（文件指针）**

作用是测试文件的当前读写位置是否在文件末尾，若是则返回非0值（真），否则返回0（假）。

```c
feop(fp)
 //常用
while(!feof(fp))
{}
```

遍历中：

数组：for（i = 0;i < 行;i++）

字符：for   (i = 0 ;s[i]!='\0';i++ )

指针：while（p!=NULL）

{p = p -> neet;}

### **文件当前读写位置函数**

1. 重新定位指针

   格式：rewind(文件指针)

   作用：使当前的读写位置重新指向文件的开头。函数无返回值。

2. fseek（）

   格式：fseek(文件指针，位移量，起始点)

   功能：将当前的读写位置从“起始点”开始按“位移量”所指定的移动字节数向后移动。

   起始点有：

   ​			SEEK_SET	或0（表示“文件的开始”）

   ​			SEEK_CUR	或1（表示“当前位置”）

   ​			SEEK_END	或2（表示文件结尾）

   位移量：要在数值后加字母l或L。

   如：

   ​		fseek(fp,100L,SEEK_SET)

```c
//例：将位置指针定位到离文件头50个字节的地方
fseek(fp,50L,0);
//只读写最后50个字节
fseek(fp,-50L,0);

//指向文件头
1. fp = fopen();
2. rewind(fp);
3. fseek(fp,0L,0);
```

3. ftell()

   格式：ftell(文件指针)

   功能：返回当前文件的位置，用相对于文件头的位移量表示。若返回-1L表示出错。

```c
//文件长度
int file length;
FILE   *fp;
//指向文件头
fp = fopen();
//指向文件尾
fseek(fp,0L,2);
file length = ftell(fp);

```