export function cnDate(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(date)}
export function tradingWindow(now=new Date()){const d=new Date(now.getTime()+8*3600000),m=d.getUTCHours()*60+d.getUTCMinutes();return d.getUTCDay()>0&&d.getUTCDay()<6&&((m>=570&&m<=690)||(m>=780&&m<901))}
export function fresh(q,now=new Date()){const stamp=Date.parse(q?.time);if(!Number.isFinite(stamp)||!Number.isFinite(q?.price)||q.price<=0)return false;return cnDate(new Date(stamp))===cnDate(now)&&now-stamp>=-30000&&now-stamp<=180000}
function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T00:00:00Z');return Number.isFinite(d.getTime())&&d.toISOString().slice(0,10)===s}
const valid=v=>typeof v==='number'&&Number.isFinite(v)&&v>0;
const gt=(a,b)=>a-b>1e-9*Math.max(1,Math.abs(a),Math.abs(b));
const lt=(a,b)=>gt(b,a);
const all=(...v)=>v.some(x=>x===false)?false:v.some(x=>x===null)?null:true;
const test=(values,fn)=>values.every(valid)?!!fn():null;
const rule=(id,title,description,value)=>({id,title,description,value});
const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;
// A shared cutoff preserves the eight-rule interpretation of earlier records.
export const S8_ENABLED_AT='2026-09-22T14:01:00+08:00';
export function normalizeShortVersion(value){return value==='no-profit'?'no-profit':'classic'}
export function shortVersionLabel(value){return normalizeShortVersion(value)==='no-profit'?'新版':'旧版'}
export function eventShortVersion(event){return normalizeShortVersion(event?.shortVersion)}
export function dailySignalId(type,code,date=cnDate()){return type+':'+code+':'+date}
export function signalDate(time){const stamp=Date.parse(time);return Number.isFinite(stamp)?cnDate(new Date(stamp)):null}
export function hasDailySignal(events,type,code,date=cnDate()){
 return events.some(e=>e.type===type&&e.code===code&&!e.replayOnly&&(e.tradeDate||signalDate(e.quoteTime||e.time))===date);
}
export function migrateDailyMonitoring(positions){
 const next={...positions};let count=0;
 for(const [code,p] of Object.entries(positions)){
  if(!p||!('closedAt' in p)&&!('frozenCost' in p))continue;
  next[code]={...p,lastShortAlertAt:p.lastShortAlertAt||p.closedAt||null,lastShortAlertCost:p.lastShortAlertCost??p.frozenCost??null};
  delete next[code].closedAt;delete next[code].frozenCost;count++;
 }
 return {positions:next,count};
}
export function applyAssetMonitoring(positions,pool){
 const next={...positions};let count=0;
 for(const h of pool){
  const p=next[h.code];if(h.assetType!=='etf'||!p)continue;
  const updated={...p,assetType:'etf',priceDecimals:h.priceDecimals||3,monitorMode:h.monitorMode,...(p.basis==='reference'?{basis:'etf-adjusted'}:{})};
  if(JSON.stringify(updated)!==JSON.stringify(p)){next[h.code]=updated;count++;}
 }
 return {positions:next,count};
}
export function applyCostBaseline(positions,baseline,exact){
 const next={...positions};let count=0;
 if(!baseline?.version||!validDate(baseline.date))return {positions:next,count};
 for(const [code,price] of Object.entries(baseline.costs||{})){
  const p=next[code],meta=baseline.costMeta?.[code]||{},costDate=meta.costDate||baseline.date,date=meta.monitorStartDate||baseline.date,reference=meta.costBasis==='reference',etf=meta.costBasis==='etf-adjusted',factor=exact[code]?.factorHistory?.[costDate],version=meta.version||baseline.version,costScope=baseline.costScope,costLabel=meta.costLabel||baseline.costLabel||meta.account||baseline.account;
  if(!p||(!p.pendingCost&&!p.costImportVersion)||!valid(price)||!validDate(date)||!validDate(costDate)||!reference&&!etf&&!valid(factor))continue;
  if(p.costImportVersion===version){if(p.costScope!==costScope||p.costLabel!==costLabel){next[code]={...p,costScope,costLabel};count++}continue;}
  next[code]={...p,id:version+':'+code,date,price,...(!reference&&!etf?{factor}:{}),cost:price,costDate,basis:etf?'etf-adjusted':reference?'reference':'factor',origin:'current-cost',pendingCost:false,account:meta.account||baseline.account,costScope,costLabel,costSource:meta.source||baseline.source,costImportVersion:version,...(meta.monitorMode?{monitorMode:meta.monitorMode}:{}),...(meta.costDecimals?{costDecimals:meta.costDecimals}:{})};
  delete next[code].closedAt;delete next[code].frozenCost;count++;
 }
 return {positions:next,count};
}
function aligned(exact,dates,n){const calendar=exact.calendar?.filter(d=>d<=exact.previousTradeDate);return Array.isArray(dates)&&calendar?.length>=n&&dates.length>=n&&dates.slice(-n).every((d,i)=>d===calendar.slice(-n)[i])}
export function replayLong(quote,exact,intraday){
 if(!quote||!intraday||intraday.source!=='iFinD 正式 API'||intraday.date!==exact?.basisDate||intraday.date!==quote.time?.slice(0,10)||!Array.isArray(intraday.bars))return null;
 const expected=[];for(let m=570;m<=900;m++)if(m<=690||m>=781)expected.push(String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'));
 let high=0,amount=0,previous=null;
 for(let i=0;i<intraday.bars.length;i++){
  const b=intraday.bars[i],minute=b.time?.slice(11,16),yesterdayAmount=intraday.yesterdayAmounts?.[minute];
  // A first-of-day claim requires an unbroken, valid prefix from the opening auction.
  if(minute!==expected[i]||b.time.slice(0,10)!==intraday.date||!valid(b.high)||!valid(b.close)||b.high<b.close||!Number.isFinite(b.amount)||b.amount<0||!valid(yesterdayAmount)||Date.parse(b.time)>Date.parse(quote.time))return null;
  high=Math.max(high,b.high);amount+=b.amount;
  const q={...quote,price:b.close,high,amount,time:b.time},e={...exact,date:intraday.date,minute,currentSameMinuteAmount:amount,yesterdaySameMinuteAmount:yesterdayAmount},c=evaluate(q,null,e,new Date(b.time));
  if(c.long.some(r=>r.value===null))return null;
  if(c.longHit)return {firstSatisfiedAt:b.time,price:b.close,open:q.open,high,limitUp:q.limitUp,currentAmount:amount,yesterdayAmount,previousTradeDate:exact.previousTradeDate,previousClose:exact.closes.at(-1),previousMA20:avg(exact.closes.slice(-20)),dynamicMA20:(exact.closes.slice(-19).reduce((a,v)=>a+v,0)+b.close)/20,industryName:exact.industryName,industryRank:exact.industryRank,assetType:c.assetType,conditionCount:c.long.length,source:intraday.source,resolution:'1m',previous};
  previous={time:b.time,price:b.close,failed:c.long.filter(r=>r.value===false).map(r=>r.title),currentAmount:amount,yesterdayAmount};
 }
 return null;
}
export function mergeLongReplay(events,holding,replay){
 if(!replay)return {events,changed:false};
 const id=dailySignalId('long',holding.code,replay.firstSatisfiedAt.slice(0,10)),old=events.find(e=>e.id===id);
 if(old?.replay&&JSON.stringify(old.replay)===JSON.stringify(replay))return {events,changed:false};
 const event=old?{...old,replay}:{id,type:'long',code:holding.code,name:holding.name,time:replay.firstSatisfiedAt,price:replay.price,reason:(replay.conditionCount||6)+'项多信号条件全部满足',replayOnly:true,replay};
 return {events:old?events.map(e=>e.id===id?event:e):[event,...events],changed:true};
}
export function prepareExact(raw={},position=null){
 const e={...raw};if(!position||!Array.isArray(e.dates)||!Array.isArray(e.closes)||e.dates.length!==e.closes.length)return e;
 const i=e.dates.indexOf(position.date);if(i<5)return e;
 const before=e.closes.slice(i-5,i),amounts=e.amounts?.slice(i)||[];
 const preceding=e.calendar?.filter(d=>d<position.date).slice(-5)||[];
 if(before.length===5&&before.every(valid)&&preceding.length===5&&e.dates.slice(i-5,i).every((d,j)=>d===preceding[j])){e.beforeEntryMin5=Math.min(...before);e.beforeEntryDay5Close=before[0];e.beforeEntryDay5Date=preceding[0];e.baselineCycle=position.id}
 const expected=e.calendar?.filter(d=>d>=position.date&&d<=e.previousTradeDate)||[];
 if(amounts.length===expected.length&&amounts.length&&e.dates.slice(i).every((d,j)=>d===expected[j])&&amounts.every(v=>typeof v==='number'&&Number.isFinite(v)&&v>=0)){
  e.amountHistoryComplete=true;e.amountHistoryCycle=position.id;e.maxAmountSinceEntry=Math.max(...amounts);
 }
 return e;
}
export function adjustedCost(position,exact,today){
 if(!position)return null;
 if(position.pendingCost)return null;
 if(position.basis==='etf-adjusted'){const ratio=exact.costRatios?.[position.costDate];return exact.assetType==='etf'&&exact.basisDate===today&&exact.basis==='ths-qfq-dividend-reinvest'&&exact.costAdjustmentBasis==='ths-qfq-dividend-reinvest-ratio'&&valid(ratio)&&valid(position.price)?position.price*ratio:null;}
 if(position.basis==='reference')return valid(position.price)?position.price:null;
 if(position.basis==='today')return position.costDate===today&&valid(position.cost)?position.cost:null;
 if(valid(position.price)&&valid(position.factor)&&valid(exact.factor)&&exact.factorDate===today)return position.price*position.factor/exact.factor;
 return null;
}
export function evaluate(q={},position=null,exact={},now=new Date(),shortVersion='classic'){
 shortVersion=normalizeShortVersion(shortVersion);
 if(q.monitorMode==='price-only'||position?.monitorMode==='price-only'||exact.monitorMode==='price-only')return {shortVersion,long:[],short:[],longHit:false,hits:[],cost:adjustedCost(position,exact,cnDate(now)),eligible:null,isFresh:fresh(q,now)&&tradingWindow(now),profitable:null,missing:false,positionPending:!position||!!position.pendingCost,priceOnly:true};
 const declaredType=q.assetType||position?.assetType||exact.assetType,assetType=['etf','index'].includes(declaredType)?declaredType:'stock',etf=assetType==='etf',index=assetType==='index',longOnly=index||[q,position,exact].some(x=>x?.monitorMode==='long-only'),halfTick=etf?0.0005:0.005;
 const P=q.price,O=q.open,H=q.high,C=q.prevClose,A=q.amount,today=cnDate(now),isFresh=fresh(q,now)&&tradingWindow(now),minute=(q.time||'').slice(11,16);
 const cost=adjustedCost(position,exact,today),eligible=!position||position.pendingCost||!validDate(position.date)?null:position.date>=today?false:true,profitable=test([P,cost],()=>gt(P,cost*1.05));
 // Price-index levels are unadjusted. Never accept that basis for a stock/ETF,
 // or infer index rules from a conflicting history record.
 const historyBasisOK=index?exact.assetType==='index'&&exact.basis==='ths-index-price':exact.assetType!=='index'&&exact.basis==='ths-qfq-dividend-reinvest';
 const historyOK=historyBasisOK&&exact.basisDate===today&&Array.isArray(exact.closes)&&exact.closes.length===exact.dates?.length&&exact.closes.every(valid)&&aligned(exact,exact.dates,20),closes=historyOK?exact.closes:null;
 const last=n=>closes.slice(-n),ma20=closes?avg(last(20)):null,dma20=closes?(last(19).reduce((a,b)=>a+b,0)+P)/20:null,ma5=closes?avg(last(5)):null,dma5=closes?(last(4).reduce((a,b)=>a+b,0)+P)/5:null;
 const touched=test([H,q.limitUp],()=>H>=q.limitUp-halfTick),intraday=exact.date===today&&exact.minute===minute;
 const long=[
 ...(!index?[rule('L0','当日未触及涨停','截至当前的最高价低于涨停价',touched===null?null:!touched)]:[]),
 rule('L1','昨日收盘低于 MA20',index?'使用 iFinD 指数点位日线（不复权）':'使用前复权分红再投日线',test([closes?.at(-1),ma20],()=>lt(closes.at(-1),ma20))),
 rule('L2','现价突破动态 MA20','（前 19 日收盘合计＋现价）÷ 20',test([P,dma20],()=>gt(P,dma20))),
 rule('L3','成交额超过昨日同期','比较同一已完成分钟的累计成交额',intraday?test([exact.currentSameMinuteAmount,exact.yesterdaySameMinuteAmount],()=>gt(exact.currentSameMinuteAmount,exact.yesterdaySameMinuteAmount)):null),
 rule('L4','回落幅度小于实体一半','（最高价−现价）×2 < 现价−开盘价',test([H,P,O],()=>lt((H-P)*2,P-O))),
 ...(!etf&&!index?[rule('L5','属于昨日强势行业 Top 10','同花顺二级行业：5 日排名×0.385＋15 日排名×0.615',exact.rankAsOf===exact.previousTradeDate&&exact.previousTradeDate&&Number.isInteger(exact.industryRank)?exact.industryRank>=1&&exact.industryRank<=10:null)]:[])
 ];
 if(longOnly)return {shortVersion,long,short:[],longHit:isFresh&&long.every(x=>x.value===true),hits:[],cost:null,eligible:null,isFresh,profitable:null,missing:long.some(x=>x.value===null),positionPending:false,longOnly:true,assetType};
 const shortRule=(id,title,desc,cond,profit=true)=>rule(id,title,shortVersion==='no-profit'?desc.replace(/^盈利 >5%；/,''):desc,all(eligible,profit&&shortVersion==='classic'?profitable:true,cond));
 let ma18=null;const h18=exact.ma18Basis==='ths-qfq'&&exact.basisDate===today&&Array.isArray(exact.ma18Closes)&&exact.ma18Closes.length===exact.ma18Dates?.length&&exact.ma18Closes.every(valid)&&aligned(exact,exact.ma18Dates,19)?exact.ma18Closes:null;
 if(h18&&valid(P)){const prev=avg(h18.slice(-18)),before=avg(h18.slice(-19,-1)),dynamic=(h18.slice(-17).reduce((a,b)=>a+b,0)+P)/18;ma18=gt(prev,before)&&lt(dynamic,prev)}
 const baseline=exact.baselineCycle===position?.id&&exact.basisDate===today&&exact.basis==='ths-qfq-dividend-reinvest'?exact.beforeEntryMin5:null;
 const amountHistory=exact.amountHistoryComplete===true&&exact.amountHistoryCycle===position?.id?exact.maxAmountSinceEntry:null;
 const day5Date=exact.calendar?.filter(d=>d<position?.date).at(-5),day5Index=exact.dates?.indexOf(day5Date);
 const day5Close=historyOK&&exact.baselineCycle===position?.id&&exact.beforeEntryDay5Date===day5Date&&day5Index>=0&&exact.beforeEntryDay5Close===closes?.[day5Index]?exact.beforeEntryDay5Close:null;
 const amounts5=historyOK&&Array.isArray(exact.amounts)&&exact.amounts.length===exact.dates.length&&exact.amounts.slice(-5).every(v=>typeof v==='number'&&Number.isFinite(v)&&v>=0)?exact.amounts.slice(-5):null;
 const max5=amounts5?Math.max(...amounts5):null,s8Enabled=Date.parse(q.time)>=Date.parse(S8_ENABLED_AT);
 const s8={enabled:s8Enabled,enabledAt:S8_ENABLED_AT,startDate:position?.date,baselineDate:day5Date,baselineClose:day5Close,previousDate:exact.previousTradeDate,previousClose:closes?.at(-1),growth:valid(day5Close)&&closes?closes.at(-1)/day5Close-1:null,amountDates:amounts5?exact.dates.slice(-5):[],max5Amount:max5,currentAmount:A};
 const at1445=minute==='14:45',at1430=minute==='14:30';
 const short=[
 shortRule('S1','影线阳线','盈利 >5%；（现价−开盘）/昨收 ≥2%；上影线 > 实体',test([P,O,C,H],()=>(P-O)/C>=0.02-1e-12&&gt(H-P,P-O))),
 shortRule('S2','影线阴线','盈利 >5%；（开盘−现价）/昨收 ≥2%；上影线 > 实体',test([P,O,C,H],()=>(O-P)/C>=0.02-1e-12&&gt(H-O,O-P))),
 shortRule('S3','阳线大回撤','盈利 >5%；现价 > 开盘；（最高−现价）/昨收 >5%',test([P,O,C,H],()=>gt(P,O)&&gt((H-P)/C,0.05))),
 shortRule('S4','阴线大上影','盈利 >5%；现价 < 开盘；（最高−开盘）/昨收 >5%',test([P,O,C,H],()=>lt(P,O)&&gt((H-O)/C,0.05))),
 shortRule('S5','MA18 拐头','盈利 >5%；昨日 MA18 上行，动态 MA18 跌至昨日以下',ma18),
 shortRule('S6','放量阴线','昨收较触发前 5 日最低收盘涨 >20%；阴线；成交额创触发后最大',test([closes?.at(-1),baseline,P,O,A,amountHistory],()=>gt(closes.at(-1)/baseline-1,0.2)&&lt(P,O)&&A>=amountHistory),false),
 shortRule('S7','14:45 涨停打开','盈利 >5%；当日曾触涨停；14:45 现价不再封板',at1445?all(touched,test([P,q.limitUp],()=>P<q.limitUp-halfTick)):false),
 {...shortRule('S8','极端放量','昨收较起点 T−5 交易日的分红再投前复权收盘涨 >20%；当前累计成交额 > 当日前 5 个交易日最大成交额 ×2',s8Enabled?(max5===null||typeof A!=='number'||!Number.isFinite(A)||A<0?null:test([closes?.at(-1),day5Close],()=>gt(closes.at(-1)/day5Close-1,0.2)&&A>max5*2)):null,false),...(!s8Enabled?{disabled:true}:{})},
 shortRule('S9','14:30 跌破 MA5','盈利 >5%；昨日收盘 > MA5；14:30 现价 < 动态 MA5',at1430?test([P,dma5,closes?.at(-1),ma5],()=>lt(P,dma5)&&gt(closes.at(-1),ma5)):false)
 ];
 const longHit=isFresh&&long.every(x=>x.value===true),hits=isFresh&&eligible===true?short.filter(x=>x.value===true):[];
 return {shortVersion,long,short,longHit,hits,cost,eligible,isFresh,profitable,s8,assetType,missing:long.some(x=>x.value===null)||short.some(x=>!x.disabled&&x.value===null),positionPending:!position||!!position.pendingCost};
}
