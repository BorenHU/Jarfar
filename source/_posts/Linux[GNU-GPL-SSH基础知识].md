---
title: 'GNU-GPL-SSH基础知识[Linux]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Linux
categories:
  - Linux
abbrlink: 44633
date: 2020-04-06 10:12:25
img:
coverImg:
password:
---

GNU与GPL知识

<!-- more -->

---


- 自1984年起，Richard	Stallman 在软件开发团体中发起开发自由软件的运动，并获得麻省理工学院（MIT）的支持。这就导致了自由软件基金会（Free SoftwareFoundation，FSF）的建立和GUN项目的产生。

- 在其他人的协作下，Richard	Stallman创立了通用公共许可证（General Public License，GPL），这对推动自由软件的发展起了至关重要的作用。GPL许可核心思想是保证任何人有共享和修改自由软件的自由，任何人有权取得，修改和重新发布自由软件的源代码权利，但要求把具体的需求发布出来。

- FSP的主要项目是GNU(GNU'S	NOT	UNIX,GNU不是Unix)。它的目标是建立可自由发布和移植的类Unix操作系统。GNU项目本身产生的主要软件包包括: Emacs编辑软件，gcc编译软件，bash命令解释程序和编程语言，以及gawk（GNU'S awk）等等。此外还包括许多操作系统必不可少的工具。

- 到1991年Linux内核发布的时候，GNU已经几乎完成了除了系统内核之外的各种必备软件的开发。在Linxu Torvalds和其他开发人员的努力下，GNU组件可以运行于Linux内核之上。

- 整个Linux内核时基于GNU通用公共许可，即GPL的，但是Linux内核并不是GNU计划的一部分。Linux操作系统的另一些重要组成部分则来自加利福尼亚大学Berkeley分校的BSD Unix和麻省理工学院的X Windows系统项目。这些都是经过长期考验的成果。正是Linux内核与GNU项目，BSD Unix以及MIT的X11结合，才使整个Linux操作系统得以很快形成，而且建立在稳固的基础上。

**GNU和GPL介绍**

- GNU

  GNU	GNU's not unix, 是1984年Richard    Stallman发起的自由软件运动，导致了FSF得诞生，从而有了GNU这个项目，开发一个操作系统及各种程序组件，不是UNIX得操作系统，实际就是Linux操作系统，GNU项目是Linux内核之上的一些组件，不包括Linux内核

- GPL

  GPL	general	public	license	许可证保证任何人有共享和修改自由软件得自由，任何人有权利，用，改，发布，GPL就是一个协议。

## Linux的发行版

Linux的发行版说简单点就是将Linux内核与应用软件做一个打包。

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/13.jpg)

目前市面上较知名的发行版有：Ubuntu、RedHat、CentOS、Debian、Fedora、SuSE、OpenSUSE、Arch Linux、SolusOS 等。

由于Linux得版本众多，且不同得企业应用需要得Linux版本和Linux技能也不尽相同。因此，只有了解了各个版本的Linux适合的常见应用后，我们才好知道该如何选择适合自己的Linux版本及学习的方式和要掌握的技能。这里我们按照Linux的常见应用把Linux分为 **IT服务器系统应用领域，嵌入式系统应用领域，个人桌面系统应用领域。**

**IT服务器系统应用领域**

Linux作为企业级服务器应用广泛，利用Linux系统可以为企业架构WWW服务器，数据库服务器，代理服务器（集群服务器），邮件服务器，DNS服务器，透明网关，路由器等等，不但使企业降低了运营成本，同时获得了Linux系统带来的高稳定性和高可靠性，且免去了版权的争斗。

## SecureCRT介绍

- 基本定义

SecureCRT是一款支持SSH（SSH1和SSH2协议）的终端仿真软件，简单的说是在Windows下登录Unix或Linux服务器主机的优秀软件。

不同的就是SecureCRT支持SSH协议，同时支持Telnet和tlogin协议。SecureCRT是一款用于连接运行包括Windows，UNIX和VMS的理想工具。通过使用内含的VCP命令行程序可以进行加密文件的传输。有流行CRT Telnet客户机的所有特点，包括：自动注册，对不同主机保持不同的特性，打印功能，颜色设置，可变屏幕尺寸，用户定义的键位图和优良的VT100,VT102,VT220和ANSI竞争，能从命令行中运行或从浏览器中运行。其他特点包括文本手稿，易于使用的工具条，用户的键位图编辑器，可定制的ANSI颜色等。SecureCRT的SSH协议支持DES，3DES和RC4密码和密码与RSA鉴别。

- SSH概念解释

SSH的英文全称是Secure Shell。传统的网络服务程序，如：ftp和telnet在本质上都是不安全的，因为它们在网络上用明文传送口令和数据，别有用心的人非常容易就可以截获这些口令和数据。而通过使用SSH客户端与服务器端通讯时，用户名及口令均进行了加密，有效防止了对口令的窃听。同时通过SSH的数据传输是经过压缩的，所以可以提高数据的传输速度。SSH是由客户端和服务器端的软件组成的，其中客户端软件就是SecureCRT，有两个不兼容的版本分别是：1.x和2.x。

## Linux  文件与目录管理

Linux的目录结构为树状结构，最顶级的目录为根目录/。

其他目录通过挂载可以将它们添加到树中，通过解除挂载可以移除它们。

- 绝对路径

  路径的写法，由根目录 / 写起，例如：/usr/share/doc 这个目录。

- 相对路径

  路径的写法，不是由 / 写起，例如由 /usr/share/doc 要到 /usr/share/man底下时，可以写成：cd ../man 

---

### 处理目录常用的命令

- ls：列出目录
- cd：切换目录
- pwd：显示当前的目录
- mkdir：创建一个新的目录
- rmdir：删除一个空的目录
- cp：复制文件或目录
- rm：移除文件或目录
- mv：移动文件与目录，或修改文件与目录的名称

可以通过man[命令]来查看各个命令的使用文档，如：man cp。

---

### Linux文件内容查看

Linux系统中使用以下命令来查看文件的内容：

- cat 由第一行开始显示文件内容
- tac 从最后一行开始显示
- nl 显示的时候，顺道输出行号！
- more 一页一页的显示文件内容
- less与more类似，但是比more更好的是，它可以往前翻页
- head 只看头几行
- tail 只看尾巴几行

---

### Linux用户退出

用户退出登录的方式有以下三种：

1. 在shell提示符下输入exit按回车确认
2. 在shell提示符下输入logout按回车确认
3. 按快捷键crtl + d（此方法同logout同效果）

