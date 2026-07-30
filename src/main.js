const $app = document.querySelector('#app');
const AS = '/assets/';
const VERSION = 9;
const VERSION_LABEL = 'Website Version 9 · July 2026';
const STORAGE = 'wom-adminpro-v9-state';
const LEGACY_STORAGE = 'wom-adminpro-v8-state';
const STATE_CHANNEL = 'wom-live-state-v9';
const stateChannel = 'BroadcastChannel' in window ? new BroadcastChannel(STATE_CHANNEL) : null;
const ADMIN_PASSWORD = 'admin@av123';

const MENUS = {
  things: { label: 'Things to do', route: 'explore', cols: [['Events', 'Concerts', 'Markets', 'Free things to do'], ['Culture', 'Lai Haraoba', 'Workshops', 'Family and kids'], ['Guides', 'This weekend', 'Nightlife', 'Outdoor']] },
  food: { label: 'Eat & Drink', route: 'category/Food', cols: [['Cafes', 'Restaurants', 'Food stalls', 'Local cuisine'], ['Offers', 'Coffee', 'Desserts', 'Takeaway'], ['Guides', 'Food trails', 'Family friendly', 'Late night']] },
  shopping: { label: 'Shopping', route: 'category/Shopping', cols: [['Fashion', 'Footwear', 'Handloom', 'Hardware'], ['Markets', 'Ima Keithel', 'Local brands', 'Gift shops'], ['Deals', 'Today offers', 'Sponsored', 'Claim business']] },
  visitor: { label: 'Visitor info', route: 'visitor', cols: [['Transport', 'Airport', 'Hotels', 'Tourism'], ['Safety', 'Emergency', 'Maps', 'District guide'], ['Help', 'Submit correction', 'Contact', 'Support']] },
  manipur: { label: 'Manipur', route: 'district/All', cols: [['Imphal East', 'Imphal West', 'Bishnupur', 'Thoubal'], ['Ukhrul', 'Senapati', 'Churachandpur', 'Kakching'], ['All districts', 'Culture', 'Tourism', 'Local offers']] }
};
const categories = ['Markets','Cafes','Fashion','Footwear','Music','Culture','Shopping','Tourism','Food','Real Estate','Hardware'];
const districts = ['Imphal West','Imphal East','Bishnupur','Thoubal','Ukhrul','Senapati','Churachandpur','Kakching','Noney','Tamenglong','Chandel','Jiribam'];
const icons = ['🔥','🏆','🎉','📣','🎵','☕','🛍️','🍜','📍','⭐','🌿','🎭','⚽','🎬','🏡','🧵','🧡','✨','🚨','💙','📸','🎟️','🚌','🛒'];

const defaultHero = Array.from({length:10}, (_,i)=>({
  id:`hero-${i+1}`,
  title:['Discover Manipur this week','Weekend markets and music','Food pop-ups across Imphal','Handloom and fashion finds','Tourism and district stories','Local offer spotlight','Night market guide','Family friendly weekend','Youth culture and events','WOM discovery picks'][i],
  subtitle:['Events, food, music, shopping and visitor info','Swipe to explore today’s highlights','AI-assisted local discovery with admin approval','Original visuals and authorised uploads','Save to home screen on iPhone or Android','Spotted by WOM, verified when possible','Markets, cafes and cultural evenings','Simple mobile-first reading experience','Post your event and promote locally','Fresh content, clean layout, no copying'][i],
  image:`${AS}hero-${String(i+1).padStart(2,'0')}.jpg`,
  mediaType:'image',
  embedUrl:'',
  videoData:''
}));
function item(id,title,summary,category,district,area,date,time,organiser,image,badge,verification){
  return {id,title,subheadline:`Curated for ${district}`,summary,
    body:`<p>${summary}</p><p>This WOM post is an original AI-assisted editorial summary. It uses public or organiser-submitted signals, then creates new wording and an original or authorised visual. The business or organiser should be checked before travel or purchase.</p>`,
    category,district,area,date,time,organiser,image,mediaType:'image',videoData:'',embedUrl:'',sourceUrl:'',sourcePlatform:'Manual',offerStatus:'Appears active',verification,lastChecked:new Date().toLocaleDateString('en-GB'),expiry:'',badge,status:'published',placement:['homepage','category','district'],views:0,createdAt:Date.now()};
}
const defaultItems = [
  item('ev-ema-market','Ema Keithel Night Market','Food stalls, handloom tables and evening shopping around one of Manipur’s most important market districts.','Markets','Imphal West','Ema Keithel, Imphal','11 Jul 2026','6:00 PM','Market Association',`${AS}card-01.jpg`,'WOM DISCOVERY','Spotted by WOM'),
  item('ev-cafe-pop','Cafe Pop-up: Local Roasts','Local coffee, seasonal snacks and a one-day cafe collaboration.','Cafes','Imphal West','The Corner House, Imphal','13 Jul 2026','11:00 AM','Local Cafe Team',`${AS}card-02.jpg`,'PUBLIC OFFER SPOTTED','Spotted by WOM'),
  item('ev-indie-music','Indie Music at Thangmeiband','Live bands, good sound and a small food court for a relaxed city evening.','Music','Imphal West','Thangmeiband Tourist Complex','12 Jul 2026','7:00 PM','Youth Music Group',`${AS}card-03.jpg`,'WOM EDITORIAL','WOM Editorial'),
  item('ev-lai','Lai Haraoba Cultural Evening','Traditional performance, ritual dance, folk music and storytelling celebrating local heritage.','Culture','Imphal East','Cultural Academy, Imphal','12 Jul 2026','5:30 PM','Cultural Academy',`${AS}card-04.jpg`,'VERIFIED','Verified'),
  item('ev-kangla','Kangla Heritage Walk','A short walking guide through Kangla’s history, temple areas, moat edges and cultural landmarks.','Tourism','Imphal West','Kangla, Imphal','18 Jul 2026','8:00 AM','WOM Guide Desk',`${AS}card-05.jpg`,'WOM EDITORIAL','WOM Editorial'),
  item('ev-fashion','Local Trend Spotlight: Clog & Sandal Lineup','A public footwear trend signal has been rewritten as an original WOM discovery post with source verification.','Footwear','Imphal West','Paona / Thangal Bazaar area','Today','All day','WOM Content Studio',`${AS}card-06.jpg`,'PUBLIC OFFER SPOTTED','Spotted by WOM'),
  item('ev-loktak','Loktak Weekend Walk','A calm lake-side weekend idea with food stops, timing notes and visitor reminders.','Tourism','Bishnupur','Sendra Island, Loktak Lake','14 Jul 2026','9:00 AM','Local Guide',`${AS}card-07.jpg`,'WOM DISCOVERY','WOM Editorial'),
  item('ev-organic','Organic Market Morning','Fresh produce, local food ideas and community market notes for a morning visit.','Food','Imphal East','Kongba area','15 Jul 2026','8:30 AM','Market Team',`${AS}card-08.jpg`,'ORGANISER SUBMITTED','Organiser Submitted')
];

let ui = { menu:null, burger:false, burgerGroup:null, heroIndex:0, view:'grid', searchPanel:null, postSheet:false, studioMode:'edit', adminTab:'content', adminPreviewRoute:'home', adminPreviewHistory:['home'], aiOpen:false, aiPanel:'search', toast:'', lastRich:null, autoScroll:null, log:'WOM v8 ready. Mobile menu rail, calendar picker, compact dock, draggable AI, share tools and mobile-tight layout repairs are active.' };
let route = normalizeRoute(location.hash.replace('#','') || 'home');
let state = loadState();
applyTheme();
stateChannel?.addEventListener('message',(event)=>{
  if(event.data?.type!=='state-updated' || !event.data.payload) return;
  try{ const incoming=JSON.parse(event.data.payload); if(incoming?.version===VERSION){ state=incoming; applyTheme(); render(); } }catch{}
});
window.addEventListener('storage',(event)=>{
  if(event.key!==STORAGE || !event.newValue) return;
  try{ const incoming=JSON.parse(event.newValue); if(incoming?.version===VERSION){ state=incoming; applyTheme(); render(); } }catch{}
});

function defaultState(){
  return {
    version: VERSION,
    settings: {
      siteTitle:'What’s On Manipur', short:'WOM', tagline:'Events, food, music, markets, shopping and local happenings across Manipur.', domain:'whatsonmanipur.in', logo:`${AS}wom-logo.svg`, defaultView:'grid',
      menuLabels:{things:'Things to do',food:'Eat & Drink',shopping:'Shopping',visitor:'Visitor info',manipur:'Manipur'},
      headerBg:'#ffffff', headerText:'#0a2756', footerBg:'#ffffff', footerText:'#0a2756', accent:'#286eea', darkMode:false, retro:false, japan:false, brightness:100, fontScale:100, readerFont:'Inter', backgroundMode:'clean', gridOverlay:false,
      transform:{target:'selected title', x:0, y:0, scale:100, width:100, lineHeight:115, letterSpacing:0, cardGap:16, sectionSpacing:36},
      ticker:{type:'single', speed:32, direction:'rtl', bg:'#eaf5ff', text:'#0a2756', font:'Inter', fontSize:14, bold:false, italic:false, lines:[
        {id:'tick-1', enabled:true, emoji:'🔥', html:'Premium highlights rotate on the homepage after admin approval', bg:'#eaf5ff', text:'#0a2756'},
        {id:'tick-2', enabled:true, emoji:'📝', html:'Coming soon: festivals, cafes, markets, stays and local offers', bg:'#eaf5ff', text:'#0a2756'},
        {id:'tick-3', enabled:true, emoji:'📣', html:'Post your event and reach people across Manipur', bg:'#eaf5ff', text:'#0a2756'}
      ]},
      builder:{enabled:true,label:'Engineered by',name:'AviT Solutions',url:'https://avitsolutions.tech',logo:`${AS}wom-logo.svg`,phone:'',email:'',websiteText:'Visit builder',description:'Website, app, automation and content studio build partner.',boxes:[{id:'builder-box-1',title:'Website + App',value:'Mobile-first WOM build'},{id:'builder-box-2',title:'Support',value:'Contact for updates'}]}
    },
    hero: defaultHero,
    items: defaultItems,
    saved: [], reminders: [], guestbook: [], contacts: [], submissions: [], reports: [], claims: [], history: [], media: [], selectedId:'ev-cafe-pop'
  };
}
function loadState(){
  try{
    const current = JSON.parse(localStorage.getItem(STORAGE)||'null');
    if(current?.version === VERSION){ ui.view = current.settings.defaultView || 'grid'; return current; }
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE)||'null');
    if(legacy){
      legacy.version = VERSION;
      ui.view = legacy.settings?.defaultView || 'grid';
      localStorage.setItem(STORAGE, JSON.stringify(legacy));
      return legacy;
    }
  }catch{}
  return defaultState();
}
function saveState(note='Saved'){
  state.history.unshift({at:new Date().toLocaleString(), note, selected: state.selectedId, items: state.items.length});
  state.history = state.history.slice(0,50);
  localStorage.setItem(STORAGE, JSON.stringify(state));
  applyTheme();
  flash(note);
  ui.log = `${note}\n${new Date().toLocaleString()}`;
}
function flash(msg){ ui.toast=msg; setTimeout(()=>{ui.toast=''; const el=document.querySelector('.toast'); if(el) el.remove();}, 1800); }
function normalizeRoute(r){ if(!r || r==='/' || r==='home') return 'home'; if(r==='admin') return '-admin'; return r; }
function go(r){ route = normalizeRoute(r); location.hash = route; }
function e(s=''){ return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }
function logoSrc(){ return state?.settings?.logo || `${AS}wom-logo.svg`; }
function menuLabel(k){ return state?.settings?.menuLabels?.[k] || MENUS[k]?.label || k; }
function setQuiet(){ state.version=VERSION; const payload=JSON.stringify(state); localStorage.setItem(STORAGE,payload); stateChannel?.postMessage({type:'state-updated',payload,at:Date.now()}); }
function plain(s=''){ const d=document.createElement('div'); d.innerHTML=String(s||''); return (d.textContent||'').replace(/\s+/g,' ').trim(); }
function rich(s=''){ return sanitize(String(s||'')); }
function sanitize(html){
  const t=document.createElement('template'); t.innerHTML=html;
  t.content.querySelectorAll('script,object,embed,style').forEach(n=>n.remove());
  t.content.querySelectorAll('*').forEach(n=>{
    [...n.attributes].forEach(a=>{
      const nm=a.name.toLowerCase();
      if(nm.startsWith('on')) n.removeAttribute(a.name);
      if(nm==='href'&&!/^(https?:|mailto:|tel:|#)/i.test(a.value)) n.removeAttribute(a.name);
      if(nm==='style'){
        const clean=a.value.split(';').filter(r=>/^\s*(color|background-color|font-size|font-family|font-weight|font-style|text-decoration|text-align)\s*:/i.test(r)).join(';');
        clean?n.setAttribute('style',clean):n.removeAttribute('style');
      }
    });
    if(n.tagName==='A'){ n.target='_blank'; n.rel='noreferrer'; }
  });
  return t.innerHTML;
}
function selected(){ return state.items.find(x=>x.id===state.selectedId) || state.items[0]; }
function embedUrl(url=''){
  try{
    const u = new URL(url);
    if(u.hostname.includes('youtube.com')){ const id=u.searchParams.get('v') || u.pathname.split('/').pop(); return `https://www.youtube.com/embed/${id}`; }
    if(u.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if(u.hostname.includes('facebook.com')) return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500`;
    if(u.hostname.includes('instagram.com')) return `https://www.instagram.com/p/${u.pathname.split('/').filter(Boolean).pop()}/embed`;
  }catch{}
  return url;
}
function platformFrom(url=''){
  const u=url.toLowerCase();
  if(u.includes('instagram.')) return 'Instagram';
  if(u.includes('facebook.')||u.includes('fb.watch')) return 'Facebook';
  if(u.includes('youtube.')||u.includes('youtu.be')) return 'YouTube';
  if(u.startsWith('http')) return 'Website';
  return 'Manual';
}
function applyTheme(){
  const s=state.settings;
  document.documentElement.style.setProperty('--header-bg', s.headerBg || '#ffffff');
  document.documentElement.style.setProperty('--header-text', s.headerText || '#0a2756');
  document.documentElement.style.setProperty('--footer-bg', s.footerBg || '#ffffff');
  document.documentElement.style.setProperty('--footer-text', s.footerText || '#0a2756');
  document.documentElement.style.setProperty('--accent', s.accent || '#286eea');
  document.documentElement.style.setProperty('--font-scale', `${s.fontScale||100}%`);
  document.documentElement.style.setProperty('--brightness', `${s.brightness||100}%`);
  const tr=s.transform||{};
  document.documentElement.style.setProperty('--wom-transform-x', `${Number(tr.x||0)}px`);
  document.documentElement.style.setProperty('--wom-transform-y', `${Number(tr.y||0)}px`);
  document.documentElement.style.setProperty('--wom-transform-scale', `${Number(tr.scale||100)/100}`);
  document.documentElement.style.setProperty('--wom-transform-width', `${Number(tr.width||100)}%`);
  document.documentElement.style.setProperty('--wom-line-height', `${Number(tr.lineHeight||115)}%`);
  document.documentElement.style.setProperty('--wom-letter-spacing', `${Number(tr.letterSpacing||0)}px`);
  document.documentElement.style.setProperty('--wom-card-gap', `${Number(tr.cardGap||16)}px`);
  document.documentElement.style.setProperty('--wom-section-spacing', `${Number(tr.sectionSpacing||36)}px`);
  document.body.classList.toggle('theme-dark', !!s.darkMode);
  document.body.classList.toggle('theme-retro', !!s.retro);
  document.body.classList.toggle('theme-japan', !!s.japan);
}

window.addEventListener('hashchange',()=>{ route=normalizeRoute(location.hash.replace('#','') || 'home'); if(location.hash==='#admin') history.replaceState(null,'','#-admin'); window.scrollTo(0,0); render(); });
let lastBack=0;
window.addEventListener('popstate',()=>{
  const r=normalizeRoute(location.hash.replace('#','') || 'home');
  if(r==='home'){
    const now=Date.now();
    if(now-lastBack>1800){ lastBack=now; history.pushState({wom:true},'',location.href); flash('Press back again to exit'); setTimeout(render,0); }
  }
});
if(location.hash==='#home' || !location.hash) history.replaceState({wom:true},'',location.href);
function isAdminAuthed(){ return sessionStorage.getItem('wom-admin-auth') === 'yes'; }
function renderAdminLogin(){ return `<section class="admin-login"><div class="admin-login-card"><div class="studio-logo">WOM</div><h1>AdminPro locked</h1><p class="muted">Enter the admin password to open the editing studio.</p><form data-admin-login><input type="password" name="password" placeholder="Password" autofocus><button class="btn primary">Open AdminPro</button></form><small class="muted">Hidden URL: #-admin · ${VERSION_LABEL}</small></div>${ui.toast?`<div class="toast">${e(ui.toast)}</div>`:''}</section>`; }


function render(){
  applyTheme();
  document.body.classList.toggle('no-scroll', route==='-admin');
  $app.innerHTML = route==='-admin' ? (isAdminAuthed()?renderAdmin():renderAdminLogin()) : renderPublic(route);
  bind();
}
function renderPublic(r='home', preview=false){
  const inner = r.startsWith('event/') ? renderDetail(r.split('/')[1], preview) : renderPage(r, preview);
  return `${renderHeader(preview)}${renderMobileMenu(preview)}${renderTicker(preview)}<main>${inner}</main>${renderFooter(preview)}${renderBottomNav(r)}${renderSearchPanel()}${renderPostActionSheet()}${renderFloatingAI()}${ui.toast?`<div class="toast">${e(ui.toast)}</div>`:''}`;
}
function renderHeader(preview=false){
  const nav = Object.entries(MENUS).map(([k,m])=>`<button class="menu-trigger ${ui.menu===k?'active':''}" data-menu="${k}" data-route="${m.route}">${e(menuLabel(k))}⌄</button>`).join('');
  return `<header class="topbar" style="background:${e(state.settings.headerBg)};color:${e(state.settings.headerText)}" ${preview?'data-admin-select="settings"':''}><div class="topbar-inner"><button class="burger" data-burger aria-label="Open menu">☰</button><a class="brand" data-route="home"><img class="brand-logo" src="${e(logoSrc())}" alt="WOM"><span class="brand-copy"><span class="brand-title">${e(state.settings.siteTitle)}</span><span class="brand-short">${e(state.settings.short)} · local discovery</span></span></a><nav class="desktop-nav">${nav}</nav><div class="top-actions"><button class="btn ghost small" data-route="promote">Promote</button><button class="btn primary small" data-route="post">Post your event</button></div></div>${ui.menu?renderMega(ui.menu):''}${ui.burger?renderBurger():''}</header>`;
}
function renderMobileMenu(preview=false){
  const nav = Object.entries(MENUS).map(([k,m])=>`<button class="mobile-menu-trigger ${ui.menu===k?'active':''}" data-menu="${k}" data-route="${m.route}">${e(menuLabel(k))}<span>⌄</span></button>`).join('');
  return `<section class="mobile-menu-rail" ${preview?'data-admin-select="settings"':''}>${nav}</section>${ui.menu?renderMobileMega(ui.menu):''}`;
}
function renderMobileMega(k){
  const m=MENUS[k];
  const flat=m.cols.flat();
  return `<section class="mobile-mega-sheet" data-menu-surface><div class="mobile-mega-head"><strong>${e(menuLabel(k))}</strong><button data-menu-close>×</button></div><div class="mobile-mega-list">${flat.map((x,i)=>`<button data-filter="${e(x)}"><span>${['🏛️','🎟️','🎉','🧭','🎭','⛰️','👨‍👩‍👧','🎵','☕','🛍️','🏨','🚌'][i%12]}</span>${e(x)}</button>`).join('')}</div><div class="mobile-mega-tools"><button data-route="post">Post your event</button><button data-route="promote">Promote</button><button data-route="calendar">Calendar</button></div></section>`;
}
function renderMega(k){
  const m=MENUS[k];
  return `<section class="mega-panel" data-menu-surface>${m.cols.map((col,i)=>`<div class="mega-column"><h3>${i===0?e(menuLabel(k)):i===1?'Popular':'Guides'}</h3>${col.map(x=>`<button data-filter="${e(x)}">⌾ ${e(x)}</button>`).join('')}</div>`).join('')}<div class="mega-column"><h3>WOM tools</h3><button data-route="post">Submit event</button><button data-route="promote">Promote business</button><button data-route="profile">Profile</button><button data-ai-open>Ask WOM AI</button></div></section>`;
}
function renderBurger(){
  const routes = [['Home','home'],['Explore','explore'],['Calendar','calendar'],['Profile','profile'],['Saved','saved'],['Post your event','post'],['Promote','promote'],['Support','support']];
  const groups = Object.entries(MENUS).map(([k,m])=>`<div class="burger-group ${ui.burgerGroup===k?'open':''}"><button class="burger-group-title" data-burger-group="${k}" aria-expanded="${ui.burgerGroup===k}">${e(menuLabel(k))} <span>${ui.burgerGroup===k?'⌃':'⌄'}</span></button><div class="burger-subgrid" ${ui.burgerGroup===k?'':'hidden'}>${m.cols.flat().map(x=>`<button data-burger-filter="${e(x)}">${e(x)}</button>`).join('')}</div></div>`).join('');
  return `<aside class="burger-panel" data-menu-surface><div class="burger-panel-head"><strong>Menu</strong><button data-burger-close aria-label="Close menu">×</button></div><div class="burger-routes">${routes.map(([x,r])=>`<button data-route="${r}">${x}</button>`).join('')}</div>${groups}<small class="muted">Burger submenus are independent from the header menu and close after a selection.</small></aside>`;
}
function renderTicker(preview=false){
  const t=state.settings.ticker;
  const lines=t.lines.filter(x=>x.enabled);
  const content=lines.map(l=>`<span class="ticker-pill" style="background:${e(l.bg||t.bg)};color:${e(l.text||t.text)}">${e(l.emoji||'')} ${rich(l.html)}</span>`).join('');
  return `<section class="ticker ${t.type==='multi'?'multi':''}" style="background:${e(t.bg)};color:${e(t.text)};font-family:${e(t.font)};font-size:${Number(t.fontSize)||14}px;font-weight:${t.bold?'900':'700'};font-style:${t.italic?'italic':'normal'}" ${preview?'data-admin-select="ticker"':''}><div class="ticker-track" style="animation-duration:${Number(t.speed)||32}s;animation-direction:${t.direction==='ltr'?'reverse':'normal'}">${content}${content}</div></section>`;
}
function renderPage(r, preview=false){
  if(r==='home') return renderHome(preview);
  if(r==='explore' || r==='latest') return renderListing('Explore WOM', 'Search markets, cafés, shopping, tourist ideas and local offers.', state.items, preview);
  if(r==='calendar') return renderCalendarPage(preview);
  if(r==='saved') return renderListing('Saved', 'Events and posts saved on this device.', state.items.filter(x=>state.saved.includes(x.id)), preview);
  if(r==='profile') return renderProfile();
  if(r==='post') return renderPostForm();
  if(r==='promote') return renderPromote();
  if(r==='support' || r==='contact') return renderSupport();
  if(r==='visitor') return renderStatic('Visitor info','Transport, hotels, airport notes, maps, safety, emergency and district guides for Manipur visitors.');
  if(r.startsWith('category/')){ const q=decodeURIComponent(r.split('/')[1]||''); return renderListing(q, `Latest WOM posts under ${q}.`, state.items.filter(x=>[x.category,'Shopping','Food'].join(' ').toLowerCase().includes(q.toLowerCase()) || x.summary.toLowerCase().includes(q.toLowerCase())), preview); }
  if(r.startsWith('district/')){ const q=decodeURIComponent(r.split('/')[1]||'All'); const list=q==='All'?state.items:state.items.filter(x=>x.district===q); return renderListing(`${q} district`, `Events, offers and guides for ${q}.`, list, preview); }
  return renderStatic('Page coming alive', 'This route is connected. Add final content from the WOM editing studio.');
}
function renderHome(preview=false){
  const cards=state.items.filter(x=>x.status==='published');
  return `<section class="page hero"><div class="hero-grid"><div class="hero-copy" ${preview?'data-admin-select="settings"':''}><span class="pill hot">✨ What’s Happening</span><h1>${e(state.settings.siteTitle)}</h1><p>${e(state.settings.tagline)}</p>${renderSearch()}</div>${renderHero(preview)}</div>${renderViewSwitch()}<div class="section-head"><h2>Happening this week</h2><button class="link-btn" data-route="explore">View all events</button></div><section class="cards ${ui.view}">${cards.map(c=>renderCard(c,preview)).join('')}</section><section class="quick-panels"><article><h3>For organisers and vendors</h3><p>Create events, café offers, resort promos, venue listings and shop pages.</p><button class="btn primary" data-route="post">Create listing</button></article><article><h3>WOM Discovery posts</h3><p>Use original writing and authorised images. Link back to source and verify details.</p><button class="btn ghost" data-route="explore">Explore discoveries</button></article></section></section>`;
}
function renderSearch(){ return `<div class="search-box search-pro v8-search"><button type="button" class="search-segment" data-search-panel="what"><span>What</span><strong>Anything</strong></button><button type="button" class="search-segment" data-search-panel="when"><span>When</span><strong>Anytime</strong></button><button type="button" class="search-segment" data-search-panel="where"><span>Where</span><strong>Anywhere in Manipur</strong></button><label class="keyword-segment"><span>Keywords</span><input data-search-input placeholder="Search events, districts, cafes…"></label><button class="search-submit" data-search-btn><span>🔎</span><b>Search</b></button></div>`; }
function renderSearchPanel(){
  if(!ui.searchPanel) return '';
  const what=['Anything','Things to do','Eat & Drink','Shopping','Hotels','Guides','Free','Family and kids','Events','Restaurant','Market','Festival','Music and Concerts','Art','Exhibition','Sport','Accessibility'];
  const where=['Anywhere',...districts,'Paona Bazaar','Thangal Bazaar','Ema Keithel','Kangla','Loktak Lake'];
  const title = ui.searchPanel==='what'?'What are you looking for?':ui.searchPanel==='when'?'When are you visiting?':'Where do you want to look?';
  if(ui.searchPanel==='when') return `<div class="search-overlay" data-close-panel><section class="search-modal when calendar-picker" onclick="event.stopPropagation()"><div class="modal-head"><h2>${title}</h2><button data-close-panel>×</button></div>${renderCalendarPanel()}</section></div>`;
  const list = ui.searchPanel==='what'?what:where;
  return `<div class="search-overlay" data-close-panel><section class="search-modal ${ui.searchPanel}" onclick="event.stopPropagation()"><div class="modal-head"><h2>${title}</h2><button data-close-panel>×</button></div><div class="option-grid ${ui.searchPanel}">${list.map((x,i)=>`<button class="${i===0?'selected':''}" data-search-option="${e(x)}" data-search-type="${ui.searchPanel}"><span>${ui.searchPanel==='what'?(i===0?'🔎':i===1?'🎟️':i===2?'🍽️':i===3?'🛍️':i===4?'🛏️':i===5?'⭐':'•'):(i===0?'📍':'□')}</span>${e(x)}</button>`).join('')}</div></section></div>`;
}
function renderCalendarPanel(){
  return `<div class="calendar-tools"><button data-search-option="Today" data-search-type="when">Today</button><button data-search-option="Tomorrow" data-search-type="when">Tomorrow</button><button class="active" data-search-option="This weekend" data-search-type="when">This weekend</button><button data-search-option="Next week" data-search-type="when">Next week</button></div><div class="calendar-mode-tabs"><button class="active" data-calendar-view="month">▦ Month</button><button data-calendar-view="week">▤ Week</button><button data-calendar-view="day">▥ Day</button><button data-calendar-view="weekend">☀ Weekend</button><button data-calendar-view="list">☰ List</button></div><div class="two-months">${renderMiniCalendar(0)}${renderMiniCalendar(1)}</div><div class="holiday-strip"><strong>Public holidays & local calendar</strong><div>${calendarHolidays().map(h=>`<button data-search-option="${e(h.name)}" data-search-type="when"><span>${e(h.date)}</span>${e(h.name)} <small>${e(h.type)}</small></button>`).join('')}</div></div><div class="calendar-actions"><button data-search-option="Anytime" data-search-type="when">Clear</button><button class="primary-lite" data-search-option="Specific dates" data-search-type="when">Done</button></div>`;
}
function renderMiniCalendar(offset=0){
  const today=new Date();
  const first=new Date(today.getFullYear(),today.getMonth()+offset,1);
  const month=first.toLocaleString('en-GB',{month:'long',year:'numeric'});
  const startDay=first.getDay();
  const days=new Date(first.getFullYear(),first.getMonth()+1,0).getDate();
  const cells=[];
  for(let i=0;i<startDay;i++) cells.push('<span></span>');
  for(let d=1;d<=days;d++){
    const isToday=offset===0 && d===today.getDate();
    const isWeekend=[0,6].includes(new Date(first.getFullYear(),first.getMonth(),d).getDay());
    cells.push(`<button class="${isToday?'today':''} ${isWeekend?'weekend':''}" data-search-option="${d} ${month}" data-search-type="when">${d}</button>`);
  }
  return `<article class="mini-cal"><h3>${e(month)}</h3><div class="week-head">${['Su','Mo','Tu','We','Th','Fr','Sa'].map(x=>`<b>${x}</b>`).join('')}</div><div class="days-grid">${cells.join('')}</div></article>`;
}
function calendarHolidays(){
  return [
    {date:'26 Jan',name:'Republic Day',type:'India'},
    {date:'14 Apr',name:'Cheiraoba / Ambedkar Jayanti',type:'Manipur / India'},
    {date:'15 Aug',name:'Independence Day',type:'India'},
    {date:'2 Oct',name:'Gandhi Jayanti',type:'India'},
    {date:'21–30 Nov',name:'Sangai Festival period',type:'Manipur event'},
    {date:'Dec',name:'Ningol Chakouba / Diwali / Christmas',type:'Local + India'}
  ];
}
function renderCalendarPage(preview=false){
  const items=[...state.items].sort((a,b)=>String(a.date).localeCompare(String(b.date)));
  return `<section class="page calendar-page"><div class="section-head tall"><div><span class="pill purple">Calendar</span><h1>Calendar</h1><p class="muted">Month, list, day, week and weekend views for WOM events, offers, Indian public holidays and Manipur-specific local dates. Holiday dates are starter entries and can be edited in AdminPro before public launch.</p></div>${renderViewSwitch()}</div>${renderCalendarPanel()}<h2>Event list</h2><section class="cards list">${items.map(c=>renderCard(c,preview)).join('')}</section></section>`;
}
function renderPostActionSheet(){
  if(!ui.postSheet) return '';
  const actions=[['post','🎟️','Post an event','Create event listing'],['promote','📣','Post your ad','Promotion or paid highlight'],['post','🛍️','Submit offer','Shop, cafe or local deal'],['post','🔗','Paste social link','Facebook, Instagram, YouTube'],['promote','🏪','Claim business','Update business details'],['support','☎️','Contact support','Ask WOM for help']];
  return `<div class="action-sheet-backdrop" data-post-sheet-close><section class="post-action-sheet" onclick="event.stopPropagation()"><div class="sheet-handle"></div><div class="modal-head"><h2>Create or promote</h2><button data-post-sheet-close>×</button></div><div class="sheet-actions">${actions.map(([r,ico,title,desc])=>`<button data-route="${r}"><span>${ico}</span><strong>${title}</strong><small>${desc}</small></button>`).join('')}</div></section></div>`;
}

function renderHero(preview=false){
  const s=state.hero[ui.heroIndex%state.hero.length];
  const media=s.mediaType==='embed'&&s.embedUrl?`<iframe src="${e(embedUrl(s.embedUrl))}" allowfullscreen></iframe>`:s.mediaType==='video'&&s.videoData?`<video src="${e(s.videoData)}" controls playsinline></video>`:`<img src="${e(s.image)}" alt="${e(s.title)}">`;
  return `<article class="hero-carousel" ${preview?'data-admin-select="hero"':''} data-swipe-hero><div class="hero-slide active">${media}<div class="hero-shade"></div><div class="hero-caption"><span class="pill purple">Featured promotion</span><h2>${e(s.title)}</h2><p>${e(s.subtitle)}</p></div><div class="hero-controls"><button data-hero-prev>‹</button><button data-hero-next>›</button></div><div class="dots">${state.hero.map((_,i)=>`<button class="${i===ui.heroIndex?'active':''}" data-hero-dot="${i}"></button>`).join('')}</div></div></article>`;
}
function renderViewSwitch(){ return `<div class="view-switch"><span>View</span>${[['grid','▦ Grid'],['compact','▥ Compact'],['list','☰ List']].map(([v,l])=>`<button class="${ui.view===v?'active':''}" data-view="${v}">${l}</button>`).join('')}</div>`; }
function renderCard(c,preview=false){
  const media = c.mediaType==='embed'&&c.embedUrl?`<iframe src="${e(embedUrl(c.embedUrl))}" loading="lazy"></iframe>`:c.mediaType==='video'&&c.videoData?`<video src="${e(c.videoData)}" muted playsinline></video>`:`<img src="${e(c.image)}" alt="${e(plain(c.title))}" loading="lazy">`;
  return `<article class="card ${state.selectedId===c.id?'selected':''}" ${preview?`data-admin-select="item" data-id="${e(c.id)}"`:''}><a data-route="event/${e(c.id)}"><div class="card-media">${media}<div class="date-badge">${e((c.date||'Today').split(' ')[0])}<br><small>${e((c.date||'').split(' ')[1]||'')}</small></div></div><div class="card-body"><span class="pill ${c.verification==='Sponsored'?'hot':c.verification==='Verified'?'green':''}">${e(c.verification)}</span><h3>${rich(c.title)}</h3><p>${rich(c.summary)}</p><div class="card-meta"><span>📍 ${e(c.area)}</span><span>🏷 ${e(c.category)} · ${e(c.district)}</span></div></a><div class="social-row"><button data-social="facebook" data-id="${e(c.id)}">f</button><button data-social="instagram" data-id="${e(c.id)}">◎</button><button data-social="youtube" data-id="${e(c.id)}">▶</button><button data-social="twitter" data-id="${e(c.id)}">𝕏</button><small>👁 ${Number(c.views||0)}</small></div><div class="card-actions"><button data-action="save" data-id="${e(c.id)}">${state.saved.includes(c.id)?'Saved':'Save'}</button><button data-action="remind" data-id="${e(c.id)}">Reminder</button><button data-action="share" data-id="${e(c.id)}">Share</button><button data-route="event/${e(c.id)}">Open</button></div></div></article>`;
}
function renderDetail(id,preview=false){
  const c=state.items.find(x=>x.id===id)||state.items[0];
  const media=c.mediaType==='embed'&&c.embedUrl?`<iframe src="${e(embedUrl(c.embedUrl))}" allowfullscreen></iframe>`:c.mediaType==='video'&&c.videoData?`<video src="${e(c.videoData)}" controls playsinline></video>`:`<img src="${e(c.image)}" alt="${e(plain(c.title))}">`;
  return `<section class="page discovery-post"><button class="link-btn" data-back>← Back</button><div class="discovery-layout"><div class="post-hero-img" ${preview?`data-admin-select="item" data-id="${e(c.id)}"`:''}>${media}</div><article class="post-panel"><span class="pill hot">${e(c.badge||'WOM DISCOVERY')}</span><h1>${rich(c.title)}</h1><p class="muted"><strong>${rich(c.subheadline||'Original WOM local discovery post')}</strong></p><div>${rich(c.body)}</div><div class="detail-grid">${detail('Category',c.category)}${detail('District',c.district)}${detail('Area',c.area)}${detail('Dates',`${c.date} · ${c.time}`)}${detail('Offer status',c.offerStatus)}${detail('Verification',c.verification)}${detail('Last checked',c.lastChecked)}${detail('Expiry',c.expiry||'Not set')}</div><div class="source-box">Source: ${c.sourceUrl?`<a href="${e(c.sourceUrl)}" target="_blank" rel="noreferrer">View original source</a>`:'Source link not added yet'}</div><div class="social-row detail-share"><span>Share:</span><button data-social="facebook" data-id="${e(c.id)}">Facebook</button><button data-social="instagram" data-id="${e(c.id)}">Instagram</button><button data-social="youtube" data-id="${e(c.id)}">YouTube</button><button data-social="twitter" data-id="${e(c.id)}">Twitter / X</button><small>Views: ${Number(c.views||0)} · reading time tracked locally</small></div><div class="card-actions"><button data-open-source="${e(c.sourceUrl||'')}">View original source</button><button data-action="claim" data-id="${e(c.id)}">Claim this business</button><button data-action="report" data-id="${e(c.id)}">Report incorrect information</button></div><p class="disclaimer">${e(state.settings.siteTitle)} is a local discovery platform. We do not directly sell or stock the featured products. Please verify current details with the business or organiser.</p></article></div><div class="section-head"><h2>Related stories</h2><button class="link-btn" data-route="explore">Explore all</button></div><section class="cards grid">${state.items.filter(x=>x.id!==c.id&&x.status==='published').slice(0,4).map(x=>renderCard(x,false)).join('')}</section></section>`;
}
function detail(k,v){ return `<div><span>${e(k)}</span><strong>${rich(v||'—')}</strong></div>`; }
function renderListing(title,subtitle,items,preview=false, calendar=false){ return `<section class="page"><div class="section-head tall"><div><h1>${e(title)}</h1><p class="muted">${e(subtitle)}</p></div>${renderViewSwitch()}</div>${items.length?`<section class="cards ${calendar?'list':ui.view}">${items.map(c=>renderCard(c,preview)).join('')}</section>`:`<div class="empty-state"><h2>No saved items yet</h2><p>Use Save on any WOM card and it will appear here.</p></div>`}</section>`; }
function renderStatic(title,body){ return `<section class="page"><article class="post-panel"><h1>${e(title)}</h1><p>${e(body)}</p><button class="btn primary" data-ai-open>Ask WOM AI</button></article></section>`; }
function renderProfile(){ return `<section class="page"><article class="post-panel"><span class="pill purple">Profile</span><h1>Your WOM Profile</h1><p class="muted">Saved events, reminders, guestbook and submission history live on this device for now.</p><div class="profile-grid">${detail('Saved items',state.saved.length)}${detail('Reminders',state.reminders.length)}${detail('Submissions',state.submissions.length)}${detail('Guestbook entries',state.guestbook.length)}</div><button class="btn primary" data-route="saved">Open saved</button><button class="btn ghost" data-ai-open>Open WOM AI help</button></article></section>`; }
function renderPostForm(){ return `<section class="page"><article class="post-panel"><span class="pill hot">Post your event</span><h1>Submit an event or offer</h1><form data-simple-form="submission" class="public-form"><input name="name" placeholder="Your name"><input name="title" placeholder="Event / offer title"><input name="contact" placeholder="Phone or email"><textarea name="message" placeholder="Date, location, offer, source link"></textarea><button class="btn primary">Submit for review</button></form></article></section>`; }
function renderPromote(){ return `<section class="page"><article class="post-panel"><span class="pill green">Promote</span><h1>Promote with WOM</h1><p>Start with free discovery listings. Later, claim your business and upgrade to featured positions.</p><div class="cards compact">${['Free listing','Featured card','Homepage rotation'].map((x,i)=>`<article class="card"><div class="card-body"><h3>${x}</h3><p>${i===0?'Submit accurate details and authorised photos.':i===1?'Boost visibility in category and district pages.':'Premium hero or ticker placement after approval.'}</p><button class="btn primary" data-ai-open>Start</button></div></article>`).join('')}</div></article></section>`; }
function renderSupport(){ return `<section class="page"><article class="post-panel"><span class="pill purple">Support</span><h1>Contact WOM support</h1><form data-simple-form="contact" class="public-form"><input name="name" placeholder="Your name"><input name="contact" placeholder="Phone or email"><textarea name="message" placeholder="What do you need help with?"></textarea><button class="btn primary">Send message</button></form><hr><h2>Guest sign book</h2><form data-simple-form="guestbook" class="public-form"><input name="name" placeholder="Name"><textarea name="message" placeholder="Leave a note for WOM"></textarea><button class="btn ghost">Sign guestbook</button></form></article></section>`; }
function renderFooter(preview=false){
  const b=state.settings.builder||{};
  const builder = b.enabled ? `<div class="builder-footer" ${preview?'data-admin-select="builder"':''}><div class="builder-main"><img src="${e(b.logo||`${AS}wom-logo.svg`)}" alt="${e(b.name||'Builder')} logo"><span><small>${e(b.label||'Engineered by')}</small><strong>${e(b.name||'Builder name')}</strong><em>${e(b.description||'')}</em></span></div><div class="builder-links">${b.url?`<a href="${e(b.url)}" target="_blank" rel="noreferrer">${e(b.websiteText||'Website')}</a>`:''}${b.phone?`<a href="tel:${e(b.phone)}">${e(b.phone)}</a>`:''}${b.email?`<a href="mailto:${e(b.email)}">${e(b.email)}</a>`:''}</div><div class="builder-boxes">${(b.boxes||[]).map(x=>`<span><small>${e(x.title)}</small>${e(x.value)}</span>`).join('')}</div></div>` : '';
  return `<footer class="site-footer" style="background:${e(state.settings.footerBg)};color:${e(state.settings.footerText)}" ${preview?'data-admin-select="footer"':''}><div class="footer-inner"><div class="brand"><img class="brand-logo" src="${e(logoSrc())}" alt="WOM"><span class="brand-copy"><strong>${e(state.settings.siteTitle)}</strong><small class="muted">Your guide to what is happening across Manipur.</small><small class="version-label">${VERSION_LABEL}</small></span></div><nav class="footer-links"><button data-route="post">Post your event</button><button data-route="promote">Promote</button><button data-route="support">Support</button><button data-route="explore">Explore</button><button data-route="profile">Profile</button></nav></div>${builder}</footer>`;
}
function renderBottomNav(r){
  const items=[['home','⌂','Home'],['calendar','▣','Calendar'],['post','＋','Post your ad'],['saved','♡','Saved'],['profile','♙','Profile']];
  return `<nav class="bottom-nav floating-dock" aria-label="Mobile navigation">${items.map(([rr,ico,label],i)=>`<button class="${r===rr?'active':''} ${i===2?'dock-post':''}" ${i===2?'data-post-sheet-open':'data-route="'+rr+'"'}><span class="ico">${ico}</span><span class="dock-label">${label}</span></button>`).join('')}</nav>`;
}

function renderFloatingAI(){
  const pos=state.settings.aiPos||{};
  const style=(Number.isFinite(pos.x)&&Number.isFinite(pos.y))?`style="left:${pos.x}px;top:${pos.y}px;right:auto;bottom:auto"`:'';
  return `<aside class="ai-widget ${ui.aiOpen?'open':''}" data-ai-widget ${style}><button class="ai-fab" data-ai-toggle data-ai-drag-handle><span>✦</span>AI<small>Drag me</small></button>${ui.aiOpen?`<div class="ai-panel"><div class="ai-head"><strong>WOM AI Guide</strong><button data-ai-toggle>×</button></div><div class="ai-tabs">${[['search','Search'],['support','Support'],['post','Add post'],['reader','Kindle tools']].map(([p,l])=>`<button class="${ui.aiPanel===p?'active':''}" data-ai-panel="${p}">${l}</button>`).join('')}</div>${renderAIPanel()}</div>`:''}</aside>`;
}
function renderAIPanel(){
  if(ui.aiPanel==='support') return `<p class="muted">Contact: What would you like to hear? What do you need help with?</p><form data-simple-form="contact" class="mini-form"><input name="name" placeholder="Name"><input name="contact" placeholder="Phone / email"><textarea name="message" placeholder="Message"></textarea><button class="btn primary">Send support request</button></form><button class="btn ghost" data-route="support">Open full support page</button>`;
  if(ui.aiPanel==='post') return `<p class="muted">Add a post from AI or send a source link for admin review.</p><form data-simple-form="submission" class="mini-form"><input name="title" placeholder="Post / offer title"><input name="source" placeholder="Instagram, Facebook, YouTube or website URL"><textarea name="message" placeholder="Facts visible on the post"></textarea><button class="btn primary">Submit to WOM</button></form>`;
  if(ui.aiPanel==='reader') return `<div class="reader-tools"><label>Brightness <input type="range" min="70" max="130" value="${state.settings.brightness}" data-setting="brightness"></label><label>Font size <input type="range" min="85" max="125" value="${state.settings.fontScale}" data-setting="fontScale"></label><button data-theme-toggle="darkMode">${state.settings.darkMode?'Light mode':'Dark mode'}</button><button data-theme-toggle="retro">Retro theme</button><button data-theme-toggle="japan">Japan soft theme</button><button data-autoscroll>Auto-scroll</button><button data-autoscroll-stop>Stop scroll</button></div>`;
  const q=(document.querySelector('[data-ai-search]')?.value || '').trim().toLowerCase();
  const hits=q?state.items.filter(x=>(plain(x.title)+' '+plain(x.summary)+' '+x.category+' '+x.district+' '+x.area).toLowerCase().includes(q)).slice(0,4):state.items.slice(0,3);
  return `<p class="muted">Ask WOM AI to search the website, find events, open support, or help you submit a post.</p><div class="mini-search"><input data-ai-search placeholder="Search WOM…"><button data-ai-run>Search</button></div><div class="ai-results">${hits.map(x=>`<button data-route="event/${x.id}"><strong>${rich(x.title)}</strong><small>${e(x.category)} · ${e(x.district)}</small></button>`).join('')}</div>`;
}

function renderAdmin(){
  const c=selected();
  return `<section class="admin-shell ${ui.studioMode==='preview'?'show-preview':''}"><div class="studio-top"><div class="studio-brand"><span class="studio-logo">WOM</span><span>AdminPro · Content Studio<br><small class="muted">Hidden URL: #-admin · ${VERSION_LABEL}</small></span></div><div class="studio-actions"><button class="btn ghost" data-admin-logout>Lock admin</button><button class="btn primary" data-action="publish">Publish now</button></div></div><div class="studio-hint">ⓘ Preview is internal: menus, subpages and back buttons open inside AdminPro only. Click editable sections to edit; Publish updates the public view immediately in the same browser/origin. Cross-device publishing requires a connected database backend.</div><div class="mobile-preview-tabs"><button class="${ui.studioMode==='preview'?'active':''}" data-studio-mode="preview">Website Preview</button><button class="${ui.studioMode!=='preview'?'active':''}" data-studio-mode="edit">Editor</button></div><div class="studio-layout"><aside class="preview-pane ${state.settings.gridOverlay?'grid-on':''}"><div class="preview-mini-bar"><button data-admin-preview-home>Home</button><button data-admin-preview-back>Back</button><span>Editing preview: ${e(ui.adminPreviewRoute)}</span></div><div class="preview-frame">${renderPublic(ui.adminPreviewRoute,true)}</div></aside><main class="editor-pane">${renderAdminPane(c)}</main></div>${ui.toast?`<div class="toast">${e(ui.toast)}</div>`:''}</section>`;
}
function renderAdminPane(c){
  return `${renderAdminTabs()}${ui.adminTab==='content'?renderContentStudio(c):ui.adminTab==='ticker'?renderTickerStudio():ui.adminTab==='style'?renderStyleStudio():ui.adminTab==='nav'?renderNavigationStudio():ui.adminTab==='media'?renderMediaStudio(c):ui.adminTab==='builder'?renderBuilderStudio():ui.adminTab==='queue'?renderQueueStudio():renderHistoryStudio(c)}`;
}
function renderAdminTabs(){
  return `<div class="admin-tabs">${[['content','Content Studio'],['ticker','Ticker Tape'],['style','Header/Footer Style'],['nav','Navigation & Pages'],['media','Media'],['builder','Builder Footer'],['queue','Queue'],['history','History']].map(([t,l])=>`<button class="${ui.adminTab===t?'active':''}" data-admin-tab="${t}">${l}</button>`).join('')}</div>`;
}
function renderContentStudio(c){
  return `${renderSourceMedia(c)}${renderContentEditor(c)}${renderDetailsEditor(c)}${renderAITools(c)}${renderActions(c)}<section class="editor-card"><h2>Build log</h2><div class="log-box">${e(ui.log)}</div></section>`;
}
function renderSourceMedia(c){
  const mediaPreview = c.mediaType==='embed'&&c.embedUrl?`<iframe src="${e(embedUrl(c.embedUrl))}"></iframe>`:c.mediaType==='video'&&c.videoData?`<video src="${e(c.videoData)}" controls></video>`:`<img src="${e(c.image)}" alt="preview">`;
  return `<section class="editor-card"><div class="editor-head"><h2>1. Source, Image & Video</h2><span class="status-dot">Auto-saved locally</span></div><div class="form-grid"><label class="field full">Source URL: Facebook / Instagram / YouTube / Website <div class="source-row"><input value="${e(c.sourceUrl)}" data-edit="sourceUrl" placeholder="Paste source URL"><button class="btn ghost" data-action="analyse-url">Analyse</button></div></label><label class="field">Source platform <input value="${e(c.sourcePlatform)}" data-edit="sourcePlatform"></label><label class="field">Image URL <input value="${e(c.image)}" data-edit="image" placeholder="Paste image URL or upload"></label><label class="field">Upload image <input type="file" accept="image/*" data-upload="image"></label><label class="field">Upload video <input type="file" accept="video/*" data-upload="video"></label><label class="field full">Embed URL <input value="${e(c.embedUrl)}" data-edit="embedUrl" placeholder="YouTube, Facebook, Instagram embed/source URL"></label><label class="field">Media type <select data-edit="mediaType"><option ${c.mediaType==='image'?'selected':''}>image</option><option ${c.mediaType==='video'?'selected':''}>video</option><option ${c.mediaType==='embed'?'selected':''}>embed</option></select></label><div class="media-preview full"><div>${mediaPreview}</div><p class="muted">Use your own AI image, Canva graphic, authorised business image, uploaded video, or an embed/source URL. Do not copy photos, captions, posters, videos or layouts without permission.</p></div></div></section>`;
}
function renderToolbar(target){
  return `<div class="toolbar" data-toolbar="${target}"><button data-cmd="bold">B</button><button data-cmd="italic"><i>I</i></button><button data-cmd="underline"><u>U</u></button><button data-cmd="strikeThrough">S</button><button data-cmd="justifyLeft">⬅</button><button data-cmd="justifyCenter">↔</button><button data-cmd="justifyRight">➡</button><select data-font><option>Inter</option><option>Georgia</option><option>Arial</option><option>Trebuchet MS</option><option>Courier New</option><option>Comic Sans MS</option></select><select data-size><option value="2">Small</option><option value="3" selected>Normal</option><option value="5">Large</option><option value="7">Huge</option></select><input type="color" data-color value="#0a2756"><input type="color" data-bg value="#fff4d8"><button data-cmd="insertUnorderedList">• List</button><button data-cmd="insertOrderedList">1. List</button><button data-link>🔗</button></div>`;
}
function renderContentEditor(c){
  return `<section class="editor-card"><h2>2. Content Editor</h2>${renderToolbar('all')}<label class="field full">Title <div class="rich title-edit" contenteditable="true" data-rich="title">${rich(c.title)}</div></label><label class="field full">Sub-headline <div class="rich summary-edit" contenteditable="true" data-rich="subheadline">${rich(c.subheadline)}</div></label><label class="field full">Summary <div class="rich summary-edit" contenteditable="true" data-rich="summary">${rich(c.summary)}</div></label><label class="field full">Body / Article <div class="rich" contenteditable="true" data-rich="body">${rich(c.body)}</div></label></section>${renderTransformStudio()}`;
}
function renderDetailsEditor(c){
  return `<section class="editor-card"><h2>3. Details, Publishing & Labels</h2><div class="form-grid"><label class="field">Category <select data-edit="category">${categories.map(x=>`<option ${x===c.category?'selected':''}>${x}</option>`).join('')}</select></label><label class="field">District <select data-edit="district">${districts.map(x=>`<option ${x===c.district?'selected':''}>${x}</option>`).join('')}</select></label><label class="field">Area <input value="${e(c.area)}" data-edit="area"></label><label class="field">Date <input value="${e(c.date)}" data-edit="date"></label><label class="field">Time <input value="${e(c.time)}" data-edit="time"></label><label class="field">Organiser <input value="${e(c.organiser)}" data-edit="organiser"></label><label class="field">Offer status <input value="${e(c.offerStatus)}" data-edit="offerStatus"></label><label class="field">Last checked <input value="${e(c.lastChecked)}" data-edit="lastChecked"></label><label class="field">Offer expiry <input value="${e(c.expiry)}" data-edit="expiry" placeholder="Auto-archive after this date"></label><label class="field">Public status <select data-edit="status"><option ${c.status==='published'?'selected':''}>published</option><option ${c.status==='draft'?'selected':''}>draft</option><option ${c.status==='scheduled'?'selected':''}>scheduled</option><option ${c.status==='archived'?'selected':''}>archived</option><option ${c.status==='expired'?'selected':''}>expired</option></select></label><label class="field full">Verification label <select data-edit="verification"><option>Spotted by WOM</option><option>WOM Editorial</option><option>Organiser Submitted</option><option>Verified</option><option>Sponsored</option></select></label></div></section>`;
}
function renderAITools(){
  return `<section class="editor-card"><h2>4. WOM AI Tools</h2><div class="safe-note"><strong>Rule:</strong> AI can create original wording and original image prompts, but it must not invent offers, prices, dates, addresses, popularity or partnerships.</div><div class="ai-grid"><button data-ai="headline">Generate headline</button><button data-ai="summary">Rewrite summary</button><button data-ai="article">Generate article</button><button data-ai="promo">Create promo</button><button data-ai="calendar">Create calendar event</button><button data-ai="image-prompt">Generate image prompt</button></div></section>`;
}
function renderActions(){
  return `<section class="editor-card"><h2>5. Actions</h2><div class="action-grid"><button class="btn primary" data-action="publish">Publish now</button><button class="btn ghost" data-action="draft">Save draft</button><button class="btn ghost" data-action="schedule">Schedule</button><button class="btn ghost" data-action="duplicate">Duplicate</button><button class="btn ghost" data-action="archive">Archive</button><button class="btn ghost" data-action="expire">Expire</button><button class="btn danger" data-action="delete">Delete content</button><button class="btn ghost" data-action="new-content">New WOM discovery</button><button class="btn ghost" data-action="restore-last">Restore last</button></div></section>`;
}

function renderTransformStudio(){
  const t=state.settings.transform || (state.settings.transform={target:'selected title',x:0,y:0,scale:100,width:100,lineHeight:115,letterSpacing:0,cardGap:16,sectionSpacing:36});
  return `<section class="editor-card transform-studio"><h2>Free Transform / Mobile Alignment</h2><p class="muted">Use this like a safe Photoshop-style transform panel. It controls spacing and alignment without breaking the approved layout.</p><div class="form-grid"><label class="field">Target <select data-transform="target"><option ${t.target==='selected title'?'selected':''}>selected title</option><option ${t.target==='website text'?'selected':''}>website text</option><option ${t.target==='cards grid'?'selected':''}>cards grid</option></select></label><label class="field">Move X <input type="range" min="-80" max="80" value="${e(t.x)}" data-transform="x"></label><label class="field">Move Y <input type="range" min="-80" max="80" value="${e(t.y)}" data-transform="y"></label><label class="field">Scale % <input type="range" min="70" max="140" value="${e(t.scale)}" data-transform="scale"></label><label class="field">Text width % <input type="range" min="60" max="100" value="${e(t.width)}" data-transform="width"></label><label class="field">Line height % <input type="range" min="90" max="160" value="${e(t.lineHeight)}" data-transform="lineHeight"></label><label class="field">Letter spacing <input type="range" min="-2" max="8" step="0.5" value="${e(t.letterSpacing)}" data-transform="letterSpacing"></label><label class="field">Card gap px <input type="range" min="6" max="36" value="${e(t.cardGap)}" data-transform="cardGap"></label><label class="field">Section spacing px <input type="range" min="16" max="72" value="${e(t.sectionSpacing)}" data-transform="sectionSpacing"></label><label class="field full"><input type="checkbox" ${state.settings.gridOverlay?'checked':''} data-setting-check="gridOverlay"> Show mobile grid overlay in AdminPro preview</label></div><button class="btn primary" data-action="save-style">Save transform</button></section>`;
}
function renderNavigationStudio(){
  const labels=state.settings.menuLabels || (state.settings.menuLabels={});
  return `<section class="editor-card"><h2>Navigation, Logo & Page Editor</h2><p class="muted">Change menu names, logo and page routes without editing code. These are the same menus shown on the public website and inside AdminPro preview.</p><div class="form-grid"><label class="field">Website name <input value="${e(state.settings.siteTitle)}" data-setting="siteTitle"></label><label class="field">Short brand <input value="${e(state.settings.short)}" data-setting="short"></label><label class="field full">Tagline <textarea data-setting="tagline">${e(state.settings.tagline)}</textarea></label><label class="field">Logo URL <input value="${e(state.settings.logo||'')}" data-setting="logo"></label><label class="field">Upload logo <input type="file" accept="image/*" data-logo-upload></label></div><h3>Main menu labels</h3><div class="form-grid">${Object.entries(MENUS).map(([k,m])=>`<label class="field">${e(m.label)} <input value="${e(labels[k]||m.label)}" data-menu-label="${e(k)}"></label>`).join('')}</div><h3>Connected pages</h3><div class="queue-list">${[['Home','home'],['Explore','explore'],['Calendar','calendar'],['Visitor info','visitor'],['Post your event','post'],['Promote','promote'],['Support','support'],['Profile','profile'],['Saved','saved']].map(([name,r])=>`<div class="queue-item"><div><strong>${name}</strong><br><small>#${r}</small></div><button data-admin-preview-route="${r}">Open in editor preview</button></div>`).join('')}</div><button class="btn primary" data-action="save-style">Save navigation</button></section>`;
}

function renderBuilderStudio(){
  const b=state.settings.builder || (state.settings.builder={enabled:true,boxes:[]});
  return `<section class="editor-card"><h2>Builder / Developer Footer Advertisement</h2><p class="muted">Edit the footer builder credit without changing code. This can promote your development company, support contact, logo and website link.</p><div class="form-grid"><label class="field full"><input type="checkbox" ${b.enabled?'checked':''} data-builder-check="enabled"> Show builder footer section</label><label class="field">Footer label <input value="${e(b.label||'Engineered by')}" data-builder="label"></label><label class="field">Builder name <input value="${e(b.name||'')}" data-builder="name"></label><label class="field">Website URL <input value="${e(b.url||'')}" data-builder="url" placeholder="https://..."></label><label class="field">Button text <input value="${e(b.websiteText||'Visit builder')}" data-builder="websiteText"></label><label class="field">Phone <input value="${e(b.phone||'')}" data-builder="phone" placeholder="+91..."></label><label class="field">Email <input value="${e(b.email||'')}" data-builder="email" placeholder="support@example.com"></label><label class="field full">Short description <textarea data-builder="description">${e(b.description||'')}</textarea></label><label class="field">Logo URL <input value="${e(b.logo||'')}" data-builder="logo"></label><label class="field">Upload logo <input type="file" accept="image/*" data-builder-logo></label></div><h3>Footer boxes</h3><div class="builder-box-editor">${(b.boxes||[]).map((box,i)=>`<article class="ticker-line-card"><div class="ticker-line-head"><strong>Box ${i+1}</strong><button data-builder-remove-box="${e(box.id)}">Delete</button></div><div class="form-grid"><label class="field">Box title <input value="${e(box.title||'')}" data-builder-box="title" data-id="${e(box.id)}"></label><label class="field">Box value <input value="${e(box.value||'')}" data-builder-box="value" data-id="${e(box.id)}"></label></div></article>`).join('')}</div><div class="action-grid"><button class="btn ghost" data-builder-add-box>Add contact/info box</button><button class="btn primary" data-action="save-builder">Save builder footer</button></div><h3>Live footer preview</h3>${renderFooter(true)}</section>`;
}
function renderTickerStudio(){
  const t=state.settings.ticker;
  return `<section class="editor-card ticker-editor"><h2>Full Ticker Tape Editor</h2><p class="muted">Edit each ticker line separately. Select a word or letter inside a line, then use the font, size, colour, bold, italic or link controls.</p><div class="form-grid"><label class="field">Ticker type <select data-ticker-setting="type"><option ${t.type==='single'?'selected':''}>single</option><option ${t.type==='multi'?'selected':''}>multi</option></select></label><label class="field">Scroll direction <select data-ticker-setting="direction"><option value="rtl" ${t.direction!=='ltr'?'selected':''}>Right to left</option><option value="ltr" ${t.direction==='ltr'?'selected':''}>Left to right</option></select></label><label class="field">Speed seconds <input type="number" min="5" max="120" value="${e(t.speed)}" data-ticker-setting="speed"><small class="muted">Lower number = faster</small></label><label class="field">Background <input type="color" value="${e(t.bg)}" data-ticker-setting="bg"></label><label class="field">Default text colour <input type="color" value="${e(t.text)}" data-ticker-setting="text"></label><label class="field">Font <select data-ticker-setting="font"><option>Inter</option><option>Georgia</option><option>Arial</option><option>Trebuchet MS</option><option>Courier New</option></select></label><label class="field">Font size <input type="number" value="${e(t.fontSize)}" data-ticker-setting="fontSize"></label></div><div class="icon-picker">${icons.map(i=>`<button data-icon="${i}">${i}</button>`).join('')}</div>${renderToolbar('ticker')}<div class="ticker-lines">${t.lines.map((l,i)=>renderTickerLine(l,i)).join('')}</div><div class="action-grid"><button class="btn primary" data-action="add-ticker-line">Add line</button><button class="btn ghost" data-action="add-ticker-box">Add box style line</button><button class="btn ghost" data-action="ticker-subline">Add subline</button><button class="btn primary" data-action="save-ticker">Save ticker</button></div><h3>Live ticker preview</h3>${renderTicker(true)}</section>`;
}
function renderTickerLine(l,i){
  return `<article class="ticker-line-card" data-ticker-line="${e(l.id)}"><div class="ticker-line-head"><label><input type="checkbox" ${l.enabled?'checked':''} data-ticker-line-enabled="${e(l.id)}"> Enabled</label><button data-action="remove-ticker-line" data-id="${e(l.id)}">Delete</button></div><div class="form-grid"><label class="field">Emoji/icon <input value="${e(l.emoji)}" data-ticker-line-field="emoji" data-id="${e(l.id)}"></label><label class="field">Line background <input type="color" value="${e(l.bg||state.settings.ticker.bg)}" data-ticker-line-field="bg" data-id="${e(l.id)}"></label><label class="field">Line text colour <input type="color" value="${e(l.text||state.settings.ticker.text)}" data-ticker-line-field="text" data-id="${e(l.id)}"></label><label class="field full">Ticker line ${i+1}<div class="rich ticker-rich" contenteditable="true" data-ticker-rich="${e(l.id)}">${rich(l.html)}</div></label></div></article>`;
}
function renderStyleStudio(){
  const s=state.settings;
  return `<section class="editor-card"><h2>Header, Footer & Website Style</h2><p class="muted">This changes colour/font variables without rebuilding the AdminPro code again.</p><div class="form-grid"><label class="field">Header background <input type="color" value="${e(s.headerBg)}" data-setting="headerBg"></label><label class="field">Header text <input type="color" value="${e(s.headerText)}" data-setting="headerText"></label><label class="field">Footer background <input type="color" value="${e(s.footerBg)}" data-setting="footerBg"></label><label class="field">Footer text <input type="color" value="${e(s.footerText)}" data-setting="footerText"></label><label class="field">Accent colour <input type="color" value="${e(s.accent)}" data-setting="accent"></label><label class="field">Website font size % <input type="range" min="85" max="125" value="${e(s.fontScale)}" data-setting="fontScale"></label><label class="field">Brightness % <input type="range" min="70" max="130" value="${e(s.brightness)}" data-setting="brightness"></label><label class="field">Default card view <select data-setting="defaultView"><option ${s.defaultView==='grid'?'selected':''}>grid</option><option ${s.defaultView==='compact'?'selected':''}>compact</option><option ${s.defaultView==='list'?'selected':''}>list</option></select></label></div><div class="action-grid"><button data-theme-toggle="darkMode">Toggle dark mode</button><button data-theme-toggle="retro">Toggle retro theme</button><button data-theme-toggle="japan">Toggle Japan soft theme</button><button class="btn primary" data-action="save-style">Save style</button></div></section>`;
}
function renderMediaStudio(c){
  return `<section class="editor-card"><h2>Media Library & Hero Slides</h2><p class="muted">Hero supports images, uploaded videos and embed URLs. Swipeable hero keeps 10 slots.</p><div class="hero-admin-list">${state.hero.map((h,i)=>`<article class="hero-admin"><img src="${e(h.image)}" alt=""><div><strong>Slide ${i+1}</strong><input value="${e(h.title)}" data-hero-field="title" data-hero-index="${i}"><input value="${e(h.subtitle)}" data-hero-field="subtitle" data-hero-index="${i}"><input value="${e(h.image)}" data-hero-field="image" data-hero-index="${i}" placeholder="Image URL"><input value="${e(h.embedUrl)}" data-hero-field="embedUrl" data-hero-index="${i}" placeholder="Embed URL"><select data-hero-field="mediaType" data-hero-index="${i}"><option ${h.mediaType==='image'?'selected':''}>image</option><option ${h.mediaType==='video'?'selected':''}>video</option><option ${h.mediaType==='embed'?'selected':''}>embed</option></select><input type="file" accept="image/*,video/*" data-hero-upload="${i}"></div></article>`).join('')}</div><button class="btn primary" data-action="save-hero">Save hero slides</button></section>`;
}
function renderQueueStudio(){
  return `<section class="editor-card"><h2>Publishing Queue</h2><div class="queue-list">${state.items.map(x=>`<div class="queue-item"><img src="${e(x.image)}" alt=""><div><strong>${rich(x.title)}</strong><br><small>${e(x.status)} · ${e(x.verification)} · ${e(x.district)}</small></div><button data-select-item="${e(x.id)}">Edit</button></div>`).join('')}</div></section>`;
}
function renderHistoryStudio(c){
  return `<section class="editor-card"><h2>Version History</h2><div class="queue-list">${state.history.map((h,i)=>`<div class="queue-item"><img src="${e(c.image)}" alt=""><div><strong>${e(h.note)}</strong><br><small>${e(h.at)} · ${h.items} items</small></div><button data-history-index="${i}">Restore</button></div>`).join('') || '<p class="muted">No saves yet.</p>'}</div></section>`;
}

function setupFloatingDock(){
  document.body.classList.remove('dock-idle');
  document.body.classList.add('dock-awake');
}
function wakeDock(){ document.body.classList.add('dock-awake'); document.body.classList.remove('dock-idle'); }
function bind(){
  document.querySelectorAll('[data-admin-login]').forEach(f=>f.onsubmit=(ev)=>{ev.preventDefault(); const pass=new FormData(f).get('password'); if(pass===ADMIN_PASSWORD){sessionStorage.setItem('wom-admin-auth','yes'); flash('AdminPro unlocked'); render();} else {flash('Wrong admin password');}});
  document.querySelectorAll('[data-route]').forEach(el=>el.onclick=(ev)=>{ev.preventDefault(); ui.menu=null; ui.burger=false; ui.burgerGroup=null; ui.searchPanel=null; ui.postSheet=false; go(el.dataset.route);});
  document.querySelectorAll('[data-back]').forEach(el=>el.onclick=()=>history.length>1?history.back():go('home'));
  document.querySelectorAll('[data-burger]').forEach(el=>el.onclick=()=>{ui.burger=!ui.burger; ui.burgerGroup=null; ui.menu=null; render();});
  document.querySelectorAll('[data-burger-close]').forEach(el=>el.onclick=()=>{ui.burger=false;ui.burgerGroup=null;render();});
  document.querySelectorAll('[data-burger-group]').forEach(el=>el.onclick=(ev)=>{ev.preventDefault();ev.stopPropagation();ui.burgerGroup=ui.burgerGroup===el.dataset.burgerGroup?null:el.dataset.burgerGroup;ui.menu=null;render();});
  document.querySelectorAll('[data-burger-filter]').forEach(el=>el.onclick=()=>{ui.burger=false;ui.burgerGroup=null;ui.menu=null;go('category/'+encodeURIComponent(el.dataset.burgerFilter));});
  document.querySelectorAll('[data-menu]').forEach(el=>{
    el.onmouseenter=()=>{ if(matchMedia('(hover:hover)').matches){ ui.menu=el.dataset.menu; ui.burger=false; render(); } };
    el.onclick=(ev)=>{ ev.preventDefault(); if(matchMedia('(hover:hover)').matches){ go(el.dataset.route); } else { ui.menu=ui.menu===el.dataset.menu?null:el.dataset.menu; render(); } };
  });
  document.querySelectorAll('[data-menu-surface]').forEach(el=>el.onmouseleave=()=>{setTimeout(()=>{ui.menu=null; render();},220)});
  document.querySelectorAll('[data-filter]').forEach(el=>el.onclick=()=>{ui.menu=null; ui.burger=false; go('category/'+encodeURIComponent(el.dataset.filter));});
  document.querySelectorAll('[data-menu-close]').forEach(el=>el.onclick=()=>{ui.menu=null; render();});
  document.querySelectorAll('[data-view]').forEach(el=>el.onclick=()=>{ui.view=el.dataset.view; state.settings.defaultView=ui.view; saveState('View changed'); render();});
  document.querySelectorAll('[data-hero-next]').forEach(el=>el.onclick=()=>{ui.heroIndex=(ui.heroIndex+1)%state.hero.length;render();});
  document.querySelectorAll('[data-hero-prev]').forEach(el=>el.onclick=()=>{ui.heroIndex=(ui.heroIndex-1+state.hero.length)%state.hero.length;render();});
  document.querySelectorAll('[data-hero-dot]').forEach(el=>el.onclick=()=>{ui.heroIndex=Number(el.dataset.heroDot);render();});
  bindSwipe(); bindButtons(); bindForms(); bindAI(); setupFloatingDock(); if(route==='-admin') bindAdmin();
}
function bindSwipe(){ let start=0; document.querySelectorAll('[data-swipe-hero]').forEach(el=>{el.ontouchstart=e=>{start=e.touches[0].clientX}; el.ontouchend=e=>{const dx=(e.changedTouches[0].clientX-start); if(Math.abs(dx)>45){ui.heroIndex=(ui.heroIndex+(dx<0?1:-1)+state.hero.length)%state.hero.length;render();}};}); }
function bindButtons(){
  document.querySelectorAll('[data-action="save"]').forEach(b=>b.onclick=()=>{const id=b.dataset.id; state.saved=state.saved.includes(id)?state.saved.filter(x=>x!==id):[...state.saved,id]; saveState(state.saved.includes(id)?'Saved':'Removed from saved'); render();});
  document.querySelectorAll('[data-action="remind"]').forEach(b=>b.onclick=()=>{const id=b.dataset.id; if(!state.reminders.includes(id)) state.reminders.push(id); saveState('Reminder set on this device'); render();});
  document.querySelectorAll('[data-action="share"]').forEach(b=>b.onclick=async()=>{const it=state.items.find(x=>x.id===b.dataset.id); const url=location.origin+location.pathname+`#event/${it.id}`; if(navigator.share){ await navigator.share({title:plain(it.title),text:plain(it.summary),url}).catch(()=>{}); } else { await navigator.clipboard?.writeText(url); flash('Share link copied'); render(); }});
  document.querySelectorAll('[data-open-source]').forEach(b=>b.onclick=()=> b.dataset.openSource ? window.open(b.dataset.openSource,'_blank') : flash('Original source URL not added yet'));
  document.querySelectorAll('[data-action="claim"]').forEach(b=>b.onclick=()=>{state.claims.push({id:b.dataset.id, at:new Date().toLocaleString()}); saveState('Claim request started'); go('support');});
  document.querySelectorAll('[data-action="report"]').forEach(b=>b.onclick=()=>{state.reports.push({id:b.dataset.id, at:new Date().toLocaleString()}); saveState('Report saved for admin review'); go('support');});
  document.querySelectorAll('[data-search-btn]').forEach(b=>b.onclick=()=>{const q=document.querySelector('[data-search-input]')?.value||''; go('category/'+encodeURIComponent(q||'Explore'));});
  document.querySelectorAll('[data-search-panel]').forEach(b=>b.onclick=(ev)=>{ev.preventDefault(); ui.searchPanel=b.dataset.searchPanel; ui.postSheet=false; render();});
  document.querySelectorAll('[data-close-panel]').forEach(b=>b.onclick=()=>{ui.searchPanel=null; render();});
  document.querySelectorAll('[data-search-option]').forEach(b=>b.onclick=()=>{const v=b.dataset.searchOption; ui.searchPanel=null; go((b.dataset.searchType==='where' && v!=='Anywhere')?'district/'+encodeURIComponent(v):b.dataset.searchType==='when'?'calendar':'category/'+encodeURIComponent(v));});
  document.querySelectorAll('[data-calendar-view]').forEach(b=>b.onclick=()=>{flash(b.textContent.trim()+' view selected');});
  document.querySelectorAll('[data-social]').forEach(b=>b.onclick=async()=>{const it=state.items.find(x=>x.id===b.dataset.id); const url=location.origin+location.pathname+`#event/${it.id}`; const txt=`${plain(it.title)} - ${url}`; if(b.dataset.social==='facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank'); else if(b.dataset.social==='twitter') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(txt)}`,'_blank'); else {await navigator.clipboard?.writeText(txt); flash(`${b.dataset.social} share text copied`);} });
  document.querySelectorAll('[data-post-sheet-open]').forEach(b=>b.onclick=(ev)=>{ev.preventDefault(); ui.postSheet=true; ui.searchPanel=null; wakeDock(); render();});
  document.querySelectorAll('[data-post-sheet-close]').forEach(b=>b.onclick=()=>{ui.postSheet=false; render();});
}
function bindForms(){
  document.querySelectorAll('[data-simple-form]').forEach(f=>f.onsubmit=(ev)=>{ev.preventDefault(); const type=f.dataset.simpleForm; const data=Object.fromEntries(new FormData(f).entries()); state[type==='contact'?'contacts':type==='guestbook'?'guestbook':'submissions'].push({...data,at:new Date().toLocaleString()}); saveState(type==='contact'?'Support message saved':type==='guestbook'?'Guestbook signed':'Submission saved for review'); f.reset(); render();});
}
function bindAI(){
  document.querySelectorAll('[data-ai-toggle],[data-ai-open]').forEach(b=>b.onclick=()=>{ui.aiOpen=!ui.aiOpen; render();});
  document.querySelectorAll('[data-ai-panel]').forEach(b=>b.onclick=()=>{ui.aiPanel=b.dataset.aiPanel; render();});
  document.querySelectorAll('[data-ai-run]').forEach(b=>b.onclick=()=>render());
  document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.onclick=()=>{const k=b.dataset.themeToggle; state.settings[k]=!state.settings[k]; saveState(`${k} changed`); render();});
  document.querySelectorAll('[data-setting]').forEach(el=>el.oninput=()=>{const k=el.dataset.setting; state.settings[k]=el.type==='range'?Number(el.value):el.value; saveState('Reader/style setting changed'); render();});
  document.querySelectorAll('[data-autoscroll]').forEach(b=>b.onclick=()=>{clearInterval(ui.autoScroll); ui.autoScroll=setInterval(()=>scrollBy({top:1,behavior:'smooth'}),60); flash('Auto-scroll started'); render();});
  document.querySelectorAll('[data-autoscroll-stop]').forEach(b=>b.onclick=()=>{clearInterval(ui.autoScroll); flash('Auto-scroll stopped'); render();});
  bindAIDrag();
}
function bindAIDrag(){
  const widget=document.querySelector('[data-ai-widget]');
  const handle=document.querySelector('[data-ai-drag-handle]');
  if(!widget||!handle) return;
  let moved=false, sx=0, sy=0, ox=0, oy=0;
  handle.onpointerdown=(ev)=>{moved=false; sx=ev.clientX; sy=ev.clientY; const r=widget.getBoundingClientRect(); ox=r.left; oy=r.top; handle.setPointerCapture?.(ev.pointerId);};
  handle.onpointermove=(ev)=>{if(!handle.hasPointerCapture?.(ev.pointerId)) return; const dx=ev.clientX-sx, dy=ev.clientY-sy; if(Math.abs(dx)+Math.abs(dy)>6) moved=true; const x=Math.max(8, Math.min(innerWidth-86, ox+dx)); const y=Math.max(78, Math.min(innerHeight-190, oy+dy)); widget.style.left=x+'px'; widget.style.top=y+'px'; widget.style.right='auto'; widget.style.bottom='auto'; state.settings.aiPos={x,y}; setQuiet();};
  handle.onpointerup=(ev)=>{try{handle.releasePointerCapture(ev.pointerId)}catch{}; if(moved){ev.preventDefault(); ev.stopPropagation(); flash('AI button position saved'); render();}};
}

function bindAdmin(){
  const previewPane = document.querySelector('.preview-pane');
  if(previewPane){
    previewPane.addEventListener('click',(ev)=>{
      ev.preventDefault();
      ev.stopPropagation();
      handleAdminPreviewClick(ev);
    }, true);
  }
  document.querySelectorAll('[data-admin-preview-home]').forEach(b=>b.onclick=()=>adminPreviewGo('home'));
  document.querySelectorAll('[data-admin-preview-back]').forEach(b=>b.onclick=()=>adminPreviewBack());
  document.querySelectorAll('[data-admin-preview-route]').forEach(b=>b.onclick=()=>adminPreviewGo(b.dataset.adminPreviewRoute));
  document.querySelectorAll('[data-admin-logout]').forEach(b=>b.onclick=()=>{sessionStorage.removeItem('wom-admin-auth'); render();});
  document.querySelectorAll('[data-admin-tab]').forEach(b=>b.onclick=()=>{ui.adminTab=b.dataset.adminTab; render();});
  document.querySelectorAll('[data-studio-mode]').forEach(b=>b.onclick=()=>{ui.studioMode=b.dataset.studioMode; render();});
  document.querySelectorAll('[data-admin-select]').forEach(el=>el.onclick=(ev)=>{ev.preventDefault(); ev.stopPropagation(); if(el.dataset.id) state.selectedId=el.dataset.id; if(el.dataset.adminSelect==='ticker') ui.adminTab='ticker'; saveState('Selected preview area'); ui.studioMode='edit'; render();});
  document.querySelectorAll('[data-select-item]').forEach(b=>b.onclick=()=>{state.selectedId=b.dataset.selectItem; ui.adminTab='content'; render();});
  document.querySelectorAll('[data-edit]').forEach(el=>{
    el.oninput=()=>{const c=selected(); c[el.dataset.edit]=el.value; if(el.dataset.edit==='sourceUrl') c.sourcePlatform=platformFrom(el.value); localStorage.setItem(STORAGE, JSON.stringify(state)); ui.log='Field updated locally';};
    el.onchange=()=>{saveState('Field updated'); render();};
  });
  document.querySelectorAll('[data-rich]').forEach(el=>{el.onfocus=()=>ui.lastRich=el; el.oninput=()=>{const c=selected(); c[el.dataset.rich]=sanitize(el.innerHTML); saveState('Rich text updated');};});
  document.querySelectorAll('[data-upload]').forEach(el=>el.onchange=()=>readUpload(el.files?.[0], data=>{const c=selected(); if(el.dataset.upload==='video'){c.videoData=data;c.mediaType='video';} else {c.image=data;c.mediaType='image';} saveState('Media uploaded'); render();}));
  document.querySelectorAll('[data-action]').forEach(b=>{ if(['save','remind','share','claim','report'].includes(b.dataset.action)) return; b.onclick=()=>handleAdminAction(b.dataset.action, b.dataset.id); });
  bindToolbar(); bindTickerAdmin(); bindStyleAdmin(); bindHeroAdmin(); bindBuilderAdmin(); bindAIAdmin();
}
function selectPreviewForEdit(el){
  if(el.dataset.id) state.selectedId=el.dataset.id;
  const area=el.dataset.adminSelect;
  const tabs={item:'content',ticker:'ticker',settings:'style',footer:'style',builder:'builder',hero:'media'};
  ui.adminTab=tabs[area]||'content';
  ui.studioMode='edit';
  saveState(`Selected ${area||'preview'} for editing`);
  render();
}
function adminPreviewGo(r){
  const next=normalizeRoute(r||'home');
  if(ui.adminPreviewRoute!==next) ui.adminPreviewHistory.push(ui.adminPreviewRoute||'home');
  ui.adminPreviewRoute=next;
  ui.menu=null; ui.burger=false; ui.burgerGroup=null;
  if(next.startsWith('event/')){ const id=next.split('/')[1]; if(state.items.some(x=>x.id===id)) state.selectedId=id; ui.adminTab='content'; }
  setQuiet();
  render();
}
function adminPreviewBack(){
  ui.adminPreviewRoute = ui.adminPreviewHistory.pop() || 'home';
  ui.menu=null; ui.burger=false; ui.burgerGroup=null;
  render();
}
function handleAdminPreviewClick(ev){
  const target=ev.target;
  const menu=target.closest('[data-menu]');
  if(menu){ ui.menu = ui.menu===menu.dataset.menu ? null : menu.dataset.menu; ui.burger=false; render(); return; }
  if(target.closest('[data-menu-close]')){ ui.menu=null; render(); return; }
  const searchPanel=target.closest('[data-search-panel]');
  if(searchPanel){ ui.searchPanel=searchPanel.dataset.searchPanel; render(); return; }
  const closePanel=target.closest('[data-close-panel]');
  if(closePanel){ ui.searchPanel=null; render(); return; }
  const searchOption=target.closest('[data-search-option]');
  if(searchOption){ const v=searchOption.dataset.searchOption; ui.searchPanel=null; adminPreviewGo((searchOption.dataset.searchType==='where' && v!=='Anywhere')?'district/'+encodeURIComponent(v):searchOption.dataset.searchType==='when'?'calendar':'category/'+encodeURIComponent(v)); return; }
  if(target.closest('[data-post-sheet-open]')){ ui.postSheet=true; render(); return; }
  if(target.closest('[data-post-sheet-close]')){ ui.postSheet=false; render(); return; }
  if(target.closest('[data-burger]')){ ui.burger=!ui.burger; ui.burgerGroup=null; ui.menu=null; render(); return; }
  if(target.closest('[data-burger-close]')){ ui.burger=false; ui.burgerGroup=null; render(); return; }
  const burgerGroup=target.closest('[data-burger-group]');
  if(burgerGroup){ ui.burgerGroup=ui.burgerGroup===burgerGroup.dataset.burgerGroup?null:burgerGroup.dataset.burgerGroup; ui.menu=null; render(); return; }
  const burgerFilter=target.closest('[data-burger-filter]');
  if(burgerFilter){ ui.burger=false; ui.burgerGroup=null; adminPreviewGo('category/'+encodeURIComponent(burgerFilter.dataset.burgerFilter)); return; }
  const filter=target.closest('[data-filter]');
  if(filter){ adminPreviewGo('category/'+encodeURIComponent(filter.dataset.filter)); return; }
  const view=target.closest('[data-view]');
  if(view){ ui.view=view.dataset.view; state.settings.defaultView=ui.view; saveState('Admin preview view changed'); render(); return; }
  if(target.closest('[data-hero-next]')){ ui.heroIndex=(ui.heroIndex+1)%state.hero.length; render(); return; }
  if(target.closest('[data-hero-prev]')){ ui.heroIndex=(ui.heroIndex-1+state.hero.length)%state.hero.length; render(); return; }
  const dot=target.closest('[data-hero-dot]');
  if(dot){ ui.heroIndex=Number(dot.dataset.heroDot); render(); return; }
  if(target.closest('[data-back]')){ adminPreviewBack(); return; }
  const routeEl=target.closest('[data-route]');
  if(routeEl){ adminPreviewGo(routeEl.dataset.route); return; }
  const source=target.closest('[data-open-source]');
  if(source){ flash('Source links are disabled inside AdminPro preview. Edit the source URL in Content Studio.'); render(); return; }
  const pick=target.closest('[data-admin-select]');
  if(pick){ selectPreviewForEdit(pick); return; }
  flash('Admin preview stays inside the editor. Use menus/routes here or click a section to edit.');
  render();
}
function bindToolbar(){
  document.querySelectorAll('[data-cmd]').forEach(b=>b.onclick=(ev)=>{ev.preventDefault(); (ui.lastRich||document.querySelector('.rich'))?.focus(); document.execCommand(b.dataset.cmd,false,null); syncRich();});
  document.querySelectorAll('[data-font]').forEach(s=>s.onchange=()=>{(ui.lastRich||document.querySelector('.rich'))?.focus(); document.execCommand('fontName',false,s.value); syncRich();});
  document.querySelectorAll('[data-size]').forEach(s=>s.onchange=()=>{(ui.lastRich||document.querySelector('.rich'))?.focus(); document.execCommand('fontSize',false,s.value); syncRich();});
  document.querySelectorAll('[data-color]').forEach(i=>i.oninput=()=>{(ui.lastRich||document.querySelector('.rich'))?.focus(); document.execCommand('foreColor',false,i.value); syncRich();});
  document.querySelectorAll('[data-bg]').forEach(i=>i.oninput=()=>{(ui.lastRich||document.querySelector('.rich'))?.focus(); document.execCommand('hiliteColor',false,i.value); syncRich();});
  document.querySelectorAll('[data-link]').forEach(b=>b.onclick=()=>{const url=prompt('Paste link URL'); if(url){(ui.lastRich||document.querySelector('.rich'))?.focus(); document.execCommand('createLink',false,url); syncRich();}});
}
function syncRich(){
  const el=ui.lastRich; if(!el) return;
  if(el.dataset.rich){ selected()[el.dataset.rich]=sanitize(el.innerHTML); saveState('Text style changed'); }
  if(el.dataset.tickerRich){ const l=state.settings.ticker.lines.find(x=>x.id===el.dataset.tickerRich); if(l){l.html=sanitize(el.innerHTML); saveState('Ticker text styled');} }
}
function bindTickerAdmin(){
  document.querySelectorAll('[data-ticker-setting]').forEach(el=>el.oninput=()=>{const k=el.dataset.tickerSetting; state.settings.ticker[k]=el.type==='number'?Number(el.value):el.value; saveState('Ticker setting changed'); render();});
  document.querySelectorAll('[data-ticker-rich]').forEach(el=>{el.onfocus=()=>ui.lastRich=el; el.oninput=()=>{const l=state.settings.ticker.lines.find(x=>x.id===el.dataset.tickerRich); if(l){l.html=sanitize(el.innerHTML); saveState('Ticker line updated');}};});
  document.querySelectorAll('[data-ticker-line-field]').forEach(el=>el.oninput=()=>{const l=state.settings.ticker.lines.find(x=>x.id===el.dataset.id); if(l){l[el.dataset.tickerLineField]=el.value; saveState('Ticker line style updated'); render();}});
  document.querySelectorAll('[data-ticker-line-enabled]').forEach(el=>el.onchange=()=>{const l=state.settings.ticker.lines.find(x=>x.id===el.dataset.tickerLineEnabled); if(l){l.enabled=el.checked; saveState('Ticker enabled changed'); render();}});
  document.querySelectorAll('[data-icon]').forEach(b=>b.onclick=()=>{const l=state.settings.ticker.lines[0]; if(l) l.emoji=b.dataset.icon; saveState('Ticker icon picked'); render();});
}
function bindStyleAdmin(){
  document.querySelectorAll('.editor-pane [data-setting]').forEach(el=>el.oninput=()=>{const k=el.dataset.setting; state.settings[k]=el.type==='range'?Number(el.value):el.value; if(k==='defaultView') ui.view=el.value; saveState('Website style updated'); render();});
  document.querySelectorAll('.editor-pane [data-setting-check]').forEach(el=>el.onchange=()=>{state.settings[el.dataset.settingCheck]=el.checked; saveState('Website setting updated'); render();});
  document.querySelectorAll('.editor-pane [data-transform]').forEach(el=>el.oninput=()=>{const t=state.settings.transform||(state.settings.transform={}); t[el.dataset.transform]=el.type==='range'||el.type==='number'?Number(el.value):el.value; saveState('Free transform updated'); render();});
  document.querySelectorAll('.editor-pane [data-menu-label]').forEach(el=>el.oninput=()=>{state.settings.menuLabels=state.settings.menuLabels||{}; state.settings.menuLabels[el.dataset.menuLabel]=el.value; saveState('Menu label updated'); render();});
  document.querySelectorAll('[data-logo-upload]').forEach(el=>el.onchange=()=>readUpload(el.files?.[0], data=>{state.settings.logo=data; saveState('Logo uploaded'); render();}));
}
function bindHeroAdmin(){
  document.querySelectorAll('[data-hero-field]').forEach(el=>el.oninput=()=>{const h=state.hero[Number(el.dataset.heroIndex)]; h[el.dataset.heroField]=el.value; saveState('Hero slide updated');});
  document.querySelectorAll('[data-hero-upload]').forEach(el=>el.onchange=()=>readUpload(el.files?.[0], data=>{const h=state.hero[Number(el.dataset.heroUpload)]; if((el.files?.[0]?.type||'').startsWith('video')){h.videoData=data; h.mediaType='video';}else{h.image=data; h.mediaType='image';} saveState('Hero media uploaded'); render();}));
}
function bindBuilderAdmin(){
  document.querySelectorAll('[data-builder]').forEach(el=>el.oninput=()=>{const b=state.settings.builder; b[el.dataset.builder]=el.value; saveState('Builder footer updated'); render();});
  document.querySelectorAll('[data-builder-check]').forEach(el=>el.onchange=()=>{const b=state.settings.builder; b[el.dataset.builderCheck]=el.checked; saveState('Builder footer visibility updated'); render();});
  document.querySelectorAll('[data-builder-logo]').forEach(el=>el.onchange=()=>readUpload(el.files?.[0], data=>{state.settings.builder.logo=data; saveState('Builder logo uploaded'); render();}));
  document.querySelectorAll('[data-builder-add-box]').forEach(b=>b.onclick=()=>{state.settings.builder.boxes.push({id:`builder-box-${Date.now()}`,title:'New info',value:'Edit this detail'}); saveState('Builder info box added'); render();});
  document.querySelectorAll('[data-builder-remove-box]').forEach(b=>b.onclick=()=>{state.settings.builder.boxes=state.settings.builder.boxes.filter(x=>x.id!==b.dataset.builderRemoveBox); saveState('Builder info box removed'); render();});
  document.querySelectorAll('[data-builder-box]').forEach(el=>el.oninput=()=>{const box=state.settings.builder.boxes.find(x=>x.id===el.dataset.id); if(box){box[el.dataset.builderBox]=el.value; saveState('Builder box updated'); render();}});
}
function bindAIAdmin(){
  document.querySelectorAll('[data-ai]').forEach(b=>b.onclick=()=>{const c=selected(); const type=b.dataset.ai; if(type==='headline') c.title = `WOM Discovery: ${plain(c.category)} in ${plain(c.district)}`; if(type==='summary') c.summary = `An original WOM local discovery summary based on visible, verifiable details. Please confirm timing, offer terms and availability with the organiser.`; if(type==='article') c.body = `<p>${c.summary}</p><p>WOM created this as an original editorial post. It does not copy the original source caption, photo, poster or video.</p><p><strong>Verify:</strong> Check the original source or contact the organiser before travelling or purchasing.</p>`; if(type==='promo') {c.badge='PUBLIC OFFER SPOTTED'; c.verification='Spotted by WOM';} if(type==='calendar') {c.status='published'; c.placement=[...new Set([...(c.placement||[]),'calendar'])];} if(type==='image-prompt') ui.log=`Image prompt: Original mobile-first editorial image for ${plain(c.title)}, Manipur local discovery style, no logos, no copied poster, no identifiable people.`; saveState(`AI ${type} generated`); render();});
}
function handleAdminAction(action,id){
  const c=selected();
  if(action==='analyse-url'){ c.sourcePlatform=platformFrom(c.sourceUrl); if(!c.title || c.title.includes('New WOM')) c.title=`${c.sourcePlatform} discovery draft`; c.lastChecked=new Date().toLocaleDateString('en-GB'); saveState('Source analysed with manual fallback fields'); return render(); }
  if(action==='publish'){ c.status='published'; c.lastChecked=c.lastChecked||new Date().toLocaleDateString('en-GB'); saveState('Published to public view on this browser'); return render(); }
  if(action==='draft'){ c.status='draft'; saveState('Saved as draft'); return render(); }
  if(action==='schedule'){ c.status='scheduled'; saveState('Scheduled'); return render(); }
  if(action==='archive'){ c.status='archived'; saveState('Archived'); return render(); }
  if(action==='expire'){ c.status='expired'; saveState('Expired'); return render(); }
  if(action==='delete'){ if(confirm('Delete this content from local build?')){ state.items=state.items.filter(x=>x.id!==c.id); state.selectedId=state.items[0]?.id; saveState('Deleted content'); render(); } return; }
  if(action==='duplicate'){ const copy={...c,id:`${c.id}-copy-${Date.now()}`,title:`${plain(c.title)} copy`,createdAt:Date.now()}; state.items.unshift(copy); state.selectedId=copy.id; saveState('Duplicated content'); return render(); }
  if(action==='new-content'){ const n=item(`ev-new-${Date.now()}`,'New WOM Discovery','AI-assisted local discovery draft. Add source, verify facts and upload an authorised image.','Markets','Imphal West','Manipur','Today','Anytime','WOM Content Studio',`${AS}card-09.jpg`,'WOM DISCOVERY','Spotted by WOM'); n.status='draft'; state.items.unshift(n); state.selectedId=n.id; saveState('New draft created'); return render(); }
  if(action==='restore-last'){ flash('Restore placeholder: history is logged; database restore comes in backend stage.'); return render(); }
  if(action==='add-ticker-line' || action==='add-ticker-box' || action==='ticker-subline') { state.settings.ticker.lines.push({id:`tick-${Date.now()}`,enabled:true,emoji:action==='ticker-subline'?'↳':action==='add-ticker-box'?'🏆':'✨',html:action==='ticker-subline'?'Subline text here':'New ticker message here',bg:action==='add-ticker-box'?'#fff4d8':state.settings.ticker.bg,text:state.settings.ticker.text}); saveState('Ticker line added'); return render(); }
  if(action==='remove-ticker-line'){ state.settings.ticker.lines=state.settings.ticker.lines.filter(x=>x.id!==id); saveState('Ticker line removed'); return render(); }
  if(action==='save-ticker'){ saveState('Ticker saved'); return render(); }
  if(action==='save-style'){ saveState('Website style saved'); return render(); }
  if(action==='save-builder'){ saveState('Builder footer saved'); return render(); }
  if(action==='save-hero'){ saveState('Hero slides saved'); return render(); }
}
function readUpload(file, cb){ if(!file) return; const r=new FileReader(); r.onload=()=>cb(r.result); r.readAsDataURL(file); }
function archiveExpired(){
  const now = Date.now(); let changed=false;
  state.items.forEach(x=>{ if(x.expiry){ const d=Date.parse(x.expiry); if(!isNaN(d) && d<now && x.status==='published'){ x.status='expired'; changed=true; } } });
  if(changed) saveState('Expired promotions auto-archived');
}
archiveExpired();
render();
