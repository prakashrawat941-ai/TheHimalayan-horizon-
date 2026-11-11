# DevBhoomi Himalayan Horizons

A bilingual (English and Hindi), mobile-first travel platform for Uttarakhand's hidden villages, village homestays and village tourism.

## Status

Stage 1 (foundation) is in place:

- React, TypeScript, Vite and Tailwind CSS
- English/Hindi switch, remembered on the device
- Mobile-first layout with bottom navigation; a top menu on larger screens
- Home page and placeholder pages for the rest of the site
- Supabase client, which stays off until the environment variables are set

Not built yet: sign-in (Google and Facebook), database and admin panel, homestay listings, trip planner, cab booking, partner and driver onboarding. See `roadmap.md`.

## Run locally

Requires Node.js 20 or newer and npm.

```sh
npm install
npm run dev
```

The site runs without a backend. To connect Supabase later, copy `.env.example` to `.env` and fill in the values.

Other scripts:

- `npm test` runs the translation tests
- `npm run build` type-checks and builds for production

## Stack

- Vite, React, TypeScript
- Tailwind CSS v4
- React Router
- Supabase (database, auth, storage, row-level security), wired up in a later stage

## Manual setup needed later

1. Create a Supabase project and put its URL and anon key in `.env`.
2. In Supabase Auth, enable Google and Facebook sign-in and add the local and production site URLs as redirect URLs.
3. Keep the service-role key out of the repo and out of any `VITE_` variable.
