# EduLe — Computer Training Institute

Frontend-only website for EduLe, a Computer Training Institute in Pune.
Svelte 5 (runes) + SvelteKit 3 + Tailwind CSS 4 + TypeScript, statically
prerendered and deployed to Cloudflare Pages.

**Live:** https://edule-training-institute.pages.dev

## Pages

Home, All Courses (search + category/level/price filters), 13 course detail
pages (curriculum, instructor, fees, certificate info), Fees (course-wise
₹ fees table, instalments, discounts), Certificates (sample + mock
verification), About, Instructors, Admissions (3-step mock enrolment),
Placements, Blog + 3 articles, FAQ, Contact, Privacy, Terms, 404.

## Data

All content is **mock data** in `src/lib/data/site.ts` — swap it for real
data without touching pages or components.

## Develop

```bash
npm install
npm run images   # convert PNG masters in static/images/original/ to AVIF/WebP/JPG
npm run check    # svelte-check, 0 errors
npm run build    # static output in build/
```

Images are generated (never hotlinked) and rendered through the reusable
`#lib/components/Picture.svelte` component (AVIF → WebP → JPG → PNG).
