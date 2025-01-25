---
6title: 'GUI入门[Java]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - Java
  - GUI
categories:
  - Java
abbrlink: 2996
date: 2020-03-18 00:11:49
img:
coverImg:
password:
thumbnail: 
---

GUI介绍

<!-- more -->

---


- 早期，电脑向用户提供的是单调、枯燥、纯字符状态的“命令行界面（CLI）”。就是到现在，我们还可以依稀看到它们的身影：在Windows中开个DOS窗口，就可看到历史的足迹。后来，Apple公司率先在电脑的操作系统中实现了图形化的用户界面（Graphical User Interface，简称GUI），但由于Apple公司封闭的市场策略，自己完成电脑硬件、操作系统、应用软件一条龙的产品，与其它PC不兼容。这使得Apple公司错过了一次一统全球PC的好机会。
- 后来，Microsoft公司推出了风靡全球的Windows操作系统，它凭借着优秀的图形化用户界面，一举奠定了操作系统标准的地位。这也造就了世界首富---比尔.盖茨和IT业的泰山北斗微软公司。
- 在这图形用户界面风行于世的今天，一个应用软件没有良好的GUI是无法让用户接受的。而Java语言也深知这一点的重要性，它提供了一套可以轻松构建GUI的工具。在本章和下一章中，我们将向你充分证明这一点。

## Java提供了三个主要包做GUI开发

- java.awt 包 - 主要提供字体/布局管理器
- javax.swing 包[商业开发常用] - 主要提供各种组件（按钮/窗口/文本框）
- java.awt.event 包 - 事件处理，后台功能实现。

### Swing组件

>swing组件主要分为三个部分

1. 顶层容器 ：JFrame，JDialog
2. 中间容器 ：JPanel，JOptionPane,JScrollPane,JLayeredPane(主要以Panel结尾)
3. 基本组件 ：JLable,JButton,JTextField,JPasswordField,JRadioButton

![](https://gitee.com//BorenHU/BlogImage/raw/master/MarkDown/5.jpg)

### 顶层组件类

|      |         |                                                       |
| ---- | :------ | ----------------------------------------------------- |
| 1    | JFrame  | 窗口(绝大多数Swing图形界面程序使用JFrame作为顶层容器) |
| 2    | JDialog | 对话框                                                |

### 中间组件类

|      | 组件         | 描述                                       |
| ---- | ------------ | ------------------------------------------ |
| 1    | JPanel       | 一般轻量级面板容器组件(作为JFrame中间容器) |
| 2    | JScrollPane  | 带滚动条的，可以水平和垂直滚动的面板组件   |
| 3    | JSplitPane   | 分隔面板                                   |
| 4    | JTabbedPane  | 选项卡面板                                 |
| 5    | JLayeredPane | 层级面板                                   |

### 基本组件类

|      | 组件           | 描述       |
| ---- | -------------- | ---------- |
| 1    | JLable         | 标签       |
| 2    | JButton        | 按钮       |
| 3    | JRadioButton   | 单选按钮   |
| 4    | JCheckBox      | 复选框     |
| 5    | JToggleButton  | 开关按钮   |
| 6    | JTextField     | 文本框     |
| 7    | JPasswordField | 密码框     |
| 8    | JTextArea      | 文本区域   |
| 9    | JComboBox      | 下拉列表框 |
| 10   | JList          | 列表       |
| 11   | JProgressBar   | 进度条     |
| 12   | JSlider        | 滑块       |

### JFrame组件

| JFrame frame = new JFrame("")                               |
| :---------------------------------------------------------- |
| // 创建及设置窗口                                           |
| frame.setDefaultLookAndFeelDecorated(true)                  |
| // 确保一个漂亮的外观风格                                   |
| frame.serDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)        |
| //设置默认的关闭窗口                                        |
| frame.pack()                                                |
| // 显示窗口                                                 |
| frame.setVisible(true)                                      |
| //这个最好放在最后，不然会出现视图看不到的情况              |
| frame.serBounds(600,300,500,400)                            |
| //设置窗口的x,y位置，窗口大小x,y.                           |
| frame.add(panel)                                            |
| //添加panel面板到容器                                       |
| frmlpa.getContentPane().add(panel,BorderLayout.NORTH)       |
| //添加面板到主窗口，布局在北面                              |
| frmlpa.getContentPane().add(scrollPane,BorderLayout.CENTER) |
| //添加可滚动面板到主窗口，布局在中间                        |

### Panel组件

Jpanel

| JPanel panel = new JPanel（）； |
| ------------------------------- |
| //创建面板容器                  |
| panel.add（button）             |
| //添加按钮到面板                |

JOptionPane

| JOptionPane.showMessageDialog(panel3, "没有选中任何文件", "提示", JOptionPane.WARNING_MESSAGE); |
| ------------------------------------------------------------ |
| //弹出提示框到panel容器                                      |

JScrollPane

| JScrollPane scrollPane = new JScrollPane(); |
| ------------------------------------------- |
| //创建可滚动面板                            |
| scrollPane.setViewportView(textArea);       |
| //设置面板内容                              |

### 功能组件

- JLable

| JLabel label = new JLabel("Hello World"); |
| ----------------------------------------- |
| //添加标签                                |

- Jbutton

| JButton button = new JButton("选择文件");        |
| ------------------------------------------------ |
| //创建按钮                                       |
| button.addActionListener(new ActionListener() {} |
| //添加操作按钮后的事件监听器                     |

- JFileChooser

| jfc.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES ); |
| ------------------------------------------------------------ |
| //设置文本对话框                                             |
| jfc.showSaveDialog(frmIpa);                                  |
| //显示打开的文件对话框                                       |
| jfc.getSelectedFile();                                       |
| //获取选择器选择文件                                         |

- JTextArea

| JTextArea textArea = new JTextArea(); |
| ------------------------------------- |
| //创建文本区域                        |
| textArea.setText(content);            |
| //设置内容                            |

---

## Java.swing 窗口和监听器的使用

1. 创建ActionListener对象必须重写其中的actionPerformed（ActionEvent	e）抽象方法
2. WindowEvent处理此窗口上发生的窗口焦点事件，点击窗口会触发该事件。System.exit（0）方法为退出系统。
3. 创建好面板对象之后需要将其加入到窗口容器中。
4. JFrame窗口隐藏或消除的方法是setVisible（false），需要将布尔值设置为false
5. 