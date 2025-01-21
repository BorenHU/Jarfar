---
title: '小程序开篇[WechatApplet]'
top: false
cover: false
toc: true
mathjax: false
author: 
summary: 
tags:
  - WechatApplet
categories:
  - WechatApplet
abbrlink: 51842
date: 2020-04-15 16:21:58
img:
coverImg:
password:
---

小程序开篇[WechatApplet]

<!-- more -->

---


微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

小程序框架提供了自己的视图层描述语言wxml和wxss，以及JavaScript，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。

**小程序文件结构和传统web相比**

| 结构 | 传统web    | 微信小程序 |
| ---- | ---------- | ---------- |
| 结构 | HTML       | WXML       |
| 样式 | css        | WXSS       |
| 逻辑 | JavaScript | JavaScript |
| 配置 | 无         | JSON       |

**基本项目目录**

![](https://img-blog.csdnimg.cn/20200415191424366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

官方文档：“https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html”

![](https://img-blog.csdnimg.cn/20200416103134307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

- 列表循环

1. wx:for = "{{数组或者对象}}" wx:for-item = "循环项的名称" wx:for-index="循环项的索引"

2. wx:key = "唯一的值" 用来提高列表渲染的性能

   1. wx:key 绑定一个普通的字符串的时候 那么这个字符串名称肯定是循环数组中的对象的唯一属性。

   2. wx：key = “*this” 就表示你的数组是一个普通的数组 *this 表示是循环项。

      [1,2,3,44,5]

      ["1","222","adfdf"]

3. 当出现 数组的嵌套循环的时候 尤其要注意 以下绑定的名称 不要重名

   wx:for-item = "item" wx:for-index = "index"

4. 默认情况下 我们 不写

   wx:for-item = "item" wx:for-index = "index"

   小程序也会把 循环项的名称和索引的名称 item 和 index

   只有一层循环的话（wx：for-item = “item” wx：for-index = “index”）可以省略

- 对象循环
- block

1. 占位符的标签
2. 写代码的时候 可以看到这标签的存在
3. 页面渲染 小程序会把它移除掉

- 条件渲染

1. wx:if = "{{true/false}}"

   wx:if

   wx:elif

   wx:else

2. hidden

   1. 在标签上直接加入属性hidden
   2. hidden = "{{true}}"

3. 什么场景下用哪个

   1. 当标签不是频繁的切换显示 优先使用 wx:if

      直接把标签从页面结构给移除掉

   2. 当标签频繁的切换显示的时候 优先使用hidden

      通过添加样式的方式来切换显示。

      hidden 属性不要和样式display一起使用

- 绑定事件

1. 需要给input标签绑定inout事件，绑定关键字bindinput

2. 如何获取输入框的值，通过事件源对象来获取

   e.detail.value

3. 把输入框的值 赋值到data当中

   不能直接

   1. this.data.num = e.detail.value
   2. this.num = e. detail.value

   正确的写法

   this.setData({

   ​	num:e.detail.value

   })

## Wxss

1. 小程序中 不需要主动来引入样式文件
2. 需要把页面中某些元素的单位 由 px 改成 rpx
3. 引入的代码是通过 @important 来引入
4. 路径，只能写相对路径

- button 开发能力

1. contact 直接打开  客服对话功能  需要在微信小程序的后台配置

2. share 转发当前的小程序 到微信朋友中  不能把小程序  分享到  朋友圈

3. getPhoneNumber  获取当前用户的手机号码信息 结合一个事件来使用  不是企业的小程序账号  没有权限来获取手机号码。

   - 绑定一个事件  bindgetphonenumber

   - 在事件的回调函数中 通过参数来获取信息

   - 获取到的信息  已经加密过了

     需要用户自己待见小程序的后台服务器，在后台服务器中进心解析 手机号码，返回到小程序中  就可以看到信息了

   - getUserInfo 获取当前用户的个人信息

     1. 使用方法 类似 获取用户的手机号码
     2. 可以直接获取 不存在加密的字段

   - launchApp 在小程序当中 直接打开 app

     1. 需要现在 app中 通过app的某个链接 打开 小程序
     2. 在小程序中再通过这个功能重新打开app
     3. 找到京东的app和京东的小程序

   - openSetting 打开小程序内置的 授权页面

     1. 授权页面中只会出现用户曾经点击过的 权限

   - feedback 打开 小程序内置的 意见反馈页面

     1. 只能够通过真机调试来打开

   