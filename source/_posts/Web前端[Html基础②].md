---
title: Html基础②[前端]
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Html
categories:
  - Web前端
abbrlink: 46972
date: 2020-03-17 17:14:41
img:
coverImg:
password:
---

Html基础②

<!-- more -->

---


**Meta标签介绍**

2:meta 的属性有两种：name和http- equiv。
        name属性主要用于描述网页，对应于content（网页内容）         
        1、\<meta name="Generator" contect="">用以说明生成工具（如Microsoft FrontPage 4.0）等； 
　　2、\<meta name="KEYWords" contect="">向搜索引擎说明你的网页的关键词； 
　　3、\<meta name="DEscription" contect="">告诉搜索引擎你的站点的主要内容； 
　　4、\<meta  name="Author"  contect="你的姓名">告诉搜索引擎你的站点的制作的作者； 
　　5、\<meta   name="Robots" contect= "all|none|index|noindex|follow|nofollow"> 
其中的属性说明如下： 
　　设定为all：文件将被检索，且页面上的链接可以被查询； 
　　设定为none：文件将不被检索，且页面上的链接不可以被查询； 
　　设定为index：文件将被检索； 
　　设定为follow：页面上的链接可以被查询； 
　　设定为noindex：文件将不被检索，但页面上的链接可以被查询； 
　　设定为nofollow：文件将不被检索，页面上的链接可以被查询。 

**http-equiv属性 **

\<meta http-equiv="Content-Type"   contect="text/html";     charset=gb_2312"> \<meta http-equiv="Refresh" content="5;url=http://www.w3school.com.cn" />

网页重定向
**link标签：**
	1：引用外部css
    2:   引用title图片  （icon)     

例如： \<link  rel="icon"  href="1.icon">

**字符集（charset）:**

- utf-8是目前最常用的字符集编码方式，常用的字符集编码方式还有gbk和
- gb2312
- gb2312 简单中文
- GBK包含全部中文字符  繁体
- BIG5   繁体中文

- UTF-8则包含全世界所有国家需要用到的字符

**Html 表格**

生活中会遇到哪些表格 （课程表,值日表…）
在HTML语言中，表格至少由\<TABLE>标签、\<TR>标签和\<TD>标签这3对标签组成

1.\<table>
\<table>...\</table>

标签用于在HTML文档中创建表格。它包含表名和表格本身内容的代码。表格的基本单元是单元格，用\<td>...\</td>标签定义。
2.\<tr>
表格行用\<tr>标签定义，由单元格构成。多个行结合在一起就构成一个表格，这反映在用于创建表格的HTML语法中。表格的每一行都用\<tr>标签表示，并用相应的\</tr> 结束

3.\<td>
表格的每一行又有若干表格单元格，用\<td>...\</td>标签表示。TD是"表格数据( Table Data)”的英文缩写。\<td>标签定义一个列，嵌套于\<tr>标签内。
border属性是最常用的属性，可用于定义表格的单元格和结构。该属性指定边框的厚度，如果其值设置为零(0)，则不显示边框。

创建表格的基本语法：
\<table> 

 \<tr>                                                    

\<td> 单元格内容  \</td>      

\</tr>                                                      

 \</table>

创建表格时，一般情况下分3步：

第一步：创建表格标签< table>…\</table>。
第二步：在表格标签table>…\</table>里创建行标签\<tr>...\</tr>，可以有多行。
第三步：在行标签\<tr>...\</tr>里创建单元格标签\<td>...\</td>，可以有多个单元格。

**表格中的属性**

| **属性名**  | **含义**                     | **常用属性值**                   |
| ----------- | ---------------------------- | -------------------------------- |
| Border      | 设置边框 默认为0 没有边框    | 单位为px 像素值                  |
| Cellspacing | 设置单元格与单元格之间的距离 | 单位为px 像素值默认2px           |
| Cellpadding | 设置文字与单元格之间的距离   | 默认1px                          |
| Width       | 设置表格的宽度               | 单位px                           |
| Height      | 设置表格高度                 | 单位px                           |
| Align       | 设置表格在网页中的对齐方式   | Left    左Right   右Center  居中 |
| bgcolor     | 设置背景颜色                 | white ,red,green                 |

**caption 元素定义表格标题**

caption 标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。

**\<th>标记及其属性**

表头一般位于表格的第一行或第一列，其文本加粗居中，如下图所示，即为设置了表头的表格。设置表头非常简单，只需用表头标记\<th>\</th>替代相应的单元格标记\<td>\</td>即可。

**表格的结构**

在使用表格进行布局时，可以将表格划分为头部、主体和页脚，具体 如下所示：
\<thead>\</thead>：用于定义表格的头部，必须位于\<table>\</table>标记中，一般包含网页的logo和导航等头部信息。
\<tfoot>\</ tfoot >：用于定义表格的页脚，位于\<table>\</table>标记中\<thead>\</thead>标记之后，一般包含网页底部的企业信息等。
\<tbody>\</tbody>：用于定义表格的主体，位于\<table>\</table>标记中\<tfoot>\</ tfoot >标记之后，一般包含网页中除头部和底部之外的其他内容。

**表单（form）**

-常见的表单：银行开户，学籍录入，网上注册信息等等。。
表单的作用：主要负责数据采集功能。
对于表单构成中的表单控件、提示信息和表单域，初学者可能比较难理解，对他们的具体解释如下：
表单控件：包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。
提示信息：一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。
表单域：他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

语法： 

Name ：定义表单的名称
Method: 定义表单结果从浏览器传送到服务器的方式，默认参数为：get ；
Action ：用来指定表单处理程序的位置(服务器端脚本处理程序） 
Fieldset：把表单分组
Legend：分组名称