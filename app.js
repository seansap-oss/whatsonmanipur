const STORAGE_KEY = "whatson-imphal-state-v4-last-chance-fixed-content";

const image = {
  hero: "/assets/hero-imphal-night.png",
  culture: "/assets/event-lai-haraoba.png",
  market: "/assets/event-ema-keithel.png",
  music: "/assets/event-indie-music.png",
  loktak: "/assets/event-loktak.png",
  cafe: "/assets/event-cafe.png",
  promoCafe: "/assets/promo-cafe.png",
  promoConcert: "/assets/promo-concert.png",
  promoResort: "/assets/promo-resort.png",
  handloom: "/assets/promo-local-shop.png",
  expo: "/assets/promo-handloom.png",
};

const districts = [
  "Bishnupur",
  "Chandel",
  "Churachandpur",
  "Imphal East",
  "Imphal West",
  "Jiribam",
  "Kakching",
  "Kamjong",
  "Kangpokpi",
  "Noney",
  "Pherzawl",
  "Senapati",
  "Tamenglong",
  "Tengnoupal",
  "Thoubal",
  "Ukhrul",
];

const categoryGroups = {
  things: {
    label: "Things to do",
    columns: [
      {
        title: "Explore things to do",
        items: [
          "Free things to do",
          "Family and kids",
          "Music, concerts and gigs",
          "Theatre and shows",
          "Entertainment",
          "Comedy",
          "Film",
          "Sport",
          "Attractions and sights",
          "Major events",
          "Exhibitions",
          "Festivals",
          "Cultural walks",
          "Workshops",
        ],
      },
      { title: "What's on", items: ["Today", "This weekend", "This week", "This month", "Coming soon"] },
    ],
    guides: ["Weekend things to do in Imphal", "Must-see festivals in Manipur", "Family-friendly places around Imphal"],
  },
  food: {
    label: "Eat & Drink",
    columns: [
      {
        title: "Eat and drink",
        items: ["Restaurants", "Cafes", "Street food", "Takeaway", "Bars and pubs", "Dining events", "Dining deals", "Local food trails", "Tea shops"],
      },
    ],
    guides: ["Traditional Manipuri food to try", "Best cafe corners in Imphal", "Food trails for visitors"],
  },
  shopping: {
    label: "Shopping",
    columns: [
      {
        title: "Shop in Imphal & Manipur",
        items: [
          "Fashion",
          "Accessories",
          "Specialty food",
          "Gifts and homewares",
          "Technology and entertainment",
          "Sports and outdoor",
          "Hardware and construction",
          "Handloom and handicrafts",
          "Local retail offers",
        ],
      },
    ],
    guides: ["Local markets in Imphal", "Handloom and handicrafts of Manipur", "Shopping guide for visitors"],
  },
  visitor: {
    label: "Visitor info",
    columns: [
      { title: "Planning your visit", items: ["Visiting Manipur", "Where to stay", "Hotels", "Homestays", "Farm stays", "Airport info", "Visitor centres", "Travel essentials"] },
      { title: "Getting around Imphal & Manipur", items: ["Public transport", "Driving and parking", "Taxis and rideshares", "Private taxis", "Maps", "Walking routes"] },
    ],
    guides: ["First time in Manipur? Start here", "How to get around Imphal", "Essential travel tips for Manipur"],
  },
  manipur: {
    label: "Manipur",
    columns: [{ title: "Explore by place", items: ["All Manipur", "Imphal", "Loktak", "Ukhrul", "Moreh", "Senapati", "Submit from your district"] }],
    guides: ["Districts are searchable", "Post from any district", "Popular areas across Manipur"],
  },
};

const searchCategories = [
  "Anything",
  "Things to do",
  "Eat & Drink",
  "Shopping",
  "Stays",
  "Guides",
  "Free",
  "Family",
  "Events",
  "Restaurants",
  "Music & Concerts",
  "Art",
  "Exhibition",
  "Market",
  "Sport",
  "Accessibility",
];

const packages = [
  { id: "free", name: "Free Listing", price: 0, label: "Free", weight: 1, cadence: "Unlimited posts, approval required", features: ["Unlimited event posts", "Admin approval", "Normal search visibility"] },
  { id: "highlight", name: "Highlight Boost", price: 100, label: "Rs 100 per ad", weight: 5, cadence: "Highlighted listing rotation", features: ["Appears in highlighted sections", "Faster review", "Good for one event"] },
  { id: "oneoff", name: "Main Page Feature", price: 200, label: "Rs 200 one-off", weight: 8, cadence: "Main page random rotation", features: ["Homepage feature", "Priority over free posts", "Best for launches"] },
  { id: "monthly10", name: "Monthly Starter", price: 500, label: "Rs 500/month", weight: 12, cadence: "10 ads monthly", features: ["10 promotional ads", "Priority review", "More homepage rotation"] },
  { id: "premiumshop", name: "Premium Shop Page", price: 1500, label: "Rs 1,500/month", weight: 20, cadence: "Unlimited shop/menu page", features: ["Dedicated vendor page", "Unlimited photos", "Menu/gallery support"] },
];

const seedEvents = [
  {
    id: "evt-lai-haraoba",
    title: "Lai Haraoba Cultural Evening",
    category: "Culture",
    group: "things",
    date: "2026-07-12",
    time: "5:30 PM",
    location: "Manipur State Kala Academy, Imphal",
    district: "Imphal West",
    price: "Free",
    image: image.culture,
    summary: "Traditional performance, ritual dance, folk music and storytelling celebrating local heritage.",
    organiser: "Heritage Arts Collective",
    packageId: "oneoff",
    status: "approved",
    featured: true,
    paid: true,
  },
  {
    id: "evt-ema-market",
    title: "Ema Keithel Night Market",
    category: "Markets",
    group: "shopping",
    date: "2026-07-11",
    time: "6:00 PM",
    location: "Ema Keithel, Imphal",
    district: "Imphal West",
    price: "Free",
    image: image.market,
    summary: "Food stalls, handloom tables and evening shopping around one of Imphal's most important market districts.",
    organiser: "Market Association",
    packageId: "highlight",
    status: "approved",
    featured: true,
    paid: true,
  },
  {
    id: "evt-indie-music",
    title: "Indie Music at Thangmeiband",
    category: "Music & Concerts",
    group: "things",
    date: "2026-07-12",
    time: "7:00 PM",
    location: "Thangmeiband Tourists' Complex",
    district: "Imphal West",
    price: "Rs 150",
    image: image.music,
    summary: "Live bands, good sound and a small food court for a relaxed city evening.",
    organiser: "Imphal Indie Sessions",
    packageId: "monthly10",
    status: "approved",
    featured: true,
    paid: true,
  },
  {
    id: "evt-loktak-walk",
    title: "Loktak Weekend Walk",
    category: "Attractions and sights",
    group: "visitor",
    date: "2026-07-14",
    time: "8:00 AM",
    location: "Sendra Island, Loktak Lake",
    district: "Bishnupur",
    price: "Outdoor",
    image: image.loktak,
    summary: "A guided weekend walk near Loktak Lake with breakfast stops and lake-view photo points.",
    organiser: "Loktak Travel Circle",
    packageId: "free",
    status: "approved",
    featured: false,
    paid: false,
  },
  {
    id: "evt-cafe-popup",
    title: "Cafe Pop-up: Local Roasts",
    category: "Cafes",
    group: "food",
    date: "2026-07-13",
    time: "11:00 AM",
    location: "The Corner House, Imphal",
    district: "Imphal East",
    price: "Food & Drink",
    image: image.cafe,
    summary: "Local coffee, seasonal snacks and a one-day cafe collaboration.",
    organiser: "Corner House",
    packageId: "premiumshop",
    status: "approved",
    featured: true,
    paid: true,
  },
  {
    id: "evt-kangla-heritage",
    title: "Kangla Heritage Walk",
    category: "Cultural walks",
    group: "things",
    date: "2026-07-18",
    time: "9:00 AM",
    location: "Kangla, Imphal",
    district: "Imphal West",
    price: "Guide",
    image: image.culture,
    summary: "A short walking guide through Kangla's history, temple areas, moat edges and cultural landmarks.",
    organiser: "City Walks Manipur",
    packageId: "free",
    status: "approved",
    featured: false,
    paid: false,
  },
  {
    id: "evt-handloom-expo",
    title: "Handloom Expo",
    category: "Handloom and handicrafts",
    group: "shopping",
    date: "2026-07-19",
    time: "10:00 AM",
    location: "City Convention Centre, Imphal",
    district: "Imphal East",
    price: "Market",
    image: image.expo,
    summary: "Local artisans, woven textiles, gifts, accessories and small makers under one roof.",
    organiser: "Local Makers Collective",
    packageId: "highlight",
    status: "approved",
    featured: true,
    paid: true,
  },
  {
    id: "evt-shirui-preview",
    title: "Ukhrul Hills Travel Preview",
    category: "Travel essentials",
    group: "visitor",
    date: "2026-08-08",
    time: "2:00 PM",
    location: "Ukhrul town travel desk",
    district: "Ukhrul",
    price: "Coming soon",
    image: image.loktak,
    summary: "A visitor preview for hill travel, routes, stays, viewpoints and seasonal trip planning.",
    organiser: "Manipur Travel Desk",
    packageId: "oneoff",
    status: "approved",
    featured: true,
    paid: true,
  },
];

const seedPromotions = [
  { id: "promo-corner-house", title: "The Corner House", category: "Cafes", group: "food", location: "Imphal", district: "Imphal East", image: image.promoCafe, summary: "Specialty coffee, brunch and live acoustic evenings.", packageId: "premiumshop", status: "approved", paid: true },
  { id: "promo-indie-fest", title: "Indie Night Fest", category: "Music & Concerts", group: "things", location: "Thangmeiband", district: "Imphal West", image: image.promoConcert, summary: "Live bands and good vibes.", packageId: "monthly10", status: "approved", paid: true },
  { id: "promo-hill-view", title: "Hill View Retreat", category: "Resorts", group: "visitor", location: "Near Khongjom", district: "Thoubal", image: image.promoResort, summary: "Relax, unwind and reconnect.", packageId: "oneoff", status: "approved", paid: true },
  { id: "promo-pao-more", title: "Pao & More", category: "Handloom and handicrafts", group: "shopping", location: "Ema Keithel", district: "Imphal West", image: image.handloom, summary: "Handmade with love.", packageId: "highlight", status: "approved", paid: true },
  { id: "promo-handloom-expo", title: "Handloom Expo", category: "Markets", group: "shopping", location: "City Convention", district: "Imphal East", image: image.expo, summary: "Support local artisans.", packageId: "highlight", status: "approved", paid: true },
];

const guideArticles = [
  { id: "guide-airport", title: "Airport to Imphal city: first steps", group: "visitor", category: "Airport info", image: image.hero, summary: "Bir Tikendrajit International Airport is the main air gateway for visitors. Use verified taxis, pre-booked pickups, or hotel transfers for the simplest first ride into the city.", body: "For new visitors, the safest workflow is simple: confirm your stay address, arrange a hotel or trusted taxi pickup, keep a local contact number ready, and avoid relying on last-minute unverified transport late at night. Add your hotel, homestay or event venue to your saved map before landing." },
  { id: "guide-kangla", title: "Kangla, Ima Market and a first Imphal day", group: "things", category: "Attractions and sights", image: image.culture, summary: "A starter route for first-time visitors: Kangla, Ima Market, Govindajee Temple and a local food stop.", body: "Kangla is central to Manipur's history. Ima Market is a landmark all-women market. A gentle first-day plan is to start with Kangla, move to Ima Market, take a cafe break, then visit Govindajee Temple or a nearby cultural stop depending on timing." },
  { id: "guide-loktak", title: "Loktak weekend planning guide", group: "visitor", category: "Where to stay", image: image.loktak, summary: "Plan a day or weekend around Loktak Lake, Sendra, boating points and nearby food stops.", body: "Loktak works best as a planned day trip or overnight stay. Check weather, boat timings, return transport and local guidance before leaving Imphal. Keep the visit respectful of local communities and the fragile lake ecosystem." },
  { id: "guide-food", title: "Traditional Manipuri food to try", group: "food", category: "Restaurants", image: image.cafe, summary: "A simple food guide for visitors: local meals, tea, snacks, seasonal produce and market food.", body: "Food pages should help visitors understand what to order, where to ask, and how to respect local food culture. Start with local thalis, market snacks, tea stops, seasonal vegetables and small independent cafes." },
  { id: "guide-shopping", title: "Handloom and handicrafts of Manipur", group: "shopping", category: "Handloom and handicrafts", image: image.handloom, summary: "A buyer-friendly guide to local textiles, gifts, accessories and artisan markets.", body: "Premium shop pages can explain materials, patterns, price ranges, care instructions, pickup or delivery, and contact details. This helps local makers sell with context rather than only a photo." },
  { id: "guide-stays", title: "Where to stay: hotels, homestays and farm stays", group: "visitor", category: "Where to stay", image: image.promoResort, summary: "A visitor page for hotels, Airbnbs, homestays, farm stays and budget accommodation.", body: "A good stay page should show location, safety, transport access, parking, food nearby, family suitability, and contact options. Paid vendors can later get photo galleries and menus." },
  { id: "guide-taxi", title: "Getting around Imphal", group: "visitor", category: "Taxis and rideshares", image: image.hero, summary: "Local transport overview for public transport, private taxis, parking, maps and visitor movement.", body: "The page should collect public transport notes, private taxi contacts, parking guidance, routes to airport, and district travel basics. Admin can update verified numbers later." },
];
const launchArticles = [
  {
    "id": "guide-blue-001",
    "title": "Free things to do in Imphal this weekend",
    "group": "things",
    "category": "Free things to do",
    "image": "/assets/ai/blue-guide-01.svg",
    "summary": "A practical weekend guide for low-cost walks, heritage stops, markets and family-friendly public spaces around Imphal.",
    "body": "A practical weekend guide for low-cost walks, heritage stops, markets and family-friendly public spaces around Imphal. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-002",
    "title": "Kangla heritage route for first-time visitors",
    "group": "things",
    "category": "Attractions and sights",
    "image": "/assets/ai/blue-guide-02.svg",
    "summary": "A calm walking plan around Kangla, with timing, etiquette and nearby cafe break ideas.",
    "body": "A calm walking plan around Kangla, with timing, etiquette and nearby cafe break ideas. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-003",
    "title": "Family and kids day out around Imphal",
    "group": "things",
    "category": "Family and kids",
    "image": "/assets/ai/blue-guide-03.svg",
    "summary": "Simple family activities, safe timing, snack stops and low-pressure places for children and elders.",
    "body": "Simple family activities, safe timing, snack stops and low-pressure places for children and elders. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-004",
    "title": "Music, concerts and small gig nights guide",
    "group": "things",
    "category": "Music & Concerts",
    "image": "/assets/ai/blue-guide-04.svg",
    "summary": "A city guide for organisers and audiences looking for intimate gigs, student music nights and acoustic evenings.",
    "body": "A city guide for organisers and audiences looking for intimate gigs, student music nights and acoustic evenings. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-005",
    "title": "Theatre and performance spaces to watch",
    "group": "things",
    "category": "Theatre and shows",
    "image": "/assets/ai/blue-guide-05.svg",
    "summary": "A starter article for stage shows, community theatre, cultural evenings and rehearsal-friendly venue ideas.",
    "body": "A starter article for stage shows, community theatre, cultural evenings and rehearsal-friendly venue ideas. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-006",
    "title": "Comedy and open mic night starter guide",
    "group": "things",
    "category": "Comedy",
    "image": "/assets/ai/blue-guide-06.svg",
    "summary": "How cafes and small venues can host clean, local open mic nights with simple rules and ticketing.",
    "body": "How cafes and small venues can host clean, local open mic nights with simple rules and ticketing. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-007",
    "title": "Film clubs and screening night ideas",
    "group": "things",
    "category": "Film",
    "image": "/assets/ai/blue-guide-07.svg",
    "summary": "A guide to community screenings, college film nights, documentary evenings and post-show discussions.",
    "body": "A guide to community screenings, college film nights, documentary evenings and post-show discussions. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-008",
    "title": "Sports weekend in Imphal",
    "group": "things",
    "category": "Sport",
    "image": "/assets/ai/blue-guide-08.svg",
    "summary": "Ideas for football, futsal, cycling, martial arts, running groups and local sports meetups.",
    "body": "Ideas for football, futsal, cycling, martial arts, running groups and local sports meetups. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-009",
    "title": "Art exhibitions and student showcases",
    "group": "things",
    "category": "Art",
    "image": "/assets/ai/blue-guide-09.svg",
    "summary": "A guide for local artists to promote exhibitions, pop-up studios, photography walks and student work.",
    "body": "A guide for local artists to promote exhibitions, pop-up studios, photography walks and student work. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-010",
    "title": "Festival planning calendar for Manipur",
    "group": "things",
    "category": "Festivals",
    "image": "/assets/ai/blue-guide-10.svg",
    "summary": "How visitors can plan around seasonal cultural events, food stalls, local markets and transport.",
    "body": "How visitors can plan around seasonal cultural events, food stalls, local markets and transport. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-011",
    "title": "Workshops and skill classes in the city",
    "group": "things",
    "category": "Workshops",
    "image": "/assets/ai/blue-guide-11.svg",
    "summary": "A local guide for weekend workshops, art classes, food demos, music lessons and community learning.",
    "body": "A local guide for weekend workshops, art classes, food demos, music lessons and community learning. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-012",
    "title": "Accessible outing checklist for organisers",
    "group": "things",
    "category": "Accessibility",
    "image": "/assets/ai/blue-guide-12.svg",
    "summary": "A simple checklist for steps, seating, toilets, parking, lighting, sound levels and family access.",
    "body": "A simple checklist for steps, seating, toilets, parking, lighting, sound levels and family access. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-013",
    "title": "Major events: how to promote without confusion",
    "group": "things",
    "category": "Major events",
    "image": "/assets/ai/blue-guide-13.svg",
    "summary": "A clear event page should show date, time, map, price, contact, rules, parking and share links.",
    "body": "A clear event page should show date, time, map, price, contact, rules, parking and share links. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-014",
    "title": "Cultural walks and itineraries for visitors",
    "group": "things",
    "category": "Cultural walks",
    "image": "/assets/ai/blue-guide-14.svg",
    "summary": "Suggested short walking routes that combine landmarks, food, markets and resting points.",
    "body": "Suggested short walking routes that combine landmarks, food, markets and resting points. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-015",
    "title": "Exhibition week: how to plan a visit",
    "group": "things",
    "category": "Exhibition",
    "image": "/assets/ai/blue-guide-15.svg",
    "summary": "A guide to galleries, college exhibitions, handloom showcases and maker fairs.",
    "body": "A guide to galleries, college exhibitions, handloom showcases and maker fairs. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-016",
    "title": "Today in Imphal: quick discovery guide",
    "group": "things",
    "category": "Today",
    "image": "/assets/ai/blue-guide-16.svg",
    "summary": "How users can use search, calendar and saved reminders to decide what to do today.",
    "body": "How users can use search, calendar and saved reminders to decide what to do today. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-017",
    "title": "This weekend around Manipur",
    "group": "things",
    "category": "This weekend",
    "image": "/assets/ai/blue-guide-17.svg",
    "summary": "Weekend trip and event planning with weather checks, transport and reservation reminders.",
    "body": "Weekend trip and event planning with weather checks, transport and reservation reminders. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-018",
    "title": "Coming soon: how to watch future events",
    "group": "things",
    "category": "Coming soon",
    "image": "/assets/ai/blue-guide-18.svg",
    "summary": "A user guide for following coming-soon listings, reminders and shareable event cards.",
    "body": "A user guide for following coming-soon listings, reminders and shareable event cards. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-019",
    "title": "Cafe culture in Imphal: where to start",
    "group": "food",
    "category": "Cafes",
    "image": "/assets/ai/blue-guide-19.svg",
    "summary": "A guide to local cafe discovery, quiet work corners, live acoustic nights, desserts and safe evening planning.",
    "body": "A guide to local cafe discovery, quiet work corners, live acoustic nights, desserts and safe evening planning. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-020",
    "title": "Traditional Manipuri meals for visitors",
    "group": "food",
    "category": "Restaurants",
    "image": "/assets/ai/blue-guide-20.svg",
    "summary": "A visitor-friendly introduction to local meals, seasonal vegetables, fish dishes and respectful ordering.",
    "body": "A visitor-friendly introduction to local meals, seasonal vegetables, fish dishes and respectful ordering. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-021",
    "title": "Street food trail around central Imphal",
    "group": "food",
    "category": "Street food",
    "image": "/assets/ai/blue-guide-21.svg",
    "summary": "Snack stops, timing, hygiene sense, cash tips and how to discover popular stalls safely.",
    "body": "Snack stops, timing, hygiene sense, cash tips and how to discover popular stalls safely. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-022",
    "title": "Tea shops and quick meeting places",
    "group": "food",
    "category": "Tea shops",
    "image": "/assets/ai/blue-guide-22.svg",
    "summary": "A local guide for quick meetings, tea breaks, light snacks and small business conversations.",
    "body": "A local guide for quick meetings, tea breaks, light snacks and small business conversations. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-023",
    "title": "Dining deals and cafe promotions guide",
    "group": "food",
    "category": "Dining deals",
    "image": "/assets/ai/blue-guide-23.svg",
    "summary": "How businesses can present set menus, weekday discounts, student deals and family offers.",
    "body": "How businesses can present set menus, weekday discounts, student deals and family offers. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-024",
    "title": "Takeaway and small kitchen listing guide",
    "group": "food",
    "category": "Takeaway",
    "image": "/assets/ai/blue-guide-24.svg",
    "summary": "A practical template for takeaway menus, pickup timing, WhatsApp ordering and delivery notes.",
    "body": "A practical template for takeaway menus, pickup timing, WhatsApp ordering and delivery notes. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-025",
    "title": "Food festival organiser checklist",
    "group": "food",
    "category": "Dining events",
    "image": "/assets/ai/blue-guide-25.svg",
    "summary": "Planning food stalls, hygiene, ticketing, waste, parking and promotion for a successful food event.",
    "body": "Planning food stalls, hygiene, ticketing, waste, parking and promotion for a successful food event. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-026",
    "title": "Local food trails for visitors",
    "group": "food",
    "category": "Local food trails",
    "image": "/assets/ai/blue-guide-26.svg",
    "summary": "A route idea combining market snacks, lunch, cafe stops and a simple evening dessert plan.",
    "body": "A route idea combining market snacks, lunch, cafe stops and a simple evening dessert plan. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-027",
    "title": "Cafe pop-up blueprint",
    "group": "food",
    "category": "Cafes",
    "image": "/assets/ai/blue-guide-27.svg",
    "summary": "How a cafe can run a one-day pop-up with a poster, menu, map, limited seats and pre-orders.",
    "body": "How a cafe can run a one-day pop-up with a poster, menu, map, limited seats and pre-orders. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-028",
    "title": "Restaurant page essentials",
    "group": "food",
    "category": "Restaurants",
    "image": "/assets/ai/blue-guide-28.svg",
    "summary": "Every restaurant page should have photos, menu highlights, opening time, location, phone and parking notes.",
    "body": "Every restaurant page should have photos, menu highlights, opening time, location, phone and parking notes. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-029",
    "title": "Bakery and dessert discovery in Imphal",
    "group": "food",
    "category": "Specialty food",
    "image": "/assets/ai/blue-guide-29.svg",
    "summary": "A guide for dessert shops, bakeries, celebration cakes and weekend treat promotions.",
    "body": "A guide for dessert shops, bakeries, celebration cakes and weekend treat promotions. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-030",
    "title": "Food photography tips for local vendors",
    "group": "food",
    "category": "Guides",
    "image": "/assets/ai/blue-guide-30.svg",
    "summary": "Simple photo tips for cafes and restaurants so listings look premium without expensive shoots.",
    "body": "Simple photo tips for cafes and restaurants so listings look premium without expensive shoots. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-031",
    "title": "Family dining guide",
    "group": "food",
    "category": "Family and kids",
    "image": "/assets/ai/blue-guide-31.svg",
    "summary": "How to choose places with seating, clean toilets, mild food options and easy parking.",
    "body": "How to choose places with seating, clean toilets, mild food options and easy parking. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-032",
    "title": "Vegetarian and seasonal produce guide",
    "group": "food",
    "category": "Restaurants",
    "image": "/assets/ai/blue-guide-32.svg",
    "summary": "A helpful page for seasonal vegetables, local markets and lighter meal options.",
    "body": "A helpful page for seasonal vegetables, local markets and lighter meal options. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-033",
    "title": "Live music cafe evening planner",
    "group": "food",
    "category": "Music & Concerts",
    "image": "/assets/ai/blue-guide-33.svg",
    "summary": "How cafes can combine music nights, food packages and ticketed tables with clear listings.",
    "body": "How cafes can combine music nights, food packages and ticketed tables with clear listings. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-034",
    "title": "Coffee, tea and work-friendly corners",
    "group": "food",
    "category": "Cafes",
    "image": "/assets/ai/blue-guide-34.svg",
    "summary": "A calm guide to laptop-friendly seating, charging, quiet hours and small-group meetings.",
    "body": "A calm guide to laptop-friendly seating, charging, quiet hours and small-group meetings. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-035",
    "title": "Ima Keithel shopping guide for visitors",
    "group": "shopping",
    "category": "Markets",
    "image": "/assets/ai/blue-guide-35.svg",
    "summary": "How to explore Ima Keithel respectfully, compare items, ask questions and support local sellers.",
    "body": "How to explore Ima Keithel respectfully, compare items, ask questions and support local sellers. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-036",
    "title": "Handloom and textile buyer guide",
    "group": "shopping",
    "category": "Handloom and handicrafts",
    "image": "/assets/ai/blue-guide-36.svg",
    "summary": "A guide to traditional textiles, care, gifting, price transparency and artisan stories.",
    "body": "A guide to traditional textiles, care, gifting, price transparency and artisan stories. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-037",
    "title": "Local fashion and accessories in Imphal",
    "group": "shopping",
    "category": "Fashion",
    "image": "/assets/ai/blue-guide-37.svg",
    "summary": "Discover local labels, accessories, custom wear, festival outfits and student-friendly shops.",
    "body": "Discover local labels, accessories, custom wear, festival outfits and student-friendly shops. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-038",
    "title": "Gifts and homewares from Manipur",
    "group": "shopping",
    "category": "Gifts and homewares",
    "image": "/assets/ai/blue-guide-38.svg",
    "summary": "A shopping guide for souvenirs, home decor, crafts, local snacks and thoughtful gifts.",
    "body": "A shopping guide for souvenirs, home decor, crafts, local snacks and thoughtful gifts. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-039",
    "title": "Technology and mobile shop listing guide",
    "group": "shopping",
    "category": "Technology and entertainment",
    "image": "/assets/ai/blue-guide-39.svg",
    "summary": "How tech shops can show products, service categories, warranty notes and location clearly.",
    "body": "How tech shops can show products, service categories, warranty notes and location clearly. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-040",
    "title": "Sports and outdoor shopping guide",
    "group": "shopping",
    "category": "Sports and outdoor",
    "image": "/assets/ai/blue-guide-40.svg",
    "summary": "Where outdoor, trekking, sports and fitness shops can promote gear, offers and seasonal needs.",
    "body": "Where outdoor, trekking, sports and fitness shops can promote gear, offers and seasonal needs. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-041",
    "title": "Hardware and construction marketplace guide",
    "group": "shopping",
    "category": "Hardware and construction",
    "image": "/assets/ai/blue-guide-41.svg",
    "summary": "A useful category for materials, tools, electrical items, plumbing, delivery notes and contractor contacts.",
    "body": "A useful category for materials, tools, electrical items, plumbing, delivery notes and contractor contacts. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-042",
    "title": "Local retail offers: how to list them",
    "group": "shopping",
    "category": "Local retail offers",
    "image": "/assets/ai/blue-guide-42.svg",
    "summary": "Short offer listings need price, validity, branch, product photo, phone and terms.",
    "body": "Short offer listings need price, validity, branch, product photo, phone and terms. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-043",
    "title": "Weekend market discovery guide",
    "group": "shopping",
    "category": "Markets",
    "image": "/assets/ai/blue-guide-43.svg",
    "summary": "A route for weekend browsing, local food, handloom, accessories and small gifts.",
    "body": "A route for weekend browsing, local food, handloom, accessories and small gifts. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-044",
    "title": "Homegrown brands to watch",
    "group": "shopping",
    "category": "Fashion",
    "image": "/assets/ai/blue-guide-44.svg",
    "summary": "How local brands can build premium pages with lookbooks, story, size guide and ordering info.",
    "body": "How local brands can build premium pages with lookbooks, story, size guide and ordering info. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-045",
    "title": "Specialty food shops and local products",
    "group": "shopping",
    "category": "Specialty food",
    "image": "/assets/ai/blue-guide-45.svg",
    "summary": "A guide to packaged food, pickles, tea, snacks and local produce sellers.",
    "body": "A guide to packaged food, pickles, tea, snacks and local produce sellers. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-046",
    "title": "Student shopping and budget finds",
    "group": "shopping",
    "category": "Local retail offers",
    "image": "/assets/ai/blue-guide-46.svg",
    "summary": "Practical ideas for students looking for affordable food, stationery, accessories and weekend offers.",
    "body": "Practical ideas for students looking for affordable food, stationery, accessories and weekend offers. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-047",
    "title": "Festival shopping preparation",
    "group": "shopping",
    "category": "Festivals",
    "image": "/assets/ai/blue-guide-47.svg",
    "summary": "How users can prepare outfits, gifts, food orders, decorations and bookings before festive weeks.",
    "body": "How users can prepare outfits, gifts, food orders, decorations and bookings before festive weeks. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-048",
    "title": "Retail photo checklist",
    "group": "shopping",
    "category": "Guides",
    "image": "/assets/ai/blue-guide-48.svg",
    "summary": "Simple image rules that make local products look trustworthy and premium online.",
    "body": "Simple image rules that make local products look trustworthy and premium online. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-049",
    "title": "Shop page menu for premium sellers",
    "group": "shopping",
    "category": "Guides",
    "image": "/assets/ai/blue-guide-49.svg",
    "summary": "Premium vendors can use galleries, product categories, WhatsApp links, maps and rotating ads.",
    "body": "Premium vendors can use galleries, product categories, WhatsApp links, maps and rotating ads. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-050",
    "title": "Craft workshop and maker fair guide",
    "group": "shopping",
    "category": "Workshops",
    "image": "/assets/ai/blue-guide-50.svg",
    "summary": "A guide for craft workshops, makers, artists and small creative businesses.",
    "body": "A guide for craft workshops, makers, artists and small creative businesses. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-051",
    "title": "Imphal airport arrival guide",
    "group": "visitor",
    "category": "Airport info",
    "image": "/assets/ai/blue-guide-51.svg",
    "summary": "A first-arrival guide covering pickup planning, city direction, contact numbers and luggage-friendly travel.",
    "body": "A first-arrival guide covering pickup planning, city direction, contact numbers and luggage-friendly travel. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-052",
    "title": "Where to stay in Imphal and nearby areas",
    "group": "visitor",
    "category": "Where to stay",
    "image": "/assets/ai/blue-guide-52.svg",
    "summary": "How visitors can compare hotels, homestays, farm stays, guest houses and location convenience.",
    "body": "How visitors can compare hotels, homestays, farm stays, guest houses and location convenience. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-053",
    "title": "Hotels and business travel basics",
    "group": "visitor",
    "category": "Hotels",
    "image": "/assets/ai/blue-guide-53.svg",
    "summary": "A practical hotel guide for event visitors, business travelers, parking, food access and early check-in.",
    "body": "A practical hotel guide for event visitors, business travelers, parking, food access and early check-in. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-054",
    "title": "Homestays and family stays guide",
    "group": "visitor",
    "category": "Homestays",
    "image": "/assets/ai/blue-guide-54.svg",
    "summary": "What guests should ask before booking: location, meals, privacy, transport, family suitability and rules.",
    "body": "What guests should ask before booking: location, meals, privacy, transport, family suitability and rules. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-055",
    "title": "Farm stays and weekend retreats",
    "group": "visitor",
    "category": "Farm stays",
    "image": "/assets/ai/blue-guide-55.svg",
    "summary": "A calm guide to rural stays, valley views, local meals, transport and quiet weekend planning.",
    "body": "A calm guide to rural stays, valley views, local meals, transport and quiet weekend planning. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-056",
    "title": "Public transport and shared travel basics",
    "group": "visitor",
    "category": "Public transport",
    "image": "/assets/ai/blue-guide-56.svg",
    "summary": "A simple visitor page for buses, shared vehicles, route planning and asking local guidance safely.",
    "body": "A simple visitor page for buses, shared vehicles, route planning and asking local guidance safely. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-057",
    "title": "Private taxi and rideshare guide",
    "group": "visitor",
    "category": "Private taxis",
    "image": "/assets/ai/blue-guide-57.svg",
    "summary": "How to book, confirm fare, save driver contact, share route and plan return travel.",
    "body": "How to book, confirm fare, save driver contact, share route and plan return travel. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-058",
    "title": "Driving and parking in Imphal",
    "group": "visitor",
    "category": "Driving and parking",
    "image": "/assets/ai/blue-guide-58.svg",
    "summary": "Useful notes for parking, event drop-offs, traffic timing, fuel stops and night travel planning.",
    "body": "Useful notes for parking, event drop-offs, traffic timing, fuel stops and night travel planning. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-059",
    "title": "Maps and walking routes for first timers",
    "group": "visitor",
    "category": "Maps",
    "image": "/assets/ai/blue-guide-59.svg",
    "summary": "How to use saved maps, landmark-based navigation, offline screenshots and safe walking routes.",
    "body": "How to use saved maps, landmark-based navigation, offline screenshots and safe walking routes. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-060",
    "title": "Travel essentials for Manipur",
    "group": "visitor",
    "category": "Travel essentials",
    "image": "/assets/ai/blue-guide-60.svg",
    "summary": "Weather, clothing, cash, mobile data, ID, medicines and polite local etiquette for visitors.",
    "body": "Weather, clothing, cash, mobile data, ID, medicines and polite local etiquette for visitors. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-061",
    "title": "Visitor centres and information desks",
    "group": "visitor",
    "category": "Visitor centres",
    "image": "/assets/ai/blue-guide-61.svg",
    "summary": "A page template for official help points, hotel desks, tourist counters and local guidance.",
    "body": "A page template for official help points, hotel desks, tourist counters and local guidance. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-062",
    "title": "Loktak day trip guide",
    "group": "visitor",
    "category": "Attractions and sights",
    "image": "/assets/ai/blue-guide-62.svg",
    "summary": "Planning transport, food, return timing, photo stops and responsible lake visits.",
    "body": "Planning transport, food, return timing, photo stops and responsible lake visits. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-063",
    "title": "Ukhrul hills visitor planning",
    "group": "visitor",
    "category": "District guide",
    "image": "/assets/ai/blue-guide-63.svg",
    "summary": "A guide for hill travel preparation, stay checks, road timing and weather awareness.",
    "body": "A guide for hill travel preparation, stay checks, road timing and weather awareness. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-064",
    "title": "Moreh border town visitor notes",
    "group": "visitor",
    "category": "District guide",
    "image": "/assets/ai/blue-guide-64.svg",
    "summary": "A practical page for trip purpose, transport planning, documents, timings and local guidance.",
    "body": "A practical page for trip purpose, transport planning, documents, timings and local guidance. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-065",
    "title": "Senapati and hill route ideas",
    "group": "visitor",
    "category": "District guide",
    "image": "/assets/ai/blue-guide-65.svg",
    "summary": "A broad guide for scenic routes, food stops, safety, stay planning and local contacts.",
    "body": "A broad guide for scenic routes, food stops, safety, stay planning and local contacts. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-066",
    "title": "Emergency and useful contact checklist",
    "group": "visitor",
    "category": "Travel essentials",
    "image": "/assets/ai/blue-guide-66.svg",
    "summary": "What every visitor page should show: police, hospital, transport contact, hotel and organiser number.",
    "body": "What every visitor page should show: police, hospital, transport contact, hotel and organiser number. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-067",
    "title": "Accessible visitor planning",
    "group": "visitor",
    "category": "Accessibility",
    "image": "/assets/ai/blue-guide-67.svg",
    "summary": "How to check ramps, steps, seating, toilets, parking and travel time before visiting.",
    "body": "How to check ramps, steps, seating, toilets, parking and travel time before visiting. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  },
  {
    "id": "guide-blue-068",
    "title": "Weekend trip packing guide",
    "group": "visitor",
    "category": "Guides",
    "image": "/assets/ai/blue-guide-68.svg",
    "summary": "A compact list for day trips, rain, power bank, cash, ID, water and warm layers.",
    "body": "A compact list for day trips, rain, power bank, cash, ID, water and warm layers. This original guide is written for What's On Imphal & Manipur so it can be edited from AdminPro. Before public launch, replace any temporary contact or timing with verified owner-submitted information. The page should include a clear image, address or area, price notes where relevant, opening or event timing, accessibility notes and a shareable link.",
    "style": {
      "font": "Inter",
      "color": "#12384d",
      "titleSize": 18,
      "bodySize": 15
    }
  }
];

const launchEvents = [
  {
    "id": "evt-blue-001",
    "title": "Imphal Blue Weekend Market",
    "category": "Markets",
    "group": "shopping",
    "date": "2026-07-06",
    "time": "10:00 AM",
    "location": "Ema Keithel extension lane",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-25.svg",
    "summary": "Market stalls, local food, accessories and small maker tables with a clean blue launch theme.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-002",
    "title": "Kangla Evening Heritage Talk",
    "category": "Cultural walks",
    "group": "things",
    "date": "2026-07-09",
    "time": "2:00 PM",
    "location": "Kangla gate area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-26.svg",
    "summary": "A calm evening talk and walk concept for heritage-first visitors.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-003",
    "title": "Local Cafe Acoustic Session",
    "category": "Cafes",
    "group": "food",
    "date": "2026-07-12",
    "time": "5:30 PM",
    "location": "Central Imphal cafe zone",
    "district": "Imphal East",
    "price": "Rs 150",
    "image": "/assets/ai/blue-guide-27.svg",
    "summary": "Small-room music, coffee and a featured local artist night.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-004",
    "title": "Loktak Responsible Travel Briefing",
    "category": "Travel essentials",
    "group": "visitor",
    "date": "2026-07-15",
    "time": "7:00 PM",
    "location": "Sendra visitor point",
    "district": "Bishnupur",
    "price": "Guide",
    "image": "/assets/ai/blue-guide-28.svg",
    "summary": "Visitor briefing for respectful lake travel and weekend planning.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-005",
    "title": "Handloom Maker Pop-up",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "date": "2026-07-18",
    "time": "10:00 AM",
    "location": "City Convention Centre",
    "district": "Imphal East",
    "price": "Market",
    "image": "/assets/ai/blue-guide-29.svg",
    "summary": "Textile, accessories and artisan story cards for premium local shopping.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-006",
    "title": "Family Sunday Park Morning",
    "category": "Family and kids",
    "group": "things",
    "date": "2026-07-21",
    "time": "2:00 PM",
    "location": "City park area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-30.svg",
    "summary": "A simple family morning listing with snacks, games and shaded seating notes.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-007",
    "title": "Food Trail: Local Lunch Edition",
    "category": "Restaurants",
    "group": "food",
    "date": "2026-07-24",
    "time": "5:30 PM",
    "location": "Imphal food route",
    "district": "Imphal West",
    "price": "Food & Drink",
    "image": "/assets/ai/blue-guide-31.svg",
    "summary": "A curated food-route preview for visitors and local groups.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-008",
    "title": "Student Art and Photo Showcase",
    "category": "Art",
    "group": "things",
    "date": "2026-07-27",
    "time": "7:00 PM",
    "location": "College gallery area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-32.svg",
    "summary": "Student work, small prints, photography and beginner-friendly exhibition notes.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-009",
    "title": "Hill Travel Planning Desk",
    "category": "District guide",
    "group": "visitor",
    "date": "2026-07-06",
    "time": "10:00 AM",
    "location": "Ukhrul town desk",
    "district": "Ukhrul",
    "price": "Coming soon",
    "image": "/assets/ai/blue-guide-33.svg",
    "summary": "Transport, stay and route planning help for hill visitors.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-010",
    "title": "Retail Offer Weekend",
    "category": "Local retail offers",
    "group": "shopping",
    "date": "2026-07-09",
    "time": "2:00 PM",
    "location": "Paona and Thangal area",
    "district": "Imphal West",
    "price": "Offers",
    "image": "/assets/ai/blue-guide-34.svg",
    "summary": "Short-time offers from local shops, accessories and specialty food sellers.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-011",
    "title": "Sports Meetup Sunday",
    "category": "Sport",
    "group": "things",
    "date": "2026-08-12",
    "time": "5:30 PM",
    "location": "Local ground",
    "district": "Imphal East",
    "price": "Free",
    "image": "/assets/ai/blue-guide-35.svg",
    "summary": "Community football, cycling and fitness meetup information.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-012",
    "title": "Cafe Menu Photography Workshop",
    "category": "Workshops",
    "group": "food",
    "date": "2026-08-15",
    "time": "7:00 PM",
    "location": "Premium cafe partner venue",
    "district": "Imphal West",
    "price": "Rs 300",
    "image": "/assets/ai/blue-guide-36.svg",
    "summary": "A practical workshop for local businesses to improve menu and product photos.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-013",
    "title": "Imphal Blue Weekend Market 2",
    "category": "Markets",
    "group": "shopping",
    "date": "2026-08-18",
    "time": "10:00 AM",
    "location": "Ema Keithel extension lane",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-37.svg",
    "summary": "Market stalls, local food, accessories and small maker tables with a clean blue launch theme.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-014",
    "title": "Kangla Evening Heritage Talk 2",
    "category": "Cultural walks",
    "group": "things",
    "date": "2026-08-21",
    "time": "2:00 PM",
    "location": "Kangla gate area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-38.svg",
    "summary": "A calm evening talk and walk concept for heritage-first visitors.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-015",
    "title": "Local Cafe Acoustic Session 2",
    "category": "Cafes",
    "group": "food",
    "date": "2026-08-24",
    "time": "5:30 PM",
    "location": "Central Imphal cafe zone",
    "district": "Imphal East",
    "price": "Rs 150",
    "image": "/assets/ai/blue-guide-39.svg",
    "summary": "Small-room music, coffee and a featured local artist night.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-016",
    "title": "Loktak Responsible Travel Briefing 2",
    "category": "Travel essentials",
    "group": "visitor",
    "date": "2026-08-27",
    "time": "7:00 PM",
    "location": "Sendra visitor point",
    "district": "Bishnupur",
    "price": "Guide",
    "image": "/assets/ai/blue-guide-40.svg",
    "summary": "Visitor briefing for respectful lake travel and weekend planning.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-017",
    "title": "Handloom Maker Pop-up 2",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "date": "2026-08-06",
    "time": "10:00 AM",
    "location": "City Convention Centre",
    "district": "Imphal East",
    "price": "Market",
    "image": "/assets/ai/blue-guide-41.svg",
    "summary": "Textile, accessories and artisan story cards for premium local shopping.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-018",
    "title": "Family Sunday Park Morning 2",
    "category": "Family and kids",
    "group": "things",
    "date": "2026-08-09",
    "time": "2:00 PM",
    "location": "City park area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-42.svg",
    "summary": "A simple family morning listing with snacks, games and shaded seating notes.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-019",
    "title": "Food Trail: Local Lunch Edition 2",
    "category": "Restaurants",
    "group": "food",
    "date": "2026-08-12",
    "time": "5:30 PM",
    "location": "Imphal food route",
    "district": "Imphal West",
    "price": "Food & Drink",
    "image": "/assets/ai/blue-guide-43.svg",
    "summary": "A curated food-route preview for visitors and local groups.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-020",
    "title": "Student Art and Photo Showcase 2",
    "category": "Art",
    "group": "things",
    "date": "2026-08-15",
    "time": "7:00 PM",
    "location": "College gallery area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-44.svg",
    "summary": "Student work, small prints, photography and beginner-friendly exhibition notes.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-021",
    "title": "Hill Travel Planning Desk 2",
    "category": "District guide",
    "group": "visitor",
    "date": "2026-09-18",
    "time": "10:00 AM",
    "location": "Ukhrul town desk",
    "district": "Ukhrul",
    "price": "Coming soon",
    "image": "/assets/ai/blue-guide-45.svg",
    "summary": "Transport, stay and route planning help for hill visitors.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-022",
    "title": "Retail Offer Weekend 2",
    "category": "Local retail offers",
    "group": "shopping",
    "date": "2026-09-21",
    "time": "2:00 PM",
    "location": "Paona and Thangal area",
    "district": "Imphal West",
    "price": "Offers",
    "image": "/assets/ai/blue-guide-46.svg",
    "summary": "Short-time offers from local shops, accessories and specialty food sellers.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-023",
    "title": "Sports Meetup Sunday 2",
    "category": "Sport",
    "group": "things",
    "date": "2026-09-24",
    "time": "5:30 PM",
    "location": "Local ground",
    "district": "Imphal East",
    "price": "Free",
    "image": "/assets/ai/blue-guide-47.svg",
    "summary": "Community football, cycling and fitness meetup information.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-024",
    "title": "Cafe Menu Photography Workshop 2",
    "category": "Workshops",
    "group": "food",
    "date": "2026-09-27",
    "time": "7:00 PM",
    "location": "Premium cafe partner venue",
    "district": "Imphal West",
    "price": "Rs 300",
    "image": "/assets/ai/blue-guide-48.svg",
    "summary": "A practical workshop for local businesses to improve menu and product photos.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-025",
    "title": "Imphal Blue Weekend Market 3",
    "category": "Markets",
    "group": "shopping",
    "date": "2026-09-06",
    "time": "10:00 AM",
    "location": "Ema Keithel extension lane",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-49.svg",
    "summary": "Market stalls, local food, accessories and small maker tables with a clean blue launch theme.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-026",
    "title": "Kangla Evening Heritage Talk 3",
    "category": "Cultural walks",
    "group": "things",
    "date": "2026-09-09",
    "time": "2:00 PM",
    "location": "Kangla gate area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-50.svg",
    "summary": "A calm evening talk and walk concept for heritage-first visitors.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-027",
    "title": "Local Cafe Acoustic Session 3",
    "category": "Cafes",
    "group": "food",
    "date": "2026-09-12",
    "time": "5:30 PM",
    "location": "Central Imphal cafe zone",
    "district": "Imphal East",
    "price": "Rs 150",
    "image": "/assets/ai/blue-guide-51.svg",
    "summary": "Small-room music, coffee and a featured local artist night.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-028",
    "title": "Loktak Responsible Travel Briefing 3",
    "category": "Travel essentials",
    "group": "visitor",
    "date": "2026-09-15",
    "time": "7:00 PM",
    "location": "Sendra visitor point",
    "district": "Bishnupur",
    "price": "Guide",
    "image": "/assets/ai/blue-guide-52.svg",
    "summary": "Visitor briefing for respectful lake travel and weekend planning.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-029",
    "title": "Handloom Maker Pop-up 3",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "date": "2026-09-18",
    "time": "10:00 AM",
    "location": "City Convention Centre",
    "district": "Imphal East",
    "price": "Market",
    "image": "/assets/ai/blue-guide-53.svg",
    "summary": "Textile, accessories and artisan story cards for premium local shopping.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-030",
    "title": "Family Sunday Park Morning 3",
    "category": "Family and kids",
    "group": "things",
    "date": "2026-09-21",
    "time": "2:00 PM",
    "location": "City park area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-54.svg",
    "summary": "A simple family morning listing with snacks, games and shaded seating notes.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-031",
    "title": "Food Trail: Local Lunch Edition 3",
    "category": "Restaurants",
    "group": "food",
    "date": "2026-10-24",
    "time": "5:30 PM",
    "location": "Imphal food route",
    "district": "Imphal West",
    "price": "Food & Drink",
    "image": "/assets/ai/blue-guide-55.svg",
    "summary": "A curated food-route preview for visitors and local groups.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  },
  {
    "id": "evt-blue-032",
    "title": "Student Art and Photo Showcase 3",
    "category": "Art",
    "group": "things",
    "date": "2026-10-27",
    "time": "7:00 PM",
    "location": "College gallery area",
    "district": "Imphal West",
    "price": "Free",
    "image": "/assets/ai/blue-guide-56.svg",
    "summary": "Student work, small prints, photography and beginner-friendly exhibition notes.",
    "organiser": "What's On Local Desk",
    "packageId": "highlight",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-033",
    "title": "Hill Travel Planning Desk 3",
    "category": "District guide",
    "group": "visitor",
    "date": "2026-10-06",
    "time": "10:00 AM",
    "location": "Ukhrul town desk",
    "district": "Ukhrul",
    "price": "Coming soon",
    "image": "/assets/ai/blue-guide-57.svg",
    "summary": "Transport, stay and route planning help for hill visitors.",
    "organiser": "What's On Local Desk",
    "packageId": "oneoff",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-034",
    "title": "Retail Offer Weekend 3",
    "category": "Local retail offers",
    "group": "shopping",
    "date": "2026-10-09",
    "time": "2:00 PM",
    "location": "Paona and Thangal area",
    "district": "Imphal West",
    "price": "Offers",
    "image": "/assets/ai/blue-guide-58.svg",
    "summary": "Short-time offers from local shops, accessories and specialty food sellers.",
    "organiser": "What's On Local Desk",
    "packageId": "monthly10",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-035",
    "title": "Sports Meetup Sunday 3",
    "category": "Sport",
    "group": "things",
    "date": "2026-10-12",
    "time": "5:30 PM",
    "location": "Local ground",
    "district": "Imphal East",
    "price": "Free",
    "image": "/assets/ai/blue-guide-59.svg",
    "summary": "Community football, cycling and fitness meetup information.",
    "organiser": "What's On Local Desk",
    "packageId": "premiumshop",
    "status": "approved",
    "featured": true,
    "paid": true
  },
  {
    "id": "evt-blue-036",
    "title": "Cafe Menu Photography Workshop 3",
    "category": "Workshops",
    "group": "food",
    "date": "2026-10-15",
    "time": "7:00 PM",
    "location": "Premium cafe partner venue",
    "district": "Imphal West",
    "price": "Rs 300",
    "image": "/assets/ai/blue-guide-60.svg",
    "summary": "A practical workshop for local businesses to improve menu and product photos.",
    "organiser": "What's On Local Desk",
    "packageId": "free",
    "status": "approved",
    "featured": false,
    "paid": false
  }
];

const launchPromotions = [
  {
    "id": "promo-blue-001",
    "title": "Blue Corner Cafe",
    "category": "Cafes",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-45.svg",
    "summary": "Coffee, brunch, desserts and quiet work corners with a premium listing page.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-002",
    "title": "Ema Keithel Textile Desk",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-46.svg",
    "summary": "Curated local textiles, gifts and artisan product stories.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-003",
    "title": "Hill View Homestay",
    "category": "Homestays",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Ukhrul",
    "image": "/assets/ai/blue-guide-47.svg",
    "summary": "A calm stay page for hill visitors with gallery, transport notes and meal options.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-004",
    "title": "City Gear and Electronics",
    "category": "Technology and entertainment",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-48.svg",
    "summary": "Local tech, accessories, repair categories and verified contact details.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-005",
    "title": "Loktak Weekend Retreat",
    "category": "Resorts",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Bishnupur",
    "image": "/assets/ai/blue-guide-49.svg",
    "summary": "Weekend stay, lake views, food notes and responsible travel guidance.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-006",
    "title": "Acoustic Nights Partner Venue",
    "category": "Music & Concerts",
    "group": "things",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-50.svg",
    "summary": "Small venue promotions for music nights, comedy and cultural sessions.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-007",
    "title": "Family Dining Partner",
    "category": "Restaurants",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-51.svg",
    "summary": "Family seating, menu highlights, parking notes and shareable offers.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-008",
    "title": "Sports and Outdoor Store",
    "category": "Sports and outdoor",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-52.svg",
    "summary": "Outdoor gear, sports accessories, seasonal offers and contact route.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-009",
    "title": "Blue Corner Cafe 2",
    "category": "Cafes",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-53.svg",
    "summary": "Coffee, brunch, desserts and quiet work corners with a premium listing page.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-010",
    "title": "Ema Keithel Textile Desk 2",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-54.svg",
    "summary": "Curated local textiles, gifts and artisan product stories.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-011",
    "title": "Hill View Homestay 2",
    "category": "Homestays",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Ukhrul",
    "image": "/assets/ai/blue-guide-55.svg",
    "summary": "A calm stay page for hill visitors with gallery, transport notes and meal options.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-012",
    "title": "City Gear and Electronics 2",
    "category": "Technology and entertainment",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-56.svg",
    "summary": "Local tech, accessories, repair categories and verified contact details.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-013",
    "title": "Loktak Weekend Retreat 2",
    "category": "Resorts",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Bishnupur",
    "image": "/assets/ai/blue-guide-57.svg",
    "summary": "Weekend stay, lake views, food notes and responsible travel guidance.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-014",
    "title": "Acoustic Nights Partner Venue 2",
    "category": "Music & Concerts",
    "group": "things",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-58.svg",
    "summary": "Small venue promotions for music nights, comedy and cultural sessions.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-015",
    "title": "Family Dining Partner 2",
    "category": "Restaurants",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-59.svg",
    "summary": "Family seating, menu highlights, parking notes and shareable offers.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-016",
    "title": "Sports and Outdoor Store 2",
    "category": "Sports and outdoor",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-60.svg",
    "summary": "Outdoor gear, sports accessories, seasonal offers and contact route.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-017",
    "title": "Blue Corner Cafe 3",
    "category": "Cafes",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-61.svg",
    "summary": "Coffee, brunch, desserts and quiet work corners with a premium listing page.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-018",
    "title": "Ema Keithel Textile Desk 3",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-62.svg",
    "summary": "Curated local textiles, gifts and artisan product stories.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-019",
    "title": "Hill View Homestay 3",
    "category": "Homestays",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Ukhrul",
    "image": "/assets/ai/blue-guide-63.svg",
    "summary": "A calm stay page for hill visitors with gallery, transport notes and meal options.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-020",
    "title": "City Gear and Electronics 3",
    "category": "Technology and entertainment",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-64.svg",
    "summary": "Local tech, accessories, repair categories and verified contact details.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-021",
    "title": "Loktak Weekend Retreat 3",
    "category": "Resorts",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Bishnupur",
    "image": "/assets/ai/blue-guide-65.svg",
    "summary": "Weekend stay, lake views, food notes and responsible travel guidance.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-022",
    "title": "Acoustic Nights Partner Venue 3",
    "category": "Music & Concerts",
    "group": "things",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-66.svg",
    "summary": "Small venue promotions for music nights, comedy and cultural sessions.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-023",
    "title": "Family Dining Partner 3",
    "category": "Restaurants",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-67.svg",
    "summary": "Family seating, menu highlights, parking notes and shareable offers.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-024",
    "title": "Sports and Outdoor Store 3",
    "category": "Sports and outdoor",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-68.svg",
    "summary": "Outdoor gear, sports accessories, seasonal offers and contact route.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-025",
    "title": "Blue Corner Cafe 4",
    "category": "Cafes",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-69.svg",
    "summary": "Coffee, brunch, desserts and quiet work corners with a premium listing page.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-026",
    "title": "Ema Keithel Textile Desk 4",
    "category": "Handloom and handicrafts",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-70.svg",
    "summary": "Curated local textiles, gifts and artisan product stories.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-027",
    "title": "Hill View Homestay 4",
    "category": "Homestays",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Ukhrul",
    "image": "/assets/ai/blue-guide-71.svg",
    "summary": "A calm stay page for hill visitors with gallery, transport notes and meal options.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-028",
    "title": "City Gear and Electronics 4",
    "category": "Technology and entertainment",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-72.svg",
    "summary": "Local tech, accessories, repair categories and verified contact details.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-029",
    "title": "Loktak Weekend Retreat 4",
    "category": "Resorts",
    "group": "visitor",
    "location": "Imphal & Manipur",
    "district": "Bishnupur",
    "image": "/assets/ai/blue-guide-01.svg",
    "summary": "Weekend stay, lake views, food notes and responsible travel guidance.",
    "packageId": "highlight",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-030",
    "title": "Acoustic Nights Partner Venue 4",
    "category": "Music & Concerts",
    "group": "things",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-02.svg",
    "summary": "Small venue promotions for music nights, comedy and cultural sessions.",
    "packageId": "oneoff",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-031",
    "title": "Family Dining Partner 4",
    "category": "Restaurants",
    "group": "food",
    "location": "Imphal & Manipur",
    "district": "Imphal East",
    "image": "/assets/ai/blue-guide-03.svg",
    "summary": "Family seating, menu highlights, parking notes and shareable offers.",
    "packageId": "monthly10",
    "status": "approved",
    "paid": true,
    "featured": true
  },
  {
    "id": "promo-blue-032",
    "title": "Sports and Outdoor Store 4",
    "category": "Sports and outdoor",
    "group": "shopping",
    "location": "Imphal & Manipur",
    "district": "Imphal West",
    "image": "/assets/ai/blue-guide-04.svg",
    "summary": "Outdoor gear, sports accessories, seasonal offers and contact route.",
    "packageId": "premiumshop",
    "status": "approved",
    "paid": true,
    "featured": true
  }
];

const holidays2026 = [
  ["2026-01-26", "Republic Day"],
  ["2026-03-04", "Holi"],
  ["2026-03-21", "Id-ul-Fitr"],
  ["2026-03-31", "Mahavir Jayanti"],
  ["2026-04-03", "Good Friday"],
  ["2026-05-01", "Buddha Purnima"],
  ["2026-05-27", "Id-ul-Zuha"],
  ["2026-06-26", "Muharram"],
  ["2026-08-15", "Independence Day"],
  ["2026-08-26", "Id-e-Milad"],
  ["2026-10-02", "Gandhi Jayanti"],
  ["2026-10-20", "Dussehra"],
  ["2026-11-08", "Diwali"],
  ["2026-11-24", "Guru Nanak Jayanti"],
  ["2026-12-25", "Christmas"],
].map(([date, title]) => ({ id: `holiday-${date}`, date, title, category: "Public holiday", image: image.culture }));

const publicPhotoPool = [
  image.hero,
  image.culture,
  image.market,
  image.music,
  image.loktak,
  image.cafe,
  image.promoCafe,
  image.promoConcert,
  image.promoResort,
  image.handloom,
  image.expo,
];

function fixedPhotoForItem(item = {}, index = 0) {
  const text = [item.title, item.category, item.group, item.location, item.district, item.summary].map(plainTextSafe).join(" ").toLowerCase();
  if (/cafe|coffee|tea|restaurant|food|dining|meal|snack|breakfast|brunch|thali/.test(text)) return [image.cafe, image.promoCafe, image.market][index % 3];
  if (/handloom|textile|shopping|market|retail|gift|fashion|accessor|artisan|craft|shop|offer|ima/.test(text)) return [image.market, image.handloom, image.expo, image.promoCafe][index % 4];
  if (/music|concert|gig|acoustic|comedy|theatre|film|night|stage|entertainment/.test(text)) return [image.music, image.promoConcert, image.hero][index % 3];
  if (/loktak|lake|tour|travel|visitor|airport|taxi|hotel|homestay|resort|stay|farm|district|hill|route|walking|map|ukhrul|senapati|bishnupur|churachandpur|chandel|tamenglong|moreh/.test(text)) return [image.loktak, image.promoResort, image.hero, image.market][index % 4];
  if (/culture|festival|heritage|kangla|lai|dance|traditional|thang-ta|yaoshang|sangai|temple/.test(text)) return [image.culture, image.expo, image.market][index % 3];
  return publicPhotoPool[index % publicPhotoPool.length];
}

function plainTextSafe(value = "") {
  return String(value || "").replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&");
}

function hydrateVisuals(items = [], offset = 0) {
  return items.map((item, index) => ({
    ...item,
    image: fixedPhotoForItem(item, index + offset),
  }));
}

const finalEvents = hydrateVisuals([...seedEvents, ...launchEvents], 0);
const finalPromotions = hydrateVisuals([...seedPromotions, ...launchPromotions], 80);
const finalArticles = hydrateVisuals([...guideArticles, ...launchArticles], 160);

const defaultState = {
  profile: { name: "Guest User", email: "", phone: "", activePackage: "free", joined: new Date().toISOString() },
  settings: {
    siteTitle: "What's On Imphal & Manipur",
    tagline: "Events, food, music, markets and local happenings across Manipur",
    heroTitle: "Discover Imphal's best nights",
    heroSubtitle: "Food, music and culture come alive",
    heroImage: image.hero,
    accent: "#4eb8e8",
    font: "Merriweather",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    supportPhone: "+91 98765 43210",
    supportEmail: "support@whatson.imphal.in",
    upiId: "whatsonimphal@upi",
    seoTitle: "What's On Imphal & Manipur | Events, Food, Markets and Visitor Guides",
    seoDescription: "Discover events, cafes, markets, shopping, stays, visitor information and local promotions across Imphal and Manipur.",
    facebookUrl: "https://facebook.com/whatsonimphal",
    instagramUrl: "https://instagram.com/whatsonimphal",
    youtubeUrlPublic: "https://youtube.com/@whatsonimphal",
    tickerVisible: true,
    tickerSpeed: 36,
    tickerBackground: "#dff3ff",
    tickerItems: [
      { id: "tick-1", icon: "📣", text: "Post your event and reach people across Imphal & Manipur", color: "#171512", font: "Inter", size: 15, bold: true, link: "#create" },
      { id: "tick-2", icon: "🔥", text: "Premium highlights rotate on the homepage after admin approval", color: "#0f5f86", font: "Inter", size: 15, bold: true, link: "#vendor" },
      { id: "tick-3", icon: "🎟", text: "Coming soon: festivals, cafes, markets, stays and local offers", color: "#164e69", font: "Inter", size: 15, bold: false, link: "#latest" },
    ],
    heroMediaType: "image",
    heroOverlay: 68,
    heroTitleColor: "#ffffff",
    heroSubtitleColor: "#eaf8ff",
    heroTitleSize: 34,
    heroSubtitleSize: 16,
    heroTextFont: "Merriweather",
    articleTitle: "City Guide",
    articleBody: "A curated guide for events, food, music, markets, visitor planning and local experiences around Imphal and Manipur.",
    subArticleTitle: "For local organisers",
    subArticleBody: "Create listings, choose a promotion package, and submit for admin review before publication.",
  },
  events: finalEvents,
  promotions: finalPromotions,
  articles: finalArticles,
  savedEventIds: [],
  reminders: [],
  payments: [],
};

let state = loadState();
let route = getRoute();
let ui = {
  burger: false,
  menu: "",
  searchPanel: "",
  adminSelected: { type: "hero", id: "hero" },
  adminTargetScrollTop: null,
  adminShouldFocus: false,
};
let activeRichEditor = null;
let savedRichRange = null;
let secretTapTimes = [];
let toastTimer;
normalizeLoadedStateText();

window.addEventListener("hashchange", () => {
  route = getRoute();
  ui = { ...ui, burger: false, menu: "", searchPanel: "" };
  render();
});
document.addEventListener("DOMContentLoaded", render);

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      settings: { ...defaultState.settings, ...(parsed.settings || {}) },
      profile: { ...defaultState.profile, ...(parsed.profile || {}) },
      events: mergeById(defaultState.events, parsed.events),
      promotions: mergeById(defaultState.promotions, parsed.promotions),
      articles: mergeById(defaultState.articles, parsed.articles),
      savedEventIds: Array.isArray(parsed.savedEventIds) ? parsed.savedEventIds : [],
      reminders: Array.isArray(parsed.reminders) ? parsed.reminders : [],
      payments: Array.isArray(parsed.payments) ? parsed.payments : [],
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeById(base, saved = []) {
  const map = new Map(base.map((item) => [item.id, item]));
  if (Array.isArray(saved)) saved.forEach((item) => map.set(item.id, { ...map.get(item.id), ...item }));
  return [...map.values()];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getRoute() {
  return window.location.hash.replace("#", "") || "home";
}

function closeOverlays() {
  const hadOpenLayer = Boolean(ui.burger || ui.menu || ui.searchPanel);
  ui = { burger: false, menu: "", searchPanel: "" };
  return hadOpenLayer;
}

function navigate(next) {
  closeOverlays();
  if ((window.location.hash.replace("#", "") || "home") === next) {
    route = next;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = next;
}

function escapeHtml(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}


function decodeHtmlEntities(value = "") {
  const textarea = document.createElement("textarea");
  let current = String(value || "");
  for (let i = 0; i < 3; i += 1) {
    textarea.innerHTML = current;
    const decoded = textarea.value;
    if (decoded === current) break;
    current = decoded;
  }
  return current;
}

function repairEscapedText(value = "") {
  const raw = String(value || "");
  if (/<\/?(b|strong|i|em|u|span|div|p|br|font|a|ul|ol|li|h[1-6])\b/i.test(raw)) return raw;
  return decodeHtmlEntities(raw);
}

function normalizeLoadedStateText() {
  ["siteTitle", "tagline", "heroTitle", "heroSubtitle", "articleTitle", "articleBody", "subArticleTitle", "subArticleBody"].forEach((key) => {
    if (state.settings?.[key]) state.settings[key] = repairEscapedText(state.settings[key]);
  });
}

function packageById(id) {
  return packages.find((item) => item.id === id) || packages[0];
}

function approvedEvents() {
  return state.events.filter((event) => event.status === "approved");
}

function approvedPromotions() {
  return state.promotions.filter((promo) => promo.status === "approved");
}

function currentArticles() {
  return Array.isArray(state.articles) ? state.articles : guideArticles;
}


function currentAdminSelection() {
  return ui.adminSelected || { type: "hero", id: "hero" };
}

function setAdminSelection(type, id = "", options = {}) {
  ui.adminSelected = { type, id: id || type };
  ui.adminShouldFocus = true;
  if (options.sourceElement) {
    ui.adminTargetScrollTop = getAdminPreviewScrollTopFor(options.sourceElement);
  } else {
    ui.adminTargetScrollTop = null;
  }
}

function getAdminPreviewScrollTopFor(sourceElement) {
  const preview = sourceElement?.closest?.(".admin-site-preview");
  if (!preview) return null;
  const previewRect = preview.getBoundingClientRect();
  const elementRect = sourceElement.getBoundingClientRect();
  return Math.max(0, preview.scrollTop + elementRect.top - previewRect.top - 84);
}

function adminSelectionQuery() {
  const selected = currentAdminSelection();
  return `[data-admin-select-type="${cssEscape(selected.type)}"][data-admin-select-id="${cssEscape(selected.id || selected.type)}"]`;
}

function cssEscape(value = "") {
  if (window.CSS?.escape) return window.CSS.escape(String(value));
  return String(value).replace(/(["\\#.;,[\]()>+~*^$|=!])/g, "\\$1");
}

function focusAdminPreviewSelection() {
  if (route !== "admin") return;
  requestAnimationFrame(() => {
    const preview = document.querySelector(".admin-site-preview");
    if (!preview) return;
    if (typeof ui.adminTargetScrollTop === "number") {
      preview.scrollTo({ top: ui.adminTargetScrollTop, behavior: "smooth" });
      ui.adminTargetScrollTop = null;
      ui.adminShouldFocus = false;
      return;
    }
    const target = preview.querySelector(adminSelectionQuery());
    if (!target) return;
    const targetTop = Math.max(0, target.offsetTop - 90);
    if (ui.adminShouldFocus || target.classList.contains("admin-selected")) {
      preview.scrollTo({ top: targetTop, behavior: "smooth" });
    }
    ui.adminShouldFocus = false;
  });
}

function renderAdminPreviewContent() {
  return `${renderHeaderPreview()}${renderTicker(true)}<main class="page-shell preview-shell">${renderHome()}</main>`;
}

function refreshAdminPreviewOnly({ preserveScroll = true, focusSelected = false } = {}) {
  const preview = document.querySelector(".admin-site-preview");
  if (!preview) return;
  const previousScroll = preview.scrollTop;
  preview.innerHTML = renderAdminPreviewContent();
  bindAdminPreviewSelection();
  if (preserveScroll) preview.scrollTop = previousScroll;
  if (focusSelected) {
    ui.adminShouldFocus = true;
    focusAdminPreviewSelection();
  }
}

function isAdminSelected(type, id = "") {
  const selected = currentAdminSelection();
  return selected.type === type && String(selected.id || "") === String(id || type);
}

function adminSelectClass(type, id = "") {
  return route === "admin" ? ` admin-selectable ${isAdminSelected(type, id) ? "admin-selected" : ""}` : "";
}

function adminSelectAttrs(type, id = "") {
  if (route !== "admin") return "";
  return ` data-admin-select-type="${escapeHtml(type)}" data-admin-select-id="${escapeHtml(id || type)}"`;
}

function adminItemLabel(type, id = "") {
  if (type === "hero") return "Hero section";
  if (type === "ticker") return "Ticker tape";
  const item = findAdminItem(type, id);
  if (item) return plainText(item.title || item.category || type);
  return type;
}

function findAdminItem(type, id = "") {
  if (type === "event") return state.events.find((item) => item.id === id);
  if (type === "promo") return state.promotions.find((item) => item.id === id);
  if (type === "article") return currentArticles().find((item) => item.id === id);
  return null;
}

function allPublicItems() {
  return [...approvedEvents(), ...approvedPromotions(), ...currentArticles()];
}

function typeForItem(item) {
  if (!item) return "article";
  if (item.date) return "event";
  if (state.promotions.some((promo) => promo.id === item.id)) return "promo";
  return "article";
}

function routeForItem(item) {
  const type = typeForItem(item);
  if (type === "event") return `event/${item.id}`;
  if (type === "promo") return `promo/${item.id}`;
  return `guide/${item.id}`;
}

function renderListCard(item) {
  const type = typeForItem(item);
  if (type === "event") return renderEventCard(item);
  if (type === "promo") return renderPromoListingCard(item);
  return renderGuideCard(item);
}

function weightedFeaturedItems() {
  return [...approvedEvents(), ...approvedPromotions()]
    .filter((item) => item.paid || item.featured)
    .sort((a, b) => packageById(b.packageId).weight - packageById(a.packageId).weight || a.title.localeCompare(b.title));
}

function formatDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function dayBadge(value) {
  const date = new Date(`${value}T12:00:00`);
  return { day: String(date.getDate()).padStart(2, "0"), month: date.toLocaleDateString("en-IN", { month: "short" }) };
}

function setCssVars() {
  document.documentElement.style.setProperty("--accent", state.settings.accent || "#4eb8e8");
  document.documentElement.style.setProperty("--site-font", state.settings.font === "Inter" ? "Inter, Arial, sans-serif" : "Merriweather, Georgia, serif");
}

function updateMetaForRoute() {
  const title = plainText(state.settings.seoTitle || state.settings.siteTitle || "What's On Imphal & Manipur");
  const description = plainText(state.settings.seoDescription || state.settings.tagline || "Events, food, markets and visitor guides across Manipur.");
  document.title = title;
  upsertMeta("description", description);
  upsertMeta("og:title", title, "property");
  upsertMeta("og:description", description, "property");
  upsertMeta("og:type", "website", "property");
  upsertMeta("og:image", location.origin + (state.settings.heroImage || image.hero), "property");
  upsertJsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "What's On Imphal & Manipur",
    url: location.origin,
    potentialAction: { "@type": "SearchAction", target: `${location.origin}/#latest?q={search_term_string}`, "query-input": "required name=search_term_string" }
  });
}

function upsertMeta(key, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute("content", content);
}

function upsertJsonLd(data) {
  let el = document.head.querySelector("script[data-whatson-jsonld]");
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.dataset.whatsonJsonld = "1"; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}

function searchItems(query = "", category = "", when = "", where = "") {
  const q = query.trim().toLowerCase();
  const whenKey = String(when).trim().toLowerCase();
  const now = new Date("2026-07-05T12:00:00");
  const weekendEnd = new Date("2026-07-12T23:59:00");
  return allPublicItems()
    .filter((item) => {
      const haystack = [item.title, item.category, item.group, item.location, item.district, item.summary, item.body, item.price].map(plainText).join(" ").toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const matchesCategory = !category || category === "Anything" || haystack.includes(category.toLowerCase());
      const matchesWhere = !where || where === "Anywhere" || haystack.includes(where.toLowerCase());
      let matchesWhen = true;
      if (item.date && whenKey === "today") matchesWhen = item.date === "2026-07-05";
      if (item.date && whenKey === "tomorrow") matchesWhen = item.date === "2026-07-06";
      if (item.date && whenKey === "this weekend") {
        const date = new Date(`${item.date}T12:00:00`);
        matchesWhen = date >= now && date <= weekendEnd;
      }
      if (whenKey === "free") matchesWhen = String(item.price || "").toLowerCase().includes("free");
      return matchesQuery && matchesCategory && matchesWhere && matchesWhen;
    })
    .sort((a, b) => String(a.date || "9999").localeCompare(String(b.date || "9999")));
}

function itemsByGroup(group) {
  return allPublicItems().filter((item) => item.group === group || item.category === group);
}

function render() {
  setCssVars();
  updateMetaForRoute();
  document.querySelector("#app").innerHTML = `${renderHeader()}${renderTicker()}<main class="page-shell">${renderRoute()}</main>${renderFooter()}${renderBottomNav()}`;
  bindEvents();
  if (route === "admin") focusAdminPreviewSelection();
}

function renderHeader() {
  const menuButtons = Object.entries(categoryGroups)
    .map(([key, menu]) => `<button class="menu-trigger ${ui.menu === key ? "active" : ""}" data-menu="${key}">${escapeHtml(menu.label)} <span>${ui.menu === key ? "⌃" : "⌄"}</span></button>`)
    .join("");
  return `
    <header class="topbar">
      <button class="burger-button" data-burger aria-label="Open menu">☰</button>
      <a href="#home" class="brand" data-home-link aria-label="Home"><span class="brand-mark">WO</span><span class="brand-title">${renderRichContent(state.settings.siteTitle)}</span></a>
      <nav class="desktop-nav mega-nav" aria-label="Primary">${menuButtons}</nav>
      <div class="topbar-actions"><button class="btn ghost small" data-route="vendor" data-secret-trigger>Promote</button><button class="btn primary small" data-route="create">Post your event</button></div>
      ${ui.burger ? renderBurgerMenu() : ""}
      ${ui.menu ? renderMegaMenu(ui.menu) : ""}
    </header>
  `;
}

function renderTicker(inPreview = false) {
  if (!state.settings.tickerVisible) return "";
  const items = (state.settings.tickerItems || []).filter((item) => plainText(item.text));
  if (!items.length) return "";
  const track = [...items, ...items].map((item) => {
    const style = `color:${escapeHtml(item.color || "#171512")};font-family:${escapeHtml(fontStack(item.font))};font-size:${Number(item.size || 15)}px;font-weight:${item.bold ? 950 : 750}`;
    const content = `<span class="ticker-icon">${escapeHtml(item.icon || "•")}</span><span class="ticker-copy" style="${style}">${renderRichContent(item.text)}</span>`;
    return item.link ? `<a href="${escapeHtml(item.link)}">${content}</a>` : `<span>${content}</span>`;
  }).join("");
  const speed = Math.max(12, Number(state.settings.tickerSpeed || 36));
  const bg = state.settings.tickerBackground || "#dff3ff";
  return `<section class="site-ticker ${inPreview ? "preview-ticker" : ""}${adminSelectClass("ticker", "ticker")}"${adminSelectAttrs("ticker", "ticker")} style="--ticker-speed:${speed}s;--ticker-bg:${escapeHtml(bg)}"><div class="ticker-track">${track}</div></section>`;
}

function fontStack(font = "Inter") {
  if (font === "Merriweather") return "Merriweather, Georgia, serif";
  if (font === "Georgia") return "Georgia, serif";
  if (font === "Poppins") return "Poppins, Inter, Arial, sans-serif";
  return "Inter, Arial, sans-serif";
}

function renderBurgerMenu() {
  const primary = [
    { label: "Home", route: "home" },
    { label: "Latest", route: "latest" },
    { label: "Calendar", route: "calendar" },
    { label: "Profile", route: "profile" },
    { label: "Post your event", route: "create" },
    { label: "Promote", route: "vendor", secret: true },
  ];
  const discovery = [
    { label: "Food & Cafes", search: "Cafes" },
    { label: "Markets", search: "Markets" },
    { label: "Venues", search: "Venues" },
    { label: "Resorts", search: "Resorts" },
    { label: "Hotels", search: "Hotels" },
    { label: "Parks", search: "Parks" },
  ];
  const utility = [
    { label: "Support", href: `mailto:${state.settings.supportEmail}` },
    { label: "Buzztown", href: "https://buzztown.in" },
  ];
  const renderItem = (item) => {
    const secret = item.secret ? " data-secret-trigger" : "";
    if (item.route) return `<button data-burger-route="${escapeHtml(item.route)}"${secret}>${escapeHtml(item.label)}</button>`;
    if (item.search) return `<button data-burger-search="${escapeHtml(item.search)}">${escapeHtml(item.label)}</button>`;
    return `<button data-external-link="${escapeHtml(item.href)}">${escapeHtml(item.label)}</button>`;
  };
  return `<aside class="burger-panel" data-menu-surface>
    <div class="burger-section-title">Menu</div>
    ${primary.map(renderItem).join("")}
    <div class="burger-divider"></div>
    <div class="burger-section-title">Explore</div>
    ${discovery.map(renderItem).join("")}
    <div class="burger-divider"></div>
    ${utility.map(renderItem).join("")}
  </aside>`;
}

function renderMegaMenu(key) {
  const menu = categoryGroups[key];
  return `
    <section class="mega-panel">
      ${menu.columns.map((col) => `<div class="mega-column"><h3>${escapeHtml(col.title)}</h3>${col.items.map((item) => `<button data-menu-search="${escapeHtml(item)}">⌾ ${escapeHtml(item)}</button>`).join("")}</div>`).join("")}
      <div class="mega-column guide-column"><h3>Guides</h3>${menu.guides.map((title, index) => renderGuideRow(title, index)).join("")}<button class="read-more" data-route="collection/${key}">Read more guides →</button></div>
    </section>
  `;
}

function renderGuideRow(title, index) {
  const imgs = [image.culture, image.cafe, image.market, image.loktak, "/assets/ai/blue-guide-01.svg", "/assets/ai/blue-guide-02.svg", "/assets/ai/blue-guide-03.svg"];
  return `<button class="guide-row" data-menu-search="${escapeHtml(title)}"><img src="${imgs[index % imgs.length]}" alt="${escapeHtml(title)}"><span>${escapeHtml(title)}</span></button>`;
}

function renderRoute() {
  if (route === "latest") return renderLatest();
  if (route === "create") return renderCreate();
  if (route === "calendar") return renderCalendar();
  if (route === "profile") return renderProfile();
  if (route === "vendor") return renderVendor();
  if (route === "admin") return renderAdmin();
  if (route.startsWith("event/")) return renderEventDetail(route.split("/")[1]);
  if (route.startsWith("guide/")) return renderGuideDetail(route.split("/")[1]);
  if (route.startsWith("promo/")) return renderPromotionDetail(route.split("/")[1]);
  if (route.startsWith("collection/")) return renderCollection(route.split("/")[1]);
  return renderHome();
}

function renderHome() {
  const featured = weightedFeaturedItems()[0] || approvedEvents()[0];
  const week = approvedEvents().slice(0, 4);
  const month = approvedEvents().slice(2, 6);
  const articles = currentArticles();
  const family = allPublicItems().filter((item) => /family|kids|visitor|guide/i.test(`${item.category} ${item.summary}`)).slice(0, 4);
  const coming = approvedEvents().filter((item) => item.date >= "2026-08-01").slice(0, 4);
  return `
    <section class="hero-grid">
      <div class="hero-copy">
        <button class="btn outline promote-top" data-route="vendor">Promote with us</button>
        <h1>${renderRichContent(state.settings.siteTitle)}</h1>
        <p>${renderRichContent(state.settings.tagline)}</p>
        ${renderSearchPanel()}
      </div>
      ${renderHeroMedia()}
    </section>
    <section class="content-grid">${renderFeaturedEvent(featured)}<div class="stack"><div class="section-head"><h2>Happening this week</h2><button class="link-btn" data-route="latest">View all events</button></div><div class="event-row">${week.map(renderEventCard).join("")}</div></div>${renderOrganiserPanel()}</section>
    ${renderHomeSection("Free discoveries", articles.slice(0, 4))}
    ${renderHomeSection("What's on this month", month)}
    <section class="city-banner"><div><h2>Winter only in the city</h2><p>Use this space for paid hero campaigns, sponsor photography, and seasonal city guides.</p></div><img src="${image.hero}" alt="Imphal city night"></section>
    ${renderHomeSection("Family and kids", family)}
    ${renderHomeSection("Coming soon", coming.length ? coming : approvedEvents().slice(-4))}
    ${renderHomeSection("Discover more", articles.slice(8, 12), true)}
    <section class="stats-strip"><div><strong>${approvedEvents().length}</strong><span>approved events</span></div><div><strong>${articles.length}</strong><span>guide pages</span></div><div><strong>${state.savedEventIds.length}</strong><span>saved by you</span></div><div><strong>Reviewed</strong><span>before publish</span></div></section>
  `;
}

function renderHeroMedia() {
  const useVideo = state.settings.heroMediaType === "video" && state.settings.youtubeUrl;
  const overlay = Math.min(90, Math.max(0, Number(state.settings.heroOverlay || 68))) / 100;
  const titleStyle = `font-family:${escapeHtml(fontStack(state.settings.heroTextFont))};font-size:${Number(state.settings.heroTitleSize || 34)}px;color:${escapeHtml(state.settings.heroTitleColor || "#ffffff")}`;
  const subtitleStyle = `font-size:${Number(state.settings.heroSubtitleSize || 16)}px;color:${escapeHtml(state.settings.heroSubtitleColor || "#eaf8ff")}`;
  if (useVideo) {
    return `<article class="hero-card hero-video-card${adminSelectClass("hero", "hero")}"${adminSelectAttrs("hero", "hero")}><iframe src="${escapeHtml(state.settings.youtubeUrl)}" title="${escapeHtml(plainText(state.settings.heroTitle))}" allowfullscreen></iframe><span class="feature-badge">Featured promotion</span><div class="hero-video-overlay" style="background:rgba(0,0,0,${overlay})"><h2 style="${titleStyle}">${renderRichContent(state.settings.heroTitle)}</h2><p style="${subtitleStyle}">${renderRichContent(state.settings.heroSubtitle)}</p></div></article>`;
  }
  return `<article class="hero-card${adminSelectClass("hero", "hero")}"${adminSelectAttrs("hero", "hero")} style="background-image:url('${escapeHtml(state.settings.heroImage)}');--hero-overlay:${overlay}"><span class="feature-badge">Featured promotion</span><div><h2 style="${titleStyle}">${renderRichContent(state.settings.heroTitle)}</h2><p style="${subtitleStyle}">${renderRichContent(state.settings.heroSubtitle)}</p></div></article>`;
}

function renderHomeSection(title, items, round = false) {
  return `<section class="section-block"><div class="section-head"><h2>${escapeHtml(title)} ›</h2><button class="link-btn" data-search-now="${escapeHtml(title)}">Explore</button></div><div class="${round ? "round-grid" : "story-grid"}">${items.map((item) => renderStoryCard(item, round)).join("")}</div></section>`;
}

function renderSearchPanel() {
  return `
    <form class="search-panel yellow-search" id="searchForm">
      <div class="melbourne-search">
        <button type="button" data-search-panel="what"><span>What</span><strong>Anything</strong></button>
        <button type="button" data-search-panel="when"><span>When</span><strong>Anytime</strong></button>
        <button type="button" data-search-panel="where"><span>Where</span><strong>Anywhere</strong></button>
        <label><span>Keywords</span><input name="query" placeholder="Search events, districts, cafes, concerts..." /></label>
        <button class="search-submit" type="submit">⌕</button>
      </div>
      ${ui.searchPanel ? renderSearchOverlay(ui.searchPanel) : ""}
    </form>
  `;
}

function renderSearchOverlay(type) {
  if (type === "when") {
    return `<section class="search-overlay when-overlay"><h2>When are you visiting?</h2><div class="date-layout"><div class="date-shortcuts">${["Anytime", "Today", "Tomorrow", "This weekend", "Specific dates"].map((item) => `<button data-quick-when="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("")}</div>${renderMiniMonth("July 2026", 31)}${renderMiniMonth("August 2026", 31)}</div></section>`;
  }
  if (type === "where") {
    return `<section class="search-overlay"><h2>Where do you want to look?</h2><input class="overlay-input" placeholder="Search district, town, venue or place"><div class="chip-cloud">${["Anywhere", "Imphal", "Loktak", "Ema Keithel", "Kangla", "Ukhrul", "Moreh", "Senapati", ...districts].map((item) => `<button data-menu-search="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("")}</div></section>`;
  }
  return `<section class="search-overlay"><h2>What are you looking for?</h2><div class="icon-card-grid">${["Anything", "Things to do", "Eat & Drink", "Shopping", "Stays", "Guides"].map((item) => `<button data-menu-search="${escapeHtml(item)}"><span class="fake-icon">◎</span>${escapeHtml(item)}</button>`).join("")}</div><div class="chip-cloud">${searchCategories.slice(6).map((item) => `<button data-menu-search="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("")}</div></section>`;
}

function renderMiniMonth(title, days) {
  return `<div class="mini-month"><h3>${title}</h3><div>${Array.from({ length: days }, (_, i) => `<button>${i + 1}</button>`).join("")}</div></div>`;
}

function renderFeaturedEvent(item) {
  if (!item) return "";
  const isEvent = Boolean(item.date);
  const badge = dayBadge(item.date || "2026-07-12");
  const adminType = isEvent ? "event" : (state.promotions.some((promo) => promo.id === item.id) ? "promo" : "article");
  return `<article class="featured-card${adminSelectClass(adminType, item.id)}"${adminSelectAttrs(adminType, item.id)}><div class="image-wrap"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(plainText(item.title))}">${isEvent ? `<span class="date-badge"><strong>${badge.day}</strong>${badge.month}</span>` : ""}</div><div class="featured-body"><div class="tags"><span>${escapeHtml(item.category)}</span><span>${item.paid ? "Paid feature" : "Free"}</span></div><h2>${renderRichContent(item.title)}</h2><p>${renderRichContent(item.summary)}</p>${isEvent ? `<p class="meta">${formatDate(item.date)} · ${escapeHtml(item.time)}</p>` : ""}<p class="meta">${escapeHtml(item.location || item.district || "Manipur")}</p><div class="button-line"><button class="btn ghost" data-save="${item.id}">Save</button><button class="btn ghost" data-share="${item.id}">Share</button><button class="btn primary" data-route="${isEvent ? `event/${item.id}` : `guide/${item.id}`}">View details</button></div></div></article>`;
}

function renderEventCard(event) {
  const badge = dayBadge(event.date);
  const saved = state.savedEventIds.includes(event.id);
  return `<article class="event-card${adminSelectClass("event", event.id)}"${adminSelectAttrs("event", event.id)} data-card-route="event/${escapeHtml(event.id)}"><a href="#event/${escapeHtml(event.id)}" class="card-image-link"><img src="${escapeHtml(event.image)}" alt="${escapeHtml(plainText(event.title))}"><span class="mini-date"><strong>${badge.day}</strong>${badge.month}</span></a><div class="card-body"><span class="pill ${event.paid ? "paid" : ""}">${event.paid ? packageById(event.packageId).label : event.price}</span><h3><a href="#event/${escapeHtml(event.id)}">${renderRichContent(event.title)}</a></h3><p>${renderRichContent(event.location)}</p><div class="card-actions"><button class="${saved ? "active-icon" : ""}" data-save="${event.id}">${saved ? "Saved" : "Save"}</button><button data-remind="${event.id}">Reminder</button><button data-share="${event.id}">Share</button></div></div></article>`;
}

function renderStoryCard(item, round = false) {
  const targetRoute = routeForItem(item);
  const adminType = typeForItem(item);
  const style = item.style || {};
  const cardStyle = style.font ? `font-family:${escapeHtml(fontStack(style.font))}` : "";
  const titleStyle = `color:${escapeHtml(style.color || "inherit")};font-size:${Number(style.titleSize || 17)}px`;
  const bodyStyle = `font-size:${Number(style.bodySize || 15)}px`;
  return `<article class="story-card ${round ? "round" : ""}${adminSelectClass(adminType, item.id)}"${adminSelectAttrs(adminType, item.id)} data-card-route="${escapeHtml(targetRoute)}" style="${cardStyle}"><a href="#${targetRoute}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(plainText(item.title))}"></a><span>${item.date ? formatDate(item.date) : escapeHtml(item.category)}</span><h3 style="${titleStyle}"><a href="#${targetRoute}">${renderRichContent(item.title)}</a></h3><p style="${bodyStyle}">${renderRichContent(item.summary)}</p><div class="story-actions"><button data-share="${item.id}">Share</button><button data-route="${targetRoute}">Open</button></div></article>`;
}

function renderPromoCard(item) {
  return `<article class="promo-card${adminSelectClass("promo", item.id)}"${adminSelectAttrs("promo", item.id)} data-card-route="promo/${escapeHtml(item.id)}"><a href="#promo/${escapeHtml(item.id)}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(plainText(item.title))}"></a><div><span>${escapeHtml(item.category)} · ${packageById(item.packageId).label}</span><h3><a href="#promo/${escapeHtml(item.id)}">${escapeHtml(plainText(item.title))}</a></h3><p>${escapeHtml(plainText(item.summary))}</p></div></article>`;
}

function renderPromoListingCard(item) {
  return `<article class="event-card${adminSelectClass("promo", item.id)}"${adminSelectAttrs("promo", item.id)} data-card-route="promo/${escapeHtml(item.id)}"><a href="#promo/${escapeHtml(item.id)}" class="card-image-link"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(plainText(item.title))}"></a><div class="card-body"><span class="pill paid">${escapeHtml(item.category)} · ${packageById(item.packageId).label}</span><h3>${escapeHtml(plainText(item.title))}</h3><p>${escapeHtml(plainText(item.summary))}</p><div class="card-actions"><button data-share="${item.id}">Share</button><button data-route="promo/${escapeHtml(item.id)}">Open</button></div></div></article>`;
}

function renderOrganiserPanel() {
  return `<aside class="organiser-panel"><h2>For organisers and vendors</h2><p>Create events, cafe offers, resort promos, venue listings and shop pages. Paid posts rotate higher and faster after approval.</p><ul><li>Phone or email signup</li><li>Admin approval before publish</li><li>UPI and GPay payment links</li></ul><button class="btn light" data-route="create">Create listing</button><button class="btn clear" data-route="vendor">Vendor page</button></aside>`;
}

function renderLatest() {
  const params = new URLSearchParams(sessionStorage.getItem("whatson-search") || "");
  const results = searchItems(params.get("query") || "", params.get("category") || "", params.get("when") || "", params.get("where") || "");
  return `<section class="view-header"><p class="eyebrow">Latest</p><h1>Find events, venues and local guides</h1><p>Search cafes, concerts, districts, food, hotels, parks, venues, resorts, markets, shops and visitor information.</p></section>${renderSearchPanel()}<section class="result-bar"><strong>${results.length}</strong> matching results<span>Events, promotions and guides</span></section><section class="listing-grid">${results.map(renderListCard).join("") || renderEmpty("No matching results yet.", "Try another keyword or create the first listing.")}</section>`;
}

function renderGuideCard(item) {
  return `<article class="event-card${adminSelectClass("article", item.id)}"${adminSelectAttrs("article", item.id)} data-card-route="guide/${escapeHtml(item.id)}"><a href="#guide/${escapeHtml(item.id)}" class="card-image-link"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(plainText(item.title))}"></a><div class="card-body"><span class="pill">${escapeHtml(item.category)}</span><h3><a href="#guide/${escapeHtml(item.id)}">${escapeHtml(plainText(item.title))}</a></h3><p>${escapeHtml(plainText(item.summary))}</p><div class="card-actions"><button data-share="${item.id}">Share</button><button data-route="guide/${escapeHtml(item.id)}">Open</button></div></div></article>`;
}

function renderCollection(key) {
  const group = categoryGroups[key] || { label: "Explore" };
  const items = itemsByGroup(key);
  return `<section class="view-header"><p class="eyebrow">${escapeHtml(group.label)}</p><h1>${escapeHtml(group.label)} in Imphal & Manipur</h1><p>Curated events, guides, offers and useful local information. Every item includes an image so the page stays visual on mobile.</p></section><section class="listing-grid">${items.map(renderListCard).join("")}</section>`;
}

function renderCreate() {
  return `<section class="view-header two-column-header"><div><p class="eyebrow">Create</p><h1>Post your event or promotion</h1><p>Post from any district. District names are searchable but not cluttered in the public menu.</p></div><button class="btn primary" data-route="vendor">See packages</button></section><section class="form-grid"><form class="panel-form" id="createForm"><h2>Listing details</h2><label>Title <input name="title" required placeholder="Cafe pop-up, music night, resort offer..."></label><label>Category <select name="category">${searchCategories.slice(1).map((category) => `<option>${category}</option>`).join("")}</select></label><label>District <input name="district" list="districtList" placeholder="Search/select district"><datalist id="districtList">${districts.map((d) => `<option value="${d}">`).join("")}</datalist></label><label>Listing type <select name="type"><option value="event">Event</option><option value="promotion">Promotion</option><option value="vendor">Vendor / shop page</option></select></label><div class="split"><label>Date <input name="date" type="date" value="2026-07-15"></label><label>Time <input name="time" placeholder="6:00 PM"></label></div><label>Location <input name="location" required placeholder="Venue, area, Imphal"></label><label>Price or tag <input name="price" placeholder="Free, Rs 150, Food & Drink..."></label><label>Short description <textarea name="summary" required placeholder="Write the important details people need to know."></textarea></label><label>YouTube/video URL <input name="videoUrl" placeholder="https://youtube.com/..."></label><label>Photo upload <input name="imageFile" type="file" accept="image/*"></label><label>Or image URL <input name="imageUrl" placeholder="https://..."></label><label>Promotion package <select name="packageId">${packages.map((pkg) => `<option value="${pkg.id}">${pkg.name} - ${pkg.label}</option>`).join("")}</select></label><button class="btn primary wide" type="submit">Submit for admin approval</button></form><aside class="side-panel"><h2>Posting rules</h2><p>Free posts are unlimited but approved manually. Paid packages get better rotation after approval.</p><p>Every listing should include one clear image. If no image is uploaded, the platform assigns a safe default image.</p><button class="btn dark wide" data-route="vendor">Promotion packages</button></aside></section>`;
}

function renderCalendar() {
  const events = [...approvedEvents(), ...holidays2026].sort((a, b) => a.date.localeCompare(b.date));
  const saved = approvedEvents().filter((event) => state.savedEventIds.includes(event.id));
  return `<section class="view-header two-column-header"><div><p class="eyebrow">Calendar</p><h1>Events calendar and holidays</h1><p>Includes approved events, reminders and 2026 Indian public holidays for planning.</p></div><button class="btn primary" data-route="latest">Find events</button></section><section class="calendar-layout"><div class="calendar-board">${renderCalendarGrid(events, "July 2026", "2026-07", 31)}</div><aside class="side-panel"><h2>Saved events</h2>${saved.map(renderCalendarItem).join("") || renderEmpty("No saved events yet.", "Tap Save on any event to add it here.")}<h2>Public holidays</h2>${holidays2026.slice(7, 15).map((h) => `<p class="mini-line">${formatDate(h.date)} · ${escapeHtml(h.title)}</p>`).join("")}</aside></section>`;
}

function renderCalendarGrid(events, title, ym, days) {
  return `<div class="calendar-title"><h2>${title}</h2><span>${events.length} calendar items</span></div><div class="weekdays">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<strong>${day}</strong>`).join("")}</div><div class="month-grid">${Array.from({ length: days }, (_, i) => { const date = `${ym}-${String(i + 1).padStart(2, "0")}`; const found = events.filter((event) => event.date === date); return `<button class="day-cell"><strong>${i + 1}</strong>${found.map((event) => `<span>${renderRichContent(event.title)}</span>`).join("")}</button>`; }).join("")}</div>`;
}

function renderCalendarItem(event) {
  return `<article class="calendar-item"><strong>${renderRichContent(event.title)}</strong><span>${formatDate(event.date)} · ${escapeHtml(event.time)}</span><button data-share="${event.id}">Share</button></article>`;
}

function renderProfile() {
  const active = packageById(state.profile.activePackage);
  const saved = approvedEvents().filter((event) => state.savedEventIds.includes(event.id));
  const myListings = [...state.events, ...state.promotions].filter((item) => item.organiser === state.profile.name || item.status === "pending").slice(0, 8);
  return `<section class="view-header"><p class="eyebrow">Profile</p><h1>Your local event account</h1><p>Sign up with email or phone, save events, track submitted listings and manage your premium package. Triple-click Account details or Promote to open hidden AdminPro while testing.</p></section><section class="form-grid"><form class="panel-form" id="profileForm"><h2 data-secret-trigger>Account details</h2><label>Name <input name="name" value="${escapeHtml(state.profile.name)}" required></label><label>Email login <input name="email" type="email" value="${escapeHtml(state.profile.email)}" placeholder="you@example.com"></label><label>Phone / OTP login <input name="phone" value="${escapeHtml(state.profile.phone)}" placeholder="+91..."></label><label>Preferred district <input name="district" list="districtList" value="${escapeHtml(state.profile.district || "Imphal West")}"><datalist id="districtList">${districts.map((d) => `<option value="${d}">`).join("")}</datalist></label><div class="split"><label><input name="notifyEmail" type="checkbox" ${state.profile.notifyEmail ? "checked" : ""}> Email reminders</label><label><input name="notifyPhone" type="checkbox" ${state.profile.notifyPhone ? "checked" : ""}> Phone reminders</label></div><button class="btn primary wide" type="submit">Save profile</button><p class="muted">Production login will connect to Supabase Auth. This local build saves your profile in the browser for testing.</p></form><aside class="side-panel"><h2>Current package</h2><p><strong>${escapeHtml(active.name)}</strong></p><p>${escapeHtml(active.cadence)}</p><button class="btn dark wide" data-route="vendor">Upgrade package</button><h2>Saved events</h2>${saved.map(renderCalendarItem).join("") || `<p class="muted">Nothing saved yet.</p>`}<h2>My submissions</h2>${myListings.map((item) => `<p class="mini-line"><strong>${escapeHtml(plainText(item.title))}</strong><br>${escapeHtml(item.status || "draft")} · ${escapeHtml(item.category || "Listing")}</p>`).join("") || `<p class="muted">No submissions yet.</p>`}</aside></section>`;
}

function renderVendor() {
  return `<section class="view-header two-column-header"><div><p class="eyebrow">Vendor and premium</p><h1>Promote events, cafes, shops, venues and stays</h1><p>Free posting keeps the platform open. Paid packages help serious organisers get top placement and quicker approval.</p></div><button class="btn primary" data-route="create">Post your event</button></section><section class="package-grid">${packages.map(renderPackageCard).join("")}</section><section class="section-block"><h2>Recent payment tests</h2><div class="listing-grid compact">${state.payments.map(renderPaymentCard).join("") || renderEmpty("No payments started yet.", "Choose a package to generate a UPI or GPay payment link.")}</div></section>`;
}

function renderPackageCard(pkg) {
  return `<article class="package-card ${pkg.id === "premiumshop" ? "premium" : ""}"><span>${escapeHtml(pkg.label)}</span><h2>${escapeHtml(pkg.name)}</h2><p>${escapeHtml(pkg.cadence)}</p><strong>${pkg.price === 0 ? "Free" : `Rs ${pkg.price.toLocaleString("en-IN")}`}</strong><ul>${pkg.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul><button class="btn primary wide" data-buy="${pkg.id}">${pkg.price === 0 ? "Use free plan" : "Pay by UPI / GPay"}</button></article>`;
}

function renderPaymentCard(payment) {
  return `<article class="payment-card"><strong>${escapeHtml(payment.packageName)}</strong><span>Rs ${payment.amount} · ${escapeHtml(payment.status)}</span><a href="${escapeHtml(payment.upiUrl)}">Open UPI link</a></article>`;
}

function renderAdmin() {
  const pending = [...state.events.filter((event) => event.status === "pending"), ...state.promotions.filter((promo) => promo.status === "pending")];
  const selected = currentAdminSelection();
  return `
    <section class="admin-pro-head">
      <div>
        <p class="eyebrow">AdminPro</p>
        <h1>Live website editor</h1>
        <p>Hidden from the public menu. Click any section in the live website preview on the left, then edit that exact item on the right.</p>
      </div>
      <div class="button-line"><button class="btn ghost" data-route="home">View public site</button><button class="btn primary" form="adminSettingsForm" type="submit">Publish changes</button></div>
    </section>
    <section class="admin-pro-grid admin-pro-grid-swapped">
      <aside class="admin-preview-panel">
        <div class="admin-preview-toolbar"><strong>Live Website Preview</strong><span>Click any card, hero, or ticker to select it</span></div>
        <div class="admin-site-preview">${renderAdminPreviewContent()}</div>
      </aside>
      <form class="admin-editor-panel admin-editor-panel-right" id="adminSettingsForm">
        <section class="admin-editor-box admin-selection-help">
          <div><strong>Editing: ${escapeHtml(adminItemLabel(selected.type, selected.id))}</strong><p class="muted">Selected section is highlighted in blue on the left preview.</p></div>
          <button class="btn ghost small" type="button" data-admin-select-type="hero" data-admin-select-id="hero">Change section</button>
        </section>
        ${renderSelectedAdminEditor()}
        ${renderAdminQuickPicker()}
        ${renderLaunchReadinessPanel()}
        <section class="admin-editor-box"><h2>Approval queue</h2>${pending.map(renderApprovalItem).join("") || `<p class="muted">No pending listings. New submissions will appear here.</p>`}</section>
        <button class="btn primary wide" type="submit">Publish changes</button>
      </form>
    </section>
  `;
}

function renderLaunchReadinessPanel() {
  return `<section class="admin-editor-box launch-readiness"><h2>Launch readiness</h2><div class="readiness-grid"><span>AdminPro editable homepage</span><strong>Ready</strong><span>Original guide content</span><strong>${currentArticles().length} pages</strong><span>Image-backed cards</span><strong>Ready</strong><span>Profile/account scaffold</span><strong>Ready</strong><span>Event submission workflow</span><strong>Ready</strong><span>UPI/GPay test links</span><strong>Staged</strong><span>SEO metadata + sitemap</span><strong>Ready</strong></div><p class="muted">Supabase Auth and verified payment callbacks are still required before charging real customers.</p></section>`;
}

function renderAdminQuickPicker() {
  const eventButtons = state.events.slice(0, 8).map((item) => `<button type="button" data-admin-select-type="event" data-admin-select-id="${escapeHtml(item.id)}">Event: ${escapeHtml(plainText(item.title))}</button>`).join("");
  const promoButtons = state.promotions.slice(0, 8).map((item) => `<button type="button" data-admin-select-type="promo" data-admin-select-id="${escapeHtml(item.id)}">Promo: ${escapeHtml(plainText(item.title))}</button>`).join("");
  const articleButtons = currentArticles().slice(0, 8).map((item) => `<button type="button" data-admin-select-type="article" data-admin-select-id="${escapeHtml(item.id)}">Article: ${escapeHtml(plainText(item.title))}</button>`).join("");
  return `<section class="admin-editor-box admin-quick-picker"><div class="editor-box-head"><h2>Quick select</h2><button class="btn ghost small" type="button" data-add-article>Add Article</button></div><p class="muted">Use the live preview on the left, or choose a section here. This does not add extra editor fields, so saving cannot overwrite the wrong card.</p><div class="quick-pick-grid"><button type="button" data-admin-select-type="hero" data-admin-select-id="hero">Hero / site text</button><button type="button" data-admin-select-type="ticker" data-admin-select-id="ticker">Ticker tape</button>${eventButtons}${promoButtons}${articleButtons}</div></section>`;
}

function renderSelectedAdminEditor() {
  const selected = currentAdminSelection();
  if (selected.type === "ticker") return renderTickerEditor(false, "Selected ticker tape");
  if (selected.type === "hero") return renderHeroEditor(false, "Selected hero / site text");
  if (selected.type === "event") {
    const item = state.events.find((event) => event.id === selected.id);
    return item ? `<section class="admin-editor-box selected-editor-box"><div class="editor-box-head"><h2>Selected event card</h2><span class="pill">${escapeHtml(item.status || "draft")}</span></div>${renderEventAdminEditor(item)}</section>` : renderAdminNoSelection();
  }
  if (selected.type === "promo") {
    const item = state.promotions.find((promo) => promo.id === selected.id);
    return item ? `<section class="admin-editor-box selected-editor-box"><div class="editor-box-head"><h2>Selected promotion card</h2><span class="pill paid">${escapeHtml(packageById(item.packageId).label)}</span></div>${renderPromoAdminEditor(item)}</section>` : renderAdminNoSelection();
  }
  if (selected.type === "article") {
    const item = currentArticles().find((article) => article.id === selected.id);
    return item ? `<section class="admin-editor-box selected-editor-box"><div class="editor-box-head"><h2>Selected article / guide card</h2><button class="btn ghost small" type="button" data-add-sub-article="${escapeHtml(item.id)}">Add Sub-Article</button></div>${renderArticleEditor(item, currentArticles().findIndex((article) => article.id === item.id))}</section>` : renderAdminNoSelection();
  }
  return renderHeroEditor(false, "Selected hero / site text");
}

function renderAdminNoSelection() {
  return `<section class="admin-editor-box"><h2>Select an item</h2><p class="muted">Click an article, event, promotion, hero, or ticker in the left preview. The matching editor will open here.</p></section>`;
}

function renderTickerEditor(compactShell = false, title = "Ticker tape") {
  const items = state.settings.tickerItems || [];
  const sectionClass = compactShell ? "admin-nested-editor" : "admin-editor-box";
  return `<section class="${sectionClass}"><input type="hidden" name="tickerEditorPresent" value="1"><div class="editor-box-head"><h2>${escapeHtml(title)}</h2><label class="toggle-row">Visible <input name="tickerVisible" type="checkbox" ${state.settings.tickerVisible ? "checked" : ""}></label></div><div class="split"><label>Scrolling speed <input name="tickerSpeed" type="range" min="12" max="80" value="${Number(state.settings.tickerSpeed || 36)}"></label><label>Bar color <input name="tickerBackground" type="color" value="${escapeHtml(state.settings.tickerBackground || "#dff3ff")}"></label></div><div class="ticker-editor-list">${items.map(renderTickerRowEditor).join("")}</div><button class="btn ghost wide" type="button" data-add-ticker>Add ticker row</button></section>`;
}

function renderTickerRowEditor(item, index) {
  return `<article class="ticker-row-editor"><input type="hidden" name="tickerId" value="${escapeHtml(item.id)}"><div class="split tight"><label>Icon <input name="tickerIcon-${escapeHtml(item.id)}" value="${escapeHtml(item.icon || "")}"></label><label>Default color <input name="tickerColor-${escapeHtml(item.id)}" type="color" value="${escapeHtml(item.color || "#171512")}"></label></div><label>Ticker text - select one word/letter below and style it</label>${renderRichTextEditor(`tickerText-${item.id}`, item.text || "", true)}<div class="split tight"><label>Default font ${renderFontSelect(`tickerFont-${item.id}`, item.font || "Inter")}</label><label>Default size <input name="tickerSize-${escapeHtml(item.id)}" type="number" min="10" max="40" value="${Number(item.size || 15)}"></label></div><label>Link <input name="tickerLink-${escapeHtml(item.id)}" value="${escapeHtml(item.link || "")}" placeholder="#create or https://..."></label><label class="toggle-row">Default bold <input name="tickerBold-${escapeHtml(item.id)}" type="checkbox" ${item.bold ? "checked" : ""}></label><button class="link-btn danger" type="button" data-remove-ticker="${escapeHtml(item.id)}">Remove row ${index + 1}</button></article>`;
}

function renderHeroEditor(compactShell = false, title = "Hero section") {
  const sectionClass = compactShell ? "admin-nested-editor" : "admin-editor-box";
  return `<section class="${sectionClass}"><input type="hidden" name="heroEditorPresent" value="1"><h2>${escapeHtml(title)}</h2><label>Media type <select name="heroMediaType"><option value="image" ${state.settings.heroMediaType === "image" ? "selected" : ""}>Image</option><option value="video" ${state.settings.heroMediaType === "video" ? "selected" : ""}>YouTube video</option></select></label><label>Hero image URL <input name="heroImage" value="${escapeHtml(state.settings.heroImage)}"></label><label>Upload hero image <input name="heroFile" type="file" accept="image/*"></label><label>YouTube embed or watch URL <input name="youtubeUrl" value="${escapeHtml(state.settings.youtubeUrl || "")}" placeholder="https://youtube.com/watch?v=..."></label><label>Hero title - rich text</label>${renderRichTextEditor("heroTitle", state.settings.heroTitle || "", true)}<label>Hero subtitle - rich text</label>${renderRichTextEditor("heroSubtitle", state.settings.heroSubtitle || "", true)}<div class="split"><div><label>Site title - rich text</label>${renderRichTextEditor("siteTitle", state.settings.siteTitle || "", true)}</div><div><label>Tagline - rich text</label>${renderRichTextEditor("tagline", state.settings.tagline || "", true)}</div></div><div class="split"><label>Site color <input name="accent" type="color" value="${escapeHtml(state.settings.accent)}"></label><label>Site font ${renderFontSelect("font", state.settings.font || "Merriweather")}</label></div><div class="split"><label>Default hero title color <input name="heroTitleColor" type="color" value="${escapeHtml(state.settings.heroTitleColor || "#ffffff")}"></label><label>Default subtitle color <input name="heroSubtitleColor" type="color" value="${escapeHtml(state.settings.heroSubtitleColor || "#eaf8ff")}"></label></div><div class="split"><label>Default title size <input name="heroTitleSize" type="number" min="18" max="76" value="${Number(state.settings.heroTitleSize || 34)}"></label><label>Default subtitle size <input name="heroSubtitleSize" type="number" min="12" max="34" value="${Number(state.settings.heroSubtitleSize || 16)}"></label></div><div class="split"><label>Default text font ${renderFontSelect("heroTextFont", state.settings.heroTextFont || "Merriweather")}</label><label>Dark overlay <input name="heroOverlay" type="range" min="0" max="90" value="${Number(state.settings.heroOverlay || 68)}"></label></div><h3>SEO, support and socials</h3><label>SEO title <input name="seoTitle" value="${escapeHtml(state.settings.seoTitle || "")}"></label><label>SEO description <textarea name="seoDescription">${escapeHtml(state.settings.seoDescription || "")}</textarea></label><div class="split"><label>Support email <input name="supportEmail" value="${escapeHtml(state.settings.supportEmail || "")}"></label><label>Support phone <input name="supportPhone" value="${escapeHtml(state.settings.supportPhone || "")}"></label></div><div class="split"><label>Facebook URL <input name="facebookUrl" value="${escapeHtml(state.settings.facebookUrl || "")}"></label><label>Instagram URL <input name="instagramUrl" value="${escapeHtml(state.settings.instagramUrl || "")}"></label></div></section>`;
}

function renderArticleEditors(compactShell = false) {
  const sectionClass = compactShell ? "admin-nested-editor" : "admin-editor-box";
  return `<section class="${sectionClass}"><div class="editor-box-head"><h2>Articles and cards</h2><button class="btn ghost small" type="button" data-add-article>Add Article</button></div><p class="muted">These cards feed the homepage, guide pages and search results. Each one keeps an image.</p>${currentArticles().map(renderArticleEditor).join("")}</section>`;
}

function renderArticleEditor(article, index) {
  const style = article.style || {};
  return `<article class="article-editor-card"><input type="hidden" name="articleId" value="${escapeHtml(article.id)}"><div class="editor-box-head"><h3>Article ${index + 1}</h3><button class="link-btn danger" type="button" data-remove-article="${escapeHtml(article.id)}">Remove</button></div><label>Title - rich text</label>${renderRichTextEditor(`articleTitle-${article.id}`, article.title || "", true)}<label>Summary - rich text</label>${renderRichTextEditor(`articleSummary-${article.id}`, article.summary || "", true)}<label>Body - rich text</label>${renderRichTextEditor(`articleBody-${article.id}`, article.body || "")}<div class="split"><label>Category <input name="articleCategory-${escapeHtml(article.id)}" value="${escapeHtml(article.category || "Guides")}"></label><label>Group <select name="articleGroup-${escapeHtml(article.id)}"><option ${article.group === "things" ? "selected" : ""}>things</option><option ${article.group === "food" ? "selected" : ""}>food</option><option ${article.group === "shopping" ? "selected" : ""}>shopping</option><option ${article.group === "visitor" ? "selected" : ""}>visitor</option></select></label></div><label>Image URL <input name="articleImage-${escapeHtml(article.id)}" value="${escapeHtml(article.image)}"></label><label>Upload image <input name="articleImageFile-${escapeHtml(article.id)}" type="file" accept="image/*"></label><div class="split"><label>Default font ${renderFontSelect(`articleFont-${article.id}`, style.font || "Inter")}</label><label>Default text color <input name="articleColor-${escapeHtml(article.id)}" type="color" value="${escapeHtml(style.color || "#171512")}"></label></div><div class="split"><label>Default title size <input name="articleTitleSize-${escapeHtml(article.id)}" type="number" min="14" max="42" value="${Number(style.titleSize || 18)}"></label><label>Default body size <input name="articleBodySize-${escapeHtml(article.id)}" type="number" min="12" max="24" value="${Number(style.bodySize || 15)}"></label></div><button class="btn ghost wide" type="button" data-add-sub-article="${escapeHtml(article.id)}">Add Sub-Article</button></article>`;
}

function renderRichTextEditor(name, value = "", compact = false) {
  const safeName = escapeHtml(name);
  return `<div class="rich-editor-block ${compact ? "rich-compact" : ""}" data-rich-block>
    <div class="rich-toolbar" role="toolbar" aria-label="Rich text toolbar">
      <button type="button" data-rich-command="bold" title="Bold"><strong>B</strong></button>
      <button type="button" data-rich-command="italic" title="Italic"><em>I</em></button>
      <button type="button" data-rich-command="underline" title="Underline"><u>U</u></button>
      <button type="button" data-rich-command="justifyLeft" title="Align left">☰</button>
      <button type="button" data-rich-command="justifyCenter" title="Align center">≡</button>
      <button type="button" data-rich-command="justifyRight" title="Align right">☷</button>
      <select data-rich-font title="Font"><option value="Inter">Inter</option><option value="Merriweather">Merriweather</option><option value="Georgia">Georgia</option><option value="Poppins">Poppins</option></select>
      <select data-rich-size title="Selected text size"><option value="10px">10</option><option value="12px">12</option><option value="14px">14</option><option value="16px" selected>16</option><option value="18px">18</option><option value="22px">22</option><option value="28px">28</option><option value="36px">36</option><option value="48px">48</option></select>
      <input data-rich-color type="color" title="Selected text color" value="#171512">
      <button type="button" data-rich-command="createLink" title="Insert link">🔗</button>
      <button type="button" data-rich-command="removeFormat" title="Clear format">Tx</button>
    </div>
    <div class="rich-editor" contenteditable="true" spellcheck="true" data-rich-editor data-rich-target="${safeName}">${renderRichContent(value)}</div>
    <textarea class="rich-hidden" name="${safeName}" data-rich-hidden="${safeName}">${escapeHtml(value)}</textarea>
    <p class="muted tiny-note">Highlight one letter, one word or any phrase first, then apply color, font, size, link or style.</p>
  </div>`;
}

function renderListingEditors(compactShell = false) {
  const sectionClass = compactShell ? "admin-nested-editor" : "admin-editor-box";
  return `<section class="${sectionClass}"><div class="editor-box-head"><h2>Events and promotion cards</h2><span class="muted">Edit every public card without changing the website layout.</span></div><details open><summary>Approved and pending events</summary>${state.events.map(renderEventAdminEditor).join("")}</details><details><summary>Promotion/vendor cards</summary>${state.promotions.map(renderPromoAdminEditor).join("")}</details></section>`;
}

function renderEventAdminEditor(event) {
  return `<article class="listing-editor-card"><input type="hidden" name="eventId" value="${escapeHtml(event.id)}"><div class="editor-box-head"><h3>${renderRichContent(event.title)}</h3><span class="pill">${escapeHtml(event.status)}</span></div><label>Title - rich text</label>${renderRichTextEditor(`eventTitle-${event.id}`, event.title || "", true)}<label>Summary - rich text</label>${renderRichTextEditor(`eventSummary-${event.id}`, event.summary || "", true)}<div class="split"><label>Date <input name="eventDate-${escapeHtml(event.id)}" type="date" value="${escapeHtml(event.date || "")}"></label><label>Time <input name="eventTime-${escapeHtml(event.id)}" value="${escapeHtml(event.time || "")}"></label></div><div class="split"><label>Category <input name="eventCategory-${escapeHtml(event.id)}" value="${escapeHtml(event.category || "")}"></label><label>Price/tag <input name="eventPrice-${escapeHtml(event.id)}" value="${escapeHtml(event.price || "")}"></label></div><div class="split"><label>Location <input name="eventLocation-${escapeHtml(event.id)}" value="${escapeHtml(event.location || "")}"></label><label>District <input name="eventDistrict-${escapeHtml(event.id)}" list="districtList" value="${escapeHtml(event.district || "")}"></label></div><label>Image URL <input name="eventImage-${escapeHtml(event.id)}" value="${escapeHtml(event.image || "")}"></label><label>Upload replacement image <input name="eventImageFile-${escapeHtml(event.id)}" type="file" accept="image/*"></label><div class="split"><label>Status <select name="eventStatus-${escapeHtml(event.id)}"><option ${event.status === "approved" ? "selected" : ""}>approved</option><option ${event.status === "pending" ? "selected" : ""}>pending</option><option ${event.status === "rejected" ? "selected" : ""}>rejected</option></select></label><label>Package <select name="eventPackage-${escapeHtml(event.id)}">${packages.map((pkg) => `<option value="${pkg.id}" ${pkg.id === event.packageId ? "selected" : ""}>${pkg.name}</option>`).join("")}</select></label></div></article>`;
}

function renderPromoAdminEditor(promo) {
  return `<article class="listing-editor-card"><input type="hidden" name="promoId" value="${escapeHtml(promo.id)}"><div class="editor-box-head"><h3>${renderRichContent(promo.title)}</h3><span class="pill paid">${escapeHtml(packageById(promo.packageId).label)}</span></div><label>Title - rich text</label>${renderRichTextEditor(`promoTitle-${promo.id}`, promo.title || "", true)}<label>Summary - rich text</label>${renderRichTextEditor(`promoSummary-${promo.id}`, promo.summary || "", true)}<div class="split"><label>Category <input name="promoCategory-${escapeHtml(promo.id)}" value="${escapeHtml(promo.category || "")}"></label><label>Location <input name="promoLocation-${escapeHtml(promo.id)}" value="${escapeHtml(promo.location || "")}"></label></div><label>District <input name="promoDistrict-${escapeHtml(promo.id)}" list="districtList" value="${escapeHtml(promo.district || "")}"></label><label>Image URL <input name="promoImage-${escapeHtml(promo.id)}" value="${escapeHtml(promo.image || "")}"></label><label>Upload replacement image <input name="promoImageFile-${escapeHtml(promo.id)}" type="file" accept="image/*"></label><div class="split"><label>Status <select name="promoStatus-${escapeHtml(promo.id)}"><option ${promo.status === "approved" ? "selected" : ""}>approved</option><option ${promo.status === "pending" ? "selected" : ""}>pending</option><option ${promo.status === "rejected" ? "selected" : ""}>rejected</option></select></label><label>Package <select name="promoPackage-${escapeHtml(promo.id)}">${packages.map((pkg) => `<option value="${pkg.id}" ${pkg.id === promo.packageId ? "selected" : ""}>${pkg.name}</option>`).join("")}</select></label></div></article>`;
}

function plainText(value = "") {
  const div = document.createElement("div");
  div.innerHTML = String(value || "");
  return (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
}

function renderRichContent(value = "") {
  const raw = String(value || "");
  if (/<\/?(b|strong|i|em|u|span|div|p|br|font|a|ul|ol|li|h[1-6])\b/i.test(raw)) return sanitizeRichHtml(raw);
  return escapeHtml(raw).replaceAll("\n", "<br>");
}

function sanitizeRichHtml(value = "") {
  const template = document.createElement("template");
  template.innerHTML = String(value || "");
  template.content.querySelectorAll("script,iframe,object,embed,style").forEach((node) => node.remove());
  template.content.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      const allowed = ["href", "target", "rel", "style", "color", "face", "size"].includes(name);
      if (!allowed || name.startsWith("on")) node.removeAttribute(attr.name);
      if (name === "href" && !/^(https?:|mailto:|tel:|#)/i.test(attr.value)) node.removeAttribute(attr.name);
      if (name === "style") {
        const cleanStyle = attr.value.split(";").filter((rule) => /^(\s*(color|font-size|font-family|font-weight|font-style|text-decoration|text-align)\s*:)/i.test(rule)).join(";");
        if (cleanStyle) node.setAttribute("style", cleanStyle); else node.removeAttribute("style");
      }
    });
    if (node.tagName === "A") {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    }
  });
  return template.innerHTML;
}

function renderFontSelect(name, selected) {
  return `<select name="${escapeHtml(name)}">${["Inter", "Merriweather", "Georgia", "Poppins"].map((font) => `<option ${font === selected ? "selected" : ""}>${font}</option>`).join("")}</select>`;
}

function renderHeaderPreview() {
  const menuButtons = Object.values(categoryGroups).map((menu) => `<button>${escapeHtml(menu.label)} <span>⌄</span></button>`).join("");
  return `<header class="topbar admin-preview-topbar"><button class="burger-button" type="button">☰</button><a class="brand"><span class="brand-mark">WO</span><span>${renderRichContent(state.settings.siteTitle)}</span></a><nav class="desktop-nav mega-nav">${menuButtons}</nav><div class="topbar-actions"><button class="btn ghost small" type="button">Promote</button><button class="btn primary small" type="button">Post your event</button></div></header>`;
}

function renderApprovalItem(item) {
  return `<article class="approval-item"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(plainText(item.title))}"><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.category)} · ${escapeHtml(packageById(item.packageId).label)}</span><div class="button-line"><button class="btn primary small" data-approve="${item.id}">Approve</button><button class="btn ghost small" data-reject="${item.id}">Reject</button></div></div></article>`;
}

function renderEventDetail(id) {
  const event = state.events.find((item) => item.id === id);
  if (!event) return renderEmpty("Event not found.", "Return to latest events and try again.");
  const saved = state.savedEventIds.includes(event.id);
  return `<section class="detail-layout"><img class="detail-image" src="${escapeHtml(event.image)}" alt="${escapeHtml(plainText(event.title))}"><article class="detail-panel"><span class="pill ${event.paid ? "paid" : ""}">${renderRichContent(event.category)} · ${renderRichContent(event.price)}</span><h1>${renderRichContent(event.title)}</h1><p>${renderRichContent(event.summary)}</p><dl><div><dt>Date</dt><dd>${formatDate(event.date)}</dd></div><div><dt>Time</dt><dd>${escapeHtml(event.time)}</dd></div><div><dt>Location</dt><dd>${escapeHtml(event.location)}</dd></div><div><dt>District</dt><dd>${escapeHtml(event.district || "Manipur")}</dd></div><div><dt>Organiser</dt><dd>${escapeHtml(event.organiser)}</dd></div></dl><div class="share-brand">Shared from What's On Imphal & Manipur · whatson.imphal.in</div><div class="button-line"><button class="btn primary" data-save="${event.id}">${saved ? "Saved" : "Save event"}</button><button class="btn ghost" data-remind="${event.id}">Set reminder</button><button class="btn ghost" data-share="${event.id}">Share</button></div></article></section>`;
}

function renderGuideDetail(id) {
  const article = currentArticles().find((item) => item.id === id);
  if (!article) return renderEmpty("Guide not found.", "Return to Latest and try again.");
  return `<section class="detail-layout"><img class="detail-image" src="${escapeHtml(article.image)}" alt="${escapeHtml(plainText(article.title))}"><article class="detail-panel"><span class="pill">${renderRichContent(article.category)}</span><h1>${renderRichContent(article.title)}</h1><p>${renderRichContent(article.summary)}</p><div class="rich-output">${renderRichContent(article.body)}</div><div class="share-brand">Shared from What's On Imphal & Manipur · whatson.imphal.in</div><div class="button-line"><button class="btn primary" data-search-now="${escapeHtml(article.category)}">Find related</button><button class="btn ghost" data-share="${article.id}">Share</button></div></article></section>`;
}

function renderPromotionDetail(id) {
  const promo = state.promotions.find((item) => item.id === id);
  if (!promo) return renderEmpty("Promotion not found.", "Return to Latest and try again.");
  return `<section class="detail-layout"><img class="detail-image" src="${escapeHtml(promo.image)}" alt="${escapeHtml(plainText(promo.title))}"><article class="detail-panel"><span class="pill paid">${escapeHtml(promo.category)} · ${escapeHtml(packageById(promo.packageId).label)}</span><h1>${renderRichContent(promo.title)}</h1><p>${renderRichContent(promo.summary)}</p><dl><div><dt>Location</dt><dd>${escapeHtml(promo.location || "Imphal & Manipur")}</dd></div><div><dt>District</dt><dd>${escapeHtml(promo.district || "Manipur")}</dd></div><div><dt>Promotion type</dt><dd>${escapeHtml(packageById(promo.packageId).name)}</dd></div></dl><div class="rich-output"><p>This is an original What's On Imphal & Manipur promotion page. Business owners can replace this launch copy with verified menus, photos, offers, contact details and opening hours from AdminPro.</p></div><div class="share-brand">Shared from What's On Imphal & Manipur · whatson.imphal.in</div><div class="button-line"><button class="btn primary" data-route="vendor">Promote your business</button><button class="btn ghost" data-share="${promo.id}">Share</button></div></article></section>`;
}

function renderEmpty(title, copy) {
  return `<div class="empty-state"><strong>${escapeHtml(title)}</strong><p>${escapeHtml(copy)}</p></div>`;
}

function renderFooter() {
  return `<footer class="site-footer"><div><a href="#home" class="brand"><span class="brand-mark">WO</span><span>${renderRichContent(state.settings.siteTitle)}</span></a><p>Your guide to what is happening in and around Imphal and Manipur.</p></div><nav><a href="#create">Post your event</a><a href="#vendor">Promote</a><a href="mailto:${escapeHtml(state.settings.supportEmail)}">Support</a><a href="${escapeHtml(state.settings.facebookUrl || "https://facebook.com")}" target="_blank" rel="noreferrer">Facebook</a><a href="${escapeHtml(state.settings.youtubeUrlPublic || "https://youtube.com")}" target="_blank" rel="noreferrer">YouTube</a><a href="${escapeHtml(state.settings.instagramUrl || "https://instagram.com")}" target="_blank" rel="noreferrer">Instagram</a><a href="https://snapchat.com" target="_blank" rel="noreferrer">Snapchat</a><a href="https://buzztown.in" target="_blank" rel="noreferrer">Buzztown</a></nav></footer>`;
}

function renderBottomNav() {
  return `<nav class="mobile-nav" aria-label="Mobile">${[["latest", "Latest"], ["home", "Home"], ["create", "Post +"], ["calendar", "Calendar"], ["profile", "Profile"]].map(([target, label]) => `<a class="${route === target ? "active" : ""} ${target === "create" ? "create-tab" : ""}" href="#${target}"><span>${label}</span></a>`).join("")}</nav>`;
}

function bindEvents() {
  document.querySelectorAll("[data-admin-select-type]").forEach((el) => el.addEventListener("click", (event) => {
    if (route !== "admin") return;
    event.preventDefault();
    event.stopPropagation();
    setAdminSelection(el.dataset.adminSelectType, el.dataset.adminSelectId || el.dataset.adminSelectType, { sourceElement: el.closest(".admin-site-preview") ? el : null });
    render();
  }));

  document.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", (event) => {
    if (route === "admin" && button.closest(".admin-site-preview")) { event.preventDefault(); event.stopPropagation(); return; }
    event.preventDefault();
    event.stopPropagation();
    navigate(button.dataset.route);
  }));

  document.querySelectorAll("[data-card-route]").forEach((card) => card.addEventListener("click", (event) => {
    if (route === "admin" || event.target.closest("a, button, input, select, textarea, [contenteditable]")) return;
    event.preventDefault();
    navigate(card.dataset.cardRoute);
  }));

  document.querySelectorAll("[data-home-link]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate("home");
  }));

  document.querySelectorAll("[data-secret-trigger]").forEach((element) => element.addEventListener("click", (event) => {
    handleSecretTripleClick();
  }));

  document.querySelectorAll("[data-menu]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      ui.menu = ui.menu === button.dataset.menu ? "" : button.dataset.menu;
      ui.burger = false;
      ui.searchPanel = "";
      render();
    });
    button.addEventListener("mouseenter", () => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        ui.menu = button.dataset.menu;
        ui.burger = false;
        ui.searchPanel = "";
        render();
      }
    });
  });

  document.querySelector(".topbar")?.addEventListener("mouseleave", () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && ui.menu) {
      ui.menu = "";
      render();
    }
  });

  document.querySelector("[data-burger]")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    ui.burger = !ui.burger;
    ui.menu = "";
    ui.searchPanel = "";
    render();
  });

  document.querySelectorAll("[data-burger-route]").forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(button.dataset.burgerRoute);
  }));

  document.querySelectorAll("[data-external-link]").forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const href = button.dataset.externalLink;
    closeOverlays();
    render();
    if (href?.startsWith("mailto:")) window.location.href = href;
    else window.open(href, "_blank", "noopener,noreferrer");
  }));

  document.querySelectorAll("[data-search-panel]").forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    ui.searchPanel = ui.searchPanel === button.dataset.searchPanel ? "" : button.dataset.searchPanel;
    ui.menu = "";
    ui.burger = false;
    render();
  }));

  document.querySelectorAll(".search-panel, .mega-panel, .burger-panel, .admin-editor-panel").forEach((surface) => {
    surface.addEventListener("click", (event) => event.stopPropagation());
  });

  document.querySelectorAll("[data-menu-search], [data-burger-search], [data-search-now]").forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    runSearch(button.dataset.menuSearch || button.dataset.burgerSearch || button.dataset.searchNow);
  }));

  document.querySelectorAll("[data-quick-when]").forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    runSearch("", button.dataset.quickWhen);
  }));

  document.querySelectorAll("[data-save]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleSave(button.dataset.save);
  }));
  document.querySelectorAll("[data-remind]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    addReminder(button.dataset.remind);
  }));
  document.querySelectorAll("[data-share]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    shareItem(button.dataset.share);
  }));
  document.querySelectorAll("[data-buy]").forEach((button) => button.addEventListener("click", () => buyPackage(button.dataset.buy)));
  document.querySelectorAll("[data-approve]").forEach((button) => button.addEventListener("click", () => approveListing(button.dataset.approve)));
  document.querySelectorAll("[data-reject]").forEach((button) => button.addEventListener("click", () => rejectListing(button.dataset.reject)));
  document.querySelectorAll("[data-add-ticker]").forEach((button) => button.addEventListener("click", addTickerRow));
  document.querySelectorAll("[data-remove-ticker]").forEach((button) => button.addEventListener("click", () => removeTickerRow(button.dataset.removeTicker)));
  document.querySelectorAll("[data-add-article]").forEach((button) => button.addEventListener("click", addArticleRow));
  document.querySelectorAll("[data-remove-article]").forEach((button) => button.addEventListener("click", () => removeArticleRow(button.dataset.removeArticle)));
  document.querySelectorAll("[data-add-sub-article]").forEach((button) => button.addEventListener("click", () => addSubArticle(button.dataset.addSubArticle)));

  bindAdminPreviewSelection();

  document.querySelector("#adminSettingsForm")?.addEventListener("input", handleAdminLivePreviewInput);
  document.querySelector("#adminSettingsForm")?.addEventListener("change", handleAdminLivePreviewInput);

  bindRichTextEditors();

  document.querySelector("#searchForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    runSearch(data.get("query") || "");
  });
  document.querySelector("#createForm")?.addEventListener("submit", handleCreate);
  document.querySelector("#profileForm")?.addEventListener("submit", handleProfile);
  document.querySelector("#adminSettingsForm")?.addEventListener("submit", handleAdminSettings);

  document.onclick = (event) => {
    if (!ui.burger && !ui.menu && !ui.searchPanel) return;
    if (event.target.closest(".topbar, .search-panel, .mega-panel, .burger-panel, .admin-editor-panel, .admin-preview-panel")) return;
    closeOverlays();
    render();
  };

  document.onkeydown = (event) => {
    if (event.key === "Escape" && (ui.burger || ui.menu || ui.searchPanel)) {
      closeOverlays();
      render();
    }
  };
}

function runSearch(query, when = "", where = "") {
  sessionStorage.setItem("whatson-search", new URLSearchParams({ query, when, where }).toString());
  navigate("latest");
}

function bindAdminPreviewSelection() {
  const preview = document.querySelector(".admin-site-preview");
  if (!preview || preview.dataset.selectionBound === "1") return;
  preview.dataset.selectionBound = "1";
  preview.addEventListener("click", (event) => {
    const selectable = event.target.closest("[data-admin-select-type]");
    if (!selectable || !preview.contains(selectable)) return;
    event.preventDefault();
    event.stopPropagation();
    setAdminSelection(selectable.dataset.adminSelectType, selectable.dataset.adminSelectId || selectable.dataset.adminSelectType, { sourceElement: selectable });
    render();
  });
}

let adminLivePreviewTimer;

function handleAdminLivePreviewInput(event) {
  if (route !== "admin") return;
  if (event.target.closest("[data-rich-toolbar]")) return;
  clearTimeout(adminLivePreviewTimer);
  adminLivePreviewTimer = setTimeout(() => {
    syncRichEditors();
    applySelectedAdminDraftFromForm();
    refreshAdminPreviewOnly({ preserveScroll: true });
  }, 120);
}

function applySelectedAdminDraftFromForm() {
  const form = document.querySelector("#adminSettingsForm");
  if (!form) return;
  const data = new FormData(form);
  const selected = currentAdminSelection();
  if (selected.type === "ticker" && data.get("tickerEditorPresent") === "1") {
    state.settings.tickerVisible = data.get("tickerVisible") === "on";
    state.settings.tickerSpeed = Number(data.get("tickerSpeed") || state.settings.tickerSpeed || 36);
    state.settings.tickerBackground = data.get("tickerBackground") || state.settings.tickerBackground || "#dff3ff";
    const tickerItems = data.getAll("tickerId").map((id) => ({
      id,
      icon: data.get(`tickerIcon-${id}`) || "",
      text: data.get(`tickerText-${id}`) || "",
      color: data.get(`tickerColor-${id}`) || "#171512",
      font: data.get(`tickerFont-${id}`) || "Inter",
      size: Number(data.get(`tickerSize-${id}`) || 15),
      bold: data.get(`tickerBold-${id}`) === "on",
      link: data.get(`tickerLink-${id}`) || "",
    }));
    if (tickerItems.length) state.settings.tickerItems = tickerItems;
    return;
  }

  if (selected.type === "hero" && data.get("heroEditorPresent") === "1") {
    state.settings = {
      ...state.settings,
      siteTitle: data.get("siteTitle") ?? state.settings.siteTitle,
      tagline: data.get("tagline") ?? state.settings.tagline,
      heroTitle: data.get("heroTitle") ?? state.settings.heroTitle,
      heroSubtitle: data.get("heroSubtitle") ?? state.settings.heroSubtitle,
      heroImage: data.get("heroImage") || state.settings.heroImage,
      heroMediaType: data.get("heroMediaType") || state.settings.heroMediaType,
      heroTitleColor: data.get("heroTitleColor") || state.settings.heroTitleColor,
      heroSubtitleColor: data.get("heroSubtitleColor") || state.settings.heroSubtitleColor,
      heroTitleSize: Number(data.get("heroTitleSize") || state.settings.heroTitleSize || 34),
      heroSubtitleSize: Number(data.get("heroSubtitleSize") || state.settings.heroSubtitleSize || 16),
      heroTextFont: data.get("heroTextFont") || state.settings.heroTextFont,
      heroOverlay: Number(data.get("heroOverlay") || state.settings.heroOverlay || 68),
      accent: data.get("accent") || state.settings.accent,
      font: data.get("font") || state.settings.font,
      youtubeUrl: normalizeYouTube(data.get("youtubeUrl") || state.settings.youtubeUrl || ""),
      seoTitle: data.get("seoTitle") || state.settings.seoTitle,
      seoDescription: data.get("seoDescription") || state.settings.seoDescription,
      supportEmail: data.get("supportEmail") || state.settings.supportEmail,
      supportPhone: data.get("supportPhone") || state.settings.supportPhone,
      facebookUrl: data.get("facebookUrl") || state.settings.facebookUrl,
      instagramUrl: data.get("instagramUrl") || state.settings.instagramUrl,
    };
    setCssVars();
    return;
  }

  if (selected.type === "article") {
    const id = selected.id;
    const item = currentArticles().find((article) => article.id === id);
    if (!item || !data.getAll("articleId").includes(id)) return;
    Object.assign(item, {
      title: data.get(`articleTitle-${id}`) || item.title || "Untitled article",
      summary: data.get(`articleSummary-${id}`) || item.summary || "",
      body: data.get(`articleBody-${id}`) || item.body || "",
      category: data.get(`articleCategory-${id}`) || item.category || "Guides",
      group: data.get(`articleGroup-${id}`) || item.group || "things",
      image: data.get(`articleImage-${id}`) || item.image || image.hero,
      style: {
        font: data.get(`articleFont-${id}`) || item.style?.font || "Inter",
        color: data.get(`articleColor-${id}`) || item.style?.color || "#171512",
        titleSize: Number(data.get(`articleTitleSize-${id}`) || item.style?.titleSize || 18),
        bodySize: Number(data.get(`articleBodySize-${id}`) || item.style?.bodySize || 15),
      },
    });
    return;
  }

  if (selected.type === "event") {
    const id = selected.id;
    const item = state.events.find((eventItem) => eventItem.id === id);
    if (!item || !data.getAll("eventId").includes(id)) return;
    const packageId = data.get(`eventPackage-${id}`) || item.packageId || "free";
    Object.assign(item, {
      title: data.get(`eventTitle-${id}`) || item.title || "Untitled event",
      summary: data.get(`eventSummary-${id}`) || item.summary || "",
      date: data.get(`eventDate-${id}`) || item.date || "2026-07-15",
      time: data.get(`eventTime-${id}`) || item.time || "",
      category: data.get(`eventCategory-${id}`) || item.category || "Events",
      price: data.get(`eventPrice-${id}`) || item.price || "Free",
      location: data.get(`eventLocation-${id}`) || item.location || "Manipur",
      district: data.get(`eventDistrict-${id}`) || item.district || "Imphal West",
      image: data.get(`eventImage-${id}`) || item.image || image.hero,
      status: data.get(`eventStatus-${id}`) || item.status || "pending",
      packageId,
      paid: packageId !== "free",
      featured: packageId !== "free" || Boolean(item.featured),
    });
    return;
  }

  if (selected.type === "promo") {
    const id = selected.id;
    const item = state.promotions.find((promoItem) => promoItem.id === id);
    if (!item || !data.getAll("promoId").includes(id)) return;
    const packageId = data.get(`promoPackage-${id}`) || item.packageId || "free";
    Object.assign(item, {
      title: data.get(`promoTitle-${id}`) || item.title || "Untitled promotion",
      summary: data.get(`promoSummary-${id}`) || item.summary || "",
      category: data.get(`promoCategory-${id}`) || item.category || "Promotions",
      location: data.get(`promoLocation-${id}`) || item.location || "Manipur",
      district: data.get(`promoDistrict-${id}`) || item.district || "Imphal West",
      image: data.get(`promoImage-${id}`) || item.image || image.hero,
      status: data.get(`promoStatus-${id}`) || item.status || "pending",
      packageId,
      paid: packageId !== "free",
      featured: packageId !== "free" || Boolean(item.featured),
    });
  }
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.remove(), 2600);
}

async function readFileAsDataUrl(file) {
  if (!file || !file.size) return "";
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleCreate(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const type = data.get("type");
  const packageId = data.get("packageId") || "free";
  const imageFromFile = await readFileAsDataUrl(data.get("imageFile"));
  const fallback = data.get("category") === "Eat & Drink" ? image.cafe : data.get("category") === "Shopping" ? image.market : image.hero;
  const base = { id: `${type}-${Date.now()}`, title: data.get("title"), category: data.get("category"), group: "things", location: data.get("location"), district: data.get("district") || "Imphal West", price: data.get("price") || packageById(packageId).label, image: imageFromFile || data.get("imageUrl") || fallback, summary: data.get("summary"), organiser: state.profile.name || "Local organiser", packageId, status: "pending", featured: packageId !== "free", paid: packageId !== "free", videoUrl: data.get("videoUrl") };
  if (type === "promotion" || type === "vendor") state.promotions.unshift(base);
  else state.events.unshift({ ...base, date: data.get("date") || "2026-07-15", time: data.get("time") || "6:00 PM" });
  saveState();
  showToast("Submitted for admin approval.");
  navigate("profile");
}

function handleProfile(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.profile = { ...state.profile, name: data.get("name"), email: data.get("email"), phone: data.get("phone"), district: data.get("district"), notifyEmail: data.get("notifyEmail") === "on", notifyPhone: data.get("notifyPhone") === "on" };
  saveState();
  showToast("Profile saved.");
  render();
}

async function handleAdminSettings(event) {
  event.preventDefault();
  syncRichEditors();
  const data = new FormData(event.currentTarget);

  if (data.get("tickerEditorPresent") === "1") {
    const tickerItems = await Promise.all((data.getAll("tickerId") || []).map(async (id) => ({
      id,
      icon: data.get(`tickerIcon-${id}`) || "",
      text: data.get(`tickerText-${id}`) || "",
      color: data.get(`tickerColor-${id}`) || "#171512",
      font: data.get(`tickerFont-${id}`) || "Inter",
      size: Number(data.get(`tickerSize-${id}`) || 15),
      bold: data.get(`tickerBold-${id}`) === "on",
      link: data.get(`tickerLink-${id}`) || "",
    })));
    state.settings = {
      ...state.settings,
      tickerVisible: data.get("tickerVisible") === "on",
      tickerSpeed: Number(data.get("tickerSpeed") || state.settings.tickerSpeed || 36),
      tickerBackground: data.get("tickerBackground") || state.settings.tickerBackground || "#dff3ff",
      tickerItems,
    };
  }

  if (data.get("heroEditorPresent") === "1") {
    const heroUpload = await readFileAsDataUrl(data.get("heroFile"));
    state.settings = {
      ...state.settings,
      siteTitle: data.get("siteTitle") ?? state.settings.siteTitle,
      tagline: data.get("tagline") ?? state.settings.tagline,
      heroTitle: data.get("heroTitle") ?? state.settings.heroTitle,
      heroSubtitle: data.get("heroSubtitle") ?? state.settings.heroSubtitle,
      heroImage: heroUpload || data.get("heroImage") || state.settings.heroImage,
      heroMediaType: data.get("heroMediaType") || state.settings.heroMediaType,
      heroTitleColor: data.get("heroTitleColor") || state.settings.heroTitleColor,
      heroSubtitleColor: data.get("heroSubtitleColor") || state.settings.heroSubtitleColor,
      heroTitleSize: Number(data.get("heroTitleSize") || state.settings.heroTitleSize || 34),
      heroSubtitleSize: Number(data.get("heroSubtitleSize") || state.settings.heroSubtitleSize || 16),
      heroTextFont: data.get("heroTextFont") || state.settings.heroTextFont,
      heroOverlay: Number(data.get("heroOverlay") || state.settings.heroOverlay || 68),
      accent: data.get("accent") || state.settings.accent,
      font: data.get("font") || state.settings.font,
      youtubeUrl: normalizeYouTube(data.get("youtubeUrl") || state.settings.youtubeUrl || ""),
      seoTitle: data.get("seoTitle") || state.settings.seoTitle,
      seoDescription: data.get("seoDescription") || state.settings.seoDescription,
      supportEmail: data.get("supportEmail") || state.settings.supportEmail,
      supportPhone: data.get("supportPhone") || state.settings.supportPhone,
      facebookUrl: data.get("facebookUrl") || state.settings.facebookUrl,
      instagramUrl: data.get("instagramUrl") || state.settings.instagramUrl,
    };
  }

  const articleIds = data.getAll("articleId");
  if (articleIds.length) {
    const existingArticles = currentArticles();
    const updates = [];
    for (const id of articleIds) {
      const existing = existingArticles.find((item) => item.id === id) || {};
      const uploadedImage = await readFileAsDataUrl(data.get(`articleImageFile-${id}`));
      updates.push({
        ...existing,
        id,
        title: data.get(`articleTitle-${id}`) || existing.title || "Untitled article",
        summary: data.get(`articleSummary-${id}`) || existing.summary || "",
        body: data.get(`articleBody-${id}`) || existing.body || "",
        category: data.get(`articleCategory-${id}`) || existing.category || "Guides",
        group: data.get(`articleGroup-${id}`) || existing.group || "things",
        image: uploadedImage || data.get(`articleImage-${id}`) || existing.image || image.hero,
        style: {
          font: data.get(`articleFont-${id}`) || existing.style?.font || "Inter",
          color: data.get(`articleColor-${id}`) || existing.style?.color || "#171512",
          titleSize: Number(data.get(`articleTitleSize-${id}`) || existing.style?.titleSize || 18),
          bodySize: Number(data.get(`articleBodySize-${id}`) || existing.style?.bodySize || 15),
        },
      });
    }
    state.articles = mergeUpdatesById(existingArticles, updates);
  }

  const eventIds = data.getAll("eventId");
  if (eventIds.length) {
    const updates = [];
    for (const id of eventIds) {
      const existing = state.events.find((item) => item.id === id) || {};
      const uploadedImage = await readFileAsDataUrl(data.get(`eventImageFile-${id}`));
      const packageId = data.get(`eventPackage-${id}`) || existing.packageId || "free";
      updates.push({
        ...existing,
        id,
        title: data.get(`eventTitle-${id}`) || existing.title || "Untitled event",
        summary: data.get(`eventSummary-${id}`) || existing.summary || "",
        date: data.get(`eventDate-${id}`) || existing.date || "2026-07-15",
        time: data.get(`eventTime-${id}`) || existing.time || "",
        category: data.get(`eventCategory-${id}`) || existing.category || "Events",
        price: data.get(`eventPrice-${id}`) || existing.price || "Free",
        location: data.get(`eventLocation-${id}`) || existing.location || "Manipur",
        district: data.get(`eventDistrict-${id}`) || existing.district || "Imphal West",
        image: uploadedImage || data.get(`eventImage-${id}`) || existing.image || image.hero,
        status: data.get(`eventStatus-${id}`) || existing.status || "pending",
        packageId,
        paid: packageId !== "free",
        featured: packageId !== "free" || Boolean(existing.featured),
      });
    }
    state.events = mergeUpdatesById(state.events, updates);
  }

  const promoIds = data.getAll("promoId");
  if (promoIds.length) {
    const updates = [];
    for (const id of promoIds) {
      const existing = state.promotions.find((item) => item.id === id) || {};
      const uploadedImage = await readFileAsDataUrl(data.get(`promoImageFile-${id}`));
      const packageId = data.get(`promoPackage-${id}`) || existing.packageId || "free";
      updates.push({
        ...existing,
        id,
        title: data.get(`promoTitle-${id}`) || existing.title || "Untitled promotion",
        summary: data.get(`promoSummary-${id}`) || existing.summary || "",
        category: data.get(`promoCategory-${id}`) || existing.category || "Promotions",
        location: data.get(`promoLocation-${id}`) || existing.location || "Manipur",
        district: data.get(`promoDistrict-${id}`) || existing.district || "Imphal West",
        image: uploadedImage || data.get(`promoImage-${id}`) || existing.image || image.hero,
        status: data.get(`promoStatus-${id}`) || existing.status || "pending",
        packageId,
        paid: packageId !== "free",
        featured: packageId !== "free" || Boolean(existing.featured),
      });
    }
    state.promotions = mergeUpdatesById(state.promotions, updates);
  }

  normalizeLoadedStateText();
  saveState();
  const preview = document.querySelector(".admin-site-preview");
  ui.adminTargetScrollTop = preview ? preview.scrollTop : ui.adminTargetScrollTop;
  ui.adminShouldFocus = true;
  showToast("AdminPro changes published. Preview stayed focused on the selected item.");
  render();
}

function mergeUpdatesById(base = [], updates = []) {
  const map = new Map(base.map((item) => [item.id, item]));
  updates.forEach((item) => map.set(item.id, { ...map.get(item.id), ...item }));
  return [...map.values()];
}

function addTickerRow() {
  state.settings.tickerItems = [...(state.settings.tickerItems || []), { id: `tick-${Date.now()}`, icon: "📣", text: "New announcement", color: "#171512", font: "Inter", size: 15, bold: true, link: "#latest" }];
  saveState();
  render();
}

function removeTickerRow(id) {
  state.settings.tickerItems = (state.settings.tickerItems || []).filter((item) => item.id !== id);
  saveState();
  render();
}

function addArticleRow() {
  state.articles = [...currentArticles(), { id: `guide-${Date.now()}`, title: "New article", group: "things", category: "Guides", image: image.hero, summary: "Write a short summary for this new article.", body: "Write the full article here.", style: { font: "Inter", color: "#171512", titleSize: 18, bodySize: 15 } }];
  saveState();
  render();
}

function removeArticleRow(id) {
  state.articles = currentArticles().filter((item) => item.id !== id);
  saveState();
  render();
}

function addSubArticle(id) {
  const parent = currentArticles().find((item) => item.id === id);
  state.articles = [...currentArticles(), { id: `guide-sub-${Date.now()}`, title: `${parent?.title || "Article"} - sub article`, group: parent?.group || "things", category: parent?.category || "Guides", image: parent?.image || image.hero, summary: "Add a supporting sub-article summary.", body: "Write the sub-article body here.", style: { font: parent?.style?.font || "Inter", color: parent?.style?.color || "#171512", titleSize: 18, bodySize: 15 } }];
  saveState();
  render();
}

function normalizeYouTube(url = "") {
  if (url.includes("embed")) return url;
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function richEditorValue(editor) {
  const hasFormatting = Boolean(editor.querySelector("b,strong,i,em,u,span,a,div,p,ul,ol,li,h1,h2,h3,h4,h5,h6,font"));
  if (hasFormatting) return sanitizeRichHtml(editor.innerHTML.trim());
  return (editor.innerText || editor.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
}

function syncRichEditors() {
  document.querySelectorAll("[data-rich-editor]").forEach((editor) => {
    const target = editor.dataset.richTarget;
    const hidden = [...document.querySelectorAll("[data-rich-hidden]")].find((field) => field.dataset.richHidden === target);
    if (hidden) hidden.value = richEditorValue(editor);
  });
}

function captureRichSelection(editor) {
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount || !editor) return;
  const range = selection.getRangeAt(0);
  if (editor.contains(range.commonAncestorContainer)) {
    activeRichEditor = editor;
    savedRichRange = range.cloneRange();
  }
}

function restoreRichSelection(editor) {
  const target = editor || activeRichEditor;
  if (!target) return false;
  const selection = window.getSelection?.();
  if (!selection) return false;
  target.focus({ preventScroll: true });
  selection.removeAllRanges();
  if (savedRichRange && target.contains(savedRichRange.commonAncestorContainer)) {
    selection.addRange(savedRichRange);
  } else {
    const range = document.createRange();
    range.selectNodeContents(target);
    range.collapse(false);
    selection.addRange(range);
    savedRichRange = range.cloneRange();
  }
  activeRichEditor = target;
  return true;
}

function getRichEditorForControl(control) {
  return control.closest("[data-rich-block]")?.querySelector("[data-rich-editor]") || activeRichEditor;
}

function applyRichInlineStyle(control, styleMap) {
  const editor = getRichEditorForControl(control);
  if (!restoreRichSelection(editor)) return;
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return;
  const range = selection.getRangeAt(0);
  if (!editor.contains(range.commonAncestorContainer)) return;
  if (range.collapsed) {
    showToast("Highlight a letter, word or phrase first.");
    return;
  }
  const span = document.createElement("span");
  Object.entries(styleMap).forEach(([key, value]) => span.style[key] = value);
  try {
    range.surroundContents(span);
  } catch {
    const fragment = range.extractContents();
    span.appendChild(fragment);
    range.insertNode(span);
  }
  const newRange = document.createRange();
  newRange.selectNodeContents(span);
  selection.removeAllRanges();
  selection.addRange(newRange);
  savedRichRange = newRange.cloneRange();
  activeRichEditor = editor;
  syncRichEditors();
}

function applyRichCommand(control, command, value = null) {
  const editor = getRichEditorForControl(control);
  if (!restoreRichSelection(editor)) return;
  if (command === "createLink") {
    const url = prompt("Paste the link URL");
    if (url) document.execCommand("createLink", false, url);
  } else {
    document.execCommand(command, false, value);
  }
  captureRichSelection(editor);
  syncRichEditors();
}

function bindRichTextEditors() {
  document.querySelectorAll("[data-rich-editor]").forEach((editor) => {
    ["input", "keyup", "mouseup", "touchend", "focus"].forEach((type) => editor.addEventListener(type, () => {
      captureRichSelection(editor);
      syncRichEditors();
    }));
  });
  document.querySelectorAll("[data-rich-command]").forEach((button) => {
    button.addEventListener("mousedown", (event) => event.preventDefault());
    button.addEventListener("click", (event) => {
      event.preventDefault();
      applyRichCommand(button, button.dataset.richCommand);
    });
  });
  document.querySelectorAll("[data-rich-color]").forEach((input) => {
    input.addEventListener("mousedown", () => {
      const editor = getRichEditorForControl(input);
      if (editor) captureRichSelection(editor);
    });
    input.addEventListener("input", () => applyRichInlineStyle(input, { color: input.value }));
  });
  document.querySelectorAll("[data-rich-font]").forEach((select) => {
    select.addEventListener("mousedown", () => {
      const editor = getRichEditorForControl(select);
      if (editor) captureRichSelection(editor);
    });
    select.addEventListener("change", () => applyRichInlineStyle(select, { fontFamily: fontStack(select.value) }));
  });
  document.querySelectorAll("[data-rich-size]").forEach((select) => {
    select.addEventListener("mousedown", () => {
      const editor = getRichEditorForControl(select);
      if (editor) captureRichSelection(editor);
    });
    select.addEventListener("change", () => applyRichInlineStyle(select, { fontSize: select.value }));
  });
}

function handleSecretTripleClick() {
  const now = Date.now();
  secretTapTimes = [...secretTapTimes.filter((time) => now - time < 1800), now];
  if (secretTapTimes.length >= 3) {
    secretTapTimes = [];
    showToast("AdminPro unlocked for local testing.");
    navigate("admin");
  }
}

function toggleSave(id) {
  const exists = state.savedEventIds.includes(id);
  state.savedEventIds = exists ? state.savedEventIds.filter((item) => item !== id) : [...state.savedEventIds, id];
  saveState();
  showToast(exists ? "Removed from saved events." : "Saved to your calendar.");
  render();
}

function addReminder(id) {
  const event = state.events.find((item) => item.id === id);
  if (!event) return;
  if (!state.savedEventIds.includes(id)) state.savedEventIds.push(id);
  if (!state.reminders.some((item) => item.id === id)) state.reminders.push({ id, title: event.title, date: event.date, time: event.time });
  saveState();
  showToast("Reminder added to calendar.");
  render();
}

async function shareItem(id) {
  const item = [...state.events, ...state.promotions, ...currentArticles()].find((entry) => entry.id === id);
  if (!item) return;
  const path = `#${routeForItem(item)}`;
  const url = `${window.location.origin}${window.location.pathname}${path}`;
  const text = `${item.title} - shared from What's On Imphal & Manipur`;
  if (navigator.share) await navigator.share({ title: item.title, text, url }).catch(() => {});
  else {
    await navigator.clipboard?.writeText(`${text} ${url}`);
    showToast("Share link copied with What's On Imphal & Manipur branding.");
  }
}

function buyPackage(id) {
  const pkg = packageById(id);
  state.profile.activePackage = id;
  const upiUrl = `upi://pay?pa=${encodeURIComponent(state.settings.upiId)}&pn=${encodeURIComponent("WhatsOn Imphal Manipur")}&am=${pkg.price}&cu=INR&tn=${encodeURIComponent(pkg.name)}`;
  state.payments.unshift({ id: `pay-${Date.now()}`, packageId: id, packageName: pkg.name, amount: pkg.price, status: pkg.price === 0 ? "Free plan activated" : "Payment link generated", upiUrl, createdAt: new Date().toISOString() });
  saveState();
  if (pkg.price > 0) window.location.href = upiUrl;
  showToast(pkg.price > 0 ? "UPI/GPay payment link generated." : "Free plan activated.");
  render();
}

function approveListing(id) {
  const item = state.events.find((entry) => entry.id === id) || state.promotions.find((entry) => entry.id === id);
  if (!item) return;
  item.status = "approved";
  saveState();
  showToast("Listing approved and published.");
  render();
}

function rejectListing(id) {
  const item = state.events.find((entry) => entry.id === id) || state.promotions.find((entry) => entry.id === id);
  if (!item) return;
  item.status = "rejected";
  saveState();
  showToast("Listing rejected.");
  render();
}
