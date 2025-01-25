---

title: '遍历集合的方法总结[Java]'
top: false
cover: true
toc: true
mathjax: false
summary: 
tags:
  - Java
  - 多线程
categories:
  - Java
abbrlink: 14246
date: 2020-04-12 11:30:39
author:
img:
coverImg:
password:
thumbnail: 
---

<!-- more -->

---


### 1. 遍历List方法：普通for循环





java

```java
for(int i = 0; i < list.size(); i ++){
    String temp = (String)list.get(i);
    System.out.println(temp);
}
```

### 2. 遍历List方法：增强for循环





java

```java
for(String temp : list){
    System.out.println(temp);
}
```

### 3. 遍历List方法：使用Iterator迭代器(一)





java

```java
for(Iterator iter = list.iterator(); iter.hasNext(); ){
    String temp = (String)iter.next();
    System.out.println(temp);
}
```

### 4. 遍历List方法：使用迭代器(二)





java

```java
Iterator iter = list.iterator();
while(iter.hasNext()){
    Object obj = iter.next();
    iter.remove();//如果遍历时，删除集合中的元素，建议使用这种方式。
    System.out.println(obj);
}
```

### 5. 遍历Set方法：增强for循环





java

```java
for(String temp : set){
    System.out.println(temp);
}
```

### 6. 遍历Set方法：使用Iterator迭代器





java

```java
for(Iterator iter = set.iterator(); iter.hasNext(); ){
    String temp = (String)iter.next();
    System.out.println(temp);
}
```

### 7. 遍历Set方法：根据key获取value





java

```java
Map<Integer, Man> maps = new HashMap<Integer, Man>();
Set<Integer> keyset = map.keyset();
for(Integer id : keyset){
    System.out.println(maps.get(id).name);
}
```

### 8. 遍历Map方法：根据key获取value





java

```java
Map<Integer, Man> maps = new HashMap<Integer, Man>();
Set<Integer> keyset = map.keyset();
for(Integer id : keyset){
    Syetem.out.println(id);
}
```

### 9. 遍历Map方法：使用entrySet





java

```java
Set<Entry<Integer, Man>> ss = maps.entrySet();
for(Integer iterator = ss.iterator(); iterator.hasNext(); ){
    Entry e = (Entry) iterator.next();
    System.out.println(e.getKey() + "--" + e.getValue());
}
```