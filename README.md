# 浩宇的技术博客（纯静态）

纯 HTML + CSS + JavaScript 实现的个人博客，可部署到 Gitee Pages。

## 页面结构
- index.html —— 首页（简介、栏目入口、最新文章）
- category.html —— 分类栏目页（?cat=docker / flask / notes 三栏目共用）
- article.html —— 文章详情页（?id=文章id）
- archive.html —— 归档页（按年份汇总）
- about.html —— 关于我（个人介绍、技能栈）

## 如何新增文章
打开 `js/articles.js`，往 `ARTICLES` 数组里加一个对象即可，首页、栏目页、归档页会自动更新：

```js
{
  id: "flask-03",            // 唯一 ID，用于详情页链接
  category: "flask",         // docker / flask / notes 三选一
  title: "文章标题",
  date: "2026-11-01",
  tags: ["Python"],
  summary: "一句话摘要",
  content: "<h2>支持 HTML</h2><p>正文写在这里</p>"
}
```

## 部署到 Gitee Pages
1. 在 Gitee 新建仓库，把本目录所有文件推上去（注意 Gitee Pages 默认入口是 `index.html`，位于仓库根目录）。
2. 仓库 → 服务 → Gitee Pages → 部署分支选 `master`，目录选 `/`，点"启动"。
3. 访问 `https://用户名.gitee.io/仓库名` 即可。

> 提示：Gitee Pages 需要实名认证；更新文章后需在 Pages 页面手动点"更新"重新部署。
