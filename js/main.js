// ===== 公共逻辑 =====
function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

function formatDate(d) {
  return d.replace("-", " 年 ").replace("-", " 月 ") + " 日";
}

// 首页：最新文章
function renderLatest(containerId, n) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const list = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
  box.innerHTML = list.map(a => articleCard(a)).join("");
}

// 栏目页
function renderCategory() {
  const key = getParam("cat") || "docker";
  const cat = CATEGORIES[key] || CATEGORIES.docker;
  document.title = cat.name + " - 浩宇的技术博客";
  document.getElementById("cat-icon").textContent = cat.icon;
  document.getElementById("cat-name").textContent = cat.name;
  document.getElementById("cat-desc").textContent = cat.desc;
  // tab 高亮
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === key);
  });
  const list = ARTICLES.filter(a => a.category === key).sort((a, b) => b.date.localeCompare(a.date));
  const box = document.getElementById("cat-list");
  box.innerHTML = list.length
    ? list.map(a => articleCard(a)).join("")
    : '<p class="empty">这个栏目还没有文章，敬请期待～</p>';
}

// 归档页：按年份分组
function renderArchive() {
  const box = document.getElementById("archive-list");
  const groups = {};
  [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date)).forEach(a => {
    const y = a.date.slice(0, 4);
    (groups[y] = groups[y] || []).push(a);
  });
  box.innerHTML = Object.entries(groups).map(([year, arts]) => `
    <section class="archive-year">
      <h2 class="year-title">${year} <span class="year-count">${arts.length} 篇</span></h2>
      <ul class="archive-items">
        ${arts.map(a => `
          <li>
            <span class="archive-date">${a.date}</span>
            <a href="article.html?id=${a.id}">${a.title}</a>
            <span class="archive-tag">${CATEGORIES[a.category].icon} ${CATEGORIES[a.category].name}</span>
          </li>`).join("")}
      </ul>
    </section>`).join("");
  document.getElementById("archive-count").textContent = ARTICLES.length;
}

// 文章详情页
function renderArticle() {
  const id = getParam("id");
  const a = ARTICLES.find(x => x.id === id) || ARTICLES[0];
  document.title = a.title + " - 浩宇的技术博客";
  document.getElementById("art-title").textContent = a.title;
  document.getElementById("art-meta").innerHTML =
    `<span>📅 ${formatDate(a.date)}</span><span>📁 ${CATEGORIES[a.category].name}</span>` +
    a.tags.map(t => `<span class="tag"># ${t}</span>`).join("");
  document.getElementById("art-body").innerHTML = a.content;
  // 上一篇 / 下一篇
  const sorted = [...ARTICLES].sort((x, y) => x.date.localeCompare(y.date));
  const idx = sorted.indexOf(a);
  const prev = sorted[idx - 1], next = sorted[idx + 1];
  document.getElementById("art-nav").innerHTML =
    (next ? `<a class="nav-link" href="article.html?id=${next.id}">← 上一篇：${next.title}</a>` : "<span></span>") +
    (prev ? `<a class="nav-link" href="article.html?id=${prev.id}">下一篇：${prev.title} →</a>` : "<span></span>");
}

// 栏目入口统计（首页）
function renderCategoryCards(containerId) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = Object.entries(CATEGORIES).map(([key, c]) => {
    const count = ARTICLES.filter(a => a.category === key).length;
    return `<a class="cat-card" href="category.html?cat=${key}">
      <div class="cat-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="cat-count">${count} 篇文章 →</span>
    </a>`;
  }).join("");
}

function articleCard(a) {
  return `<article class="post-card">
    <div class="post-meta"><span>📅 ${a.date}</span><span>${CATEGORIES[a.category].icon} ${CATEGORIES[a.category].name}</span></div>
    <h3><a href="article.html?id=${a.id}">${a.title}</a></h3>
    <p class="post-summary">${a.summary}</p>
    <div class="post-tags">${a.tags.map(t => `<span class="tag"># ${t}</span>`).join("")}</div>
  </article>`;
}
