# What's On Imphal & Manipur

Last-chance reliability build.

This build keeps the approved layout and fixes the launch-readiness problems reported during local testing:

- Every public card now uses a production-safe local image from `/public/assets`.
- The app starts with a fresh localStorage key so old placeholder card images do not override the fixed content.
- Promotions now have real detail pages at `#promo/<id>`.
- Event, guide and promotion cards are clickable from the image, title, card body, or Open/View buttons.
- Share links now point to the correct event/guide/promotion route.
- Dev/build scripts call Vite through Node to avoid Windows/Vercel executable permission problems.
- Premium navy/blue/gold theme remains; public UI layout is not redesigned.

## Local run

```powershell
npm install
npm run dev -- --host 127.0.0.1 --port 5177
```

Open: http://127.0.0.1:5177

If the browser previously cached an older build, clear site data once.
