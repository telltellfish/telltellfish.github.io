import {cnDate,fresh,tradingWindow,evaluate,prepareExact,normalizeShortVersion,eventShortVersion} from './engine.js';
const positive=x=>Number.isFinite(x)&&x>0;
export function directionValue(check,type){
 if(!check?.isFresh||check.priceOnly)return null;
 if(type==='long')return check.long.some(r=>r.value===null)?null:check.long.every(r=>r.value===true);
 if(check.longOnly)return null;
 if(check.eligible!==true)return null;
 const rules=check.short.filter(r=>!r.disabled);
 return rules.some(r=>r.value===true)?true:rules.some(r=>r.value===null)?null:false;
}
export function isCurrentSample(sample,quote,now=new Date()){
 return !!sample&&fresh(sample.quote,now)&&fresh(quote,now)&&sample.quote.time.slice(0,16)===quote.time.slice(0,16);
}
// Summarize each rule independently: an OR signal can stay active while its
// contributing rules change. This is a display-only replay, not a new alert.
export function summarizeShortRules(samples=[],day=cnDate(),shortVersion='classic'){
 shortVersion=normalizeShortVersion(shortVersion);
 const rules=new Map();
 for(const sample of [...samples].sort((a,b)=>Date.parse(a.quote.time)-Date.parse(b.quote.time))){
  const time=sample.quote?.time,c=sample.check;
  if(normalizeShortVersion(c?.shortVersion)!==shortVersion||time?.slice(0,10)!==day||!c?.isFresh||c.priceOnly||c.longOnly||c.eligible!==true)continue;
  for(const r of c.short||[]){
   if(r.disabled||typeof r.value!=='boolean')continue;
   const previous=rules.get(r.id)||{id:r.id,title:r.title,shortVersion,episodes:0,active:false};
   const minute=time.slice(0,16);
   if(previous.lastDecidedMinute>=minute)continue;
   const next={...previous,active:r.value,lastDecidedMinute:minute};
   if(r.value){
    if(!previous.active){next.episodes++;next.latestTriggeredAt=time;}
    next.firstTriggeredAt??=time;next.lastSatisfiedAt=time;
   }
   rules.set(r.id,next);
  }
 }
 return [...rules.values()].filter(r=>r.episodes>0).sort((a,b)=>Number(a.id.slice(1))-Number(b.id.slice(1)));
}
// Closing status must come from a complete minute replay, never from the last
// active interval: that interval may have ended, or its final minute be unknown.
export function summarizeClosingSignals(samples=[],day=cnDate(),shortVersion='classic'){
 shortVersion=normalizeShortVersion(shortVersion);
 const expected=[];for(let m=570;m<=900;m++)if(m<=690||m>=781)expected.push(String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'));
 const rows=Array.isArray(samples)?samples:[],matching=rows.filter(s=>s?.quote?.time?.slice(0,10)===day&&normalizeShortVersion(s?.check?.shortVersion)===shortVersion).sort((a,b)=>Date.parse(a.quote.time)-Date.parse(b.quote.time));
 const last=matching.at(-1),check=last?.check;
 const complete=rows.length===expected.length&&matching.length===expected.length&&matching.every((s,i)=>Number.isFinite(Date.parse(s.quote.time))&&s.quote.time.slice(11,16)===expected[i]);
 const applicable=!!check&&!check.priceOnly&&!check.longOnly;
 const direction=type=>{
  const value=complete?directionValue(check,type):null;
  const rules=value===true?(check[type]||[]).filter(r=>!r.disabled&&r.value===true):[];
  return {value,ruleIds:rules.map(r=>r.id),titles:rules.map(r=>r.title)};
 };
 return {shortVersion,time:last?.quote.time||null,price:Number.isFinite(last?.quote.price)?last.quote.price:null,complete,long:direction('long'),short:{...direction('short'),applicable,...(applicable&&check.eligible===false?{reason:'t-plus-one'}:{})}};
}
export function minuteSamples(quote,raw,intraday,position,shortVersion='classic'){
 shortVersion=normalizeShortVersion(shortVersion);
 if(!quote||position?.monitorMode==='price-only'||quote.monitorMode==='price-only'||intraday?.source!=='iFinD 正式 API'||intraday.date!==raw?.basisDate||intraday.date!==quote.time?.slice(0,10)||position?.date>intraday.date||!Array.isArray(intraday.bars))return [];
 const expected=[];for(let m=570;m<=900;m++)if(m<=690||m>=781)expected.push(String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'));
 const samples=[];let high=0,amount=0;
 for(let i=0;i<intraday.bars.length;i++){
  const b=intraday.bars[i],stamp=Date.parse(b.time),minute=b.time?.slice(11,16);
  if(!Number.isFinite(stamp)||minute!==expected[i]||b.time.slice(0,10)!==intraday.date||stamp>Date.parse(quote.time)||!positive(b.high)||!positive(b.close)||b.high<b.close||!Number.isFinite(b.amount)||b.amount<0)break;
  high=Math.max(high,b.high);amount+=b.amount;
  const q={...quote,price:b.close,high,amount,time:b.time},exact=prepareExact({...raw,date:intraday.date,minute,currentSameMinuteAmount:amount,yesterdaySameMinuteAmount:intraday.yesterdayAmounts?.[minute]},position);
  samples.push({quote:q,exact,check:evaluate(q,position,exact,new Date(stamp),shortVersion)});
 }
 return samples;
}
export function advanceSignal(old,value,time){
 const date=cnDate(new Date(time));if(old?.tradeDate>date)return {state:old,transition:null};
 const previous=old?.tradeDate===date?old:{tradeDate:date,phase:'unseen',episode:0,lastDecidedAt:null,activeSince:null,notifiedActivation:null};
 if(previous.lastDecidedAt&&Math.floor(Date.parse(time)/60000)<=Math.floor(Date.parse(previous.lastDecidedAt)/60000))return {state:previous,transition:null};
 if(value===null)return {state:{...previous,paused:true},transition:null};
 let state={...previous,paused:false,lastDecidedAt:time},transition=null;
 if(value&&previous.phase!=='active'){state.phase='active';state.episode++;state.activeSince=time;transition=state.episode===1?'activated':'reactivated';}
 else if(!value){if(previous.phase==='active')transition='invalidated';state.phase='inactive';}
 return {state,transition};
}
export function transitionId(type,code,time,transition,shortVersion='classic'){return 'minute:'+type+':'+(type==='short'&&normalizeShortVersion(shortVersion)==='no-profit'?'no-profit:':'')+code+':'+time.slice(0,16)+':'+(transition==='invalidated'?'off':'on')}
export function shortSnapshot(sample){return structuredClone({version:1,shortVersion:normalizeShortVersion(sample.check.shortVersion),quote:{time:sample.quote.time,price:sample.quote.price,open:sample.quote.open,high:sample.quote.high,prevClose:sample.quote.prevClose,amount:sample.quote.amount},check:{shortVersion:normalizeShortVersion(sample.check.shortVersion),cost:sample.check.cost,short:sample.check.short,s8:sample.check.s8}})}
function snapshot(sample){const q=sample.quote,e=sample.exact;return {time:q.time,price:q.price,open:q.open,high:q.high,limitUp:q.limitUp,currentAmount:e.currentSameMinuteAmount,yesterdayAmount:e.yesterdaySameMinuteAmount,previousTradeDate:e.previousTradeDate,previousClose:e.closes?.at(-1),previousMA20:e.closes?.slice(-20).reduce((a,v)=>a+v,0)/20,dynamicMA20:((e.closes?.slice(-19).reduce((a,v)=>a+v,0)||0)+q.price)/20,industryName:e.industryName,industryRank:e.industryRank,assetType:sample.check.assetType,conditionCount:sample.check.long.length,conditions:sample.check.long.map(r=>({id:r.id,value:r.value}))}}
function sameSignalVersion(a,b){return a.type===b.type&&(a.type!=='short'||eventShortVersion(a)===eventShortVersion(b))}
export function mergeHistoricalTransitions(existing,historical=[]){
 const events=existing.map(e=>({...e}));
 for(const event of historical)if(!events.some(e=>e.id===event.id))events.push(structuredClone(event));
 for(const legacy of events.filter(e=>e.version!==2&&e.type!=='test'&&!e.supersededBy)){
  const time=legacy.replayOnly?legacy.replay?.firstSatisfiedAt||legacy.time:legacy.quoteTime||legacy.time;
  const match=events.find(e=>e.version===2&&!e.supersededBy&&e.code===legacy.code&&sameSignalVersion(e,legacy)&&e.tradeDate===time?.slice(0,10)&&e.transition!=='invalidated'&&Date.parse(e.time)<=Date.parse(time)&&(!e.invalidatedAt||Date.parse(time)<Date.parse(e.invalidatedAt)));
  if(!match)continue;legacy.supersededBy=match.id;
  if(!legacy.replayOnly&&!match.observedQuoteTime)Object.assign(match,{replayOnly:false,observedQuoteTime:legacy.quoteTime||legacy.time,observedPrice:legacy.price,legacyEventId:legacy.id,...(legacy.detectedAt?{detectedAt:legacy.detectedAt}:{})});
 }
 // A newly filled gap can split an interval. Keep its already sent observation
 // attached to the interval containing that quote, rather than notifying twice.
 for(const donor of events.filter(e=>e.version===2&&e.observedQuoteTime)){
  const time=donor.observedQuoteTime,match=events.find(e=>e.version===2&&!e.supersededBy&&e.code===donor.code&&sameSignalVersion(e,donor)&&e.transition!=='invalidated'&&e.tradeDate===time.slice(0,10)&&Date.parse(e.time)<=Date.parse(time)&&(!e.invalidatedAt||Date.parse(time)<Date.parse(e.invalidatedAt)));
  if(match&&match.id!==donor.id){const observation={observedQuoteTime:time,observedPrice:donor.observedPrice,...(donor.detectedAt?{detectedAt:donor.detectedAt}:{})};if(!match.observedQuoteTime)Object.assign(match,observation,{replayOnly:false,observationSourceId:donor.id});donor.observationAudit={...observation,relinkedTo:match.id};donor.replayOnly=true;delete donor.observedQuoteTime;delete donor.observedPrice;delete donor.detectedAt;}
 }
 events.sort((a,b)=>Date.parse(b.time)-Date.parse(a.time)||a.id.localeCompare(b.id));return events;
}
export function reconcileSignals(input,holding,samples,now=new Date(),liveQuote=null,position=null,shortVersion='classic'){
 shortVersion=normalizeShortVersion(shortVersion);
 // Keep mismatched samples out of confirmed state and archived rule snapshots.
 samples=samples.filter(s=>normalizeShortVersion(s.check?.shortVersion)===shortVersion);
 let events=input.events.map(e=>({...e})),states=structuredClone(input.signalStates||{});const notifications=[];
 if(!samples.length||holding.monitorMode==='price-only'||position?.monitorMode==='price-only')return {events,signalStates:states,notifications};
 const code=holding.code,day=samples.at(-1).quote.time.slice(0,10);states[code]??={};
 const longOnly=holding.monitorMode==='long-only'||holding.poolType==='watch'||position?.monitorMode==='long-only';
 for(const type of shortVersion==='no-profit'?(longOnly?[]:['short']):longOnly?['long']:['long','short']){
  const stateKey=type==='short'&&shortVersion==='no-profit'?'shortNoProfit':type;
  const previous=states[code][stateKey];
  if(previous?.tradeDate>day||previous?.tradeDate===day&&Date.parse(previous.lastDecidedAt)>Date.parse(samples.at(-1).quote.time))continue;
  // Confirmed minutes are immutable; an unknown minute can be filled later.
  // Rebuilding the day then restores missed intervals without treating missing data as false.
  const confirmed=previous?.tradeDate===day?{...previous.confirmed}:{},canonicalIds=new Set();let state=null;
  for(const sample of samples){
   const time=sample.quote.time,minute=time.slice(0,16),rawValue=directionValue(sample.check,type);
   if(!(minute in confirmed)&&rawValue!==null)confirmed[minute]=rawValue;
   const value=minute in confirmed?confirmed[minute]:null,result=advanceSignal(state,value,time);state=result.state;
   if(!result.transition)continue;
   const transition=result.transition,id=transitionId(type,code,time,transition,shortVersion),off=transition==='invalidated',rules=type==='long'?sample.check.long:sample.check.short.filter(r=>!r.disabled);
   canonicalIds.add(id);
   const reason=off?(type==='long'?rules.filter(r=>r.value===false).map(r=>r.title).join('、'):'已不满足任何已启用的空信号条件'):type==='long'?rules.length+'项多信号条件全部满足':rules.filter(r=>r.value===true).map(r=>r.title).join('、');
   const oldEvent=events.find(e=>e.id===id);
   if(oldEvent&&type==='short'&&!oldEvent.shortSnapshot&&(!Number.isFinite(oldEvent.signalCost)||oldEvent.signalCost===sample.check.cost))oldEvent.shortSnapshot=shortSnapshot(sample);
   if(oldEvent){oldEvent.episode=state.episode;oldEvent.transition=transition;delete oldEvent.supersededBy;}
   else events.push({id,version:2,type,transition,tradeDate:day,code,name:holding.name,time,price:sample.quote.price,episode:state.episode,reason,ruleIds:rules.filter(r=>off?r.value===false:r.value===true).map(r=>r.id),replayOnly:true,resolution:'1m',...(holding.poolType==='watch'||holding.watchAccounts?.length?{poolScope:holding.poolType==='watch'?'watch':'held-and-watch',watchAccounts:holding.watchAccounts||[]}:{}),...(type==='long'?{snapshot:snapshot(sample)}:{shortVersion,shortSnapshot:shortSnapshot(sample),signalCost:sample.check.cost,positionId:position?.id,costLabel:position?.costLabel,account:position?.account})});
   if(off){const activation=events.find(e=>e.id===transitionId(type,code,state.activeSince,'activated',shortVersion));if(activation){activation.invalidatedAt=time;activation.invalidatedPrice=sample.quote.price;activation.invalidatedReason=reason;}}
  }
  const canonical=events.filter(e=>canonicalIds.has(e.id)).sort((a,b)=>Date.parse(a.time)-Date.parse(b.time));
  for(const obsolete of events.filter(e=>e.version===2&&e.code===code&&e.type===type&&(type!=='short'||eventShortVersion(e)===shortVersion)&&e.tradeDate===day&&!canonicalIds.has(e.id))){
   const candidates=canonical.filter(e=>(e.transition==='invalidated')===(obsolete.transition==='invalidated'));
   const replacement=candidates.filter(e=>Date.parse(e.time)<=Date.parse(obsolete.time)).at(-1)||candidates[0];
   if(replacement)obsolete.supersededBy=replacement.id;
  }
  // Retain the actual observation time from older records; a replay is not an old notification.
  events=mergeHistoricalTransitions(events);
  state.confirmed=confirmed;state.notifiedActivation=previous?.tradeDate===day?previous.notifiedActivation:null;
  const latest=samples.at(-1),value=directionValue(latest.check,type);state.paused=value===null;
  const current=day===cnDate(now)&&tradingWindow(now)&&isCurrentSample(latest,liveQuote,now)&&value===true&&!state.paused;
  if(current&&state.phase==='active'){
   const id=transitionId(type,code,state.activeSince,'activated',shortVersion),event=events.find(e=>e.id===id);
   if(event?.observedQuoteTime)state.notifiedActivation=id;
   if(event&&state.notifiedActivation!==id){state.notifiedActivation=id;Object.assign(event,{replayOnly:false,observedQuoteTime:liveQuote.time,observedPrice:liveQuote.price,detectedAt:now.toISOString()});notifications.push({...event,message:(holding.poolType==='watch'?'观察池 · ':type==='long'&&holding.watchAccounts?.length?'持仓/观察 · ':'')+holding.name+' '+(type==='long'?'多':'空')+'信号'+(event.transition==='reactivated'?'再次生效':'生效')+'，第'+event.episode+'段；分钟价 '+event.price.toFixed(holding.priceDecimals||2)+'，最新价 '+liveQuote.price.toFixed(holding.priceDecimals||2)});}
  }
  if(type==='short')state.shortVersion=shortVersion;
  states[code][stateKey]=state;
 }
 events.sort((a,b)=>Date.parse(b.time)-Date.parse(a.time)||a.id.localeCompare(b.id));
 return {events:events,signalStates:states,notifications};
}
