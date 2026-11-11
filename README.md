# The Himalayan Horizon

A bilingual (English and Hindi), mobile-first platform for hidden destinations, village homestays, mountain workations and AI-assisted trip planning in Uttarakhand.

## Status

Phase 2 (frontend and design system) is in progress on the `phase-2-nextjs` branch:

- Next.js (App Router), React, TypeScript, Tailwind CSS v4
- Brand design tokens: Forest Green, Warm Ivory, Muted Gold, Natural Copper
- English/Hindi switch, remembered on the device
- Header, mobile bottom navigation and footer with the official address
- Home page and public routes. Listings show empty states until the database is connected
- SEO basics: metadata, Organization structured data, sitemap and robots

Not built yet: database, sign-in, admin CMS, destination, homestay and workation data, trip planner, PWA. See `roadmap.md`.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run typecheck`, `npm test`, `npm start`.

## Environment

Copy `.env.example` to `.env`. Variables that start with `NEXT_PUBLIC_` are visible in the browser, so only public values go there. Never put a service-role key or any other secret in a `NEXT_PUBLIC_` variable, and never commit `.env`.

## Setup needed later

1. Create a Supabase project. Add its URL and anon key to `.env` locally and to Vercel's environment settings for production.
2. In Supabase Auth, enable Google sign-in and add the local and production site URLs as redirect URLs.
3. Set `NEXT_PUBLIC_SITE_URL` to the production address in Vercel, so the sitemap and metadata URLs are correct.
