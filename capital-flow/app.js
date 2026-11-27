'use strict';
(() => {
const D=window.FLOW,$=q=>document.querySelector(q),root=$('#body'),local=!!D?.detail;
if(!D||!window.echarts){root.textContent='资金数据或图表组件未加载，请重新打开完整页面。';return}
const tabs={overview:'资金总览',boards:'ETF 专题看板',etf:'宽基申赎',cross:'资金与盘面',minute:'ETF 成交分时',margin:'融资看盘',rates:'资金价格',basis:'期指基差',band:'指数波动带',risk:'雪球与 DCN',riskHistory:'历史触线回放',week:'周度视角'};
const navSections=[['研究台',['overview','boards']],['ETF 资金',['etf','minute']],['市场资金',['cross','margin','rates','week']],['衍生品与风险',['risk','riskHistory','basis','band']]];
const icons={boards:'layout-dashboard',etf:'layers',minute:'activity',cross:'chart-column-increasing',margin:'landmark',rates:'coins',week:'calendar-days',basis:'chart-line',band:'chart-candlestick',risk:'gauge'};
const icon=k=>'<span class="nav-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-'+(icons[k]||'layout-dashboard')+'"></use></svg></span>';
const colors=['#227d72','#657fc3','#d77e4b','#996dad','#439cae','#b79949'],red='#c4524f',green='#28866e';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ok=x=>typeof x==='number'&&Number.isFinite(x),fmt=(v,k=2)=>ok(v)?v.toLocaleString('zh-CN',{minimumFractionDigits:k===0?0:2,maximumFractionDigits:k===0?0:2}):'暂无',sg=(v,k=2)=>ok(v)?(v>=(k===0?.5:.005)?'+':'')+fmt(Math.abs(v)<(k===0?.5:.005)?0:v,k):'暂无';
const sum=a=>a.reduce((s,x)=>s+x,0),last=a=>a[a.length-1],keys=Object.keys,sorted=o=>keys(o).sort(),ls=a=>a.map(v=>typeof v==='string'?[v,v]:v);
const state={},charts=[],refs={};let serial=0,tab='';
const ico='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/></svg>';
function choose(k,def,options){let v=state[k]??def;if(!ls(options).some(x=>String(x[0])===String(v)))v=def;state[k]=String(v);return String(v)}
function select(k,title,opts,def){const v=choose(k,def,opts);return '<label>'+esc(title)+'<select data-key="'+esc(k)+'" aria-label="'+esc(title)+'">'+ls(opts).map(([a,b])=>'<option value="'+esc(a)+'" '+(String(a)===v?'selected':'')+'>'+esc(b)+'</option>').join('')+'</select></label>'}
function head(title,sub,ctrl=''){root.insertAdjacentHTML('beforeend','<div class="sectionhead"><div><h2>'+esc(title)+'</h2><p class="sub">'+esc(sub)+'</p></div><div class="ctrl">'+ctrl+'</div></div>')}
function signal(txt){root.insertAdjacentHTML('beforeend','<p class="signal">'+esc(txt)+'</p>')}
function section(title,tag=''){const el=document.createElement('section');el.className='plot';el.innerHTML='<div class="plothead"><h3>'+esc(title)+'</h3><span class="pill">'+esc(tag)+'</span></div>';root.append(el);return el}
function plot(title,tag,opt,note='',height=0){const el=section(title,tag),ch=document.createElement('div');ch.className='chart';if(height)ch.style.height=height+'px';ch.setAttribute('role','img');ch.setAttribute('aria-label',title+'。'+tag);el.append(ch);
const chart=echarts.init(ch,null,{renderer:'canvas'});if(note){const p=document.createElement('p');p.className='note';p.textContent=note;el.append(p)}
const base={animation:false,color:colors,textStyle:{fontFamily:'"Microsoft YaHei",sans-serif',color:'#32484e',fontSize:11},tooltip:{trigger:'axis',confine:true,renderMode:'richText',valueFormatter:v=>ok(v)?fmt(v):'暂无',axisPointer:{type:'cross'}},legend:{type:'scroll',top:0,left:0,itemWidth:14,textStyle:{fontSize:11}},grid:{left:12,right:18,top:60,bottom:26,containLabel:true},aria:{enabled:true}};
chart.setOption(Object.assign(base,opt));charts.push(chart);return chart}
const dateAxis=(x)=>({type:'category',data:x,axisLabel:{hideOverlap:true,formatter:v=>/^\d{4}-/.test(v)?v.slice(5):v},axisLine:{lineStyle:{color:'#becbc9'}},axisTick:{show:false}});
const axis=(name,scale=false)=>({type:'value',scale,name,nameTextStyle:{fontSize:10},axisLabel:{color:'#577071',hideOverlap:true},splitLine:{lineStyle:{color:'#e5eceb'}}});
const line=(name,data,color=colors[0],extra={})=>({name,type:'line',data,lineStyle:{width:2,color},itemStyle:{color},symbolSize:4,showSymbol:false,connectNulls:false,...extra});
const bar=(name,data,color)=>({name,type:'bar',data,barMaxWidth:20,itemStyle:{color:color||((p)=>p.value<0?green:red)}});
function chart1(title,tag,ds,ss,unit,note,scale=false){return plot(title,tag,{xAxis:dateAxis(ds),yAxis:axis(unit,scale),series:ss},note)}
function table(title,headers,rows,formats=[]){
 const el=section(title,rows.length+' 行');el.className='listing';const key='r'+serial++;const ctrl=el.querySelector('.plothead');ctrl.insertAdjacentHTML('beforeend','<button class="icon" title="导出本表 CSV" aria-label="导出'+esc(title)+' CSV">'+ico+'</button>');let view=rows.slice(),sort=-1,direction=-1;
 const box=document.createElement('div');box.className='scroll';el.append(box);
 const draw=()=>{box.innerHTML='<table><thead><tr>'+headers.map((h,j)=>'<th aria-sort="'+(j===sort?(direction>0?'ascending':'descending'):'none')+'"><button data-col="'+j+'">'+esc(h)+(j===sort?(direction>0?' ↑':' ↓'):' ↕')+'</button></th>').join('')+'</tr></thead><tbody>'+view.map(r=>'<tr>'+r.map((v,j)=>{let style=formats[j],label=v===null||v===undefined?'暂无':ok(v)?(style==='sign'?sg(v):fmt(v,style==='int'?0:style==='fine'?5:2)):v;return '<td class="'+(style==='sign'&&ok(v)?(v<0?'down':'up'):'')+'">'+esc(label)+'</td>'}).join('')+'</tr>').join('')+'</tbody></table>'};
 draw();box.addEventListener('click',e=>{const b=e.target.closest('button[data-col]');if(!b)return;const i=+b.dataset.col;direction=i===sort?-direction:-1;sort=i;view.sort((a,b)=>a[i]==null?1:b[i]==null?-1:direction*(ok(a[i])&&ok(b[i])?a[i]-b[i]:String(a[i]).localeCompare(String(b[i]),'zh')));draw()});
 ctrl.querySelector('button').onclick=()=>{const safe=x=>typeof x==='string'&&/^\s*[=+@\-]/.test(x)?"'"+x:String(x??'');const csv=[headers,...view].map(r=>r.map(x=>'"'+safe(x).replaceAll('"','""')+'"').join(',')).join('\r\n');let a=document.createElement('a'),u=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));a.href=u;a.download='复盘啦-'+title+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
 return el
}
const rangeOptions=[['5','近一周 · 5交易日'],['20','近一月 · 20交易日'],['250','近一年 · 250交易日'],['all','全部已收录']];
function trail(a,k){if(state[k]==='all'||!a.length)return a;const n=Number(state[k]);if(k==='ir')return a.slice(-n);const date=r=>Array.isArray(r)?r[0]:r,end=date(last(a)),d=R.calendar.filter(x=>x<=end).slice(-n)[0];return d?a.filter(r=>date(r)>=d):[]}
function spark(a,col){const min=Math.min(...a),m=Math.max(...a)-min||1;return '<svg aria-hidden="true" viewBox="0 0 64 25"><polyline fill="none" stroke="'+col+'" stroke-width="1.7" points="'+a.map((x,i)=>(i*63/Math.max(1,a.length-1)).toFixed(1)+','+(23-21*(x-min)/m).toFixed(1)).join(' ')+'"/></svg>'}
function kpis(){const arr=D.net.map(r=>sum(r.slice(1))),m=D.margin['沪深京'],basis=D.basis['000852.SH'],intra=D.intraday[sorted(D.intraday).at(-1)],intraD=sorted(D.intraday).at(-1),amounts=intra.amount.filter(ok);
 const fields=[['宽基 ETF 净申赎',last(arr),'亿元',last(D.net)[0],arr.slice(-18),true],['沪深京融资净买入',last(m)[2],'亿元',last(m)[0],m.slice(-18).map(x=>x[2]),true],['中证1000近月基差',last(basis)[2],'点',last(basis)[0],basis.slice(-18).map(x=>x[2]),true],['活跃 ETF 分钟成交合计',amounts.length===intra.times.length?sum(amounts):null,'亿元',intraD,amounts.slice(-18),false]];
 $('#kpis').innerHTML=fields.map(([n,v,u,d,a,s],i)=>'<a class="kpi" href="#'+['etf','marginHistory','basis','minute'][i]+'"><header>'+n+'<span aria-hidden="true"> ↗</span></header><div class="value"><div><strong class="'+(s?(v<0?'down':'up'):'neutral')+'">'+(s?sg(v):fmt(v))+'</strong><em>'+u+'</em></div>'+spark(a,s?(v<0?green:red):colors[1])+'</div><small>'+d+' · '+(n.includes('分钟')?'20只样本':'收盘口径')+'</small></a>').join('')
}
function overview(){
 const market=D.margin['沪深京'],fin=new Map(market.map(r=>[r[0],r[2]]));
 const common=D.net.filter(r=>r.slice(1).every(ok)&&ok(fin.get(r[0]))),days=common.map(r=>r[0]);
 if(!days.length){head('资金总览','ETF 申赎与融资尚无可同时核对的交易日。');return}
 head('资金总览','宽基 ETF、融资与盘面，以两项资金都有数据的交易日为准。',select('od','对照日期',days.slice().reverse(),last(days)));
 const row=common.find(r=>r[0]===state.od),net=sum(row.slice(1)),mg=fin.get(row[0]),ctx=D.market[row[0]];
 const dirs=D.categories.map((g,i)=>[g,row[i+1]]).sort((a,b)=>b[1]-a[1]),incoming=dirs.filter(r=>r[1]>0),outgoing=dirs.filter(r=>r[1]<0);
 const describe=([g,v])=>g+' '+sg(v)+' 亿元';
 const verdict=net===0||mg===0?'至少一项资金净额持平':net>0?(mg>0?'宽基 ETF 与融资均为净买入方向':'宽基 ETF 净申购，融资净偿还'):(mg>0?'宽基 ETF 净赎回，融资净买入':'宽基 ETF 净赎回，融资净偿还');
 const h=document.createElement('div');h.className='briefing';
 h.innerHTML='<div class="brief-main"><div class="brief-label">'+esc(row[0])+' · 同日观察</div><h3>'+esc(verdict)+'</h3><p>十类宽基净申赎 <b>'+sg(net)+'</b> 亿元，沪深京融资净买入 <b>'+sg(mg)+'</b> 亿元。</p><a href="#cross">看同日盘面与温度 →</a></div>'+
 '<dl class="brief-detail"><div><dt>净申购最多</dt><dd>'+esc(incoming.length?describe(incoming[0]):'无净申购篮子')+'</dd></div><div><dt>净赎回最多</dt><dd>'+esc(outgoing.length?describe(last(outgoing)):'无净赎回篮子')+'</dd></div><div><dt>上涨家数占比</dt><dd>'+(ok(ctx?.[2])?fmt(ctx[2],1)+'%':'暂无')+'</dd></div></dl>';root.append(h);
 const ranks=dirs.slice().reverse();
 plot('资金流向了哪些宽基','固定十类 · 亿元',{grid:{left:8,right:44,top:25,bottom:15,containLabel:true},xAxis:{...axis('亿元'),min:v=>Math.min(0,v.min)-Math.max(v.max-v.min,1)*.19,max:v=>Math.max(0,v.max)+Math.max(v.max-v.min,1)*.18},yAxis:{type:'category',data:ranks.map(r=>r[0]),axisLabel:{interval:0,color:'#364950'}},series:[{name:'净申赎',type:'bar',barMaxWidth:14,data:ranks.map(r=>({value:r[1],itemStyle:{color:r[1]<0?green:red},label:{show:true,position:r[1]<0?'left':'right',color:'#394b51',formatter:()=>sg(r[1],1)}}))}]},'净申赎按可比份额变化乘当日单位净值估算。',330);
 const recent=common.filter(r=>r[0]<=row[0]).slice(-20);
 chart1('宽基 ETF 与融资 · 最近20个共同观测日','亿元',recent.map(r=>r[0]),[bar('宽基 ETF 净申赎',recent.map(r=>sum(r.slice(1))),colors[0]),bar('融资净买入',recent.map(r=>fin.get(r[0])),colors[2])],'亿元','两条资金渠道分别统计，不合计为“市场净流入”。');
}
function etf(){
 const days=D.net.map(r=>r[0]),gr=['十类合计',...D.categories];
 const ctrl=select('ed','观察日',days.slice().reverse(),last(days))+select('eg','指数篮子',gr,gr[0])+select('er','区间',rangeOptions,'20');
 head('宽基 ETF 申赎','固定十类样本 · '+D.n+' 只 · 以可比份额差乘当日单位净值估算',ctrl);
 const series=D.net.filter(r=>r[0]<=state.ed),i=D.categories.indexOf(state.eg),val=r=>i<0?sum(r.slice(1)):r[i+1],plotRows=trail(series,'er'),vs=plotRows.map(val);let total=0;
 const cur=last(series);const periodTotal=(n,j)=>{const ds=R.calendar.filter(d=>d<=cur[0]).slice(-n),matched=series.filter(r=>r[0]>=ds[0]);return ds.length===n&&matched.length===n&&matched.every((r,i)=>r[0]===ds[i]&&ok(r[j+1]))?sum(matched.map(r=>r[j+1])):null};const ix=D.categories.map((g,j)=>[g,cur[j+1],periodTotal(5,j),periodTotal(20,j),periodTotal(250,j),sum(series.map(r=>r[j+1]))]).sort((a,b)=>b[1]-a[1]);
 if(series.length<20)ix.forEach(r=>{r[3]=null;if(series.length<5)r[2]=null});
 const base=series.slice(-61,-1).map(val),rank=base.length===60?100*(base.filter(x=>x<val(cur)).length+0.5*base.filter(x=>x===val(cur)).length)/60:null;
 signal(state.ed+'，十类净申购估算 '+sg(sum(cur.slice(1)))+' 亿元；'+ix.filter(r=>r[1]>0).length+' 类净申购。最大净流入方向：'+(ix[0][1]>0?ix[0][0]+' '+sg(ix[0][1])+' 亿元':'无')+'。'+(ok(rank)?state.eg+'当日净额处在此前60日的 '+fmt(rank,1)+'% 分位。':'此前不足60日，不给历史分位。'));
 plot(state.eg+' · 资金轨迹','亿元',{xAxis:dateAxis(plotRows.map(r=>r[0])),yAxis:[axis('单日'),{...axis('累计'),splitLine:{show:false}}],series:[bar('单日净申赎',vs),line('区间累计',vs.map(v=>total+=v),colors[1],{yAxisIndex:1})]},'实际覆盖 '+plotRows.length+' 个观测日；不足所选窗口时只画现有数据，整期累计留空。');
 table('十类宽基对照',['跟踪指数','当日（亿）','近一周（亿）','近一月（亿）','近一年（亿）','已收录累计（亿）'],ix,['','sign','sign','sign','sign']);
const heat=series.slice(-20),cells=[];
 for(let j=0;j<D.categories.length;j++){
   const mx=Math.max(...heat.map(r=>Math.abs(r[j+1])),0.01);
   heat.forEach((r,x)=>cells.push([x,j,+(r[j+1]/mx).toFixed(4),r[j+1]]));
 }
 const hm=plot('十类宽基 · 近20日申赎热图','各指数独立色阶',{
   tooltip:{trigger:'item',confine:true,renderMode:'richText',formatter:p=>heat[p.value[0]][0]+' · '+D.categories[p.value[1]]+'\n净申赎 '+sg(p.value[3])+' 亿元'},
   grid:{left:5,right:12,top:14,bottom:35,containLabel:true},xAxis:dateAxis(heat.map(r=>r[0])),yAxis:{type:'category',data:D.categories,axisLabel:{fontSize:11}},
   visualMap:{show:false,min:-1,max:1,dimension:2,inRange:{color:['#258769','#f3f4f1','#c9534c']}},
   series:[{type:'heatmap',data:cells,itemStyle:{borderColor:'#ffffff',borderWidth:1}}]
 },'同一方向内，红色越深代表净申购越大，绿色代表净赎回。不同指数的颜色不能直接比较金额。',310);
 hm.on('click',p=>{state.ed=heat[p.value[0]][0];state.eg=D.categories[p.value[1]];render();root.scrollIntoView({block:'start'})});
 if(local){const entries=Object.entries(D.perFund[state.ed]).filter(([k])=>i<0||D.holdings[k][1]===state.eg).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1]));table('基金申赎明细',['代码','基金','跟踪方向','估算净申赎（亿）','前一交易日','前日份额（亿份）','折算比例','当日份额（亿份）','当日单位净值'],entries.map(([k,v])=>[k,...D.holdings[k],v,...D.inputs[state.ed][k]]),['','','','sign','','fine','fine','fine','fine'])}
}
function minute(){const days=sorted(D.intraday),klist=keys(D.names).map(k=>[k,D.names[k]]);let ctrl=select('md','交易日',days.slice().reverse(),last(days))+select('mi','指数参照',klist,'000852.SH');const d=state.md,m=D.intraday[d];
 const groupOpts=Object.entries(m.groups).map(([g,[n]])=>['g:'+g,g+' · '+n+'只']);
 ctrl+=select('single','成交范围',[['all','20只合计'],...groupOpts,...(local?D.detail[d].map(r=>[r[0],r[1]]):[])],'all');
 head('ETF 成交分时','收盘后分钟回放 · 以前20日均成交额选样 · 非实时推送',ctrl);
 const extract=(t)=>{const s=D.intraday[t];if(state.single==='all')return s.amount;if(state.single.startsWith('g:'))return s.groups[state.single.slice(2)]?.[1];return D.traces?.[t]?.[state.single]};
 const vs=extract(d);
 plot('分钟成交与指数涨跌',d,{xAxis:dateAxis(m.times),yAxis:[axis('亿元'),{...axis('%'),splitLine:{show:false}}],series:[bar('分钟成交额',vs,colors[1]),line(D.names[state.mi]+'较昨收',m.returns[state.mi],colors[2],{yAxisIndex:1})]},'横轴仅含交易分钟。成交额是双边交易活跃度，不代表净流入；缺少样本的分钟不补零。');
 const compare=days.filter(t=>t<=d).slice(-3);const spans=[['09:30','09:59'],['10:00','10:59'],['11:00','11:30'],['13:00','13:59'],['14:00','14:29'],['14:30','15:00']];
 const slices=spans.map(([a,b])=>{let share=null;return [a+'–'+b,...compare.map(t=>{const buf=extract(t);if(!buf)return null;const points=buf.filter((_,j)=>D.intraday[t].times[j]>=a&&D.intraday[t].times[j]<=b);
 const v=points.length&&points.every(ok)?sum(points):null;if(t===d&&ok(v)&&buf.every(ok)&&sum(buf)>0)share=100*v/sum(buf);return v}),share]});
 table('分时成交分布 · 亿元',['时段',...compare,d+' 占比（%）'],slices);
 if(local)table('活跃 ETF 明细',['代码','基金','跟踪指数','日成交（亿）','涨跌（%）','前1日（亿）','前2日（亿）','前20日均（亿）'],D.detail[d],['','','','','sign']);
 signal('篮子分时仅展示当日至少3只入选的方向；各日重新选样，组内基金不一定相同。没有进入当日样本的范围不作跨日比较。');
}
function margin(){root.insertAdjacentHTML('beforeend','<p class="signal"><a href="#marginHistory">查看 2010 年起的市场与行业融资，以及近周、近月、近年净买入 →</a></p>');const scopes=keys(D.margin);let ctrl=select('ms','融资范围',scopes,'沪深京')+select('mr','区间',rangeOptions,'20');const dd=sorted(D.industry);ctrl+=select('sd','行业对照日',dd.slice(1).reverse(),last(dd));head('融资余额与净买入','存量与流量分轴显示；各指数使用供应商对应指数的日度汇总。',ctrl);
 const rows=trail(D.margin[state.ms],'mr');plot(state.ms+' · 杠杆资金',last(rows)[0],{xAxis:dateAxis(rows.map(r=>r[0])),yAxis:[axis('净买入 / 亿'),{...axis('余额 / 亿',true),splitLine:{show:false}}],series:[bar('融资净买入',rows.map(r=>r[2])),line('融资余额',rows.map(r=>r[1]),colors[1],{yAxisIndex:1})]},'净买入＝融资买入－融资偿还；余额为期末存量。沪深京汇总与下方沪深行业表范围不同。');
 const s=state.sd,p=dd[dd.indexOf(s)-1],ix=Object.entries(D.industry[s]).map(([k,r])=>[k,r[0],D.industry[p]?.[k]?.[0]??null,r[1],r[2]]).sort((a,b)=>b[1]-a[1]);
 chart1('行业净买入对照',s+' / '+p,ix.slice(0,6).concat(ix.slice(-6)).map(r=>r[0]),[bar(s,ix.slice(0,6).concat(ix.slice(-6)).map(r=>r[1]),colors[0]),bar(p,ix.slice(0,6).concat(ix.slice(-6)).map(r=>r[2]),'#c69c6a')],'亿元','当期前六与后六行业；全31行业见下表。行业分类为采集时申万一级快照。');
 table('沪深 A 股行业融资',['申万一级',s+' 净买入',p+' 净买入','融资余额（亿）','有效股票数'],ix,['','sign','sign','','int'])
}
function contractTerm(sym,d,pct){
 const y=2000+Number(sym.slice(2,4)),m=Number(sym.slice(4,6)),dt=new Date(Date.UTC(y,m-1,1));dt.setUTCDate(15+(5-dt.getUTCDay()+7)%7);
 const nominal=dt.toISOString().slice(0,10),past=nominal<=R.asof,expiry=past?R.calendar.find(x=>x>=nominal):nominal;
 const days=expiry?Math.round((Date.parse(expiry)-Date.parse(d))/86400000):null,carry=-pct/(1+pct/100);
 return [expiry?(expiry+(past?'':'（预计）')):null,days,carry,days>0?carry*365/days:null]
}
function basis(){
 const opts=keys(D.basis).map(k=>[k,D.names[k]]);let ctrl=select('bk','品种',opts,'000852.SH');const curve=D.curve[state.bk],ds=sorted(curve).reverse();
 ctrl+=select('bd','观察日',ds,ds[0]);let d=state.bd,cs=curve[d],contracts=cs.map(r=>r[0]);
 ctrl+=select('bc','跟踪合约',contracts,contracts[0])+select('br','窗口',rangeOptions,'20');
 head('股指期货 · 基差与贴水收益','中金所挂牌合约 · 同日收盘 · 基差＝期货价−现货价',ctrl);
 const out=cs.map(([n,v,p])=>[n,v,p,...contractTerm(n,d,p)]);const row=out.find(r=>r[0]===state.bc);
 statline([['所选合约',row[0],d],['基差',sg(row[1])+' 点',row[1]<0?'贴水：期货低于现货':row[1]>0?'升水：期货高于现货':'期现平价'],['持有至交割 · 理论价差',sg(row[5])+'%',row[4]+' 个自然日'],['折算简单年化',ok(row[6])?sg(row[6])+'%':'不适用','未扣成本，不按保证金放大']]);
 table('同日各挂牌合约',['合约','基差（点）','相对现货（%）','交割日','剩余天数','价差收益率（%）','简单年化（%）'],out,['','sign','sign','','int','sign','sign']);
 const hist=trail(ds.filter(t=>t<=d).reverse(),'br').map(t=>[t,curve[t].find(r=>r[0]===state.bc)]).filter(r=>r[1]);chart1(row[0]+' · 自身历史基差',hist.length+' 个观测日',hist.map(r=>r[0]),[bar('基差',hist.map(r=>r[1][1]))],'点','仅看所选真实合约，上市前不补值，不拼接主连。');
 const front=trail(D.basis[state.bk].filter(r=>r[0]<=d),'br');chart1(D.names[state.bk]+' · 近月换月序列','点',front.map(r=>r[0]),[bar('近月基差',front.map(r=>r[2]))],'点','2024年1月和近期数据分段收录；每个柱子仅对应一个实际观测日。');
 if(local){const spot=D.candles[state.bk].find(x=>x[0]===d)?.[4];if(ok(spot))table('本机报价核对',['合约','现货收盘','期货收盘'],cs.map(r=>[r[0],spot,spot+r[1]]))}
 signal('价差收益率＝（现货−期货）÷期货；简单年化＝价差收益率×365÷剩余自然日。假设买入期货并持有至交割、现货指数不动、基差归零。实际交割按交割结算价，现货下跌仍可能亏损；对冲组合还涉及分红、融券、资金、手续费与滑点。交割当日不报年化。日期按合约月第三个周五、休市顺延；超出已核对日历的仅为预估。');
}
function band(){const idxMenu=select('ik','指数',keys(D.names).map(k=>[k,D.names[k]]),'000852.SH');head('重点指数波动带','自有口径 · 同周期20根收盘与两倍总体标准差',idxMenu+select('period','周期',['日',...keys(D.periodBands[state.ik])],'日')+select('ir','区间',[['20','近20根'],['60','近60根'],['120','近120根'],['all','全部K线']],'60'));
 const k=state.ik,a=trail(state.period==='日'?D.bands[k]:D.periodBands[k][state.period],'ir'),r=last(a);
 signal(r[0]+' · '+D.names[k]+' · '+state.period+'线较20根均线 '+sg(r[1])+'%，上、下轨距中线各 '+fmt(r[2])+'%。'+(Math.abs(r[1])>r[2]?'收盘已越过统计带。':'收盘仍在统计带内。'));
 chart1('收盘相对同周期20根均线','%',a.map(r=>r[0]),[line('收盘偏离',a.map(r=>r[1]),colors[1]),line('上轨',a.map(r=>r[2]),colors[2],{lineStyle:{type:'dashed',width:1}}),line('下轨',a.map(r=>-r[2]),colors[0],{lineStyle:{type:'dashed',width:1}})],'%','各周期分别计算；分钟按早、午交易时段右端收盘分桶，不跨午休。周、月只使用已过去的完整周期，不含当前周期。');
 if(local&&state.period==='日'){const full=D.candles[k].filter(r=>r[0]>=a[0][0]);plot('指数日K','点',{xAxis:dateAxis(full.map(r=>r[0])),yAxis:axis('点',true),series:[{name:'日K',type:'candlestick',data:full.map(r=>[r[1],r[4],r[3],r[2]]),itemStyle:{color:red,color0:green,borderColor:red,borderColor0:green}}]})}
 table('波动带观测',['日期','收盘偏离（%）','单侧带宽（%）','本周期涨跌（%）'],a.slice().reverse(),['','sign','','sign'])
}
function risk(){const opt=[['000852.SH','中证1000'],['000905.SH','中证500']];head('雪球敲入情景','等权假设批次 · 非真实存续规模',select('sk','标的',opt,'000852.SH')+select('sv','观察时点',[['latest','本期'],['jan24','2024年1月底']],'latest')+select('st','敲入线',['85','80','75','70','65','60'].map(x=>[x,x+'%']),'80')+select('shock','再跌幅度',['0','3','5','10','15','20','30'].map(x=>[x,x+'%']),'10'));
 const a=D.risk[state.sk][state.sv],b=+state.st,hit=a.filter(r=>r[2]<=b).length,additional=s=>a.filter(r=>r[2]>b&&r[1]*(1-s/100)<=b).length,dx=Array.from({length:31},(_,i)=>i);signal(a.length+' 组假设批次中，历史收盘已触线 '+hit+' 组；从观察时点再跌 '+state.shock+'%，新增触线 '+additional(+state.shock)+' 组。没有发行量数据，不换算为亿元。');
 chart1('压力幅度与触线批次数',D.names[state.sk],dx.map(x=>'−'+x+'%'),[line('历史及情景合计',dx.map(s=>hit+additional(s)),colors[1],{step:'end'}),line('其中：情景新增',dx.map(additional),colors[2],{step:'end'})],'批次','每个已结束月份用最后交易日收盘作假设期初，等权；仅观察后续收盘。忽略敲出、到期、条款差异及真实发行权重，不是对冲盘或卖盘估算。');
 table('按假设建仓日拆解',['建仓日','观察日 / 期初（%）','期间最低收盘 / 期初（%）','状态'],a.map(r=>[...r,r[2]<=b?'历史触线':r[1]*(1-(+state.shock)/100)<=b?'情景新增':'未触线']))
 if(local){
   const samples=Object.entries(D.verifiedSample).filter(([d,scopes])=>scopes[state.sk]).map(([d,scopes])=>[d,scopes[state.sk]]);
   if(!samples.length){signal('本机暂无该指数已核验的存续条款台账。上方是假设批次数，不代表真实敲入规模。');return}
   table('本机已核验样本 · 非全市场',['台账观察日','存续样本数','存续本金（亿）','已敲入本金（亿）','现价再跌'+state.shock+'%新增越线（亿）'],samples.reverse().map(([day,x])=>[day,x.count,x.total,x.hit,x.added[+state.shock]]),['','int']);
 }
}
function week(){head('周报资金观察','每张表沿用自身统计区间和分类，不反推为当日资金。');
 const sources=[['sector_order_flow','行业订单分类净额','亿元','供应商订单分类统计，不代表机构身份；最近统计窗可能为尚未结束的交易周。'],['sector_turnover_share5_percentile','行业交易拥挤度','分位（%）','成交占比5日均值相对历史窗口的位置，不等于净流入。'],['etf_disclosed_industry_allocation','ETF 披露配置穿透','亿元','以披露行业占净值比例分配净申购，不是实际买入额。'],['new_fund_established_amount','权益基金新成立募集','亿元','合计与子项不可相加；募集不等于即时入市。']];
 for(const [key,title,unit,note] of sources){let e=D.extra[key];if(!e)continue;const el=table(title,['行业 / 类型',unit],e[2].slice().sort((a,b)=>b[1]-a[1]),['',key==='sector_order_flow'?'sign':'']);const p=document.createElement('p');p.className='note';p.textContent=e[0]+' 至 '+e[1]+' · '+note;el.append(p)}
}
function cross(){
 const days=Array.from(new Set([...D.net.map(r=>r[0]),...sorted(D.turnover),...sorted(D.market),...D.margin['沪深京'].map(r=>r[0])])).sort().filter(d=>d>=D.net[0][0]);
 head('资金与盘面','同一交易日对照 · 温度沿用复盘啦当日存档版本',select('cd','观察日',days.slice().reverse(),last(D.net)[0])+select('cr','区间',rangeOptions,'20'));
 const d=state.cd,net=new Map(D.net.map(r=>[r[0],r])),mg=new Map(D.margin['沪深京'].map(r=>[r[0],r[2]])),total=t=>net.has(t)?sum(net.get(t).slice(1)):null,ready=days.filter(t=>t<=d),sel=trail(ready,'cr'),m=D.market[d],v=total(d),f=mg.get(d);
 const words=!ok(v)||!ok(f)?'两类资金尚未齐备，暂不判定方向。':v*f<0?'ETF 申赎与融资净买入方向相反。':v*f>0?'ETF 申赎与融资净买入方向一致。':'至少一项为零，方向不作比较。';
 signal(d+' · '+words+' 收盘温度：'+(m&&ok(m[0])?fmt(m[0],0)+' 分':'当日未入库')+'；上涨家数占比：'+(m&&ok(m[2])?fmt(m[2],1)+'%':'当日未入库')+'。');
 chart1('两类资金 · 同日对照','亿元',sel,[bar('ETF 净申赎',sel.map(total),colors[1]),bar('融资净买入',sel.map(t=>mg.get(t)??null),colors[2])],'亿元','两类统计口径不同，不相加。申赎由份额变动估算，融资净买入为融资买入减偿还。');
 chart1('收盘温度与赚钱效应','分 / %',sel,[line('收盘温度（分）',sel.map(t=>D.market[t]?.[0]??null),colors[1]),line('上涨家数占比（%）',sel.map(t=>D.market[t]?.[2]??null),colors[0])],'分 / %','各取对应日期的入库记录；缺数据时断线。温度不是上涨概率。');
 const regimes=[['ETF净申购 · 融资净买入',1,1],['ETF净申购 · 融资净偿还',1,-1],['ETF净赎回 · 融资净买入',-1,1],['ETF净赎回 · 融资净偿还',-1,-1]];
 const med=a=>{const n=a.length;if(!n)return null;const v=a.slice().sort((x,y)=>x-y);return n%2?v[n>>1]:(v[n/2-1]+v[n/2])/2};
 table('区间内的四种资金组合',['同日组合','交易日数','有宽度记录天数','上涨占比中位数（%）','个股涨跌中位数的区间中位值（%）'],regimes.map(([label,a,b])=>{const obs=sel.filter(t=>ok(total(t))&&ok(mg.get(t))&&Math.sign(total(t))===a&&Math.sign(mg.get(t))===b),width=obs.map(t=>D.market[t]?.[2]).filter(ok);return [label,obs.length,width.length,med(width),med(obs.map(t=>D.market[t]?.[3]).filter(ok))]}),['','int','int','','sign']);
 signal('组合统计只描述选定区间的同日现象，不是次日胜率；字段缺失或任一净额为零的日期不进入四组。');
 const tr=D.turnover[d],row=net.get(d);table('篮子申赎与成交 · '+d,['跟踪指数','净申赎（亿）','二级成交额（亿）','净申赎 / 成交额（%）'],D.categories.map((g,j)=>[g,row?.[1+j]??null,tr?.[j]??null,row&&tr?.[j]>0?100*row[1+j]/tr[j]:null]).sort((a,b)=>(b[2]??0)-(a[2]??0)),['','sign','','sign']);
 table('逐日核对',['交易日','ETF 净申赎（亿）','融资净买入（亿）','温度（分）','上涨占比（%）','个股中位涨跌（%）'],sel.slice().reverse().map(t=>[t,total(t),mg.get(t)??null,D.market[t]?.[0]??null,D.market[t]?.[2]??null,D.market[t]?.[3]??null]),['','sign','sign','int','','sign']);
}
function rates(){
 const days=D.rates.map(r=>r[0]);head('交易所短期资金价格','上交所通用质押式回购 · 1天 / 7天',select('rd','观察日',days.slice().reverse(),last(days))+select('rr','区间',rangeOptions,'20'));
 const rows=trail(D.rates.filter(r=>r[0]<=state.rd),'rr'),r=last(rows);
 signal(r[0]+' · 7天减1天利差 '+sg(r[1])+' 基点。'+(ok(r[4])?'隔夜收盘利率处在此前60个观测日的 '+fmt(r[4],1)+'% 分位。':'此前不足60个观测日，不给分位。'));
 chart1('7天减1天 · 期限利差','基点',rows.map(x=>x[0]),[bar('7天减1天',rows.map(x=>x[1]),colors[1])],'BP','1个基点＝0.01个百分点。正值代表7天价格高于1天；不能据此推断股票净流入。');
 chart1('各自过去60日的资金价格分位','%',rows.map(x=>x[0]),[line('1天回购',rows.map(x=>x[4]),colors[1]),line('7天回购',rows.map(x=>x[5]),colors[2])],'%','仅与当天之前60个有效配对观测比较，同值按半数计。这里用交易所收盘利率，不是银行间DR007。');
 if(local)chart1('回购收盘年利率','%',rows.map(x=>x[0]),[line('GC001',rows.map(x=>D.repoLevels[x[0]][0]),colors[1]),line('GC007',rows.map(x=>D.repoLevels[x[0]][1]),colors[0])],'%','本机原始两期限行情，非全天成交加权利率。',true);
 table('逐日资金价格',['交易日','7天减1天（BP）','1天日变（BP）','7天日变（BP）','1天分位（%）','7天分位（%）'],rows.slice().reverse(),['','sign','sign','sign']);
}
const R=window.ETF_BOARDS_DATA.research;
const periods=[['5','近一周 · 5交易日'],['20','近一月 · 20交易日'],['250','近一年 · 250交易日']];
const periodName=k=>periods.find(x=>x[0]===String(k))[1].split(' · ')[0];
Object.assign(tabs,{marginHistory:'融资长历史',capitalActions:'股东减持与公司回购',ownership:'中金与汇金持仓'});
navSections.splice(2,0,['公司与杠杆资金',['marginHistory','capitalActions','ownership']]);
Object.assign(icons,{capitalActions:'coins',marginHistory:'chart-column-increasing',ownership:'landmark'});
function statline(fields){const el=document.createElement('dl');el.className='fund-readouts';for(const [k,v,n] of fields){const cell=document.createElement('div');cell.innerHTML='<dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd><small>'+esc(n)+'</small>';el.append(cell)}root.append(el)}
function browse(title,headers,rows,formats,search=true){
 const controls=document.createElement('div');controls.className='fund-search';root.append(controls);
 const input=document.createElement('input');input.type='search';input.placeholder='公司名称、代码或关键词';input.setAttribute('aria-label',title+'筛选');if(search)controls.append(input);
 const prev=document.createElement('button'),next=document.createElement('button'),pos=document.createElement('span');prev.textContent='上一页';next.textContent='下一页';controls.append(prev,pos,next);
 let page=0,el;const draw=()=>{const q=input.value.trim().toLowerCase(),matches=q?rows.filter(r=>r.some(v=>String(v??'').toLowerCase().includes(q))):rows,n=Math.max(1,Math.ceil(matches.length/40));page=Math.max(0,Math.min(page,n-1));pos.textContent=(page+1)+' / '+n+' 页 · '+matches.length+' 行';prev.disabled=page===0;next.disabled=page>=n-1;if(el)el.remove();el=table(title,headers,matches.slice(page*40,(page+1)*40),formats);controls.after(el);el.querySelector('.icon').title='导出当前页 CSV';};
 prev.onclick=()=>{page--;draw()};next.onclick=()=>{page++;draw()};input.oninput=()=>{page=0;draw()};draw()
}
const histCache={},pendingHistory=new Set();window.financeSeries=([stamp,k,rows])=>{if(stamp===R.asof)histCache[k]=rows;pendingHistory.delete(k);if(tab==='marginHistory'&&state.hs===k)render()};
function marginHistory(){
 const opts=Object.entries(R.scopes).map(([k,v])=>[k,v.name]).sort((a,b)=>a[1].localeCompare(b[1],'zh'));const key='all';
 const ctl=select('hs','融资范围',[[key,'市场合计'],...opts.filter(r=>r[0]!==key)],key)+select('hw','观察窗口',rangeOptions,'20')+select('hf','展示频率',['自动','日度','月度'],'自动');
 const s=R.scopes[state.hs],w=state.hw;head('融资长历史',s.name+' · '+s.start+' 至 '+s.end+' · 东财披露回溯 · 买入额减偿还额',ctl);
 statline(periods.map(([k])=>[periodName(k)+'净买入',sg(s.period[k][0])+' 亿',s.period[k][1]+' / '+k+' 个有效交易日']));
 let daily=state.hf==='日度'||(state.hf==='自动'&&w!=='all');
 const fullLocal=local&&daily&&w==='all';if(fullLocal&&!histCache[state.hs]&&!pendingHistory.has(state.hs)){let id=state.hs,script=document.createElement('script');pendingHistory.add(id);script.src='finance-history/'+encodeURIComponent(id)+'.js';script.onload=()=>script.remove();script.onerror=()=>{script.remove();if(tab==='marginHistory'&&state.hs===id)signal('未能打开本机逐日文件。')};document.head.append(script)}
 const data=fullLocal?histCache[state.hs]||[]:s.recent,days=R.scopes.all.recent;
 const first=w==='all'?s.start:days.at(-Math.min(+w,days.length))[0];
 if(daily){
 const a=data.filter(r=>r[0]>=first);if(a.length)plot(s.name+' · 日度融资','亿元',{xAxis:dateAxis(a.map(r=>r[0])),yAxis:[axis('净买入'),{...axis('余额',true),splitLine:{show:false}}],series:[bar('净买入',a.map(r=>r[1])),line('期末余额',a.map(r=>r[2]),colors[1],{yAxisIndex:1})]},'每日净买入是流量；余额是每个交易日结束时的存量。');
 if(w==='all'&&!local)signal('官网逐日提供最近250个交易日。全部历史按月汇总；本机可查全部逐日明细。');
 if(a.length)browse('日度记录',['交易日','融资净买入（亿）','期末融资余额（亿）'],a.slice().reverse(),['','sign'],false);
 }else{
 const a=s.monthly.filter(r=>r[0]>=first.slice(0,7));plot(s.name+' · 月度融资','亿元',{xAxis:{...dateAxis(a.map(r=>r[0])),axisLabel:{hideOverlap:true}},yAxis:[axis('月净买入'),{...axis('月末余额',true),splitLine:{show:false}}],series:[bar('自然月净买入',a.map(r=>r[1])),line('最后交易日余额',a.map(r=>r[3]),colors[1],{yAxisIndex:1})]},'按自然月归集；本月截至 '+R.asof+'。边界月份展示整月已收录值，和上方滚动窗口不同。缺日或缺偿还额时月净额留空。');
 browse('月度记录',['月份','净买入（亿）','有效天数','期末余额（亿）'],a.slice().reverse(),['','sign','int'],false);
 }
 signal(s.name+'：'+s.start+' 至 '+s.end+'，收录 '+s.count+' 个交易日。行业按快照日东财目录回溯，不等于当年申万成分。各行业起点不同，不用今天的成分补造历史，也不强行拼接申万数据。');
 const rows=Object.entries(R.scopes).filter(([k])=>k!=='all').map(([,v])=>[v.name,v.start,v.end,v.period[5][0],v.period[20][0],v.period[250][0],v.period[5][2]]).sort((a,b)=>(b[4]??-Infinity)-(a[4]??-Infinity));
 browse('行业横向对照',['行业','首个记录','末个记录','近周净买入（亿）','近月净买入（亿）','近年净买入（亿）','期末余额（亿）'],rows,['','','','sign','sign','sign']);
}
function capitalActions(){
 const c=select('aw','统计窗口',periods,'20')+select('atype','事项',['股东减持','公司回购'],'股东减持');
 const a=R.events[state.aw];head('股东减持与公司回购','A股公开披露 · '+a.after+'（不含）至 '+R.asof+'（含） · 含非交易日公告',c);
 const summary=periods.map(([w])=>{const a=R.events[w],cnt=sum(a.buy.map(r=>r[6]));return [periodName(w),a.start,a.sell.length,sum(a.sell.map(r=>r[2])),sum(a.buy.map(r=>r[3])),sum(a.buy.map(r=>r[4])),cnt?sum(a.buy.map(r=>r[5]??0)):null]});
 if(state.atype==='股东减持'){
 const rs=a.sell,rec=sum(rs.map(r=>r[3])),n=sum(rs.map(r=>r[5]));
 statline([['披露公司',rs.length+' 家','按证券代码去重'],['减持股数',fmt(sum(rs.map(r=>r[2])))+' 万股','按公告日，不是当日卖盘'],['有均价部分估算',n?fmt(sum(rs.map(r=>r[4]??0)))+' 亿':'未知',n+' / '+rec+' 条披露有成交均价']]);
 signal('只统计披露了减持股数的变动，不含尚未实施的减持计划。最新收录公告 '+R.sellThrough+'；未收录不能解释成没有减持。公告可能汇总多日交易。');
 browse('哪些公司被减持',['代码','公司','减持万股','披露条数','有价部分估算（亿）','有均价条数','最近公告'],rs,['','','','int','','int']);
 if(local)browse('本机减持披露明细',['代码','公司','公告日','股东','变动开始','变动结束','减持万股','披露均价（元）'],R.records[state.aw][0],[]);
 }else{
 const rs=a.buy,n=sum(rs.map(r=>r[4])),cnt=sum(rs.map(r=>r[6])),paid=sum(rs.map(r=>r[5]??0)),kinds=['全部用途',...new Set([...rs,...a.ongoing].map(r=>r[2]))];
 statline([['新披露方案',sum(rs.map(r=>r[3]))+' 项','按首次董事会公告日'],['完成回购',n+' 项','按方案完成日'],['完成方案实付合计',cnt?fmt(paid)+' 亿':'未知',cnt+' / '+n+' 项有金额']]);
 signal('完成额是这些方案整个执行期的累计实付，不是本窗口的逐日成交；不合计计划上限。同一方案只计一次。用途按披露意图归类，不等于已办理注销或已授予激励。');
 const groups=kinds.slice(1).map(k=>{const g=rs.filter(r=>r[2]===k);return [k,sum(g.map(r=>r[3])),sum(g.map(r=>r[4])),g.some(r=>r[5]!=null)?sum(g.map(r=>r[5]??0)):null]});
 table('用途拆分',['用途','新方案数','完成数','已披露实付（亿）'],groups,['','int','int']);
 const area=document.createElement('div');area.className='ctrl';area.innerHTML=select('ap','披露用途',kinds,kinds.includes(state.ap)?state.ap:'全部用途');root.append(area);
 const selected=rs.filter(r=>state.ap==='全部用途'||r[2]===state.ap);
 browse('公司与方案用途',['代码','公司','用途','新方案数','完成数','有金额方案实付（亿）','有金额完成数'],selected,['','','','int','int','','int']);
 browse('窗口内更新且仍实施中 · 最新进展',['代码','公司','用途','方案数','方案启动以来累计实付（亿）'],a.ongoing.filter(r=>state.ap==='全部用途'||r[2]===state.ap),['','','','int']);
 signal('实施中只取每个方案的最新一条进展；金额是自启动至公告日的累计，不与上方完成额相加。');
 if(local)browse('本机回购公告用途原文',['代码','公司','方案编号','首次公告','完成日','归类','进度代码','累计实付（亿）','披露用途'],R.records[state.aw][1].filter(r=>state.ap==='全部用途'||r[5]===state.ap),[]);
 }
 table('周、月、年窗口对照',['窗口','首个交易日','减持公司数','减持（万股）','新回购方案数','完成数','有金额完成方案实付（亿）'],summary,['','','int','','int','int']);
}
function ownership(){
 const dates=[...new Set(R.holdings.map(r=>r[1]))].sort().reverse();
 head('中金与汇金 · 定期报告持仓','A股前十大股东披露 · 仅精确匹配法人全称 · 非当前实时仓位',select('oq','报告期',dates,dates[0]));
 const rows=R.holdings.filter(r=>r[1]===state.oq);statline(rows.map(r=>[r[0].replace('有限责任公司','').replace('股份有限公司',''),r[2]+' 家','报告期末 '+r[1]]));
 table('披露范围 · 同期横向核对',['披露股东','报告期末','出现公司数','可拆分A股（万股）','有市值部分（亿）','有市值公司数','有A股股数公司数'],rows,['','','int','','','int']);
 table('分季披露规模',['披露股东','报告期末','出现公司数','可拆分A股（万股）','有市值部分（亿）','有市值公司数','有A股股数公司数'],R.holdings.slice().sort((a,b)=>b[1].localeCompare(a[1])),['','','int','','','int']);
 signal('中金指中金公司本体，不等于中证金；汇金投资与汇金资管分列。不含 ETF 穿透、资管计划、托管或其他关联主体；未进入十大、或某期未收录，均不能视作清仓。A/H合并或股份种类不清的计入公司数，不纳入A股股数和市值。股数不是跨公司持股比例，季度存量不能按周月年累加。');
 if(local)browse('本机逐家公司披露',['股东全称','报告期','证券代码','公司','持股（万股）','占总股本（%）','参考市值（亿）','公告日期','披露股份种类'],R.positions.filter(r=>r[1]===state.oq),[]);
}
const views={marginHistory,capitalActions,ownership,overview,boards:()=>window.ETFBoards.mount(root,window.ETF_BOARDS_DATA,{view:boardId(),onViewChange:id=>history.replaceState(null,'','#boards/'+id)}),etf,cross,minute,margin,rates,basis,band,risk:()=>window.renderDCN(root,local?D.dcnPrivate:D.dcn),riskHistory:risk,week};
function boardId(){const id=location.hash.split('/')[1];return window.ETFBoards.views.includes(id)?id:'daily'}
function render(){root.__boards?.destroy();charts.splice(0).forEach(c=>c.dispose());const hash=location.hash.slice(1).split('/')[0];tab=Object.hasOwn(tabs,hash)?hash:'overview';root.replaceChildren();$('#tabs').querySelectorAll('button').forEach(b=>{if(b.dataset.tab===tab)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});views[tab]()}
if(local)$('#close-link').href=$('#home').href='https://telltellfish.github.io/';
const coverage=[
 ['融资长历史',R.scopes.all.start,R.asof,'东财市场合计与行业分别回溯；按周、月、年累计净买入，不累加余额'],
 ['公司资本行为',R.events[250].start,R.asof,'股东披露减持及回购方案，按不同事项日期归集'],
 ['交易所回购',D.rates[0][0],last(D.rates)[0],'GC001与GC007有效成交日配对；公开展示期限利差、变动和历史分位'],
 ['固定宽基申赎',D.net[0][0],last(D.net)[0],D.n+'只 / '+D.categories.length+'类，折算前后份额可比；不指认买方身份'],
 ['篮子成交',sorted(D.turnover)[0],last(sorted(D.turnover)),'仅在全部样本当日有成交额记录时汇总；成交不等于净流入'],
 ['收盘分时',sorted(D.intraday)[0],last(sorted(D.intraday)),'每天按前20日均成交额选20只；分钟缺数留空'],
 ['沪深京融资',D.margin['沪深京'][0][0],last(D.margin['沪深京'])[0],'买入额减偿还额；指数范围及行业范围分别统计'],
 ['沪深行业融资',sorted(D.industry)[0],last(sorted(D.industry)),'31个申万一级行业；三项加总分别与沪深A股汇总核对'],
 ['股指期货',D.basis['000852.SH'][0][0],last(D.basis['000852.SH'])[0],'2024年1月专题与近一年分段覆盖；期货减现货，同日收盘'],
 ['指数与情景',D.bands['000852.SH'][0][0],last(D.bands['000852.SH'])[0],'指数波动带为自算；雪球仅为历史价格压力测试，不是存续规模'],
 ['复盘啦温度',sorted(D.market).find(d=>ok(D.market[d][0])),sorted(D.market).filter(d=>ok(D.market[d][0])).at(-1),'沿用当时模型版本；不会用资金指标回改已有分数']
];
$('#coverage-text').innerHTML=coverage.map(([name,a,b,info])=>'<div><b>'+esc(name)+'</b><span>'+esc(a)+' 至 '+esc(b)+'</span><span>'+esc(info)+'</span></div>').join('');
$('#mode').textContent=local?'本机完整版':'公开汇总版';$('#stamp').textContent='行情截至 '+D.asof;kpis();$('#tabs').innerHTML=navSections.map(([cap,ids])=>'<div class="nav-group"><div class="nav-caption">'+cap+'</div>'+ids.map(k=>'<button data-tab="'+k+'">'+icon(k)+esc(tabs[k])+'</button>').join('')+'</div>').join('');
$('#tabs').onclick=e=>{const b=e.target.closest('button[data-tab]');if(b)location.hash=b.dataset.tab};root.onchange=e=>{if(e.target.dataset.key){state[e.target.dataset.key]=e.target.value;render()}};
window.addEventListener('hashchange',render);let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>charts.forEach(c=>c.resize()),80)});render();
})();

