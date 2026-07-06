# What's On Imphal & Manipur

Complete front-end build for `whatson.imphal.in`.

## What Works In This Build

- Home, Latest, Create, Calendar, Profile, Vendor Packages, collection pages and hidden Admin
- Melbourne-style mega menus for Things to do, Eat & Drink, Shopping, Visitor info and Manipur
- AdminPro visual website editor opened by triple-clicking the Profile account title
- Optional scrolling ticker tape below the locked public header
- Ticker editor with visibility toggle, speed, bar color, row text, row color, icon, font, size, bold and link
- Hero editor with image upload, image URL, YouTube embed mode, title/subtitle text, colors, font, sizes and overlay
- Article editor with editable guide cards, image uploaders, font, size, color and sub-article creation
- Search by keyword, date shortcut, district/location, category cards and category chips
- Searchable Manipur districts without showing every district in the public header
- Event detail pages
- Save events to calendar
- Add reminders
- Native share on mobile, clipboard fallback on desktop
- Branded share copy with What's On Imphal & Manipur origin
- Create event, promotion or vendor listing
- Admin approval queue
- Admin hero/text/color/font/article/sub-article/photo/YouTube updates
- Paid package selection with UPI/GPay deep links
- Mobile bottom navigation: Latest, Home, Post +, Calendar, Profile
- LocalStorage persistence for all local test data
- Seeded guide pages for airport access, Kangla/Ima Market, Loktak, food, shopping, stays and taxis
- Seeded 2026 Indian public holidays in the calendar
- Every seeded article, event and promotion has an image

## Local Run

```powershell
cd D:\whatsonimphal
npm install
npm run dev -- --port 5177
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5177
```

## Build

```powershell
npm run build
```

## Important Production Notes

This build uses localStorage so it works immediately for testing. For public launch, connect:

- Supabase Auth for phone/email login
- Supabase tables for events, promotions, approvals, profiles, reminders and payments
- Real payment gateway or verified UPI collection flow
- Cloud image storage for uploads
- Admin role protection
- SEO sitemap, structured data, Google Search Console and verified social sharing images
- A verified content pipeline for Facebook/Instagram event imports instead of copying unapproved posts

## Stability Patch: Menu + AdminPro Rich Editor

This build keeps the public UI locked and only fixes behaviour behind it.

### Fixed
- Burger menu now includes Home, Latest, Calendar, Profile, Post your event, Promote, discovery items, Support and Buzztown.
- Burger menu items now route properly instead of behaving only as search terms.
- The WO brand/logo closes all open overlays and returns to Home even if already on the home route.
- Mega menus, burger menu and search overlays close on outside click, Escape key, route clicks, search actions, logo click and desktop mouse-leave.
- Promote can be triple-clicked to unlock AdminPro, so desktop access does not depend on mobile Profile footer.
- Account details on Profile remains a backup triple-click AdminPro unlock.
- AdminPro now includes a richer article editor toolbar: bold, italic, underline, alignment, font, size, selected text color, link and clear formatting.
- AdminPro now includes event and promotion card editors so the visible public cards can be edited without changing the locked layout.

### Still local prototype only
AdminPro saves to browser localStorage. Supabase authentication, roles, storage and real publish workflow are still required before public launch.

## AdminPro Rich Text Precision Patch

This patch changes the editor logic from row-level text controls to selection-level rich text controls.

### Fixed
- Ticker text is now a real rich text editor, not a plain input field.
- Highlight one letter, one word, or any phrase inside a ticker row and apply its own color, font, size, bold, italic, underline or link.
- The ticker row still has default font/color/size/bold controls, but selected text can override those defaults.
- Hero title, hero subtitle, site title and tagline now use rich text editors.
- Article title, summary and body now use rich text editors.
- Event title and event summary now use rich text editors.
- Promotion title and promotion summary now use rich text editors.
- The toolbar preserves the text selection when clicking color/font/size controls, so it does not apply styling to the whole row by mistake.

The public layout remains locked; this only changes the AdminPro editing behaviour and rendering of styled text.

## AdminPro Click-to-Edit Sync Patch

This patch keeps the public UI locked and changes only the AdminPro workflow.

### Fixed
- AdminPro layout is now swapped to match the requested workflow: live website preview on the left, editor panel on the right.
- Clicking the hero, ticker, event card, promotion card, or article/guide card inside the live preview selects that exact section.
- The selected item gets a blue highlight outline in the preview.
- The right editor automatically opens the matching controls for that exact clicked item.
- Selected-item edits save without searching through every headline.
- Save/publish logic now merges edited records instead of replacing the full event/article/promotion list, so one-card edits do not delete or overwrite other cards.
- A quick-select panel remains on the right as a backup, but it does not add duplicate form fields that can overwrite selected-item edits.
- Rich text saving now avoids double-escaping ampersands, so the site title should render as `What's On Imphal & Manipur` instead of showing HTML entities.

### Workflow
1. Open AdminPro.
2. Click any section in the left live preview.
3. Edit the matching controls on the right.
4. Click Publish changes.
