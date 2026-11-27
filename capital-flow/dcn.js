/* Offline renderer. No global navigation, requests, chart instances or storage. */
(() => {
  "use strict";
  const names = {"000905.SH":"中证500","000852.SH":"中证1000"};
  const fmt = (x, digits=4) => x.toLocaleString("zh-CN", {maximumFractionDigits:digits});
  const point = t => fmt(t / 10000);
  const money = y => fmt(y / 10000, 4);
  const pct = (t, a) => 100 * (t - a) / a;
  const at = (frame, t) => [
    frame.ki.reduce((s,[p,v]) => s + (t <= p ? v : 0), 0),
    frame.ko.reduce((s,[p,v]) => s + (t >= p ? v : 0), 0),
    frame.due - frame.ko.reduce((s,[p,,m]) => s + (t >= p ? m : 0), 0)
  ];
  function node(tag, text, cls) {
    const e = document.createElement(tag);
    if (text !== undefined) e.textContent = text;
    if (cls) e.className = cls;
    return e;
  }
  const css = '.dcn-pane{box-sizing:border-box;max-width:76rem;margin:0 auto;padding:16px;font:15px/1.55 system-ui,sans-serif;color:inherit;min-width:0}.dcn-pane *{box-sizing:border-box}.dcn-pane h2,.dcn-pane h3{margin:.7em 0 .25em;font-size:1.25rem}.dcn-pane h2{font-size:1.5rem}.dcn-pane p{margin:.45em 0}.dcn-pane section{margin:1rem 0;padding:.5rem 0;border-top:1px solid #a2aaa9}.dcn-controls,.dcn-stats{display:flex;gap:.7rem 1.2rem;flex-wrap:wrap;align-items:end}.dcn-pane label{display:grid;gap:.2em;max-width:100%}.dcn-pane select,.dcn-pane input{font:inherit;padding:.35em;max-width:100%}.dcn-pane input{width:10rem}.dcn-scroll{max-width:100%;overflow:auto}.dcn-pane table{width:100%;border-collapse:collapse;margin:.5rem 0;font-variant-numeric:tabular-nums}.dcn-pane th,.dcn-pane td{text-align:right;white-space:nowrap;padding:.3em .65em;border-bottom:1px solid #9ca8a666}.dcn-pane th:first-child,.dcn-pane td:first-child{text-align:left}.dcn-pane th{font-size:.85rem}.dcn-stats b{display:block;font-size:1.22rem}.dcn-ki{color:#ab424a}.dcn-ko{color:#17745e}.dcn-result{min-height:1.65em;font-weight:600}.dcn-pane summary{cursor:pointer}.dcn-pane small{font-size:.86rem}.dcn-pane .dcn-chart{height:.35em;display:block;min-width:0;max-width:100%;margin-left:auto}.dcn-pane .dcn-chart.ki{background:#b9535b}.dcn-pane .dcn-chart.ko{background:#22816a}';

  function table(parent, headers) {
    const wrap = node("div", undefined, "dcn-scroll"), t = node("table");
    const r = t.createTHead().insertRow();
    for (const name of headers) { const th=node("th",name); th.scope="col"; r.append(th); }
    const body=t.createTBody(); wrap.append(t); parent.append(wrap);
    return cells => {
      const tr=body.insertRow();
      for (const cell of cells) tr.insertCell().append(cell instanceof Node ? cell : document.createTextNode(String(cell)));
    };
  }
  function select(host, label, entries, value, onChange) {
    const field=node("label",label), input=node("select");
    for (const [v,title] of entries) input.add(new Option(title,v));
    input.value=value; input.onchange=()=>onChange(input.value);
    field.append(input); host.append(field);
    return input;
  }
  function number(host,label,step) {
    const field=node("label",label), input=node("input");
    input.type="number"; input.step=step; field.append(input); host.append(field); return input;
  }
  const chartCSS='.dcn-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,19rem),1fr));gap:1.1rem;margin:.75rem 0}.dcn-steps figure{margin:0;min-width:0}.dcn-steps figcaption{font-weight:600}.dcn-steps svg{max-width:100%;width:100%;height:auto;display:block;touch-action:pan-y}.dcn-steps svg text{font:11px system-ui,sans-serif;fill:currentColor}';
  function svg(tag,attrs,msg) {
    const e=document.createElementNS("http://www.w3.org/2000/svg",tag);
    for(const [k,v] of Object.entries(attrs)) e.setAttribute(k,v);
    if(msg!==undefined) e.textContent=msg;
    return e;
  }
  function steps(host,frame,anchor,skipKI,selectTick) {
    const ki=frame.ki, ko=frame.ko;
    const marks=[...new Set([...ki,...ko].map(row=>row[0]))].sort((a,b)=>a-b);
    const lo=Math.max(1,Math.min(Math.round(anchor*.77),(marks[0]??anchor)-Math.round(anchor*.025)));
    const hi=Math.max(Math.round(anchor*1.14),(marks.at(-1)??anchor)+Math.round(anchor*.025),lo+1);
    const maxCash=Math.max(1, ...[ki,ko].map(rows=>rows.reduce((n,r)=>n+r[1],0)));
    const x=t=>55+254*(t-lo)/(hi-lo), y=n=>139-100*n/maxCash;
    const marksUI=[];
    host.className="dcn-steps";
    for(const [type,rows,caption,color] of [[0,ki,"下跌敲入 · 新增名义","#b5454a"],[1,ko,"触发敲出 · 赎回本金","#18765e"]]){
      const fig=node("figure");fig.append(node("figcaption",caption));host.append(fig);
      if(type===0&&skipKI){fig.append(node("p","不适用：没有敲入条款。"));continue;}
      const s=svg("svg",{viewBox:"0 0 325 181",role:"img","aria-label":caption+"阶梯情景，横轴为指数点位，纵轴为万元；精确读数见点位表。"});
      fig.append(s);
      const add=(tag,attrs,msg)=>{const e=svg(tag,attrs,msg);s.append(e);return e;};
      add("text",{x:5,y:19},"万元");
      if(!rows.length) add("text",{x:180,y:22,"text-anchor":"middle"},"该日无合资格"+(type?"敲出":"新增敲入")+"观察");
      for (const v of (maxCash===1?[0]:[0,maxCash/2,maxCash])){
        add("line",{x1:55,x2:309,y1:y(v),y2:y(v),stroke:"currentColor","stroke-opacity":.18});
        add("text",{x:50,y:y(v)+4,"text-anchor":"end"},fmt(v/10000,v>=1e6?0:2));
      }
      for (const t of [lo,anchor,hi]){
        add("text",{x:x(t),y:157,"text-anchor":t===lo?"start":t===hi?"end":"middle"},fmt(t/10000,0));
      }
      add("text",{x:180,y:176,"text-anchor":"middle"},"指数点位");
      // Each vertical jump is one actual scenario boundary, never a fitted curve.
      let total=type===0?rows.reduce((v,r)=>v+r[1],0):0;
      let path="M "+x(lo)+" "+y(total);
      const dots=[];
      for(const [t,v] of rows){
        const before=total;
        total+=type===0?-v:v;
        path+=" H "+x(t)+" V "+y(total);
        dots.push([t,type===0?before:total]);
      }
      add("path",{d:path+" H "+x(hi),stroke:color,"stroke-width":2.7,fill:"none","stroke-linejoin":"miter"});
      for(const [t,v] of dots){
        const dot=add("circle",{cx:x(t),cy:y(v),r:3.5,fill:color});
        dot.append(svg("title",{},point(t)+" 点："+money(v)+" 万元（含等号）"));
      }
      const line=add("line",{y1:31,y2:139,stroke:"currentColor","stroke-dasharray":"3 3","stroke-opacity":.62});
      const cursor=add("circle",{r:4,stroke:color,"stroke-width":2,fill:"white"});
      marksUI.push(t=>{
        for(const el of [line,cursor]) el.style.display=t>=lo&&t<=hi?"":"none";
        line.setAttribute("x1",x(t));line.setAttribute("x2",x(t));
        cursor.setAttribute("cx",x(t));cursor.setAttribute("cy",y(at(frame,t)[type]));
      });
      s.onclick=e=>{
        const pt=s.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;
        const matrix=s.getScreenCTM(); if(!matrix)return;
        const pos=pt.matrixTransform(matrix.inverse()).x;
        if(pos<55||pos>309)return;
        const tick=Math.round(lo+(hi-lo)*(pos-55)/254);
        const near=dots.reduce((best,[t])=>Math.abs(x(t)-pos)<Math.abs(x(best)-pos)?t:best,dots[0]?.[0]??tick);
        selectTick(Math.abs(x(near)-pos)<=6?near:tick);
      };
    }
    return t=>marksUI.forEach(fn=>fn(t));
  }
  function renderDCN(target, data=window.FLOW?.dcn) {
    const host=typeof target==="string"?document.querySelector(target):target;
    if (!host || !data || data.schema!==1 || !["local","public"].includes(data.audience)) {
      throw new TypeError("renderDCN 需要已挂载的容器和 schema=1 的 DCN 数据");
    }
    const local=data.audience==="local", snapshots=local?Object.keys(data.samples).sort().reverse():[];
    let mode="snow", snap=snapshots[0], code="000852.SH", obs="", selectedPct=-10;
    const pane=node("article",undefined,"dcn-pane");
    host.replaceChildren(pane);
    function draw() {
      pane.replaceChildren(node("style",css+chartCSS),node("h2","DCN 与雪球观察"),node("p",data.marketStatus));
      const controls=node("div",undefined,"dcn-controls"); pane.append(controls);
      const modes=[["snow","标准雪球 · 每1亿元"],["dcn","无敲入 DCN · 每1亿元"]];
      if (snapshots.length) modes.push(["sample","本机已核验条款样本"]);
      select(controls,"数据口径",modes,mode,v=>{mode=v;obs="";draw();});
      const sample=mode==="sample", base=sample?snap:data.asof;
      if (sample) select(controls,"期初快照日",snapshots.map(d=>[d,d]),snap,v=>{snap=v;obs="";draw();});
      const pool=sample?data.samples[snap]:data.benchmarks;
      if (!pool[code]) code=Object.keys(pool)[0];
      select(controls,"挂钩指数",Object.keys(pool).map(k=>[k,names[k]]),code,v=>{code=v;obs="";draw();});
      const book=pool[code], anchor=book.anchor, days=sample?book.days:book[mode], dates=Object.keys(days).sort();
      if (!dates.includes(obs)) obs=sample?dates[0]:"T+05";
      select(controls,"收盘观察日",dates.map(d=>[d,d]),obs,v=>{obs=v;draw();});
      const f=days[obs], noKI=mode==="dcn" || (sample && book.rows.every(r=>r.kind==="无敲入DCN"));
      pane.append(node("p",base+" · "+names[code]+"收盘 "+point(anchor)+" 点（本机指数日K）。"));
      pane.append(node("p",sample?"仅代表该日期所收样本。快照日按当日期初状态复核；未来各日先假设此前收盘持平，已敲出或到期的不再参与。":
        "假设组合，非市场实数。以基准收盘为期初，4 笔各 2,500 万元，各行是独立情景；目标日前指数持平。"));
      if (!sample) pane.append(node("small",(noKI?"无敲入条款；票息不作赎回。":"每日收盘敲入线依次为期初的 95%、90%、85%、80%。")+
        "敲出线依次为 103%、105%、108%、110%；前两笔在 T+05、10 观察，T+15 到期；后两笔在 T+10、15 观察，T+20 到期。T+n 为交易日序号。"));
      const section=node("section"); pane.append(section);
      section.append(node("h3",sample?"样本点位压力":"每1亿元名义压力"));
      section.append(node("p","当日期初存续 "+money(f.live)+" 万元，其中此前已敲入 "+money(f.priorHit)+" 万元。"));
      const inputs=node("div",undefined,"dcn-controls"); section.append(inputs);
      const price=number(inputs,"目标收盘点位","0.0001"), move=number(inputs,"相对基准涨跌幅（%）","0.01");
      price.min="0.0001"; move.min="-99.99";
      const result=node("p",undefined,"dcn-result"); result.setAttribute("aria-live","polite");section.append(result);
      const chart=node("div");section.append(chart);
      const mark=steps(chart,f,anchor,noKI,t=>{
        selectedPct=pct(t,anchor);move.value=selectedPct.toFixed(5);price.value=t/10000;show(t);
      });
      function show(t) {
        const [i,o,m]=at(f,t);
        mark(t);
        result.textContent="新增敲入 "+(noKI?"不适用":money(i)+" 万元")+" ｜ 敲出赎回本金 "+money(o)+" 万元 ｜ 普通到期名义 "+money(m)+" 万元";
      }
      function fromPct() {
        const x=move.valueAsNumber, t=Math.round(anchor*(100+x)/100);
        if (!Number.isFinite(x) || t<=0 || !Number.isSafeInteger(t)) {
          price.value=""; result.textContent="请输入对应正点位的涨跌幅。"; return;
        }
        selectedPct=x; price.value=t/10000; show(t);
      }
      move.value=selectedPct; fromPct();
      price.oninput=()=>{
        const x=price.valueAsNumber,t=Math.round(x*10000);
        if (!Number.isFinite(x)||t<=0||!Number.isSafeInteger(t)||Math.abs(x*10000-t)>1e-5) {
          move.value=""; result.textContent="点位须为正数，最多四位小数。"; return;
        }
        selectedPct=pct(t,anchor); move.value=selectedPct.toFixed(5); show(t);
      };
      move.oninput=fromPct;
      const add=table(section,["涨跌幅","指数点位","新增敲入（万元）","敲出赎回本金（万元）","普通到期名义（万元）"]);
      function bar(v,cls) {
        const box=node("span",money(v)), b=node("i",undefined,"dcn-chart "+cls);
        b.style.width=(f.live?100*v/f.live:0)+"%";box.append(b);return box;
      }
      for (const x of [-30,-20,-15,-10,-5,0,3,5,8,10,15]) {
        const t=Math.floor((anchor*(100+x)+50)/100), [i,o,m]=at(f,t);
        add([(x>0?"+":"")+x+"%",point(t),noKI?"不适用":bar(i,"ki"),bar(o,"ko"),money(m)]);
      }
      section.append(node("small","敲入只改变条款状态，不返还本金；敲出须在约定日达标才触发赎回。单位为触发合约名义，不是损失、现金到账或对冲卖盘。敲入与到期可能同日，列间不可相加。"));
      if (sample) {
        const audit=node("section");pane.append(audit);
        audit.append(node("h3",snap+" 收盘回执"),node("p","有回执且与日K一致："+book.checked+" / "+book.count+" 笔。"));
        const v=book.confirmed;
        audit.append(node("p",v?"仅已核验子样本：新增敲入 "+money(v.ki)+" 万元；敲出 "+money(v.ko)+" 万元；普通到期 "+money(v.maturity)+" 万元。":"无已核验回执，金额未知。"));
        const detail=node("details"); detail.append(node("summary","逐笔条款与凭据（仅本机）")); audit.append(detail);
        const row=table(detail,["匿名编号","类型","名义（万元）","期初日","到期观察日","此前首次敲入","敲入观察日＝点位","敲出观察日＝点位","快照日复核","回执结果","条款凭据","回执凭据"]);
        const sched=s=>Object.entries(s).map(([d,p])=>d+"＝"+point(p)).join("；")||"无";
        for (const r of book.rows) row([r.alias,r.kind,money(r.amount),r.start,r.end,r.history,sched(r.ki),sched(r.ko),r.model,r.confirmed,r.terms,r.receipt]);
      } else if(local && !snapshots.length) {
        pane.append(node("p","本机暂无已核验条款台账；当期真实敲入、敲出金额未知，不是零。"));
      }
      if (local && data.imageObservations?.length) {
        const refs=node("section");pane.append(refs);refs.append(node("h3","历史图证 · 本机独享"),
          node("p","转录的历史模型观测，不是当期市场实数，不是DCN全口径或实际触发台账。"));
        for(const r of data.imageObservations){
          refs.append(node("h4",r.title),node("p",r.referenceDay+" ｜ "+r.groupRef+"。"+r.dateBasis));
          const line=table(refs,["摘录字段","图载数值"]);
          for(const v of r.values) line([v.label,v.value+v.unit]);
          refs.append(node("p",r.observation),node("small",r.evidence));
        }
      }
      if (local && data.research.length) {
        const sources=node("section");sources.append(node("h3","宽口径历史估算 · 仅本机"));pane.append(sources);
        for (const r of data.research) {
          sources.append(node("p",r.period+" ｜ "+r.display+" ｜ "+r.scope),node("p",r.method+" "+r.error));
          const a=node("a",r.author+"（"+r.published+"）");a.href=r.url;a.target="_blank";a.rel="noopener noreferrer";
          sources.append(a,node("p",r.rights));
        }
      }
    }
    draw();
    return {destroy:()=>pane.remove()};
  }
  window.renderDCN=renderDCN;
})();
