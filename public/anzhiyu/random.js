var posts=["2020/04/03/C语言[共用体类型]/","2020/04/03/C语言[Typedef与位运算]/","2020/04/01/C语言[如何使用指针？]/","2020/03/31/C语言[为什么会有指针？]/","2020/04/03/C语言[文件]/","2020/04/02/C语言[结构体类型]/","2020/04/01/C语言[链表的使用]/","2020/04/10/Java[Collections工具类]/","2020/03/23/Java[ArrayCopy方法]/","2020/03/18/Java[GuI入门]/","2020/03/29/Java[HashMap手动实现]/","2020/03/28/Java[HashMap常用方法]/","2020/04/14/Java[IO_File_字符集_乱码]/","2020/04/14/Java[IO_四大抽象类及标准步骤]/","2020/04/13/Java[IO_开篇]/","2020/04/10/Java[Iterator迭代器遍历容器元素(List,Set,Map)]/","2020/03/25/Java[LinkedList特点和底层实现]/","2020/04/13/Java[为什么要重写toString()方法]/","2020/04/10/Java[Set接口_HashSet常用方法]/","2020/03/12/Java[垃圾回收机制]/","2020/03/24/Java[多态]/","2020/04/24/Java[多线程_并发]/","2020/04/22/Java[多线程_推导lambda_简化线程]/","2020/05/01/Java[多线程_高级主题]/","2020/04/23/Java[多线程的状态]/","2020/04/24/Java[多线程_深度观察状态]/","2020/03/17/Java[多线程编程①]/","2020/04/22/Java[多线程编程②]/","2020/03/24/Java[封装]/","2020/03/24/Java[抽象Abstract]/","2020/04/15/Java[文件的拷贝]/","2020/04/15/Java[文件字符流]/","2020/04/08/Java[普通方法和构造方法的区别]/","2020/03/24/Java[接口interface]/","2020/04/10/Java[深入理解泛型]/","2020/03/24/Java[继承Extend]/","2020/04/13/Java[表格数据存储_Map和List结合存储整张表]/","2020/04/12/Java[遍历集合的方法总结]/","2020/03/24/Java[静态方法Static]/","2020/03/24/LeetCode[买卖股票的最佳时机]/","2020/03/25/LeetCode[删除排序数组中的重复项]/","2020/04/10/MySql[JDBC编程]/","2020/04/06/Linux[GNU-GPL-SSH基础知识]/","2020/04/04/Self-investment[写作技巧①]/","2020/04/23/Web前端[Dom文档对象模型]/","2020/03/25/UniversityEnglish[25.March]/","2020/03/17/Web前端[Html基础②]/","2020/04/15/WechatApplet[小程序开篇]/","2020/04/04/Web前端[JavaScript基础①]/","2020/04/04/数据结构与算法[不要小瞧数组]/","2025/01/21/hello-world/","2020/04/08/数据结构与算法[二分搜索树]/","2020/04/08/数据结构与算法[彻底理解二叉树三种遍历]/","2020/04/07/数据结构与算法[最基础的动态数据结构：链表]/","2020/04/05/数据结构与算法[栈和队列]/","2020/05/05/数据结构与算法[链表和递归]/","2025/01/23/网络安全测试/","2020/05/05/网络编程[TCP传输&&UDP传输]/","2020/05/02/网络编程[基本概念]/","2020/04/20/计算机理论[正则表达式]/","2020/03/19/计算机理论[计算机系统概述]/","2020/03/11/计算机理论[公共基础知识]/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };