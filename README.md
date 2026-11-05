# Linky — milestone 3 (auth, i18n, links, profiles, embeds, forum)

Existing DB? Run `supabase/migration_forum.sql` once.

## Run locally
1. `npm install`
2. Create a Supabase project, open SQL Editor, run `supabase/schema.sql`
3. `cp .env.example .env.local` and fill in the keys (SESSION_SECRET: `openssl rand -base64 32`)
4. `npm run dev` → http://localhost:3000
5. The first username you register becomes Admin.

## Architecture notes
- Auth: signed HTTP-only JWT cookie (`lib/session.ts`); writes go through server actions using the service role; RLS allows public reads only.
- i18n: next-intl, `en/th/zh/hi/ar`, Arabic sets `dir="rtl"`; preference stored in the NEXT_LOCALE cookie.
- AI hooks (later): add `lib/ai/*` and call from server actions (e.g. `createPost`).
