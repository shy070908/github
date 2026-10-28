// ===== 文章数据（后续新增文章直接往这里加即可）=====
const ARTICLES = [
  {
    id: "docker-01",
    category: "docker",
    title: "Docker 入门：从镜像到容器的第一课",
    date: "2026-10-20",
    tags: ["Docker", "容器", "入门"],
    summary: "记录我第一次接触 Docker 时的困惑与突破：镜像、容器、仓库到底是什么关系，如何用一条命令跑起第一个容器。",
    content: `
<h2>为什么要学 Docker</h2>
<p>作为一名专科生，最初听到"环境不一致"这个词时没什么感觉，直到我在自己电脑上能跑的项目，交作业到机房就报错。Docker 就是解决这个问题的神器。</p>
<h2>核心概念</h2>
<ul>
  <li><strong>镜像（Image）</strong>：一个只读的模板，类似于安装光盘。</li>
  <li><strong>容器（Container）</strong>：镜像运行起来的实例，类似装好的系统。</li>
  <li><strong>仓库（Registry）</strong>：存放镜像的地方，如 Docker Hub。</li>
</ul>
<h2>第一个容器</h2>
<pre><code>docker pull nginx
docker run -d -p 8080:80 --name my-nginx nginx</code></pre>
<p>打开浏览器访问 localhost:8080，看到 Nginx 欢迎页的那一刻，成就感拉满。</p>
<h2>小结</h2>
<p>Docker 把"在我电脑上能跑"变成了"到处都能跑"，这是后端开发和部署绕不开的技能，值得每个人花一周时间入门。</p>`
  },
  {
    id: "docker-02",
    category: "docker",
    title: "Linux 常用命令速查：我每天都在用的 20 条",
    date: "2026-10-15",
    tags: ["Linux", "命令行", "速查"],
    summary: "整理自己最常用的 Linux 命令：文件操作、进程管理、日志查看，附上真实使用场景，方便随时翻阅。",
    content: `
<h2>文件与目录</h2>
<pre><code>ls -lah          # 列出文件（含隐藏文件，人类可读大小）
cd -             # 返回上一个目录
mkdir -p a/b/c   # 递归创建目录
cp -r src dst    # 递归复制</code></pre>
<h2>查看日志</h2>
<pre><code>tail -f app.log          # 实时追踪日志
grep -rn "ERROR" ./logs  # 递归搜索错误</code></pre>
<h2>进程与端口</h2>
<pre><code>ps aux | grep python     # 找进程
kill -9 12345            # 强制结束
ss -tlnp                 # 查看端口占用
top / htop               # 资源监控</code></pre>
<h2>心得</h2>
<p>命令不用死记，用多了自然就熟了。建议给自己建一个 cheatsheet，每次查过的命令都记下来。</p>`
  },
  {
    id: "flask-01",
    category: "flask",
    title: "Flask 快速上手：20 行代码写出一个 Web 服务",
    date: "2026-10-22",
    tags: ["Python", "Flask", "Web"],
    summary: "Flask 是我最推荐的 Python Web 入门框架：够小、够直白。本文用最小示例讲清路由、模板和 JSON 接口。",
    content: `
<h2>最小应用</h2>
<pre><code>from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, Flask!"

app.run(debug=True)</code></pre>
<h2>返回 JSON 接口</h2>
<pre><code>@app.route("/api/user/&lt;int:uid&gt;")
def get_user(uid):
    return jsonify({"id": uid, "name": "浩宇"})</code></pre>
<h2>为什么选 Flask</h2>
<p>Django 大而全，Flask 小而美。对学习者来说，Flask 能让你看清 Web 框架的本质：路由分发 → 处理请求 → 返回响应。把 Flask 学透，再学别的框架都是降维打击。</p>
<h2>下一步</h2>
<p>建议接着学：Jinja2 模板、蓝图（Blueprint）组织大型项目、SQLAlchemy 连数据库。</p>`
  },
  {
    id: "flask-02",
    category: "flask",
    title: "Flask + Docker：把课程项目打包部署到云服务器",
    date: "2026-10-12",
    tags: ["Flask", "Docker", "部署"],
    summary: "把两个栏目学到的东西组合起来：写一个 Dockerfile 把 Flask 应用容器化，部署到云服务器上跑起来。",
    content: `
<h2>Dockerfile</h2>
<pre><code>FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
COPY . .
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]</code></pre>
<h2>踩过的坑</h2>
<ul>
  <li>别忘了 <code>EXPOSE</code> 端口和云服务器安全组都要放行。</li>
  <li>pip 换清华源，构建速度提升 10 倍。</li>
  <li>生产环境用 gunicorn，不要用 Flask 自带的开发服务器。</li>
</ul>
<h2>总结</h2>
<p>当自己写的网站第一次通过公网 IP 访问成功时，那种感觉比考试拿高分爽多了——这就是动手的魅力。</p>`
  },
  {
    id: "note-01",
    category: "notes",
    title: "专科生如何自救：我的三年学习路线复盘",
    date: "2026-10-25",
    tags: ["学习心得", "成长", "规划"],
    summary: "学历不是终点。分享我从迷茫到找到方向的过程：怎么选技术栈、怎么坚持自学、怎么用项目证明自己。",
    content: `
<h2>起点：承认迷茫</h2>
<p>刚入学时我很焦虑，网上都说专科生找不到工作。但焦虑解决不了问题，行动才可以。</p>
<h2>我的三步路线</h2>
<ul>
  <li><strong>第一年：打基础</strong>——Python 语法、Linux 基本操作、Git。</li>
  <li><strong>第二年：做项目</strong>——用 Flask 做了 3 个小项目，全部传到 Gitee。</li>
  <li><strong>第三年：冲实习</strong>——把 Docker 学了，把项目部署上线，简历上有可访问的链接。</li>
</ul>
<h2>几点真心话</h2>
<ol>
  <li>视频课只看不练 = 没学。每学一个知识点，必须敲代码。</li>
  <li>英语别放弃，报错信息一半是英文的。</li>
  <li>专升本和技能提升不冲突，两手都要抓。</li>
</ol>
<h2>结语</h2>
<p>起点低不可怕，可怕的是停下。与所有同路人共勉。</p>`
  },
  {
    id: "note-02",
    category: "notes",
    title: "我是如何坚持写技术笔记的",
    date: "2026-09-28",
    tags: ["写作", "习惯", "方法论"],
    summary: "写博客三个月的坚持心得：不用追求完美，先写出来；笔记是写给三个月后的自己看的。",
    content: `
<h2>为什么写</h2>
<p>很多东西当时懂了，两周后忘光。写下来，等于把知识存进"外置硬盘"。</p>
<h2>怎么坚持</h2>
<ul>
  <li><strong>降低标准</strong>：先求"有"，再求"好"。烂笔记好过零笔记。</li>
  <li><strong>固定节奏</strong>：每周一篇，雷打不动，哪怕只写 300 字。</li>
  <li><strong>写给自己</strong>：别管有没有人看，三个月后的自己就是最忠实的读者。</li>
</ul>
<h2>意外的收获</h2>
<p>面试官居然真的看过我的博客，还问了我其中一篇文章的细节。写作不仅巩固知识，还是最好的个人名片。</p>`
  }
];

const CATEGORIES = {
  docker: { name: "Docker & Linux 技术文章", icon: "🐳", desc: "容器化与 Linux 运维的学习记录" },
  flask:  { name: "Python Flask 开发笔记", icon: "🐍", desc: "Web 开发路上的踩坑与收获" },
  notes:  { name: "学习心得随笔", icon: "✍️", desc: "关于成长、习惯与自我提升的思考" }
};
