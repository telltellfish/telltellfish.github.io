// GitHub Pages serves public or encrypted snapshots. No write credential or
// iFinD credential is ever sent to this module or stored in the public config.
import {eventDay} from './journal.js';

const clone=value=>structuredClone(value);
const dayPattern=/^\d{4}-\d{2}-\d{2}$/;
const validDay=value=>dayPattern.test(value||'')&&Number.isFinite(Date.parse(value+'T00:00:00Z'))&&new Date(value+'T00:00:00Z').toISOString().slice(0,10)===value;
const datesOf=(...values)=>[...new Set(values.flat().filter(validDay))].sort().reverse();
const response=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});

export function readAccessKey(value){
 let candidate=String(value||'').trim();
 if(candidate.includes('#'))candidate=candidate.slice(candidate.indexOf('#')+1);
 if(candidate.startsWith('key='))candidate=new URLSearchParams(candidate).get('key')||'';
 if(!/^[A-Za-z0-9_-]{43}$/.test(candidate))throw Error('请填写完整访问链接或43位访问码。');
 const bytes=base64Bytes(candidate.replace(/-/g,'+').replace(/_/g,'/'));
 if(bytes.length!==32)throw Error('访问码格式不正确。');
 return {text:candidate,bytes};
}

function base64Bytes(value){
 if(typeof value!=='string'||!/^[A-Za-z0-9+/]*={0,2}$/.test(value))throw Error('加密数据格式错误。');
 return Uint8Array.from(atob(value),c=>c.charCodeAt(0));
}

export async function decryptEnvelope(envelope,keyBytes,cryptoImpl=globalThis.crypto){
 if(envelope?.v!==1||envelope.compression!=='gzip'||typeof envelope.data!=='string'||envelope.data.length>64000000)throw Error('加密数据版本或容量不支持。');
 const iv=base64Bytes(envelope.iv),cipher=base64Bytes(envelope.data);
 if(iv.length!==12||keyBytes?.length!==32||cipher.length<16)throw Error('加密数据格式错误。');
 const key=await cryptoImpl.subtle.importKey('raw',keyBytes,{name:'AES-GCM'},false,['decrypt']);
 const compressed=await cryptoImpl.subtle.decrypt({name:'AES-GCM',iv},key,cipher);
 const stream=new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'));
 const raw=await new Response(stream).text();
 if(raw.length>64000000)throw Error('解密数据超过容量。');
 return JSON.parse(raw);
}

export async function fetchPagesSnapshot({nativeFetch,config,path,keyBytes}){
 if(path!=='latest.enc'&&!/^journals\/\d{4}-\d{2}-\d{2}\.enc$/.test(path))throw Error('同步数据路径不正确。');
 const publicAccess=config.mode==='public',relative=publicAccess?'public/'+path.replace(/\.enc$/,'.json.gz'):path;
 const url=new URL(relative,config.dataBase);url.searchParams.set('_',String(Date.now()));
 const result=await nativeFetch(url,{cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer'});
 if(!result.ok)throw Error('最新数据暂时无法读取，请检查网络后重试。');
 if(!publicAccess)return decryptEnvelope(await result.json(),keyBytes);
 const stream=result.body.pipeThrough(new DecompressionStream('gzip')),reader=stream.getReader(),decoder=new TextDecoder();
 let bytes=0,raw='';
 try{
  while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>64000000)throw Error('同步数据超过容量。');raw+=decoder.decode(value,{stream:true});}
  raw+=decoder.decode();return JSON.parse(raw);
 }catch(error){await reader.cancel().catch(()=>{});throw error;}
 finally{reader.releaseLock();}
}

export function validateBundle(bundle){
 const holdings=bundle?.pool?.holdings,items=bundle?.feed?.items;
 if(bundle?.schema!==1||!Number.isFinite(Date.parse(bundle.publishedAt))||!Array.isArray(holdings)||!holdings.length||!Array.isArray(items)||items.length!==holdings.length)throw Error('监控数据包不完整。');
 const codes=holdings.map(h=>h?.code);
 if(codes.some(c=>typeof c!=='string')||new Set(codes).size!==codes.length||new Set(items.map(q=>q?.code)).size!==codes.length||items.some(q=>!codes.includes(q?.code)))throw Error('行情与标的池不一致。');
 if(!bundle.state||typeof bundle.state!=='object'||Array.isArray(bundle.state)||!Number.isFinite(Date.parse(bundle.feed.receivedAt)))throw Error('监控数据缺少保存状态或时间。');
 return bundle;
}

function mergeEvents(old=[],fresh=[]){
 const map=new Map(old.filter(e=>e&&typeof e.id==='string').map(e=>[e.id,clone(e)]));
 for(const e of fresh){
  if(!e||typeof e.id!=='string')continue;
  const previous=map.get(e.id)||{},next={...previous,...clone(e)};
  if(previous.observedQuoteTime&&!e.observedQuoteTime){
   for(const field of ['observedQuoteTime','observedPrice','detectedAt'])if(previous[field]!==undefined)next[field]=previous[field];
   next.replayOnly=false;
  }
  map.set(e.id,next);
 }
 return [...map.values()].sort((a,b)=>String(b.time||'').localeCompare(String(a.time||''))||a.id.localeCompare(b.id));
}

// These archive semantics match worker/index.js. journal.js exposes the shared
// event-day helper and readers; its server-side archive writers are not exports.
export function mergeSignalDetails(old={},fresh={},version='classic'){
 const coverage={...old.coverage},summaries={...old.summaries};
 for(const [code,value] of Object.entries(fresh.coverage||{}))if(!coverage[code]||value.lastMinute>=coverage[code].lastMinute){coverage[code]=clone(value);summaries[code]=clone(fresh.summaries?.[code]||[]);}
 const details={coverage,summaries};
 if(old.closing||fresh.closing){
  const closing={...old.closing};
  for(const [code,value] of Object.entries(fresh.closing||{})){
   if(!value||typeof value!=='object'||(value.shortVersion||'classic')!==version)continue;
   const previous=closing[code],time=Date.parse(value.time)||-Infinity,previousTime=Date.parse(previous?.time)||-Infinity;
   if(previous&&(time<previousTime||previous.complete===true&&value.complete!==true))continue;
   closing[code]=clone(value);
  }
  details.closing=closing;
 }
 return details;
}

export function mergeJournalDetails(old={},fresh={}){
 const details=mergeSignalDetails(old,fresh),shortVersions={...old.shortVersions};
 for(const [version,value] of Object.entries(fresh.shortVersions||{}))shortVersions[version]=mergeSignalDetails(shortVersions[version],value,version);
 if(Object.keys(shortVersions).length)details.shortVersions=shortVersions;
 return details;
}

export function mergeJournal(old={},fresh={}){
 return {...old,...fresh,version:1,date:fresh.date||old.date,sequence:Math.max(old.sequence||0,fresh.sequence||0),events:mergeEvents(old.events,fresh.events),...mergeJournalDetails(old,fresh)};
}

export function mergePageStates(remote={},local={}){
 const signalStates=clone(remote.signalStates||{});
 for(const [code,directions] of Object.entries(local.signalStates||{})){
  signalStates[code]??={};
  for(const [direction,value] of Object.entries(directions)){
   const previous=signalStates[code][direction];
   if(!previous||String(value.tradeDate||'')>String(previous.tradeDate||'')){signalStates[code][direction]=clone(value);continue;}
   if(value.tradeDate!==previous.tradeDate)continue;
   const localLater=(Date.parse(value.lastDecidedAt)||0)>=(Date.parse(previous.lastDecidedAt)||0);
   const newer=localLater?value:previous,older=localLater?previous:value;
   signalStates[code][direction]={...older,...newer,confirmed:{...older.confirmed,...newer.confirmed}};
   // A refresh must never resend an already observed activation on this device.
   if(!signalStates[code][direction].notifiedActivation&&value.notifiedActivation)signalStates[code][direction].notifiedActivation=value.notifiedActivation;
  }
 }
 const positions=clone(remote.positions||{});
 for(const [code,value] of Object.entries(local.positions||{})){
  const previous=positions[code];
  if(!previous||String(value.date||'')>=String(previous.date||''))positions[code]=clone(value);
 }
 const events=mergeEvents(remote.events,local.events),pendingJournals={...remote.pendingJournals};
 for(const [day,details] of Object.entries(local.pendingJournals||{}))pendingJournals[day]=mergeJournalDetails(pendingJournals[day],details);
 for(const daily of [remote.dailyJournal,local.dailyJournal])if(validDay(daily?.date))pendingJournals[daily.date]=mergeJournalDetails(pendingJournals[daily.date],daily);
 const merged={...remote,...local,positions,events,signalStates,pendingJournals,journalDates:datesOf(remote.journalDates||[],local.journalDates||[],events.map(eventDay),Object.keys(pendingJournals)),journalVersion:Math.max(remote.journalVersion||0,local.journalVersion||0),journalSequence:Math.max(remote.journalSequence||0,local.journalSequence||0)};
 if(!Object.keys(pendingJournals).length)delete merged.pendingJournals;
 return merged;
}

export function createMemoryStore(initial={}){
 let records=clone(initial),queue=Promise.resolve();
 return {mutate(fn){const run=queue.then(()=>{const draft=clone(records),result=fn(draft);records=draft;return clone(result);});queue=run.catch(()=>{});return run;},all(){return queue.then(()=>clone(records));}};
}

export async function createIndexedStore(indexedDBImpl,name){
 const database=await new Promise((resolve,reject)=>{
  const request=indexedDBImpl.open(name,1);
  request.onupgradeneeded=()=>request.result.createObjectStore('records');
  request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||Error('本设备记录存储无法打开。'));
 });
 return {
  mutate(fn){return new Promise((resolve,reject)=>{
   const tx=database.transaction('records','readwrite'),store=tx.objectStore('records'),keysRequest=store.getAllKeys(),valuesRequest=store.getAll();let result;
   valuesRequest.onsuccess=()=>{
    try{const records=Object.fromEntries(keysRequest.result.map((key,i)=>[key,valuesRequest.result[i]])),before=JSON.stringify(records);result=fn(records);if(JSON.stringify(records)!==before)for(const [key,value] of Object.entries(records))store.put(value,key);}catch(error){tx.abort();reject(error);}
   };
   tx.oncomplete=()=>resolve(clone(result));tx.onerror=()=>reject(tx.error||Error('本设备记录保存失败。'));tx.onabort=()=>reject(tx.error||Error('本设备记录保存已取消。'));
  });},
  async all(){return this.mutate(records=>records);}
 };
}

export function createPagesApi({getBundle,refreshBundle,fetchJournal,store,now=()=>new Date()}){
 const stateRecord=records=>records.state||{revision:0,state:{positions:{},events:[],signalStates:{}}};
 const today=()=>new Date(now().getTime()+8*3600000).toISOString().slice(0,10);
 async function stateGet(){
  return store.mutate(records=>{
   const previous=stateRecord(records),bundle=getBundle(),merged=mergePageStates({...bundle.state,journalDates:datesOf(bundle.journalDates||[],bundle.state.journalDates||[])},previous.state);
   const changed=JSON.stringify(merged)!==JSON.stringify(previous.state),revision=previous.revision+Number(changed);
   records.state={state:merged,revision};
   return {exists:true,revision:'pages:'+revision,state:merged,journalDates:merged.journalDates};
  });
 }
 async function statePost(payload){
  if(!payload?.state||typeof payload.state.positions!=='object'||!Array.isArray(payload.state.events)||payload.state.events.some(e=>typeof e?.id!=='string'))return response({error:'记录格式错误'},400);
  return store.mutate(records=>{
   const previous=stateRecord(records);
   if(payload.revision!=='pages:'+previous.revision)return {error:'另一页面已更新本设备记录，请刷新后重试。',status:409};
   const merged=mergePageStates(previous.state,payload.state),sequence=Math.max(merged.journalSequence||0,previous.state.journalSequence||0)+1;
   const days=datesOf(merged.journalDates||[],merged.events.map(eventDay),Object.keys(merged.pendingJournals||{}));
   for(const day of days){
    const key='journal:'+day,entries=merged.events.filter(e=>eventDay(e)===day),details=merged.pendingJournals?.[day]||{};
    records[key]=mergeJournal(records[key],{date:day,events:entries,sequence,...details});
   }
   // All dates are durable in this same transaction before active events compact.
   merged.events=merged.events.filter(e=>!validDay(eventDay(e))||eventDay(e)>=today());
   merged.journalDates=days;merged.journalVersion=1;merged.journalSequence=sequence;delete merged.pendingJournals;delete merged.dailyJournal;
   records.state={state:merged,revision:previous.revision+1};
   return {ok:true,revision:'pages:'+(previous.revision+1),journalDates:days};
  }).then(result=>response(result,result.status||200));
 }
 async function journalGet(day){
  const state=await stateGet(),bundle=getBundle(),known=datesOf(bundle.journalDates||[],state.journalDates);
  if(day===null)return response({dates:known});
  if(!validDay(day))return response({error:'日期格式错误'},400);
  let remote=null,remoteError=null;
  if((bundle.journalDates||[]).includes(day))try{remote=await fetchJournal(day);}catch(error){remoteError=error;}
  return store.mutate(records=>{
   const key='journal:'+day,local=records[key],active=stateRecord(records).state;
   if(remoteError&&!local&&!active.events?.some(e=>eventDay(e)===day))return {error:'该日同步记录暂时无法读取，请稍后重试。',status:502};
   let merged=mergeJournal(remote||{date:day,events:[]},local||{});
   merged=mergeJournal(merged,{date:day,events:(active.events||[]).filter(e=>eventDay(e)===day),...(active.pendingJournals?.[day]||{})});
   const exists=!!remote||!!local||known.includes(day);
   if(exists)records[key]=merged;
   return {...merged,exists,archived:exists,...(remoteError?{syncWarning:'同步记录暂不可用，当前显示本设备已保存记录。'}:{})};
  }).then(result=>response(result,result.status||200));
 }
 return async function handle(path,{method='GET',body}={}){
  try{
   const url=new URL(path,'https://radar.invalid');method=method.toUpperCase();
   if(url.pathname==='/api/state')return method==='GET'?response(await stateGet()):method==='POST'?await statePost(typeof body==='string'?JSON.parse(body):body):response({error:'不支持此操作'},405);
   if(method!=='GET')return response({error:'静态页面不支持此操作'},405);
   if(url.pathname==='/api/pool')return response({...getBundle().pool,storage:'pages'});
   if(url.pathname==='/api/quotes'){await refreshBundle();return response(getBundle().feed);}
   if(url.pathname==='/api/journal')return await journalGet(url.searchParams.get('date'));
   if(url.pathname==='/api/history'){
    const code=url.searchParams.get('code'),exact=getBundle().feed.exact?.[code];
    if(!getBundle().pool.holdings.some(h=>h.code===code))return response({error:'不在监控池内'},400);
    if(!exact?.dates?.length||exact.dates.length!==exact.closes?.length)return response({error:'同步数据缺少该标的历史日线'},503);
    return response({code,basis:exact.historyBasis||'iFinD 分红再投前复权',bars:exact.dates.slice(-40).map((date,i)=>({date,close:exact.closes.slice(-40)[i]}))});
   }
   return response({error:'页面不存在'},404);
  }catch(error){return response({error:error?.message||'数据同步失败，请稍后重试。'},502);}
 };
}

async function waitForBody(document){if(document.body)return;await new Promise(resolve=>document.addEventListener('DOMContentLoaded',resolve,{once:true}));}

function unlockPanel(document){
 const overlay=document.createElement('section');overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','解锁多空雷达');
 overlay.style.cssText='position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:24px;background:#102c30;color:#173b3c;font:16px system-ui';
 const form=document.createElement('form');form.style.cssText='width:min(440px,100%);padding:30px;background:white;border-radius:16px;box-sizing:border-box';
 const title=document.createElement('h1');title.textContent='持仓多空雷达';
 const explanation=document.createElement('p');explanation.textContent='输入访问码或完整访问链接，解锁已加密的行情和监控记录。访问码只保存在当前设备。';explanation.style.lineHeight='1.7';
 const label=document.createElement('label');label.textContent='访问码或完整链接';label.htmlFor='radarAccessCode';
 const input=document.createElement('input');input.id='radarAccessCode';input.type='password';input.autocomplete='off';input.required=true;input.style.cssText='display:block;width:100%;box-sizing:border-box;margin:10px 0;padding:12px;border:1px solid #bacdca;border-radius:7px;font:inherit';
 const button=document.createElement('button');button.textContent='解锁并打开';button.type='submit';button.style.cssText='padding:12px 18px;border:0;border-radius:7px;background:#12786a;color:white;font:inherit;cursor:pointer';
 const error=document.createElement('p');error.setAttribute('role','alert');error.style.cssText='color:#a44037;line-height:1.6';
 form.append(title,explanation,label,input,button,error);overlay.append(form);document.body.append(overlay);
 return {overlay,input,button,error,form};
}

function connectionPanel(document){
 const overlay=document.createElement('section');overlay.setAttribute('role','status');overlay.setAttribute('aria-label','连接多空雷达');
 overlay.style.cssText='position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:24px;background:#102c30;color:#173b3c;font:16px system-ui';
 const box=document.createElement('div');box.style.cssText='width:min(440px,100%);padding:30px;background:white;border-radius:16px;box-sizing:border-box';
 const title=document.createElement('h1');title.textContent='持仓多空雷达';
 const message=document.createElement('p');message.textContent='正在读取最新监控数据…';message.style.lineHeight='1.7';
 const retry=document.createElement('button');retry.type='button';retry.textContent='重新连接';retry.hidden=true;
 box.append(title,message,retry);overlay.append(box);document.body.append(overlay);
 return {overlay,message,retry};
}

export async function installPagesAdapter({win=window,document=win.document,nativeFetch=win.fetch.bind(win)}={}){
 await waitForBody(document);
 const keyStorage='position-radar-pages-access-v1',configUrl=new URL('./pages-config.json',import.meta.url);
 let config;
 try{const result=await nativeFetch(configUrl,{cache:'no-store'});if(!result.ok)throw Error();config=await result.json();const base=new URL(config.dataBase);if(base.protocol!=='https:'&&!(base.protocol==='http:'&&['localhost','127.0.0.1'].includes(base.hostname))||base.username||base.password||base.hash||base.search)throw Error();config.dataBase=base.href.replace(/\/?$/,'/');}
 catch{const panel=unlockPanel(document);panel.input.hidden=true;panel.button.hidden=true;panel.error.textContent='同步配置暂时无法读取，请刷新网页重试。';return await new Promise(()=>{});}
 let bundle,keyBytes;const publicAccess=config.mode==='public';
 const fetchSnapshot=(path,key)=>fetchPagesSnapshot({nativeFetch,config,path,keyBytes:key});
 let fingerprint;
 if(publicAccess){
  const loading=connectionPanel(document);
  try{bundle=validateBundle(await fetchSnapshot('latest.enc'));loading.overlay.remove();}
  catch{loading.message.textContent='监控数据暂时无法读取，请检查网络后重新连接。';loading.retry.hidden=false;loading.retry.addEventListener('click',()=>win.location.reload());return await new Promise(()=>{});}
  fingerprint='public-v1';
  try{win.localStorage.removeItem(keyStorage);if(win.location.hash.startsWith('#key='))win.history.replaceState(null,'',win.location.pathname+win.location.search);}catch{}
 }else{
 const panel=unlockPanel(document);
 const unlock=async value=>{
  panel.button.disabled=true;panel.error.textContent='正在读取已加密的监控数据…';
  try{
   const key=readAccessKey(value),candidate=validateBundle(await fetchSnapshot('latest.enc',key.bytes));
   keyBytes=key.bytes;bundle=candidate;
   try{win.localStorage.setItem(keyStorage,key.text);}catch{}
   panel.overlay.remove();return true;
  }catch(error){panel.error.textContent=/访问码|43位/.test(error.message)?error.message:'解锁失败：访问码不正确，或同步数据暂时无法读取。请重填后重试。';return false;}
  finally{panel.button.disabled=false;}
 };
 let initial='';try{initial=win.location.hash||win.localStorage.getItem(keyStorage)||'';}catch{initial=win.location.hash||'';}
 if(!initial||!await unlock(initial))await new Promise(resolve=>panel.form.addEventListener('submit',async event=>{event.preventDefault();if(await unlock(panel.input.value))resolve();}));
 fingerprint=Array.from(new Uint8Array(await win.crypto.subtle.digest('SHA-256',keyBytes))).slice(0,8).map(x=>x.toString(16).padStart(2,'0')).join('');
 }
 let store;
 try{store=await createIndexedStore(win.indexedDB,'position-radar-pages-'+fingerprint);}catch{const problem=unlockPanel(document);problem.input.hidden=true;problem.button.hidden=true;problem.error.textContent='本浏览器未允许保存监控记录。请允许网站存储后刷新；为避免重复提醒，暂不启动监控。';return await new Promise(()=>{});}
 const corner=document.createElement('aside');corner.style.cssText='position:fixed;bottom:10px;right:10px;z-index:1000;max-width:min(450px,85vw);padding:9px 12px;background:#edf7f3;color:#1a514a;border:1px solid #bed5cf;border-radius:8px;font:12px/1.6 system-ui;box-shadow:0 2px 8px #143b3b15';
 const status=document.createElement('span'),line=document.createElement('div');line.textContent=(publicAccess?'公开监控页 · 无需访问码':'GitHub 阅读页')+' · 本机联网时同步 · 网页打开时提醒';
 const exportButton=document.createElement('button');exportButton.type='button';exportButton.textContent='导出本设备记录';exportButton.style.cssText='margin-left:10px;border:0;background:none;color:#086e62;text-decoration:underline;cursor:pointer;font:inherit';
 const changeButton=document.createElement('button');changeButton.type='button';changeButton.textContent='更换访问码';changeButton.style.cssText=exportButton.style.cssText;
 corner.append(status,line,exportButton);if(!publicAccess)corner.append(changeButton);document.body.append(corner);
 const showStatus=()=>{status.textContent='行情截至 '+String(bundle.feed.receivedAt).replace('T',' ').replace(/\+08:00$/,'')+' · 记录保存在本设备';};showStatus();
 const refreshBundle=async()=>{
  try{const next=validateBundle(await fetchSnapshot('latest.enc',keyBytes));if(Date.parse(next.publishedAt)<Date.parse(bundle.publishedAt))throw Error('收到较旧的同步快照，已保留当前数据。');const oldCodes=bundle.pool.holdings.map(h=>h.code).join(),newCodes=next.pool.holdings.map(h=>h.code).join();bundle=next;showStatus();if(oldCodes!==newCodes)status.textContent+='；标的池已更新，请刷新网页';}
  catch(error){status.textContent='同步失败 · 保留截至 '+bundle.feed.receivedAt+' 的行情，暂停新判断';throw Error(error.message||'同步失败，当前保留上次行情并暂停判断。');}
 };
 const api=createPagesApi({getBundle:()=>bundle,refreshBundle,fetchJournal:day=>fetchSnapshot('journals/'+day+'.enc',keyBytes),store});
 const paths=new Set(['/api/pool','/api/quotes','/api/state','/api/journal','/api/history']);
 win.fetch=async(input,options={})=>{
  const url=new URL(typeof input==='string'||input instanceof URL?input:input.url,win.location.href);
  if(url.origin!==win.location.origin||!paths.has(url.pathname))return nativeFetch(input,options);
  const method=options.method||input?.method||'GET',body=options.body??(input instanceof Request&&method!=='GET'?await input.clone().text():undefined);
  return api(url.pathname+url.search,{method,body});
 };
 exportButton.addEventListener('click',async()=>{
  try{const records=await store.all(),blob=new Blob([JSON.stringify({schema:1,exportedAt:new Date().toISOString(),source:'本设备生成的监控记录',records},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='多空雷达-本设备记录-'+new Date().toISOString().slice(0,10)+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch{status.textContent='导出失败，请检查本浏览器的网站存储权限。';}
 });
 changeButton.addEventListener('click',()=>{try{win.localStorage.removeItem(keyStorage);}catch{}win.location.hash='';win.location.reload();});
 return {api,store,getBundle:()=>bundle,refreshBundle};
}

export const pagesReady=typeof window!=='undefined'&&typeof document!=='undefined'?installPagesAdapter():Promise.resolve(null);
await pagesReady;
