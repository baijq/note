// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "SpringBoot",
    items: [
      {
        text: "SpringBoot",
        link: "/springboot/",
      },
      {
        text: "微服务",
        link: "/microservices/",
      },
    ]
  },
  {
    text: "学习笔记",
    items: [
      {
        text: "Java笔记",
        link: "/java/",
      },
      {
        text: "数据库",
        link: "/databases/",
      },
      {
        text: "工具",
        link: "/tools/",
      },
      {
        text: "Python",
        link: "/python/",
      },
      {
        text: "前端",
        link: "/web/",
      },
    ]
  },
  { text: "个人空间", link: "/my" },
  {
    text: "友情链接",
    items: [
      {
        text: "GitEE",
        link: "https://gitee.com/baijq/",
      },
      {
        text: "GitHub",
        link: "https://github.com/baijq/",
      },
      {
        text: "我的语雀",
        link: "https://www.yuque.com/biubiu-note",
      },
      {
        text: "Hexo-NexT.Gemini",
        link: "https://baijq.github.io/",
      },
      {
        text: "Docsify",
        link: "https://baijq.gitee.io/biubiunote/#/",
      },
      {
        text: "博客园",
        link: "https://www.cnblogs.com/baijinqiang",
      },
    ],
  },
];
