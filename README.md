# Resume Skip — waitlist landing page

A single-page waitlist site for Resume Skip, built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, and Framer Motion, following the "Minimalist Modern"
design system (Electric Blue gradient, Calistoga + Inter + JetBrains Mono).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Fonts + metadata
  page.tsx             The single page: nav, hero, how it works, features,
                       "the math" (inverted stats), waitlist CTA, footer
  globals.css          Design tokens as CSS variables, gradient/dot utilities
  api/waitlist/route.ts  Waitlist email endpoint (placeholder, see below)
components/
  Logo.tsx, Button.tsx, SectionLabel.tsx, WaitlistForm.tsx,
  HeroGraphic.tsx, Reveal.tsx, NavCta.tsx
```

## Wiring up the waitlist for real

`app/api/waitlist/route.ts` currently validates the email and logs it —
it doesn't store anything yet. Before launch, swap the `TODO` for one of:

- **Resend / a transactional email tool** — call their API to add the address to an audience.
- **Airtable / Google Sheet (via Apps Script webhook)** — POST the email to your sheet.
- **Supabase / Postgres** — insert into a `waitlist` table.

All of these work fine on Vercel's free tier as-is; no extra infra needed for a waitlist page.

## Deploying to Vercel via Git

1. Push this project to a GitHub (or GitLab/Bitbucket) repo:
   ```bash
   git init
   git add .
   git commit -m "Resume Skip waitlist page"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — no config changes needed. Click **Deploy**.
4. Every future push to `main` redeploys automatically.

## Swapping in your real logo

`components/Logo.tsx` currently renders a code-drawn mark (rounded square with
two "skip" chevrons in the brand gradient) plus a text wordmark. Once you have
the actual logo file, drop it in `public/` (e.g. `public/logo.svg`) and replace
the `<svg>` block in `Logo.tsx` with an `<Image src="/logo.svg" ... />`.
