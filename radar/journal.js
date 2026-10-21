export const eventDay=e=>e.tradeDate||e.time?.slice(0,10)||'';
// Older records without a strategy tag belong to the original short rules.
// Long signals and test notifications are shared by both views.
export const matchesShortVersion=(event,version='classic')=>event.type!=='short'||(event.shortVersion||'classic')===version;
export const versionEvents=(events,version='classic')=>events.filter(e=>matchesShortVersion(e,version));
export function versionJournalDetails(journal,version='classic'){
 if(!journal)return null;
 if(version==='classic')return journal;
 return journal.shortVersions?.[version]||null;
}
// Closing verdicts must be explicit; intraday episodes and their last known
// state are not proof that a signal was still satisfied at the close.
export function closingJournalSummary(journal,version,day,holdings=[],code=''){
 const data=versionJournalDetails(journal,version),coverage=data?.coverage||{},closing=data?.closing||{};
 const codes=[...new Set([...Object.keys(coverage),...Object.keys(closing)])];
 const expected=codes.length?codes:holdings.filter(h=>h.monitorMode!=='price-only'&&(!h.monitorStartDate||h.monitorStartDate<=day)).map(h=>h.code);
 const rows=expected.filter(c=>!code||c===code).map(c=>{
  const h=holdings.find(h=>h.code===c),snapshot=closing[c];
  const verified=snapshot?.complete===true&&snapshot.shortVersion===version&&snapshot.time?.slice(0,16)===day+'T15:00';
  return {code:c,name:snapshot?.name||coverage[c]?.name||h?.name||c,price:verified?snapshot.price:null,verified,
   long:verified?snapshot.long?.value??null:null,
   short:verified?snapshot.short?.value??null:null,
   shortApplicable:snapshot?.short?.applicable??!(h?.poolType==='watch'&&!h.accounts?.length||h?.monitorMode==='price-only'),
   shortBlocked:verified&&snapshot.short?.reason==='t-plus-one',
   shortTitles:verified?snapshot.short?.titles||[]:[]};
 });
 const group=type=>({matches:rows.filter(r=>r[type]===true),pending:rows.filter(r=>(type!=='short'||r.shortApplicable&&!r.shortBlocked)&&r[type]===null).length,blocked:type==='short'?rows.filter(r=>r.shortBlocked).length:0});
 return {rows,verified:rows.filter(r=>r.verified).length,long:group('long'),short:group('short')};
}
export function triggeredToday(events,day){
 const result=new Map();for(const e of events){if(!['long','short'].includes(e.type)||e.supersededBy||e.transition==='invalidated'||eventDay(e)!==day)continue;
  const prior=result.get(e.code)||{latest:'',directions:new Set()};prior.latest=prior.latest>e.time?prior.latest:e.time;prior.directions.add(e.type);result.set(e.code,prior);
 }return result;
}
export function sortByTodaySignals(holdings,events,day){
 const hits=triggeredToday(events,day);
 return [...holdings].sort((a,b)=>Number(hits.has(b.code))-Number(hits.has(a.code))||(hits.has(a.code)&&hits.has(b.code)?String(hits.get(b.code).latest).localeCompare(String(hits.get(a.code).latest)):0));
}
export function journalRecords(events,day,code=''){return events.filter(e=>!e.supersededBy&&eventDay(e)===day&&(!code||e.code===code)).sort((a,b)=>String(b.time||'').localeCompare(String(a.time||''))||a.id.localeCompare(b.id))}
