/* Standalone adapter. Host owns navigation and supplies ECharts; no network requests. */
(() => {
  'use strict';
  const sections = [
    ['minute','分钟成交','重点 ETF'],['signals','放量案例','重点 ETF'],['daily','日度资金','重点 ETF'],
    ['fundMargin','ETF 两融','重点 ETF'],['theme','主题分时','重点 ETF'],['margin','总量与结构','两融'],
    ['pledge','质押公告','股权质押'],['private','备案与业绩','私募基金']
  ];
  const format=(v,d=2)=>Number.isFinite(v)?v.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2}):'未披露';
  const prefix=a=>{let t=0;return a.map(v=>Number.isFinite(v)&&t!==null?(t+=v):(t=null));};
  const ma=(a,n)=>a.map((_,i)=>i+1<n?null:a.slice(i+1-n,i+1).reduce((t,v)=>t+v,0)/n);
  function mount(root,data,opt={}) {
    if(typeof root==='string')root=document.querySelector(root);
    if(!root||data?.schema!=='etf-boards/1')throw Error('ETFBoards: 容器或数据版本错误');
    if(root.__boards)root.__boards.destroy();
    const lib=opt.echarts||window.echarts;
    let tab=opt.view||'daily', alive=true, charts=[], opts={}, obs;
    function el(tag,text,parent,cls){const e=document.createElement(tag);if(text!=null)e.textContent=text;if(cls)e.className=cls;if(parent)parent.append(e);return e}
    const wrap=el('div',null,root,'etfb');const nav=el('nav',null,wrap);nav.setAttribute('aria-label','资金研究看板');
    const body=el('section',null,wrap);let toolbar;
    const val=(key,values,def)=>values.includes(opts[key])?opts[key]:def;
    function select(key,label,values,def=values.at(-1)){
      const active=val(key,values,def),l=el('label',label,toolbar);const s=el('select',null,l);
      for(const v of values){const o=el('option',v,s);o.value=v;}
      s.value=active;s.onchange=()=>{opts[key]=s.value;render();body.querySelector('[data-field="'+key+'"]')?.focus()};s.dataset.field=key;return active;
    }
    function note(text){el('p',text,body,'etfb-note')}
    function table(title,heads,rows){
      el('h3',title,body);const outer=el('div',null,body,'etfb-table'),t=el('table',null,outer),h=el('tr',null,el('thead',null,t)),tb=el('tbody',null,t);
      for(const v of heads)el('th',v,h).scope='col';
      for(const r of rows){const tr=el('tr',null,tb);for(const v of r)el('td',typeof v==='number'?format(v):v??'未披露',tr);}
      if(!rows.length)note('当前选择无已核验记录。');
    }
    function chart(title,x,spec,units){
      el('h3',title,body);
      if(!x.length){note('本口径暂无匹配观测。');return;}
      if(!lib){table('数值', ['时点',...spec.map(v=>v[0])], x.map((d,i)=>[d,...spec.map(v=>v[1][i])]));return;}
      const node=el('div',null,body,'etfb-chart');node.setAttribute('aria-label',title);node.setAttribute('role','img');
      const c=lib.init(node);charts.push(c);
      const palette=['#1666ae','#ba502a','#188475','#916196','#89782c'];
      c.setOption({animation:false,color:palette,grid:{left:12,right:14,top:78,bottom:27,containLabel:true},
        legend:{type:'scroll',top:4,textStyle:{fontSize:11}},tooltip:{trigger:'axis',renderMode:'richText',confine:true,valueFormatter:v=>format(v)},
        xAxis:{type:'category',data:x,axisLabel:{hideOverlap:true,fontSize:10}},
        yAxis:units.map((u,i)=>({type:'value',name:u,scale:!spec.some(s=>s[2]==='bar'&&(s[3]||0)===i),splitLine:{show:i===0,lineStyle:{color:'#e1e8ef'}},axisLabel:{fontSize:10}})),
        series:spec.map(([name,data,type,yAxisIndex])=>({name,data,type:type||'line',yAxisIndex:yAxisIndex||0,showSymbol:x.length<9,barMaxWidth:30,connectNulls:false}))});
    }
    function gaps(entries){const d=el('details',null,body);el('summary','未接数据与可比边界',d);for(const t of entries)el('p',t,d);}
    const X=data.expanded;
    function intraday(){
      if(!data.minutes.length){note('没有通过日成交核对的分钟数据。');return}
      const ds=data.minutes.map(v=>v.day),d=select('d','交易日',ds),m=data.minutes.find(v=>v.day===d);
      const mode=select('mm','成交口径',['分时','累计'],'分时');const others=ds.filter(x=>x<d);
      const comp=select('base','对照',['无',...others,'常态日均值','放量日均值'],'无');
      const pool=data.minutes.filter(v=>v.day<d&&(v.day===comp||v.regime+'日均值'===comp));
      const arr=mode==='累计'?prefix(m.amount):m.amount;
      const s=[['20 只成交额',arr,'bar'],['上证综指较昨收',m.indexReturn,'line',1]];
      if(pool.length){const mean=m.amount.map((_,i)=>pool.reduce((a,v)=>a+v.amount[i],0)/pool.length);s.push([comp,mode==='累计'?prefix(mean):mean]);}
      chart(d+' · 成交与指数',data.clock,s,['亿元','%']);
      note('本机按此前 20 个交易日日均成交额滚动选出 20 只。'+(comp==='无'?'未叠加对照。':'对照仅使用观察日前分钟样本：'+pool.length+' 天。'));
      if(m.ranking)table('单只 ETF · 按成交额排序',['代码','名称','分类','成交额(亿)','涨跌(%)','占比(%)','前一日(亿)','前二日(亿)','前20日均(亿)'],m.ranking);
      else note('公开口径仅汇总；单只 ETF 排名仅在本机完整版显示。');
    }
    function signals(){
      const mode=select('evt','观测日',['全部','放量日与最近三日','仅放量日'],'放量日与最近三日');
      const all=data.events, rows=all.filter((r,i)=>mode==='全部'||(r[2]!=null&&r[2]>100)||(mode!=='仅放量日'&&i>=all.length-3));
      chart('重点样本 · 放量与净申购',rows.map(r=>r[0]),[['成交额',rows.map(r=>r[1]),'bar'],['估算净申购',rows.map(r=>r[2]),'line',1]],['亿元','亿元']);
      table('事件核对',['交易日','成交(亿)','估算净申购(亿)','上证涨跌(%)','状态'],rows.slice().reverse().map(r=>[...r,r[2]==null?'申赎未披露':r[2]>100?'放量':'未触发']));
      note('本模块的“放量”是同日滚动 20 只净申购严格大于 100 亿元，不是成交额超过 100 亿元。分钟对照在“分钟成交”中选择。');
    }
    function daily(){
      const fixed='十类固定篮子',scope=select('pan','样本',[fixed,'扩展股票型样本'],fixed);
      if(scope===fixed){
        const cat=select('category','指数',['十类合计',...data.categories],'十类合计');
        const win=select('window','区间',['近一周 · 5交易日','近一月 · 20交易日','近一年 · 250交易日','全部已核验'],'近一月 · 20交易日');
        const rows=win==='全部已核验'?data.fixed:data.fixed.slice(-Number(win.match(/\d+/)[0])), idx=data.categories.indexOf(cat);
        const amounts=rows.map(r=>idx<0?r.slice(1).reduce((a,v)=>a+v,0):r[idx+1]);
        note('所选窗口内实际有 '+rows.length+' 个交易日；未满窗口时，曲线只累计已收录部分。');chart(cat+' · 申赎估算',rows.map(r=>r[0]),[['单日',amounts,'bar'],['选区累计',prefix(amounts),'line',1]],['亿元','亿元']);
        table('最近一个月 · 十类分布（亿元）',['日期',...data.categories],rows.slice(-20).reverse());
        note('固定 '+data.fixedN+' 只；不包含未纳入的宽基，不等于全市场。');
      }else{
        const cc=Object.keys(X.classified);chart(X.dates.length+'日固定交集 · 分类申赎',X.dates,cc.map(k=>[k,X.series.map(d=>d.styles[k]),'bar']),['亿元']);
        table('同日不同样本，不相加',['交易日','扩展样本净申购(亿)','其中十类(亿)','发生折算(只)'],X.series.map((r,i)=>[r.day,r.total,r.fixedControl,X.adjusted[i]]));
        table('样本核对',['项目','只数'],[['映射表',X.mapping],['股票型名录',X.master],['代码交集',X.intersection],['全期可算的固定交集',X.eligible],...Object.entries(X.excluded)]);
        note('扩展样本仅覆盖 '+X.dates[0]+' 至 '+X.dates.at(-1)+'。按市场类型标签分类，规模指数标签不等于全部宽基；折算按披露事件日处理。');
      }
    }
    function fundMargin(){
      const gs=[...new Set(data.etfMargin.map(r=>r[1]))];
      if(!gs.length){note('尚无 ETF 本身的融资明细。');return}
      const g=select('fund','固定篮子类别',gs,gs.includes('科创50')?'科创50':gs[0]),rs=data.etfMargin.filter(r=>r[1]===g),i=data.categories.indexOf(g),flows=new Map(data.fixed.map(r=>[r[0],r[i+1]]));
      chart(g+' · ETF 融资与申赎',rs.map(r=>r[0]),[['融资净买入',rs.map(r=>r[6]),'bar'],['同类固定篮子申赎',rs.map(r=>flows.get(r[0])??null)]],['亿元']);
      table('融资披露覆盖',['交易日','当日源标的标签数','余额有效','净额有效','融资余额(亿)','融资净买入(亿)'],rs.map(r=>[r[0],...r.slice(2)]));
      note('融资取固定篮子中来源标记为标的基金的产品；申赎取该类固定篮子全体。非指数成分股融资；同类标的字段不齐则整组净额留空。标签为查询快照，不重建历史资格。');
    }
    function theme(){
      const names=Object.keys(X.benchmarks);if(!names.length){note('主题基准映射未就绪。');return}
      const n=select('theme','精确跟踪基准',names,names.includes('机器人')?'机器人':names[0]),m=data.themes[n],q=X.benchmarks[n];
      if(m){const mode=select('tm','口径',['分时成交','累计成交'],'分时成交');chart(n+' · '+m.day,data.clock,[[mode,mode==='分时成交'?m.amount:prefix(m.amount),mode==='分时成交'?'bar':'line']],['亿元']);}
      else note('该基准没有通过逐分钟完整性检查的聚合行情。');
      table('同一跟踪基准 · 份额法估算',['交易日','共同样本(只)','净申购(亿)'],X.dates.map((d,i)=>[d,q.count,q.net[i]]));
      gaps(['仅统计明确跟踪所选基准的共同 ETF，不等于整个主题、也不含同名 LOF。没有已核验的主题指数分钟对照和过去 20 天分钟均值。','白酒不以中证酒代替；CPO 不以通信行业代替。公开口径不输出少于三只的基准明细。']);
    }
    function margin(){
      const r=data.marketMargin,mode=select('period','净买入口径',['日','周','月'],'日'),smooth=select('smooth','余额口径',['原值','MA5','MA20'],'原值');
      const bins=new Map();
      for(const [d,,n] of r){let k=d;if(mode==='周'){const t=new Date(d+'T00:00:00Z');t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+6)%7);k=t.toISOString().slice(0,10)}if(mode==='月')k=d.slice(0,7);bins.set(k,(bins.get(k)||0)+n)}
      chart('沪深京 · 融资净买入',[...bins.keys()],[['买入减偿还',[...bins.values()],'bar']],['亿元']);
      chart('融资余额 · '+smooth,r.map(x=>x[0]),[['余额',ma(r.map(x=>x[1]),smooth==='原值'?1:Number(smooth.slice(2)))]],['亿元']);
      note('周、月柱只合计已覆盖交易日，首末期可能不完整。余额是存量，不按期求和。');
      const ds=Object.keys(data.industry).sort();if(ds.length){const d=select('industryDay','行业观察日',ds),i=ds.indexOf(d),prev=data.industry[ds[i-1]]||{};
      table('申万一级 · 分行业融资净买入',['行业',d+'(亿)',(ds[i-1]||'无前期')+'(亿)'],Object.entries(data.industry[d]).sort((a,b)=>b[1]-a[1]).map(([g,x])=>[g,x,prev[g]??null]));}
      gaps(['暂无同口径的两类投资者活跃占比、融资余额/流通市值、融资买入/成交、现金担保物与平均担保比例。','当前历史不足 480 个交易日，不绘制两年波动带。']);
    }
    function pledge(){
      const a=data.pledge;if(a.length){const d=select('pledgeDay','观察日',a.map(x=>x.day)),v=a.find(x=>x.day===d);
      chart('公告记录 · 预计期限核对',v.groups.map(r=>r[0]),[['有剩余股数的记录',v.groups.map(r=>r[1]),'bar']],['条']);
      table('记录覆盖，不代表市场存续合同',['期限状态','记录(条)','涉及公司(不跨组相加)'],v.groups);
      note('来源返回 '+format(v.records,0)+' 条，正剩余股数记录涉及 '+format(v.issuers,0)+' 家公司。公告可重复、也可能到期未更新，不能由此推出当前待购回市值。');}
      else note('无已核验的公告观察日。');
      gaps(['中国结算全市场周度质押股数与市值、公司级总质押率分档尚未接入。','质权方分类、行业、质押日未复权价以及合同解除状态未完成逐笔核对。不估平仓金额，不把预计到期等同已解押。']);
    }
    function privateFunds(){
      const r=data.filings;
      if(r.length){chart('私募基金新备案 · 月度',r.map(v=>v[0]),[['新备案数量',r.map(v=>v[1]),'bar'],['新备案规模',r.map(v=>v[2]),'line',1]],['只','亿元']);
      table('协会公开月报',['统计月','新备案(只)','新备案(亿元)','发布日期','原件页码'],r.slice().reverse().map(x=>[x[0],x[1],x[2],x[5],x[4]]));
      const a=el('a','查看最新协会月报',body);if(/^https:\/\/www\.amac\.org\.cn\/sjtj\/tjbg\/smjj\//.test(r.at(-1)[3])){a.href=r.at(-1)[3];a.target='_blank';a.rel='noopener noreferrer';}
      note('全部私募基金新备案，不是私募证券基金新成立或产品存续规模；无报告的月份不补数。');}
      gaps(['百亿私募仓位、经理信心和证券类产品成立数量尚无匹配数据。','未接经授权的产品级可比净值与管理规模分组，不展示策略收益分布、胜率或分规模业绩。']);
    }
    const views={minute:intraday,signals,daily,fundMargin,theme,margin,pledge,private:privateFunds};
    function render(){if(!alive)return;if(!Object.hasOwn(views,tab))throw Error('未知看板: '+tab);
      for(const c of charts)c.dispose();charts=[];body.replaceChildren();nav.replaceChildren();
      for(const [id,title,group] of sections){const btn=el('button',title,nav);btn.type='button';btn.title=group+' · '+title;btn.setAttribute('aria-pressed',String(id===tab));btn.onclick=()=>api.show(id);}
      const item=sections.find(s=>s[0]===tab);el('small',item[2],body);el('h2',item[1],body);toolbar=el('div',null,body,'etfb-controls');views[tab]();}
    const api={show(id){if(!Object.hasOwn(views,id))throw Error('未知看板');tab=id;render();opt.onViewChange?.(id);return api;},destroy(){alive=false;obs?.disconnect();for(const c of charts)c.dispose();charts=[];wrap.remove();delete root.__boards;}};
    root.__boards=api;render();if(window.ResizeObserver){obs=new ResizeObserver(()=>charts.forEach(c=>c.resize()));obs.observe(root);}
    return api;
  }
  window.ETFBoards=Object.freeze({mount,views:sections.map(([id])=>id),schema:'etf-boards/1'});
})();
