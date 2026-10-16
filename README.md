# SchoolRight Marketing Website

Independent, responsive marketing website built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. To check production compilation: `npm run build`.

## Pages

- `/` — Home
- `/features` and `/features/[slug]` — Feature overview and detailed feature pages
- `/solutions` and `/solutions/[slug]` — Audience-specific pages
- `/product-tour` — Real product screenshots and explicit placeholders
- `/how-it-works`, `/pricing`, `/about`, `/contact`

## Brand & content

- Color tokens: `tailwind.config.ts`, `src/app/globals.css`
- Marketing copy, features and WhatsApp contact: `src/lib/content.ts`
- Navigation, CTA, screenshot display and shared UI: `src/components/site.tsx`
- Uploaded real screenshots: `public/images/dashboard.png`, `public/images/students.png`
- Brand icon asset: `public/images/schoolright-icon.png`

## Important before publication

1. Verify every feature claim and replace placeholder images with approved screenshots.
2. Confirm official logo asset is the preferred variant. Current asset is from the prior generated app-icon concept.
3. Add verified pricing, testimonials and measurable outcomes only when supported by evidence.
4. Configure production domain, favicon/OG image, analytics and consent requirements as needed.
5. Verify WhatsApp account `+2349157777295` and test mobile CTA behavior.

The site is intentionally a marketing-only application, without school self-registration or backend integrations.
