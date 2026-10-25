# Ivy Villafranca — Virtual Assistant (Next.js)

A single-page site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/layout.tsx` — root layout, loads Fraunces (display) and Work Sans (body) via `next/font/google`
- `app/globals.css` — brand color tokens as CSS variables, with a `prefers-color-scheme: dark` override
- `app/page.tsx` — composes the page from the components below
- `components/Header.tsx` — sticky nav with a mobile menu (client component)
- `components/Hero.tsx` — headline + illustrated SVG
- `components/Services.tsx` — services list, data-driven
- `components/About.tsx` — bio + illustrated monogram
- `components/Process.tsx` — 4-step onboarding timeline
- `components/Testimonials.tsx` — client quotes
- `components/Projects.tsx` — project portfolio section on the homepage
- `components/Contact.tsx` — contact form
- `app/api/contact/route.ts` — validates form submissions and sends owner/client emails with Resend
- `components/Footer.tsx`

## To customize

- Swap the placeholder name, copy, and testimonials for the real ones.
- Brand color lives in `app/globals.css` as `--pink` (currently `#faaeff`) — change it there and it propagates everywhere via Tailwind's `pink` color.
- Copy `.env.example` to `.env.local`, then set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL`. Use a sender address on the verified `hirevaivy.com` domain, such as `Ivy Villafranca <hello@hirevaivy.com>`.
- Keep the API key private and configure the same environment variables in your deployment provider.
