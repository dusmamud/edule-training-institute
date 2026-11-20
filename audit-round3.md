# EduLe Computer Training Institute — Round-3 Audit

**Date:** 2026-11-20 (audit run 17:33–18:15 UTC / 23:03–23:45 IST)
**Scope:** `~/workspace/edule-training-institute`, repo `dusmamud/edule-training-institute` @ `4870c07` (round-2 HEAD, no source changes made — read-only audit)
**Live site:** https://edule-training-institute.pages.dev
**Stack:** SvelteKit 3 + Tailwind 4 + adapter-static, 73 prerendered pages

## Method & environment

- `npm run build` — **passed** (SSR 32.21s, client 38.14s, 0 errors shown; 73 HTML files emitted).
- Fresh `vite preview` on **port 4180** (PID 5761; stopped after the audit — see §E).
- Screenshots/probes: Playwright + Chrome-for-Testing headless shell (`~/shot-work/chrome-headless-shell-linux64/`), **79 probes completed before Chrome died** — see §E for the failure.
- Screenshots: `screenshots/r3-audit-<slug>-<width>.png` (79 files, prefix `r3-audit-`).
- Audit script + raw log: `~/shot-work/edule-r3-audit.mjs`, `~/shot-work/edule-r3-audit.log`.
- Interaction-probe script (written, **not run** — Chrome down): `~/shot-work/edule-r3-interact.mjs`.

## Headline results

| Check | Result |
|---|---|
| Build | ✅ Pass, 73 pages prerendered |
| Sitemap | ✅ 73 `<url>` entries in `build/sitemap.xml`; matches 73 HTML files |
| Browser probes completed | 79 (12 pages; 11 key pages at all 7 widths) |
| Max document horizontal overflow | **0px everywhere probed** (320–1440) |
| Console errors / page errors / failed requests | **0 in all 79 probes** |
| Broken images (`naturalWidth === 0`) | **0 in all 79 probes** |
| Local HTTP status (curl, all 73 URLs) | 200 (the one `500` seen was my own `//` double-slash URL — vite-preview artifact, not a site bug) |
| Live HTTP status (curl sample, 17 URLs) | 200, incl. `/demo`, `/emi-calculator`, `/finder`, `/compare`, `/dashboard`, `/login`, `/sitemap.xml`, `/robots.txt` |
| Live unknown URLs | ❌ **200 with home-page content (soft 404) — P0** |
| SEO meta (all 73 built pages) | ✅ unique `<title>`, description ≥50 chars, canonical, `og:image` file exists; JSON-LD parses on every page |
| Dead links / placeholder text | None found (no `lorem`/`TODO`/dead hrefs; every internal href resolves to a real route) |
| **P0 / P1 / P2** | **1 / 6 / 14** |

---

## (a) Per-page table

Overflow = `document.documentElement.scrollWidth - clientWidth` in px. Console = console errors + page errors + failed requests. "Wide" flags in the raw log are **all inside intentional horizontal scrollers** (partner marquee, demo date picker, `min-w-[560–760px]` tables in `overflow-x-auto`) — document overflow stayed 0, so they are not bugs. Small-tap counts are raw counts of interactive elements <44×44px; see the note below the table.

### Browser-probed pages (Playwright, live JS)

| Route | Widths probed | Loads? | Max overflow | Overlaps / clipped | Broken imgs | Console errs | Notes |
|---|---|---|---|---|---|---|---|
| `/` | 320, 360, 390, 768, 1024, 1280, 1440 | 200 | 0 | None seen; **but see P1-6** — reveal-gated sections (Why-EduLe cards, instructor cards, blog cards, 2 CTAs) render blank in the fullPage screenshot | 0 | 0 | Stats animate to 28,400+ / 13 / 18,200+ after scroll; prerendered HTML still has `0+` (P1-1). Small taps max 13 @≤768 (skip link 1×1 + 15px social icons + footer links). |
| `/courses` | all 7 | 200 | 0 | None | 0 | 0 | 13 cards, search + 6 selects render. Small taps 7 @768. |
| `/courses/data-science-python` | all 7 | 200 | 0 | None | 0 | 0 | Curriculum accordion, instalment line, syllabus link render. Small taps 7. |
| `/fees` | all 7 | 200 | 0 | None | 0 | 0 | Fee table (min-w-720px) scrolls inside its container. Small taps 7. |
| `/emi-calculator` | all 7 | 200 | 0 | None | 0 | 0 | Plan radios + range render. Small taps 10 @768. |
| `/compare` | all 7 | 200 | 0 | None | 0 | 0 | Empty state (13 checkboxes) renders; table min-w-720px scrolls. Small taps 15–20 (20px checkboxes inside 56px labels — effective target is the label). |
| `/demo` | all 7 | 200 | 0 | None | 0 | 0 | Date scroller + 4 slots render; "Loading dates…" in prerender, replaced client-side. Small taps 7. |
| `/batches` | all 7 | 200 | 0 | None | 0 | 0 | Table min-w-760px scrolls inside container (round-2 sr-only overflow trap is **fixed** — no `sr-only` inside any scroll container anymore). Small taps 7. |
| `/certificates` | all 7 | 200 | 0 | None | 0 | 0 | Sample cert + verify form render. Small taps 7. |
| `/alumni` | all 7 | 200 | 0 | None | 0 | 0 | 6 stories; only Ananya has a photo, rest initial avatars (by design). Small taps 7. |
| `/login` | all 7 | 200 | 0 | None | 0 | 0 | Sign-in/sign-up tabs + demo button render. Small taps 2 @320–390 (skip link + 28×17 footer link). |
| `/dashboard` | 320, 360 only ⚠️ | 200 | 0 | None | 0 | 0 | **Not probed at 390–1440** (Chrome died mid-page). Demo enrolments render for signed-out visitors (P2-8). |

### Remaining 61 pages — statically verified (no live browser; Chrome down, §E)

All 61 return **200** from the local preview (curl), have a **unique title + description + canonical + existing og:image** in built HTML, valid JSON-LD where present, and no missing local images. Source-read for content/consistency (bugs found are listed in §C/§D).

`/about`, `/accessibility`, `/admissions`, `/blog`, `/blog/best-computer-courses-after-12th`, `/blog/data-analyst-interview-preparation`, `/blog/free-ai-tools-office-work-2026`, `/blog/how-to-verify-certificate`, `/blog/python-vs-excel-which-first`, `/blog/tally-vs-excel-which-gets-you-hired`, `/brochure`, `/career-paths`, `/career-paths/accountant`, `/career-paths/data-analyst`, `/career-paths/full-stack-developer`, `/career-paths/ui-ux-designer`, `/contact`, `/corporate`, `/courses/ai-ml-foundations`, `/courses/ai-ml-foundations/syllabus`, `/courses/brand-marketing`, `/courses/brand-marketing/syllabus`, `/courses/cloud-computing-aws`, `/courses/cloud-computing-aws/syllabus`, `/courses/culture-leadership`, `/courses/culture-leadership/syllabus`, `/courses/cyber-security`, `/courses/cyber-security/syllabus`, `/courses/data-science-python/syllabus`, `/courses/excel-advanced`, `/courses/excel-advanced/syllabus`, `/courses/finance-budget`, `/courses/finance-budget/syllabus`, `/courses/graphic-design-badges`, `/courses/graphic-design-badges/syllabus`, `/courses/python-programming`, `/courses/python-programming/syllabus`, `/courses/tally-gst`, `/courses/tally-gst/syllabus`, `/courses/ux-color-schemes`, `/courses/ux-color-schemes/syllabus`, `/courses/web-development`, `/courses/web-development/syllabus`, `/employers`, `/faq`, `/finder`, `/instructors`, `/instructors/arjun-mehta`, `/instructors/meera-iyer`, `/instructors/priya-nair`, `/instructors/rahul-sharma`, `/instructors/sana-kapoor`, `/instructors/vikram-singh`, `/placements`, `/privacy`, `/referral`, `/refund`, `/scholarships`, `/sitemap`, `/terms`, `/workshops`.

Note: `/sitemap` itself is 200/meta ✅ but its human sitemap omits the 13 syllabus pages (P2-12).

**Small-tap-target note (applies to all probed pages):** the raw `smallTaps` counts are dominated by three false-positive classes — the 1×1 `sr-only` skip link (only visible on focus), the 15×15 top-bar social icons (hidden below 768px), and the 20×20 checkboxes on `/compare` (inside 56px-tall labels, so the effective target is fine). Genuine sub-44px targets: footer text links (~28×17px, e.g. "FAQ"), top-bar social icons at ≥768px, and the home testimonial carousel dots (10px tall). See P2-13.

**Live vs local (§6 of task):** fetched live home, `/demo`, `/emi-calculator`, `/finder` with `browser.open` — content matches the local build (same prices, dates logic, EMI default ₹30,875 / save ₹1,625 for Data Science). One live-only difference: the soft-404 (P0-1). Live home text extraction confirms P1-1 (`0+, students trained, 0, job-ready courses, 0+, placed in jobs`).

---

## (b) Interaction probe results

**⚠️ NOT RUN — no interaction probe passed or failed.** Chrome (headless shell) died at ~17:52 UTC and every relaunch failed afterwards (20+ launch attempts across three binaries, plus a fresh re-download — all `browserType.launch: Target page, context or browser has been closed`; the full-Chrome zip could not even be extracted because binary writes fail with EPERM during the fault). This is the VM-wide sandbox fault also hitting the other round-3 agents at the same time (coffee-lounge screenshots stop 17:44 UTC; Bloom agent logged the flare at ~23:24 IST). The probe script is ready at `~/shot-work/edule-r3-interact.mjs` and covers all 12 required probes:

| Probe | Status | Evidence |
|---|---|---|
| Mobile menu open / navigate | ❓ Not run | Script ready (`edule-r3-interact.mjs` §1). Source: `Header.svelte` — hamburger toggles `open`, mobile nav links close it. |
| Courses search + filters + sort + URL state | ❓ Not run | Source: `courses/+page.svelte` — `?q=&cat=&level=&price=&mode=&duration=&sort=` round-trips via two `$effect`s; sort `price-low`/`price-high`/`shortest`/`popular` implemented. |
| Compare tray (pick 2–3 → /compare) | ❓ Not run | Source: `CourseCard.svelte` (Compare toggle) + `CompareBar.svelte` (`/compare?ids=…`) + `compare/+page.svelte` (seeds from `?ids=`, max 3). |
| EMI calculator monthly figure | ❓ Not run | Source + live fetch verified the math statically: DS ₹32,500 ÷ 6 = ₹5,417/mo (ceil); full-pay ₹30,875, save ₹1,625. |
| Finder quiz completes | ❓ Not run | Source: 3 steps → recommendations; known logic quirk P2-1. |
| Demo booking confirms with date/slot | ❓ Not run | Source: dates generated client-side (next 14 days), 4 slots, confirmation panel with name/date/slot + WhatsApp link. |
| Admissions flow (3 steps) | ❓ Not run | Source: step 1 course → step 2 batch → step 3 details → ref `EDULE-YYYY-NNNN`. Quirk P2-5. |
| Mock login `demo@edule.in` / `demo1234` → dashboard | ❓ Not run | Source: any email + password ≥6 chars logs in (mock); demo button sets `localStorage edule-user = Demo Student`. |
| FAQ accordion toggles | ❓ Not run | Source: `FaqAccordion.svelte`, `openIndex` starts 0, toggles on click. |
| Syllabus page renders | ❓ Not run | Source + built HTML verified: modules, tools, jobs, print button (`window.print()`), `.no-print` CSS exists. |
| Certificates verify `EDULE-2026-0142` | ❓ Not run | Source: mock accepts `EDULE-2026-0142` (Ananya, Data Science) and `EDULE-2026-0087` (Rohit, Tally). Conflict P1-5. |
| Compare via `?ids=` (mobile overflow) | ❓ Not run | Source seeds from `?ids=`; table min-w-720px in `overflow-x-auto`. |

---

## (c) Ranked bug list

### P0

**P0-1 — Live site soft-404s unknown URLs with HTTP 200 + home-page content.**
Evidence: `curl https://edule-training-institute.pages.dev/nonexistent-page-xyz` → `200`, body byte-identical to `/` (130,090 bytes, title "EduLe — Computer Training Institute in Pune | Courses, Fees & Certificates"); same for `/courses/nonexistent-course` → 200 + home title. Local preview returns **404** correctly (`Page not found — EduLe`). No `_redirects`/`_headers` in `static/` or `build/`; `vite.config.ts:11` has `fallback: undefined`; no `404.html` in `build/`. So the live deployment (or Pages project setting) serves the home page as a fallback — search engines will index junk URLs as duplicates of home. Fix is likely a redeploy / Pages-setting change, not a source change — but verify after redeploy.

### P1

**P1-1 — CountUp stats still render `0+` / `0` in prerendered HTML (known round-2 quirk — confirmed still true).**
Evidence: `build/index.html` contains `<span>0+</span>` ×2 (students, placed) and `0` (courses); live home fetched via `browser.open` reads "0+, students trained, 0, job-ready courses, 0+, placed in jobs, 4.8 rating (9.8K)". Source: `src/lib/components/CountUp.svelte` (`shown` starts at 0, animates only via IntersectionObserver) and `src/routes/+page.svelte:76-78`. Crawlers / no-JS users see zeros. (About page renders its stats as plain numbers — no CountUp there — so the fix pattern already exists in-repo.)

**P1-2 — Workshops Event JSON-LD has one hardcoded `startDate` for all 4 events.**
Evidence: `src/routes/workshops/+page.svelte:14-27` — `startDate: '2026-11-21T11:00:00+05:30'` for every item, but data (`site.ts` `workshops`) is 21 Nov 11:00, **28 Nov 11:00, 29 Nov 10:00, 5 Dec 11:00**. Three of four structured-data events have the wrong date/time. JSON-LD itself parses (verified), the values are wrong.

**P1-3 — Workshop "Reserve a Free Seat" books a seat without collecting any contact details.**
Evidence: `src/routes/workshops/+page.svelte:66-70` — the button just sets `booked = slug` and shows "✓ Seat reserved! We will confirm on WhatsApp." No name/phone/email is ever asked (unlike demo/admissions/scholarships, which all collect them), so the reservation cannot be confirmed or fulfilled. The `name`/`phone` state declared at the top of the file is never bound to any input.

**P1-4 — Career-path "Start This Path — ₹{bundle}" CTA enrols only the first course at the single-course fee.**
Evidence: `src/routes/career-paths/[slug]/+page.svelte:37` — `href="/admissions?course={path.courses[0]}"`. Admissions preselects that one course (`admissions/+page.svelte` `$effect` reads `?course=`), and the confirmation shows that course's fee, not the bundle (e.g. Data Analyst path advertises ₹49,999 but lands on Python Programming ₹14,999). There is no bundle enrolment path anywhere.

**P1-5 — Certificate code `EDULE-2026-0087` belongs to two different people/courses.**
Evidence: `src/routes/certificates/+page.svelte` — `EDULE-2026-0087` verifies as "Rohit Patil — Tally Prime with GST, completed 28 Sep 2026, Grade A"; `src/routes/dashboard/+page.svelte` lists the demo student's earned certificate as "Finance Series: Budget & Net Worth — Completed · Code EDULE-2026-0087". One code, two owners/courses — breaks the "unique code" promise the Certificates page makes.

**P1-6 — Reveal-on-scroll content is invisible without JS, and 3 home reveal elements stayed hidden after a slow scroll.**
Evidence: `src/app.css:90-99` — `.reveal { opacity: 0; … }` is pure CSS; the `is-visible` class is only added by the `use:reveal` action (`src/lib/reveal.ts`), so with JS disabled (or if the observer never fires) the content stays invisible — there is no no-JS fallback (unlike the `prefers-reduced-motion` rule, which does force visibility). Observed: the `r3-audit-home-390.png` fullPage screenshot shows large blank gaps where the Why-EduLe cards, instructor cards, blog cards and both CTA boxes should be. A targeted probe (slow `scrollIntoView` per element, 700ms dwell) showed instructor cards DO reveal (opacity 1), but 3 elements stayed `opacity: 0` after a full slow scroll: the Finder CTA, the Become-an-Instructor CTA, and one blog article. Whether the fast-scroll screenshot blanks are a headless artifact or a real fast-scroll bug is **unresolved** — re-verify with a working browser and a real scroll. (Related: hero `.hero-anim` elements also start at opacity 0 via GSAP `gsap.from` — they have `clearProps`, so they recover; the `.reveal` ones do not have that safety net.)

### P2

**P2-1 — Finder "low time" filter is defeated by its own fallback.** `src/routes/finder/+page.svelte` — `time === 'low'` filters recommendations to `weeks <= 8`, but if fewer than 2 remain it appends `'web-development'` (16 weeks) and `'excel-advanced'`. E.g. goal "Get a job" + 2–4 hrs/week → `[tally-gst]` (8w) → fallback adds web-development (16w), so a user who said they have 2–4 hrs/week is recommended a 16-week course.

**P2-2 — "2 instalments of ₹X" is wrong for odd-priced courses.** `src/routes/courses/[id]/+page.svelte` — `instalments = [ceil(price/2), price - ceil(price/2)]` but the card shows only the first: "or 2 instalments of ₹12,500" for Web Development ₹24,999 (second is ₹12,499). Same split in `fees/+page.svelte` (`instalments()`), where the table correctly shows both halves (`₹12,500 + ₹12,499`) but the page copy says "2 equal instalments" — they are not equal for 8 of 12 paid courses (₹1 difference).

**P2-3 — Discount claims contradict each other.** Fees page (`fees/+page.svelte`): "Up to 30% off … what you see is what you pay." EMI page (`emi-calculator/+page.svelte`): "Pay in full — extra 5% off", i.e. up to 35% off list and what-you-see is NOT what you pay in full. Verified discounts from `site.ts`: max 30.0% (Excel ₹9,999→₹6,999); the 5% full-pay discount stacks on top. Also the Finance course is **free** (₹9,999→₹0, 100% off), so "up to 30% off all courses" is literally false if the free course counts.

**P2-4 — Career-path `fee` for Data Analyst is ₹1 off the sum of its courses.** `site.ts` `careerPaths[0]`: `fee: 54497`, but 14,999 + 6,999 + 32,500 = **54,498**. (Other three paths add up exactly.) Bundle saving shown (₹4,498) inherits the ₹1 error.

**P2-5 — Admissions step-2 "Next batch" radio stores a date string while the other radios store batch names.** `src/routes/admissions/+page.svelte` — the first radio has `value={course.nextBatch.date}` ("Mon, 23 Nov 2026") vs `value={b.name}` ("Morning Batch"…) for the other four. The confirmation then reads "confirm your {course.title} seat in the {batch}" — showing a date where a batch name belongs if that option was picked.

**P2-6 — Course detail "Download Syllabus (PDF)" links to an HTML page, not a PDF.** `src/routes/courses/[id]/+page.svelte` — the button links to `/courses/{id}/syllabus` (HTML; PDF only via the print dialog on that page). Label over-promises.

**P2-7 — Career-path durations don't equal the sum of their courses.** `site.ts`: Data Analyst listed 24 weeks vs 10+5+12 = **27**; Full-Stack listed 26 vs 16+10+10 = **36**. (UI/UX 14 = 8+6 ✓; Accountant 17 = 8+5+4 ✓.) If overlap/parallel study is intended, nothing on the page says so.

**P2-8 — Dashboard shows demo enrolments + a personal instalment to signed-out visitors.** `src/routes/dashboard/+page.svelte` — `enrolled` defaults to the demo list even when `user === null`; the page then shows "₹16,250 due midway through the Data Science batch" and a "certificate earned" to someone who never signed in. The hero does say "This is a demo dashboard with sample enrolments", but the instalment/certificates read as personal data.

**P2-9 — Course-student totals don't add up to the headline stat.** `site.stats.students = 28,400`, but the 13 courses' `students` sum to **39,990**. The 28,400 figure exactly equals the sum of the 6 instructors' `students` (8,200+6,400+4,800+5,100+2,100+1,800) — the headline counts instructor audiences, not course enrolments, with no note explaining the difference. (About page repeats 28,400+; home hero animates to it.)

**P2-10 — "8 named hiring partners" vs 6 employers in the table.** `src/routes/placements/+page.svelte` — stat box shows `partners.length` = 8, but the placements table lists 6 companies; BrightAccounts LLP and DataBridge Analytics (both in `site.ts` `partners`) never appear in the table. (The table's own caption does label the rows as highlights, so this is a nit.)

**P2-11 — Refund meta description contradicts the policy body.** `src/routes/refund/+page.svelte` Seo description: "full refund (minus ₹1,000 processing) if you withdraw within the first 7 days"; body §1: "we refund the **unused portion** of your fees minus a ₹1,000 processing charge". Full ≠ unused portion.

**P2-12 — HTML sitemap omits the 13 syllabus pages.** `src/routes/sitemap/+page.svelte` groups list 59 links (30 static + 13 courses + 4 paths + 6 instructors + 6 blog); the 13 `/courses/[id]/syllabus` pages are in `sitemap.xml` but not on the human sitemap page.

**P2-13 — Small tap targets (mobile-first).** Genuine sub-44px targets found by the probe (not the false-positive classes — see §A note): footer text links ~28×17px (e.g. "FAQ" in the bottom bar); top-bar social icons 15×15px at ≥768px (`Header.svelte`); home testimonial carousel dots 10px tall (`+page.svelte`); compare checkboxes 20×20 (mitigated: 56px label). All other buttons/inputs measured ≥44px.

**P2-14 — "Max 25 students per batch" is uncorroborated.** Claimed on home ("Small batches, real faculty"), `/batches` ("seats are capped at 25"), course detail and syllabus pages — but no data anywhere states batch capacity; only seats-left (3–12) is in `site.ts`. Soft claim, but it is presented as fact in four places.

**Not bugs (checked, cleared):** Priya Nair initial-letter avatar (known, by design — `instructorImage: null`); login/dashboard mock-only (by design, labelled in UI); round-2 `sr-only`-in-scroll-container overflow on `/batches` (fixed — 0px overflow at all widths, no `sr-only` inside any scroll container); discount "up to 30%" (exact for paid courses: max 30.0%); EMI "from" figures match the calculator (ceil(price/6)); career-path bundle savings math (except P2-4); instructor course counts match `taught.length` derivation; alumni salaries sit inside their path salary bands; refund 7-day/₹1,000 wording is consistent between FAQ and refund page body.

---

## (d) Content / data inconsistencies (summary)

| # | Inconsistency | Where |
|---|---|---|
| 1 | Cert code `EDULE-2026-0087` = Rohit Patil/Tally AND demo student's Finance cert | P1-5 |
| 2 | Headline "28,400 students" = instructor sum, not course enrolments (39,990) | P2-9 |
| 3 | Data Analyst path fee ₹54,497 vs course sum ₹54,498 | P2-4 |
| 4 | Path weeks 24/26 vs course-week sums 27/36 | P2-7 |
| 5 | "Up to 30% off / what you see is what you pay" vs 5% full-pay extra + free course at 100% off | P2-3 |
| 6 | "2 equal instalments" vs ₹1-unequal splits; detail page shows only the first half | P2-2 |
| 7 | Refund meta "full refund" vs body "unused portion" | P2-11 |
| 8 | "8 hiring partners" vs 6 rows in placements table | P2-10 |
| 9 | Workshop JSON-LD dates: one date for four different events | P1-2 |
| 10 | Career-path CTA price (bundle) vs admissions landing price (first course only) | P1-4 |
| 11 | Workshop "seat reserved" with no contact details collected | P1-3 |
| 12 | Dashboard instalment/cert shown to signed-out visitors | P2-8 |
| 13 | Admissions "seat in the {batch}" shows a date when "Next batch" radio is picked | P2-5 |

---

## (e) Could NOT verify (and why)

1. **All 12 interaction probes (§B)** — Chrome headless shell cannot launch on this VM since ~17:52 UTC (sandbox fault; see below). No probe passed or failed; source-level logic was reviewed instead and the probe script is ready to run when Chrome recovers.
2. **`/dashboard` at 390–1440px and `/finder`, `/contact` at any width in a live browser** — same cause; only `/dashboard` @320/@360 completed (0px overflow, 200, no errors). The other 59 pages were never loaded in a browser at all (static verification only — curl 200 + built-HTML meta/image/JSON-LD checks).
3. **Whether the home reveal blanks are a real-user bug or a headless artifact (P1-6)** — the slow-scroll probe was inconclusive (3 elements stayed hidden); needs a working browser + real scroll, and a no-JS check.
4. **Visual overlap review beyond the home-390 screenshot** — only `r3-audit-home-390.png` was visually inspected in full; the other 78 screenshots were captured but not eyeballed (their numeric checks — overflow 0, no broken images, no console errors — all passed).
5. **`svelte-check` was not run** (not requested by the task; build passed).

**Why Chrome died (environment, not the site):** the VM-wide sandbox fault flared again 2026-11-20 ~17:54 UTC / 23:24 IST (logged by the Bloom round-3 agent in `~/AGENTS.md`). Symptoms hit this audit at ~17:52 UTC: a `page.screenshot` protocol error killed the sweep at probe 72, then every browser launch failed (`Target page, context or browser has been closed`) — 20+ attempts across three headless-shell binaries (159.0.8154.6 main, a fresh re-download, and `--single-process`), plus binary writes failing with EPERM (a fresh full-Chrome unzip stalled on "write error (disk full?)", the 158 zip downloaded as 0 bytes). The coffee-lounge round-3 agent's screenshots stop at 17:44 UTC — same fault, same window. The fault flapped on a ~1-minute timescale in the Bloom agent's notes, but Chrome launches failed consistently for ~25 minutes here. **Re-run `~/shot-work/edule-r3-audit.mjs` (it resumes from existing screenshots) and `~/shot-work/edule-r3-interact.mjs` once the fault clears.**

**Cleanup done:** vite preview on :4180 stopped (PID 5761 killed by PID, no `pkill -f` used); no project source files were edited, added or deleted (read-only audit; only `screenshots/r3-audit-*` and this report were written).

---

## Appendix — evidence pointers

- Raw probe log: `~/shot-work/edule-r3-audit.log` (79 `PAGE` lines, all `status=200 overflow=0 consoleErr=0 broken=[]`; 117 `FAIL` lines after the browser died — all `browser.newPage: Target page, context or browser has been closed`, i.e. the environment fault, not site failures).
- Build log: `~/shot-work/edule-r3-build.log` (`✓ built in 32.21s` SSR + `✓ built in 38.14s` client).
- Screenshots: `~/workspace/edule-training-institute/screenshots/r3-audit-*.png` (79 files).
- Key source evidence: `src/lib/components/CountUp.svelte`, `src/lib/reveal.ts`, `src/app.css:90-99` (`.reveal`), `src/routes/workshops/+page.svelte:14-27,66-70`, `src/routes/career-paths/[slug]/+page.svelte:37`, `src/routes/certificates/+page.svelte`, `src/routes/dashboard/+page.svelte`, `src/routes/finder/+page.svelte`, `src/routes/admissions/+page.svelte`, `src/lib/data/site.ts` (`stats`, `careerPaths`, `workshops`, `partners`, `placements`).
