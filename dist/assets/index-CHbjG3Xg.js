(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`whatson-imphal-state-v1`,t=[`Cafe`,`Concert`,`Food`,`Hotels`,`Parks`,`Venues`,`Resorts`,`Markets`,`Local items`,`Culture`,`Workshop`,`Sports`],n=[{id:`free`,name:`Free Listing`,price:0,label:`Free`,cadence:`Unlimited posts, approval required`,features:[`Unlimited event posts`,`Admin approval`,`May appear in normal results`,`No guaranteed highlight`],weight:1},{id:`highlight`,name:`Highlight Boost`,price:100,label:`Rs 100 per ad`,cadence:`Highlighted listing rotation`,features:[`Appears in highlighted sections`,`Faster admin review`,`Good for one event or offer`],weight:5},{id:`oneoff`,name:`Main Page Feature`,price:200,label:`Rs 200 one-off`,cadence:`Top main page random rotation`,features:[`Featured hero/promo rotation`,`Priority over free posts`,`Best for cafes, concerts, resorts`],weight:8},{id:`monthly10`,name:`Monthly Starter`,price:500,label:`Rs 500/month`,cadence:`10 ads monthly`,features:[`10 promotional ads`,`Priority approval`,`More main page rotation`,`Profile analytics preview`],weight:12},{id:`premiumshop`,name:`Premium Shop Page`,price:1500,label:`Rs 1,500/month`,cadence:`Unlimited shop/menu page`,features:[`Dedicated vendor page`,`Unlimited photos`,`Menu/gallery support`,`Best rotation weight`],weight:20}],r={profile:{name:`Guest User`,email:``,phone:``,activePackage:`free`,joined:new Date().toISOString()},settings:{siteTitle:`What's On Imphal`,tagline:`Events, food, music, markets and local happenings across Manipur`,heroTitle:`Discover Imphal's best nights`,heroSubtitle:`Food, music and culture come alive`,heroImage:`./assets/hero-imphal-night.png`,accent:`#b7251d`,font:`Merriweather`,youtubeUrl:`https://www.youtube.com/embed/dQw4w9WgXcQ`,supportPhone:`+91 98765 43210`,supportEmail:`support@whatson.imphal.in`,upiId:`whatsonimphal@upi`,articleTitle:`City Guide`,articleBody:`A curated guide for events, food, music, markets, resorts, cafes and local experiences around Imphal.`,subArticleTitle:`For local organisers`,subArticleBody:`Create listings, choose a promotion package, and submit for admin review before publication.`},events:[{id:`evt-lai-haraoba`,title:`Lai Haraoba Cultural Evening`,category:`Culture`,type:`event`,date:`2026-07-12`,time:`5:30 PM`,location:`Manipur State Kala Academy, Imphal`,area:`Imphal`,price:`Free`,image:`./assets/event-lai-haraoba.png`,summary:`Traditional performance, ritual dance, folk music and storytelling celebrating local heritage.`,organiser:`Heritage Arts Collective`,packageId:`oneoff`,status:`approved`,featured:!0,paid:!0,likes:48,createdAt:`2026-07-01T09:00:00.000Z`},{id:`evt-ema-market`,title:`Ema Keithel Night Market`,category:`Markets`,type:`event`,date:`2026-07-11`,time:`6:00 PM`,location:`Ema Keithel, Imphal`,area:`Imphal`,price:`Free`,image:`./assets/event-ema-keithel.png`,summary:`Food stalls, craft tables and music around the market district.`,organiser:`Market Association`,packageId:`highlight`,status:`approved`,featured:!0,paid:!0,likes:31,createdAt:`2026-07-01T10:00:00.000Z`},{id:`evt-indie-music`,title:`Indie Music at Thangmeiband`,category:`Concert`,type:`event`,date:`2026-07-12`,time:`7:00 PM`,location:`Thangmeiband Tourists' Complex`,area:`Thangmeiband`,price:`Rs 150`,image:`./assets/event-indie-music.png`,summary:`Live bands, good sound and a small food court for a relaxed evening.`,organiser:`Imphal Indie Sessions`,packageId:`monthly10`,status:`approved`,featured:!0,paid:!0,likes:66,createdAt:`2026-07-02T10:00:00.000Z`},{id:`evt-loktak-walk`,title:`Loktak Weekend Walk`,category:`Parks`,type:`event`,date:`2026-07-14`,time:`8:00 AM`,location:`Sendra Island, Loktak Lake`,area:`Loktak`,price:`Outdoor`,image:`./assets/event-loktak.png`,summary:`A slow guided weekend walk around the lake with breakfast stop options.`,organiser:`Loktak Travel Circle`,packageId:`free`,status:`approved`,featured:!1,paid:!1,likes:22,createdAt:`2026-07-03T10:00:00.000Z`},{id:`evt-cafe-popup`,title:`Cafe Pop-up: Local Roasts`,category:`Cafe`,type:`event`,date:`2026-07-13`,time:`11:00 AM`,location:`The Corner House, Imphal`,area:`Imphal`,price:`Food & Drink`,image:`./assets/event-cafe.png`,summary:`Local coffee, seasonal snacks and a one-day cafe collaboration.`,organiser:`Corner House`,packageId:`premiumshop`,status:`approved`,featured:!0,paid:!0,likes:41,createdAt:`2026-07-04T10:00:00.000Z`}],promotions:[{id:`promo-corner-house`,title:`The Corner House`,category:`Cafe`,location:`Imphal`,image:`./assets/promo-cafe.png`,summary:`Specialty coffee, brunch and live acoustic evenings.`,packageId:`premiumshop`,status:`approved`,paid:!0},{id:`promo-indie-fest`,title:`Indie Night Fest`,category:`Concert`,location:`Thangmeiband`,image:`./assets/promo-concert.png`,summary:`Live bands and good vibes.`,packageId:`monthly10`,status:`approved`,paid:!0},{id:`promo-hill-view`,title:`Hill View Retreat`,category:`Resorts`,location:`Near Khongjom`,image:`./assets/promo-resort.png`,summary:`Relax, unwind and reconnect.`,packageId:`oneoff`,status:`approved`,paid:!0},{id:`promo-pao-more`,title:`Pao & More`,category:`Local items`,location:`Ema Keithel`,image:`./assets/promo-local-shop.png`,summary:`Handmade with love.`,packageId:`highlight`,status:`approved`,paid:!0},{id:`promo-handloom-expo`,title:`Handloom Expo`,category:`Markets`,location:`City Convention`,image:`./assets/promo-handloom.png`,summary:`Support local artisans.`,packageId:`highlight`,status:`approved`,paid:!0}],savedEventIds:[],reminders:[],payments:[],notices:[]},i=s(),a=u(),o;window.addEventListener(`hashchange`,()=>{a=u(),C()}),document.addEventListener(`DOMContentLoaded`,C);function s(){let t=localStorage.getItem(e);if(!t)return structuredClone(r);try{let e=JSON.parse(t);return c(structuredClone(r),e)}catch{return structuredClone(r)}}function c(e,t){return{...e,...t,settings:{...e.settings,...t.settings||{}},profile:{...e.profile,...t.profile||{}},events:Array.isArray(t.events)?t.events:e.events,promotions:Array.isArray(t.promotions)?t.promotions:e.promotions,savedEventIds:Array.isArray(t.savedEventIds)?t.savedEventIds:e.savedEventIds,reminders:Array.isArray(t.reminders)?t.reminders:e.reminders,payments:Array.isArray(t.payments)?t.payments:e.payments,notices:Array.isArray(t.notices)?t.notices:e.notices}}function l(){localStorage.setItem(e,JSON.stringify(i))}function u(){return window.location.hash.replace(`#`,``)||`home`}function d(e){window.location.hash=e}function f(e){return e===0?`Free`:`Rs ${e.toLocaleString(`en-IN`)}`}function p(e){return new Date(`${e}T12:00:00`).toLocaleDateString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`})}function m(e){let t=new Date(`${e}T12:00:00`);return{day:String(t.getDate()).padStart(2,`0`),month:t.toLocaleDateString(`en-IN`,{month:`short`})}}function h(e=``){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function g(e){return n.find(t=>t.id===e)||n[0]}function _(){return i.events.filter(e=>e.status===`approved`)}function v(){return i.promotions.filter(e=>e.status===`approved`)}function y(){return[..._(),...v()].filter(e=>e.paid||e.featured).sort((e,t)=>g(t.packageId).weight-g(e.packageId).weight||e.title.localeCompare(t.title))}function b(e=``,t=``,n=``,r=``){let i=e.trim().toLowerCase(),a=new Date(`2026-07-05T12:00:00`),o=new Date(`2026-07-12T23:59:00`);return _().filter(e=>{let s=[e.title,e.category,e.location,e.area,e.summary,e.price].join(` `).toLowerCase(),c=!i||s.includes(i),l=!t||t===`Anything`||e.category.toLowerCase()===t.toLowerCase(),u=!r||r===`Anywhere`||e.location.toLowerCase().includes(r.toLowerCase())||e.area.toLowerCase().includes(r.toLowerCase()),d=!0;if(n===`today`&&(d=e.date===`2026-07-05`),n===`weekend`){let t=new Date(`${e.date}T12:00:00`);d=t>=a&&t<=o}return n===`free`&&(d=e.price.toLowerCase().includes(`free`)),c&&l&&u&&d}).sort((e,t)=>e.date.localeCompare(t.date))}function x(e){let t=document.querySelector(`.toast`);t&&t.remove();let n=document.createElement(`div`);n.className=`toast`,n.textContent=e,document.body.appendChild(n),clearTimeout(o),o=setTimeout(()=>n.remove(),2600)}function S(){document.documentElement.style.setProperty(`--accent`,i.settings.accent||`#b7251d`),document.documentElement.style.setProperty(`--site-font`,i.settings.font===`Inter`?`Inter, Arial, sans-serif`:`Merriweather, Georgia, serif`)}function C(){S();let e=document.querySelector(`#app`);e.innerHTML=`
    ${w()}
    <main class="page-shell">${E()}</main>
    ${G()}
    ${K()}
  `,q(),J()}function w(){return`
    <header class="topbar">
      <a href="#home" class="brand" aria-label="Home">
        <span class="brand-mark">WO</span>
        <span>${h(i.settings.siteTitle)}</span>
      </a>
      <nav class="desktop-nav" aria-label="Primary">
        ${T(`home`,`Home`)}
        ${T(`latest`,`Latest`)}
        ${T(`calendar`,`Calendar`)}
        ${T(`profile`,`Profile`)}
        ${T(`vendor`,`Packages`)}
        ${T(`admin`,`Admin`)}
      </nav>
      <div class="topbar-actions">
        <button class="btn ghost small" data-route="vendor">Promote</button>
        <button class="btn primary small" data-route="create">Post your event</button>
      </div>
    </header>
  `}function T(e,t){return`<a class="${a===e?`active`:``}" href="#${e}">${t}</a>`}function E(){return a===`latest`?N():a===`create`?P():a===`calendar`?F():a===`profile`?R():a===`vendor`?z():a===`admin`?H():a.startsWith(`event/`)?ee(a.split(`/`)[1]):D()}function D(){let e=y()[0]||_()[0],t=_().slice(0,4),n=y().slice(0,5);return`
    <section class="hero-grid">
      <div class="hero-copy">
        <button class="btn outline promote-top" data-route="vendor">Promote with us</button>
        <h1>${h(i.settings.siteTitle)}</h1>
        <p>${h(i.settings.tagline)}</p>
        ${O()}
      </div>
      <article class="hero-card" style="background-image: url('${h(i.settings.heroImage)}')">
        <span class="feature-badge">Featured promotion</span>
        <div>
          <h2>${h(i.settings.heroTitle)}</h2>
          <p>${h(i.settings.heroSubtitle)}</p>
        </div>
      </article>
    </section>

    <section class="content-grid">
      ${k(e)}
      <div class="stack">
        <div class="section-head">
          <h2>Happening this week</h2>
          <button class="link-btn" data-route="latest">View all events</button>
        </div>
        <div class="event-row">${t.map(A).join(``)}</div>
      </div>
      ${M()}
    </section>

    <section class="section-block">
      <div class="section-head">
        <h2>Featured promotions</h2>
        <button class="link-btn" data-route="vendor">Buy promotion</button>
      </div>
      <div class="promo-row">${n.map(j).join(``)}</div>
    </section>

    <section class="stats-strip">
      <div><strong>${_().length+i.events.filter(e=>e.status===`pending`).length}</strong><span>events this month</span></div>
      <div><strong>18</strong><span>venues</span></div>
      <div><strong>${i.savedEventIds.length}</strong><span>saved by you</span></div>
      <div><strong>Reviewed</strong><span>before publish</span></div>
    </section>

    <section class="admin-teaser">
      <div>
        <h2>Admin updates everything</h2>
        <p>Hero image, text, articles, sub-articles, colors, fonts, URLs, YouTube embeds and photos are editable from the admin page.</p>
      </div>
      <button class="btn dark" data-route="admin">Open admin</button>
    </section>
  `}function O(){return`
    <form class="search-panel" id="searchForm">
      <div class="search-fields">
        <label>What
          <input name="query" placeholder="Search cafe, concert, food, hotel..." />
        </label>
        <label>When
          <select name="when">
            <option value="">Any date</option>
            <option value="today">Today</option>
            <option value="weekend">This weekend</option>
            <option value="free">Free</option>
          </select>
        </label>
        <label>Where
          <select name="where">
            <option>Imphal</option>
            <option>Anywhere</option>
            <option>Thangmeiband</option>
            <option>Loktak</option>
            <option>Ema Keithel</option>
          </select>
        </label>
        <button class="btn primary" type="submit">Show events</button>
      </div>
      <div class="category-grid">
        ${t.slice(0,9).map(e=>`<button type="button" class="chip category-chip" data-search-category="${e}">${e}</button>`).join(``)}
      </div>
    </form>
  `}function k(e){if(!e)return``;let t=m(e.date||`2026-07-12`),n=!!e.date;return`
    <article class="featured-card">
      <div class="image-wrap">
        <img src="${h(e.image)}" alt="${h(e.title)}" />
        ${n?`<span class="date-badge"><strong>${t.day}</strong>${t.month}</span>`:``}
      </div>
      <div class="featured-body">
        <div class="tags"><span>${h(e.category)}</span><span>${e.paid?`Paid feature`:`Free`}</span></div>
        <h2>${h(e.title)}</h2>
        <p>${h(e.summary)}</p>
        ${n?`<p class="meta">${p(e.date)} · ${h(e.time)}</p>`:``}
        <p class="meta">${h(e.location||e.area||`Imphal`)}</p>
        <div class="button-line">
          <button class="btn ghost" data-save="${e.id}">Save event</button>
          <button class="btn ghost" data-share="${e.id}">Share</button>
          <button class="btn primary" data-route="${n?`event/${e.id}`:`vendor`}">View details</button>
        </div>
      </div>
    </article>
  `}function A(e){let t=m(e.date),n=i.savedEventIds.includes(e.id);return`
    <article class="event-card">
      <a href="#event/${e.id}" class="card-image-link">
        <img src="${h(e.image)}" alt="${h(e.title)}" />
        <span class="mini-date"><strong>${t.day}</strong>${t.month}</span>
      </a>
      <div class="card-body">
        <span class="pill ${e.paid?`paid`:``}">${e.paid?g(e.packageId).label:`Free`}</span>
        <h3>${h(e.title)}</h3>
        <p>${h(e.location)}</p>
        <div class="card-actions">
          <button class="${n?`active-icon`:``}" data-save="${e.id}">${n?`Saved`:`Save`}</button>
          <button data-remind="${e.id}">Reminder</button>
        </div>
      </div>
    </article>
  `}function j(e){return`
    <article class="promo-card">
      <img src="${h(e.image)}" alt="${h(e.title)}" />
      <div>
        <span>${h(e.category)} · ${g(e.packageId).label}</span>
        <h3>${h(e.title)}</h3>
        <p>${h(e.summary)}</p>
      </div>
    </article>
  `}function M(){return`
    <aside class="organiser-panel">
      <h2>For organisers and vendors</h2>
      <p>Create events, cafe offers, resort promos, venue listings and shop pages. Paid posts rotate higher and faster after approval.</p>
      <ul>
        <li>Phone or email signup</li>
        <li>Admin approval before publish</li>
        <li>UPI and GPay payment links</li>
      </ul>
      <button class="btn light" data-route="create">Create listing</button>
      <button class="btn clear" data-route="vendor">Vendor page</button>
    </aside>
  `}function N(){let e=new URLSearchParams(sessionStorage.getItem(`whatson-search`)||``),t=e.get(`query`)||``,n=e.get(`category`)||``,r=e.get(`when`)||``,i=e.get(`where`)||``,a=b(t,n,r,i);return`
    <section class="view-header">
      <p class="eyebrow">Latest</p>
      <h1>Find events, venues and local happenings</h1>
      <p>Search cafes, concerts, food, hotels, parks, venues, resorts, markets and local items.</p>
    </section>
    ${O()}
    <section class="result-bar">
      <strong>${a.length}</strong> matching events
      ${t||n||r||i?`<span>Filters active</span>`:``}
    </section>
    <section class="listing-grid">${a.map(A).join(``)||W(`No matching events yet.`,`Try another keyword or create the first listing.`)}</section>
  `}function P(){return`
    <section class="view-header two-column-header">
      <div>
        <p class="eyebrow">Create</p>
        <h1>Post your event or promotion</h1>
        <p>Free users can post unlimited listings. Paid packages get better rotation and quicker review after admin approval.</p>
      </div>
      <button class="btn primary" data-route="vendor">See packages</button>
    </section>
    <section class="form-grid">
      <form class="panel-form" id="createForm">
        <h2>Listing details</h2>
        <label>Title <input name="title" required placeholder="Cafe pop-up, music night, resort offer..." /></label>
        <label>Category
          <select name="category">${t.map(e=>`<option>${e}</option>`).join(``)}</select>
        </label>
        <label>Listing type
          <select name="type">
            <option value="event">Event</option>
            <option value="promotion">Promotion</option>
            <option value="vendor">Vendor / shop page</option>
          </select>
        </label>
        <div class="split">
          <label>Date <input name="date" type="date" value="2026-07-15" /></label>
          <label>Time <input name="time" placeholder="6:00 PM" /></label>
        </div>
        <label>Location <input name="location" required placeholder="Venue, area, Imphal" /></label>
        <label>Price or tag <input name="price" placeholder="Free, Rs 150, Food & Drink..." /></label>
        <label>Short description <textarea name="summary" required placeholder="Write the important details people need to know."></textarea></label>
        <label>YouTube/video URL <input name="videoUrl" placeholder="https://youtube.com/..." /></label>
        <label>Photo upload <input name="imageFile" type="file" accept="image/*" /></label>
        <label>Or image URL <input name="imageUrl" placeholder="https://..." /></label>
        <label>Promotion package
          <select name="packageId">${n.map(e=>`<option value="${e.id}">${e.name} - ${e.label}</option>`).join(``)}</select>
        </label>
        <button class="btn primary wide" type="submit">Submit for admin approval</button>
      </form>
      <aside class="side-panel">
        <h2>Promotion rules</h2>
        <p><strong>Free:</strong> unlimited posts, but slower review and no guaranteed top placement.</p>
        <p><strong>Rs 100:</strong> highlight boost for one ad.</p>
        <p><strong>Rs 200:</strong> one-off main page feature rotation.</p>
        <p><strong>Rs 500/month:</strong> 10 ads monthly with priority review.</p>
        <p><strong>Rs 1,500/month:</strong> premium shop/restaurant page with unlimited photos and menu/gallery support.</p>
        <button class="btn dark wide" data-route="admin">Admin approval queue</button>
      </aside>
    </section>
  `}function F(){let e=_().sort((e,t)=>e.date.localeCompare(t.date)),t=e.filter(e=>i.savedEventIds.includes(e.id));return`
    <section class="view-header two-column-header">
      <div>
        <p class="eyebrow">Calendar</p>
        <h1>Events calendar and reminders</h1>
        <p>Save events you want to visit, add reminders, then share them with friends or social media.</p>
      </div>
      <button class="btn primary" data-route="latest">Find events</button>
    </section>
    <section class="calendar-layout">
      <div class="calendar-board">
        ${I(e)}
      </div>
      <aside class="side-panel">
        <h2>Saved events</h2>
        ${t.map(L).join(``)||W(`No saved events yet.`,`Tap Save on any event to add it here.`)}
        <h2>Reminders</h2>
        ${i.reminders.map(e=>`<p class="mini-line">${p(e.date)} · ${h(e.title)}</p>`).join(``)||`<p class="muted">No reminders set.</p>`}
      </aside>
    </section>
  `}function I(e){let t=Array.from({length:31},(e,t)=>t+1);return`
    <div class="calendar-title"><h2>July 2026</h2><span>${e.length} approved events</span></div>
    <div class="weekdays">${[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>`<strong>${e}</strong>`).join(``)}</div>
    <div class="month-grid">
      ${t.map(t=>{let n=`2026-07-${String(t).padStart(2,`0`)}`;return`<button class="day-cell" data-day="${n}"><strong>${t}</strong>${e.filter(e=>e.date===n).map(e=>`<span>${h(e.title)}</span>`).join(``)}</button>`}).join(``)}
    </div>
  `}function L(e){return`
    <article class="calendar-item">
      <strong>${h(e.title)}</strong>
      <span>${p(e.date)} · ${h(e.time)}</span>
      <button data-share="${e.id}">Share</button>
    </article>
  `}function R(){let e=g(i.profile.activePackage),t=_().filter(e=>i.savedEventIds.includes(e.id));return`
    <section class="view-header">
      <p class="eyebrow">Profile</p>
      <h1>Your local event account</h1>
      <p>Use phone or email to manage listings, saved events, reminders and premium packages.</p>
    </section>
    <section class="form-grid">
      <form class="panel-form" id="profileForm">
        <h2>Account details</h2>
        <label>Name <input name="name" value="${h(i.profile.name)}" required /></label>
        <label>Email <input name="email" type="email" value="${h(i.profile.email)}" placeholder="you@example.com" /></label>
        <label>Phone <input name="phone" value="${h(i.profile.phone)}" placeholder="+91..." /></label>
        <button class="btn primary wide" type="submit">Save profile</button>
      </form>
      <aside class="side-panel">
        <h2>Current package</h2>
        <p><strong>${h(e.name)}</strong></p>
        <p>${h(e.cadence)}</p>
        <button class="btn dark wide" data-route="vendor">Upgrade package</button>
        <h2>Saved events</h2>
        ${t.map(L).join(``)||`<p class="muted">Nothing saved yet.</p>`}
      </aside>
    </section>
  `}function z(){return`
    <section class="view-header two-column-header">
      <div>
        <p class="eyebrow">Vendor and premium</p>
        <h1>Promote events, cafes, shops, venues and resorts</h1>
        <p>Free posting keeps the platform open. Paid packages help serious organisers get top placement and quicker approval.</p>
      </div>
      <button class="btn primary" data-route="create">Post your event</button>
    </section>
    <section class="package-grid">
      ${n.map(B).join(``)}
    </section>
    <section class="section-block">
      <h2>Recent payment tests</h2>
      <div class="listing-grid compact">${i.payments.map(V).join(``)||W(`No payments started yet.`,`Choose a package to generate a UPI or GPay payment link.`)}</div>
    </section>
  `}function B(e){return`
    <article class="package-card ${e.id===`premiumshop`?`premium`:``}">
      <span>${h(e.label)}</span>
      <h2>${h(e.name)}</h2>
      <p>${h(e.cadence)}</p>
      <strong>${f(e.price)}</strong>
      <ul>${e.features.map(e=>`<li>${h(e)}</li>`).join(``)}</ul>
      <button class="btn primary wide" data-buy="${e.id}">${e.price===0?`Use free plan`:`Pay by UPI / GPay`}</button>
    </article>
  `}function V(e){return`
    <article class="payment-card">
      <strong>${h(e.packageName)}</strong>
      <span>${f(e.amount)} · ${h(e.status)}</span>
      <a href="${h(e.upiUrl)}">Open UPI link</a>
    </article>
  `}function H(){let e=i.events.filter(e=>e.status===`pending`),t=i.promotions.filter(e=>e.status===`pending`);return`
    <section class="view-header two-column-header">
      <div>
        <p class="eyebrow">Admin</p>
        <h1>Website control room</h1>
        <p>Update hero content, approve listings, create articles, edit colors, upload images and manage promotion visibility.</p>
      </div>
      <button class="btn primary" data-route="home">View public site</button>
    </section>
    <section class="admin-grid">
      <form class="panel-form" id="adminSettingsForm">
        <h2>Hero and content</h2>
        <label>Site title <input name="siteTitle" value="${h(i.settings.siteTitle)}" /></label>
        <label>Tagline <input name="tagline" value="${h(i.settings.tagline)}" /></label>
        <label>Hero title <input name="heroTitle" value="${h(i.settings.heroTitle)}" /></label>
        <label>Hero subtitle <input name="heroSubtitle" value="${h(i.settings.heroSubtitle)}" /></label>
        <label>Hero image URL <input name="heroImage" value="${h(i.settings.heroImage)}" /></label>
        <label>Upload hero photo <input name="heroFile" type="file" accept="image/*" /></label>
        <div class="split">
          <label>Color palette <input name="accent" type="color" value="${h(i.settings.accent)}" /></label>
          <label>Font
            <select name="font">
              <option ${i.settings.font===`Merriweather`?`selected`:``}>Merriweather</option>
              <option ${i.settings.font===`Inter`?`selected`:``}>Inter</option>
            </select>
          </label>
        </div>
        <label>YouTube embed URL <input name="youtubeUrl" value="${h(i.settings.youtubeUrl)}" /></label>
        <label>Article box title <input name="articleTitle" value="${h(i.settings.articleTitle)}" /></label>
        <label>Article body <textarea name="articleBody">${h(i.settings.articleBody)}</textarea></label>
        <label>Sub-article title <input name="subArticleTitle" value="${h(i.settings.subArticleTitle)}" /></label>
        <label>Sub-article body <textarea name="subArticleBody">${h(i.settings.subArticleBody)}</textarea></label>
        <button class="btn primary wide" type="submit">Save website updates</button>
      </form>
      <div class="admin-panels">
        <section class="side-panel">
          <h2>Approval queue</h2>
          ${[...e,...t].map(U).join(``)||`<p class="muted">No pending listings. New submissions will appear here.</p>`}
        </section>
        <section class="side-panel">
          <h2>Article preview</h2>
          <h3>${h(i.settings.articleTitle)}</h3>
          <p>${h(i.settings.articleBody)}</p>
          <h3>${h(i.settings.subArticleTitle)}</h3>
          <p>${h(i.settings.subArticleBody)}</p>
          <div class="video-box"><iframe src="${h(i.settings.youtubeUrl)}" title="YouTube preview" loading="lazy"></iframe></div>
        </section>
      </div>
    </section>
  `}function U(e){return`
    <article class="approval-item">
      <img src="${h(e.image)}" alt="${h(e.title)}" />
      <div>
        <strong>${h(e.title)}</strong>
        <span>${h(e.category)} · ${h(g(e.packageId).label)}</span>
        <div class="button-line">
          <button class="btn primary small" data-approve="${e.id}">Approve</button>
          <button class="btn ghost small" data-reject="${e.id}">Reject</button>
        </div>
      </div>
    </article>
  `}function ee(e){let t=i.events.find(t=>t.id===e);if(!t)return W(`Event not found.`,`Return to latest events and try again.`);let n=i.savedEventIds.includes(t.id);return`
    <section class="detail-layout">
      <img class="detail-image" src="${h(t.image)}" alt="${h(t.title)}" />
      <article class="detail-panel">
        <span class="pill ${t.paid?`paid`:``}">${h(t.category)} · ${h(t.price)}</span>
        <h1>${h(t.title)}</h1>
        <p>${h(t.summary)}</p>
        <dl>
          <div><dt>Date</dt><dd>${p(t.date)}</dd></div>
          <div><dt>Time</dt><dd>${h(t.time)}</dd></div>
          <div><dt>Location</dt><dd>${h(t.location)}</dd></div>
          <div><dt>Organiser</dt><dd>${h(t.organiser)}</dd></div>
        </dl>
        <div class="button-line">
          <button class="btn primary" data-save="${t.id}">${n?`Saved`:`Save event`}</button>
          <button class="btn ghost" data-remind="${t.id}">Set reminder</button>
          <button class="btn ghost" data-share="${t.id}">Share</button>
        </div>
      </article>
    </section>
  `}function W(e,t){return`<div class="empty-state"><strong>${h(e)}</strong><p>${h(t)}</p></div>`}function G(){return`
    <footer class="site-footer">
      <div>
        <a href="#home" class="brand"><span class="brand-mark">WO</span><span>${h(i.settings.siteTitle)}</span></a>
        <p>Your guide to what is happening in and around Imphal.</p>
      </div>
      <nav>
        <a href="#create">Post your event</a>
        <a href="#vendor">Promote</a>
        <a href="mailto:${h(i.settings.supportEmail)}">Support</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://snapchat.com" target="_blank" rel="noreferrer">Snapchat</a>
        <a href="https://buzztown.in" target="_blank" rel="noreferrer">Buzztown</a>
      </nav>
    </footer>
  `}function K(){return`
    <nav class="mobile-nav" aria-label="Mobile">
      ${[[`home`,`Home`],[`latest`,`Latest`],[`create`,`Post +`],[`calendar`,`Calendar`],[`profile`,`Profile`]].map(([e,t])=>`<a class="${a===e?`active`:``} ${e===`create`?`create-tab`:``}" href="#${e}"><span>${t}</span></a>`).join(``)}
    </nav>
  `}function q(){document.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,()=>d(e.dataset.route))}),document.querySelectorAll(`[data-save]`).forEach(e=>{e.addEventListener(`click`,()=>te(e.dataset.save))}),document.querySelectorAll(`[data-remind]`).forEach(e=>{e.addEventListener(`click`,()=>ne(e.dataset.remind))}),document.querySelectorAll(`[data-share]`).forEach(e=>{e.addEventListener(`click`,()=>re(e.dataset.share))})}function J(){let e=document.querySelector(`#searchForm`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=new FormData(e),r=new URLSearchParams({query:n.get(`query`)||``,when:n.get(`when`)||``,where:n.get(`where`)||``});sessionStorage.setItem(`whatson-search`,r.toString()),d(`latest`)}),document.querySelectorAll(`[data-search-category]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=new URLSearchParams({category:e.dataset.searchCategory});sessionStorage.setItem(`whatson-search`,t.toString()),d(`latest`)})});let t=document.querySelector(`#createForm`);t&&t.addEventListener(`submit`,X);let n=document.querySelector(`#profileForm`);n&&n.addEventListener(`submit`,Z);let r=document.querySelector(`#adminSettingsForm`);r&&r.addEventListener(`submit`,Q),document.querySelectorAll(`[data-buy]`).forEach(e=>{e.addEventListener(`click`,()=>ie(e.dataset.buy))}),document.querySelectorAll(`[data-approve]`).forEach(e=>{e.addEventListener(`click`,()=>ae(e.dataset.approve))}),document.querySelectorAll(`[data-reject]`).forEach(e=>{e.addEventListener(`click`,()=>oe(e.dataset.reject))})}async function Y(e){return!e||!e.size?``:new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}async function X(e){e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=await Y(n.get(`imageFile`)),a=n.get(`packageId`)||`free`,o=n.get(`type`),s={id:`${o}-${Date.now()}`,title:n.get(`title`),category:n.get(`category`),type:o,location:n.get(`location`),area:n.get(`location`),price:n.get(`price`)||g(a).label,image:r||n.get(`imageUrl`)||`./assets/hero-imphal-night.png`,summary:n.get(`summary`),organiser:i.profile.name||`Local organiser`,packageId:a,status:`pending`,featured:a!==`free`,paid:a!==`free`,likes:0,createdAt:new Date().toISOString(),videoUrl:n.get(`videoUrl`)};o===`promotion`||o===`vendor`?i.promotions.unshift(s):i.events.unshift({...s,date:n.get(`date`)||`2026-07-15`,time:n.get(`time`)||`6:00 PM`}),l(),x(`Submitted for admin approval.`),d(`admin`)}function Z(e){e.preventDefault();let t=new FormData(e.currentTarget);i.profile={...i.profile,name:t.get(`name`),email:t.get(`email`),phone:t.get(`phone`)},l(),x(`Profile saved.`),C()}async function Q(e){e.preventDefault();let t=new FormData(e.currentTarget),n=await Y(t.get(`heroFile`));i.settings={...i.settings,siteTitle:t.get(`siteTitle`),tagline:t.get(`tagline`),heroTitle:t.get(`heroTitle`),heroSubtitle:t.get(`heroSubtitle`),heroImage:n||t.get(`heroImage`),accent:t.get(`accent`),font:t.get(`font`),youtubeUrl:$(t.get(`youtubeUrl`)),articleTitle:t.get(`articleTitle`),articleBody:t.get(`articleBody`),subArticleTitle:t.get(`subArticleTitle`),subArticleBody:t.get(`subArticleBody`)},l(),x(`Admin updates saved.`),C()}function $(e=``){if(e.includes(`embed`))return e;let t=e.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);return t?`https://www.youtube.com/embed/${t[1]}`:e}function te(e){let t=i.savedEventIds.includes(e);i.savedEventIds=t?i.savedEventIds.filter(t=>t!==e):[...i.savedEventIds,e],l(),x(t?`Removed from saved events.`:`Saved to your calendar.`),C()}function ne(e){let t=i.events.find(t=>t.id===e);t&&(i.savedEventIds.includes(e)||i.savedEventIds.push(e),i.reminders.some(t=>t.id===e)||i.reminders.push({id:e,title:t.title,date:t.date,time:t.time}),l(),x(`Reminder added to calendar.`),C())}async function re(e){let t=i.events.find(t=>t.id===e)||i.promotions.find(t=>t.id===e);if(!t)return;let n=`${t.title} - ${t.location||`Imphal`} on What's On Imphal`,r=`${window.location.origin}${window.location.pathname}#event/${t.id}`;navigator.share?await navigator.share({title:t.title,text:n,url:r}).catch(()=>{}):(await navigator.clipboard?.writeText(`${n} ${r}`),x(`Share link copied.`))}function ie(e){let t=g(e);i.profile.activePackage=e;let n=`upi://pay?pa=${encodeURIComponent(i.settings.upiId)}&pn=WhatsOn%20Imphal&am=${t.price}&cu=INR&tn=${encodeURIComponent(t.name)}`,r={id:`pay-${Date.now()}`,packageId:e,packageName:t.name,amount:t.price,status:t.price===0?`Free plan activated`:`Payment link generated`,upiUrl:n,createdAt:new Date().toISOString()};i.payments.unshift(r),l(),t.price>0?(x(`UPI/GPay payment link generated.`),window.location.href=n):x(`Free plan activated.`),C()}function ae(e){let t=i.events.find(t=>t.id===e),n=i.promotions.find(t=>t.id===e),r=t||n;r&&(r.status=`approved`,l(),x(`Listing approved and published.`),C())}function oe(e){let t=i.events.find(t=>t.id===e),n=i.promotions.find(t=>t.id===e),r=t||n;r&&(r.status=`rejected`,l(),x(`Listing rejected.`),C())}