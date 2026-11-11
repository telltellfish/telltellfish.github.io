(function (root) {
  "use strict";
  const dateKey = value => /^\d{4}[.-]\d{2}[.-]\d{2}$/.test(String(value || "")) ? String(value).replaceAll("-", ".") : "";
  const finite = value => typeof value === "number" && Number.isFinite(value);
  function snapshots(latest, history) {
    const byDate = new Map();
    [...(Array.isArray(history) ? history : []), latest].forEach(item => {
      if (dateKey(item?.tradeDate)) byDate.set(dateKey(item.tradeDate), item);
    });
    return [...byDate.values()].sort((a, b) => dateKey(a.tradeDate).localeCompare(dateKey(b.tradeDate)));
  }
  function factorRows(data) {
    const names = { volatility: "期权隐波", priceStrength: "股价强度", futuresBasis: "期指升贴水", safeHaven: "避险需求", leverage: "融资杠杆" };
    return (data?.sentimentV2?.funddb?.proxyDetail?.ifindFactorDetail?.usedFactors || []).map(factor => {
      const used = dateKey(factor.dateUsed), current = dateKey(data.tradeDate);
      const ready = /^ready(?:_|$)/.test(factor.status || "") && finite(factor.score);
      const timing = !used ? "日期未记录" : used > current ? "日期异常" : used < current ? "非当日可用值" : "当日";
      const source = String(factor.status || "").includes("external_fallback") ? "备用来源" : "";
      return { name: names[factor.key] || factor.key, date: used || "—",
        score: finite(factor.score) ? factor.score.toFixed(2) : "—",
        weight: finite(factor.weight) ? `${(factor.weight * 100).toFixed(0)}%` : "—",
        status: ready ? [timing, source].filter(Boolean).join(" · ") : "不可用",
        tone: ready && used === current && !source ? "ok" : "warning" };
    });
  }
  function leaders(data) {
    const seen = new Set();
    return (Array.isArray(data?.turnoverLeaders) ? [...data.turnoverLeaders] : [])
      .filter(item => item.code && finite(item.rank) && item.rank >= 1 && item.rank <= 200)
      .sort((a, b) => a.rank - b.rank).filter(item => {
        if (seen.has(item.code)) return false;
        seen.add(item.code); return true;
      });
  }
  function filterLeaders(items, query, key = "rank", direction = 1) {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter(item => {
      const text = [item.code, item.name, item.industry, item.concept].join(" ").toLowerCase();
      return terms.every(term => text.includes(term));
    }).sort((a, b) => {
      const av = a[key], bv = b[key];
      const missing = value => value == null || value === "" || (typeof value === "number" && !finite(value));
      if (missing(av) !== missing(bv)) return missing(av) ? 1 : -1;
      const delta = finite(av) && finite(bv) ? av - bv : String(av ?? "").localeCompare(String(bv ?? ""), "zh-CN", { numeric: true });
      return delta * direction || a.rank - b.rank;
    });
  }
  const api = { dateKey, snapshots, factorRows, leaders, filterLeaders };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (!root.document) return;
  root.FupanWorkbench = api;
  const doc = root.document;
  const make = (tag, cls, text) => {
    const el = doc.createElement(tag);
    if (cls) el.className = cls;
    if (text !== undefined) el.textContent = text;
    return el;
  };
  const toolbar = doc.querySelector("[data-workbench]");
  if (!toolbar) return;
  const trendSubtitle = doc.querySelector(".history-trend-sub");
  if (trendSubtitle && dateKey(root.MARKET_SENTIMENT_DATA?.tradeDate)) {
    trendSubtitle.append(doc.createTextNode(` · 走势截至 ${root.MARKET_SENTIMENT_DATA.tradeDate}`));
  }
  let currentData, currentPool = [], sortKey = "rank", sortDirection = 1;
  const calendar = make("div", "review-calendar");
  const label = make("label", "review-date-label", "复盘日期");
  const dateSelect = make("select", "review-date-select");
  dateSelect.id = "review-date"; label.htmlFor = dateSelect.id;
  const prev = make("button", "review-day-arrow", "‹"), next = make("button", "review-day-arrow", "›");
  [prev, next].forEach((button, index) => {
    button.type = "button"; button.title = index ? "后一条收盘记录" : "前一条收盘记录";
    button.setAttribute("aria-label", button.title);
  });
  const latestButton = make("button", "review-latest", "返回最新"); latestButton.type = "button";
  const dateStatus = make("span", "review-date-status"); dateStatus.setAttribute("role", "status");
  calendar.append(label, prev, dateSelect, next, dateStatus, latestButton);
  const nav = make("nav", "review-nav"); nav.setAttribute("aria-label", "复盘栏目");
  toolbar.append(calendar, nav);
  const entries = [
    ["temperature", "温度与行情", ".overview", "rose"], ["factors", "多空因子", ".factor-grid", "amber"],
    ["themes", "主线板块", ".blocks", "violet"], ["structure", "盘面结构", ".market-structure", "teal"],
    ["leaders", "成交前排", "[data-leaders-section]", "blue"], ["rotation", "板块轮动", ".rotation", "teal"],
    ["daily", "个股日报", ".stock-daily", "violet"], ["observe", "次日观察", ".observe", "amber"],
  ].map(([id, title, selector, tone]) => {
    const section = doc.querySelector(selector);
    const target = section?.previousElementSibling?.classList.contains("bar-title") ? section.previousElementSibling : section;
    if (!section || !target) return null;
    target.id = `review-${id}`; target.classList.add("review-anchor");
    const link = make("a", "review-nav-link", title); link.href = `#${target.id}`; link.dataset.accent = tone;
    link.addEventListener("click", () => { target.tabIndex = -1; target.focus({ preventScroll: true }); });
    nav.append(link); return { section, target, link };
  }).filter(Boolean);
  function updateActiveSection() {
    const visible = entries.filter(item => !item.section.hidden);
    const offset = toolbar.getBoundingClientRect().height + 18;
    const selected = visible.filter(item => item.target.getBoundingClientRect().top <= offset).at(-1) || visible[0];
    visible.forEach(item => {
      if (item === selected) {
        if (!item.link.hasAttribute("aria-current")) {
          const bounds = item.link.getBoundingClientRect(), container = nav.getBoundingClientRect();
          if (bounds.left < container.left) nav.scrollLeft += bounds.left - container.left;
          else if (bounds.right > container.right) nav.scrollLeft += bounds.right - container.right;
        }
        item.link.setAttribute("aria-current", "location");
      }
      else item.link.removeAttribute("aria-current");
    });
  }
  let frame;
  root.addEventListener("scroll", () => {
    if (frame) return;
    frame = root.requestAnimationFrame(() => { frame = null; updateActiveSection(); });
  }, { passive: true });
  const resize = new ResizeObserver(() => {
    doc.documentElement.style.setProperty("--review-offset", `${toolbar.offsetHeight + 12}px`); updateActiveSection();
  });
  resize.observe(toolbar);
  const audit = doc.querySelector("[data-review-audit]");
  const auditSummary = make("summary", "review-audit-summary");
  const auditStatus = make("span", "review-audit-status");
  auditSummary.append(make("span", "", "数据日期核验"), auditStatus);
  const auditBody = make("div", "review-audit-body"); audit.append(auditSummary, auditBody);
  function renderAudit(data) {
    const rows = factorRows(data), warnings = rows.filter(row => row.tone !== "ok").length;
    const expected = ["期权隐波", "股价强度", "期指升贴水", "避险需求", "融资杠杆"];
    const missing = expected.filter(name => !rows.some(row => row.name === name)).length;
    auditStatus.textContent = rows.length ? `${5 - missing}/5项因子记录${missing ? ` · 缺${missing}项` : ""}${warnings ? ` · ${warnings}项需留意日期 / 来源` : " · 日期一致"}` : "该日未保存逐因子记录";
    audit.dataset.tone = warnings || missing ? "warning" : "ok";
    auditBody.replaceChildren(make("p", "audit-meta", `收盘口径 ${data.tradeDate} ${data.closeTime || "15:00"} · 模型 ${data.sentimentV2?.version || "历史口径"}`));
    if (rows.length) {
      const wrap = make("div", "review-table-wrap"), table = make("table", "review-table audit-table");
      const thead = make("thead"), head = make("tr"), tbody = make("tbody");
      ["恐贪子因子", "实际数据日", "状态", "因子分", "恐贪内部权重"].forEach(text => { const th = make("th", "", text); th.scope = "col"; head.append(th); });
      thead.append(head);
      rows.forEach(row => {
        const tr = make("tr");
        [row.name, row.date, row.status, row.score, row.weight].forEach((value, index) => tr.append(make("td", index === 2 ? `audit-${row.tone}` : "", value)));
        tbody.append(tr);
      });
      table.append(thead, tbody); wrap.append(table); auditBody.append(wrap);
    }
    const weights = (data.sentimentV2?.components || []).map(item => `${item.name} ${item.weight}`).join(" / ");
    if (weights) auditBody.append(make("p", "audit-meta", `温度一级权重：${weights}`));
    auditBody.append(make("p", "audit-meta", "日期与来源按该次收盘缓存记录展示；非当日值不等于数据缺失，具体状态以表内标注为准。"));
    const report = root.STOCK_DAILY_REPORTS?.items?.[data.stockDailyDate || data.tradeDate];
    const dailyText = !root.STOCK_DAILY_REPORTS ? "日报状态待加载" : report?.documents?.length ? "该日日报已整理" : "该日日报待补充";
    auditBody.append(make("p", "audit-meta", `个股日报：${dailyText}。`));
  }
  const poolSection = doc.querySelector("[data-leaders-section]");
  const search = poolSection.querySelector("[data-leaders-search]"), industry = poolSection.querySelector("[data-leaders-industry]");
  const body = poolSection.querySelector("tbody"), poolSummary = poolSection.querySelector("[data-leaders-summary]");
  const reset = poolSection.querySelector("[data-leaders-reset]"), count = poolSection.querySelector("[data-leaders-count]"), empty = poolSection.querySelector("[data-leaders-empty]");
  const headers = [["rank", "全市场排名"], ["code", "代码"], ["name", "名称"], ["pct", "涨跌幅"], ["amountValue", "成交额"], ["industry", "行业"]].map(([key, text]) => {
    const th = make("th"); th.scope = "col";
    const button = make("button", "leader-sort", text); button.type = "button";
    const indicator = make("span", "sort-indicator"); indicator.setAttribute("aria-hidden", "true"); button.append(indicator);
    button.addEventListener("click", () => {
      sortDirection = sortKey === key ? -sortDirection : ["pct", "amountValue"].includes(key) ? -1 : 1;
      sortKey = key; renderPool();
    });
    th.append(button); poolSection.querySelector("thead tr").append(th); return { th, indicator, key };
  });
  const topIndustry = item => String(item.industry || "").split("-")[0] || "未分类";
  function renderPool() {
    const filtered = filterLeaders(currentPool.filter(item => !industry.value || topIndustry(item) === industry.value), search.value, sortKey, sortDirection);
    body.replaceChildren();
    filtered.forEach(item => {
      const tr = make("tr");
      [item.rank, item.code, item.name, finite(item.pct) ? `${item.pct > 0 ? "+" : ""}${item.pct.toFixed(2)}%` : "—", item.amount || (finite(item.amountValue) ? `${(item.amountValue / 1e8).toFixed(2)}亿` : "—"), item.industry || "—"].forEach((text, index) => {
        const cell = make("td", "", text);
        if (index === 3) cell.className = finite(item.pct) ? item.pct > 0 ? "leader-up" : item.pct < 0 ? "leader-down" : "" : "";
        if (index === 2) cell.className = "leader-name";
        tr.append(cell);
      }); body.append(tr);
    });
    headers.forEach(item => {
      item.th.setAttribute("aria-sort", item.key === sortKey ? sortDirection === 1 ? "ascending" : "descending" : "none");
      item.indicator.textContent = item.key === sortKey ? sortDirection === 1 ? " ↑" : " ↓" : " ↕";
    });
    count.textContent = `显示 ${filtered.length} / ${currentPool.length} 只`;
    reset.hidden = !search.value && !industry.value && sortKey === "rank" && sortDirection === 1;
    empty.hidden = filtered.length > 0; empty.textContent = currentPool.length ? "没有匹配的个股。" : "该日未缓存全市场成交前排名单。";
  }
  search.addEventListener("input", renderPool); industry.addEventListener("change", renderPool);
  reset.addEventListener("click", () => { search.value = ""; industry.value = ""; sortKey = "rank"; sortDirection = 1; renderPool(); search.focus(); });
  function selectDay(value) {
    const item = snapshots(root.MARKET_SENTIMENT_DATA, root.MARKET_SENTIMENT_HISTORY).find(item => dateKey(item.tradeDate) === value);
    if (item) root.renderMarketSentiment?.(item);
  }
  dateSelect.addEventListener("change", () => selectDay(dateSelect.value));
  prev.addEventListener("click", () => selectDay(dateSelect.options[dateSelect.selectedIndex - 1]?.value));
  next.addEventListener("click", () => selectDay(dateSelect.options[dateSelect.selectedIndex + 1]?.value));
  latestButton.addEventListener("click", () => root.renderMarketSentiment?.(root.MARKET_SENTIMENT_DATA));
  root.renderReviewWorkbench = function (data) {
    if (!data) return;
    currentData = data;
    const items = snapshots(root.MARKET_SENTIMENT_DATA, root.MARKET_SENTIMENT_HISTORY), key = dateKey(data.tradeDate);
    dateSelect.replaceChildren(...items.map(item => { const option = make("option", "", dateKey(item.tradeDate)); option.value = dateKey(item.tradeDate); return option; }));
    dateSelect.value = key; prev.disabled = dateSelect.selectedIndex <= 0;
    next.disabled = dateSelect.selectedIndex < 0 || dateSelect.selectedIndex === items.length - 1;
    const isLatest = key === dateKey(root.MARKET_SENTIMENT_DATA?.tradeDate);
    toolbar.dataset.mode = isLatest ? "latest" : "history";
    dateStatus.textContent = isLatest ? "最新已缓存收盘" : "正在查看历史"; latestButton.hidden = isLatest;
    currentPool = leaders(data); search.value = ""; sortKey = "rank"; sortDirection = 1;
    industry.replaceChildren(make("option", "", "全部行业")); industry.firstChild.value = "";
    [...new Set(currentPool.map(topIndustry))].sort((a, b) => a.localeCompare(b, "zh-CN")).forEach(name => {
      const option = make("option", "", name); option.value = name; industry.append(option);
    });
    const up = currentPool.filter(item => finite(item.pct) && item.pct > 0).length, down = currentPool.filter(item => finite(item.pct) && item.pct < 0).length;
    poolSummary.textContent = currentPool.length ? `${data.tradeDate} · 全市场成交排名前200，已缓存 ${currentPool.length} 只 · 上涨 ${up} / 下跌 ${down}` : `${data.tradeDate} · 暂无该日名单`;
    renderPool(); renderAudit(data); entries.forEach(item => { item.link.hidden = item.section.hidden; }); updateActiveSection();
  };
  root.addEventListener("stock-daily-ready", () => { if (currentData) renderAudit(currentData); });
})(typeof window !== "undefined" ? window : globalThis);
