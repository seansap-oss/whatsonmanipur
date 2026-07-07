# What's On Imphal & Manipur — v1.5 Mobile Photo Route Fix

This build fixes the mobile reliability problems:

- Replaced weak blue placeholder cards with 96 local JPEG image assets in `public/assets/final`.
- Changed the localStorage key so old broken cached content will not override this build.
- Detail/article/promo/event pages scroll to the top after route changes.
- Mobile detail pages show image/title/content in a readable order.
- Homepage promotion/event cards are aligned and mobile-scrollable.
- Back buttons use browser history first.
- Public layout is not redesigned.

Test with:

```powershell
npm install
npm run build
npm run dev -- --host 127.0.0.1 --port 5177
```

Clear browser site data before testing older builds.
