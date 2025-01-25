---
title: 'TCP传输&&UDP传输[网络编程]'
top: false
cover: false
toc: true
mathjax: false
icons:
  - fas fa-star green
tags:
  - 网络编程
categories:
  - 网络编程
thumbnail:
abbrlink: 26720
date: 2020-05-05 23:40:59
author:
img:
coverImg:
password:
summary:
---

TCP：一种面向连接（连接导向）的，可靠的，基于字节流的运输层（Transport layer）通信协议。

<!-- more -->

---

**TCP传输协议**

TCP：一种面向连接（连接导向）的，可靠的，基于字节流的运输层（Transport layer）通信协议。

特点：

- 面向连接
- 点到点的通信
- 高可靠性
- 占用系统资源多，效率低

**UDP传输协议**

UDP: 一种无连接的传输层协议，提供面向事务的简单不可靠信息传送服务。

特点：

- 非面向连接，传输不可靠，可能丢失
- 发送不管对方是否准备好，接受方收到也不确认
- 可以广播发送
- 非常简单的协议，开销小

**套接字Socket**

- 我们开发的网络应用程序位于应用层，TCP和UDP属于传输层协议，在应用层如何使用传输层的服务呢？在应用层和传输层之间，则是使用套接字来进行分离。

![](https://img-blog.csdnimg.cn/20200503004559328.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

---

## UDP编程

需求：完成在线咨询功能；

- 学生和咨询师在线一对一交流

分析：

- 使用基于UDP协议的Socket网络编程实现
- 不需要利用IO流实现数据的传输
- 每个数据发送单元被统一封装成数据包的方式，发送方将数据包发送到网络中，数据包在网络中去寻找他的目的地。

UDP基本概念：

- DatagramSocket: 用于发送或接受数据包的套接字
- DatagramPacket: 数据包

```java
package cn.location;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

/**
 * 接收端
 * 1. 使用DatagramSocket 指定端口，创建接收端
 * 2. 准备容器，封装成DatagramPacket包裹
 * 3. 阻塞式接收包裹receive（DatagramPacket）
 * 4. 分析数据
 * bute[] getData()
 * 			  getLength()
 * 5. 释放资源
 * @author HQF
 *
 */
public class UdpServer {
	public static void main(String[] args) throws IOException {
		System.out.println("接受方启动中。。。");
		
//		 * 1. 使用DatagramSocket 指定端口，创建接收端
		DatagramSocket server = new DatagramSocket(5788);
//		 * 2. 准备容器，封装成DatagramPacket包裹
		byte[] container = new byte[1024*60];
		DatagramPacket packet = new DatagramPacket(container, 0,container.length);
//		 * 3. 阻塞式接收包裹receive（DatagramPacket）
		server.receive(packet);
//		 * 4. 分析数据
//		 * bute[] getData()
//		 * 			  getLength()
		byte[] datas = packet.getData();
		int len = packet.getLength();
		System.out.println(new String(datas,0,len));
//		 * 5. 释放资源
		server.close();
	}
}

```

```java
package cn.location;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetSocketAddress;
import java.net.SocketException;

/**
 * 发送端
 * 
 * 1. 使用DatagramSocket 指定端口，创建接收端
 * 2. 准备数据，一定转成字节数组
 * 3.  封装成DatagramPacket包裹，需要指定目的地
 * 3. 发送包裹 send（DatagramPacket）
 * 4. 分析数据
 * bute[] getData()
 * 			  getLength()
 * 5. 释放资源
 * @author HQF
 *
 */
public class UdpClient {
	public static void main(String[] args) throws IOException {
		System.out.println("发送方启动中");
	
//		 * 1. 使用DatagramSocket 指定端口，创建接收端
		DatagramSocket client = new DatagramSocket(8889);
//		 * 2. 准备数据，一定转成字节数组
		String data = "上海尚学堂";
		byte[] datas = data.getBytes();
		//		 * 3.  封装成DatagramPacket包裹，需要指定目的地
		DatagramPacket packet = new DatagramPacket(datas,0,datas.length,new InetSocketAddress("localhost",5788));
//		 * 4. 发送包裹 send（DatagramPacket p）
		client.send(packet);
//		 * 4. 分析数据
//		 * bute[] getData()
//		 * 			  getLength()
//		 * 5. 释放资源
		client.close();
	
	}
}

```

---

```java
package cn.location;

public class TalkTeacher {

	public static void main(String[] args) {
		new Thread(new TalkReceive(9999,"学生")).start();//接受
		
		new Thread(new TalkSend(5555,"localhost",8888)).start();//发送
	}

}

```

```java
package cn.location;

public class TalkStudent {

	public static void main(String[] args) {
		new Thread(new TalkSend(7777,"localhost",9999)).start();//发送
		
		new Thread(new TalkReceive(8888,"老师")).start();
	}

}

```

---

```java
package cn.location;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetSocketAddress;
import java.net.SocketException;

/**
 * 发送端：使用面向对象封装
 * @author HQF
 *
 */
public class TalkSend implements Runnable{

	private DatagramSocket client;
	private BufferedReader reader;
	private String toIP;
	private int toPort;
	
	public TalkSend(int port,String toIP, int toPort) {
		this.toIP = toIP;
		this.toPort  = toPort;
		
		try {
			client = new DatagramSocket(port);
			reader = new BufferedReader(new InputStreamReader(System.in));
		} catch (SocketException e) {
			// TODO: handle exception
		e.printStackTrace();
		}
	}
	
	@Override
	public void run() {
		while(true) {
			String data;
			try {
				data = reader.readLine();
				byte[] datas = data.getBytes();
				//		 * 3.  封装成DatagramPacket包裹，需要指定目的地
				DatagramPacket packet = 
						new DatagramPacket(datas,0,datas.length,new InetSocketAddress(this.toIP,this.toPort));
				//		 * 4. 发送包裹 send（DatagramPacket p）
				client.send(packet);
			
				if (data.equals("bye")) {
					break;
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		//释放资源
		client.close();
	}
}

```

```java
package cn.location;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

/**
 *接收端：使用面向对象封装
 * @author HQF
 *
 */
public class TalkReceive implements Runnable{
	private DatagramSocket server;
	private String from;
	public TalkReceive(int port,String from) {
	this.from = from;
		try {
		server = new DatagramSocket(port);
	} catch (SocketException e) {
		e.printStackTrace();
	}
	
	}

	@Override
	public void run() {
		while(true) {
			//		 * 2. 准备容器，封装成DatagramPacket包裹
			byte[] container = new byte[1024*60];
			DatagramPacket packet = new DatagramPacket(container, 0,container.length);
//			 * 3. 阻塞式接收包裹receive（DatagramPacket）
			try {
				server.receive(packet);
//				 * 4. 分析数据
//				 * bute[] getData()
//				 * 			  getLength()
				byte[] datas = packet.getData();
				int len = packet.getLength();
				String data = new String(datas,0,len);
				System.out.println(from + ":" + data);
//				 * 5. 释放资源
				
				if (data.equals("bye")) {
					break;
				}
				
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		server.close();
		
	}	
}

```

---

## TCP编程

需求：完成网络登录功能

- 用户输入用户名密码，服务器给出登录成功或失败的提示

分析：

- 使用基于TCP协议的Socket网络编程实现
- TCP协议基于请求-响应模式
- 在网络通讯中，第一次主动发起通讯的程序被称为客户端程序
- 第一次通讯中等待连接的程序被称作服务器端（Server）程序
- 利用IO流实现数据的传输

![](https://img-blog.csdnimg.cn/20200505175718620.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pJRkFRTw==,size_16,color_FFFFFF,t_70)

网络登录功能分解：

- 单向：客户端向服务器端发送字符串，服务器获取字符串并输出
- 双向：服务器端给出客户端反馈，客户端得到反馈并输出
- 文件：客户端向服务器端上传文件，服务器端获取文件并反馈结果
- 多线程：服务器接受多个客户端的请求，并给出反馈。每个客户请求开启一个线程

