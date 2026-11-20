# EduLe — Computer Training Institute

Frontend-only website for EduLe, a Computer Training Institute in Pune.
Svelte 5 (runes) + SvelteKit 3 + Tailwind CSS 4 + TypeScript, statically
prerendered and deployed to Cloudflare Pages.

**Live:** https://edule-training-institute.pages.dev

## Pages

Home, All Courses (search + category/level/mode/duration/price filters + sort, URL-shareable state, compare), 13 course detail pages (curriculum, instructor, fees, tools, jobs, student reviews, next batch, printable syllabus), Fees (course-wise ₹ fees table, instalments, discounts), EMI Calculator, Compare Courses, Career Paths + 4 path detail pages, Certificates (sample + mock verification), About, Instructors + 6 instructor detail pages, Admissions (3-step mock enrolment), Free Demo Class booking, Batch Timetable, Course Finder quiz, Placements, Alumni Stories, Scholarships, Refer & Earn, Free Workshops, Corporate Training, Hire from EduLe (employers), Blog + 6 articles, FAQ, Contact, Student Sign In + My Learning Dashboard (mock), Brochure (printable), Refund Policy, Accessibility, Sitemap page, Privacy, Terms, 404.

Round-2 (2026-11-19): GSAP hero entrance + animated counters, Lenis smooth scroll, Embla testimonial carousel, scroll reveals (IntersectionObserver action), View Transitions, motion gated by `prefers-reduced-motion`. Packages: gsap 3.15.1, lenis 1.3.27, embla-carousel-svelte 8.6.0.

## Data

All content is **mock data** in `src/lib/data/site.ts` — swap it for real
data without touching pages or components.

## Develop

```bash
npm install
npm run images   # convert PNG masters in originals/ to AVIF/WebP/JPG (pass names to convert only those)
npm run check    # svelte-check, 0 errors
npm run build    # static output in build/
```

PNG masters live in `originals/` at the project root (not deployed). Images are generated (never hotlinked) and rendered through the reusable
`#lib/components/Picture.svelte` component (AVIF → WebP → JPG → PNG).
