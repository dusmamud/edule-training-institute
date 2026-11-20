<script lang="ts">
		import { ArrowRight, Award, BookOpen, Briefcase, CalendarClock, ChevronLeft, ChevronRight, Clock, Compass, GraduationCap, Pause, Play, Search, Star, Users } from '@lucide/svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import gsap from 'gsap';
	import Picture from '#lib/components/Picture.svelte';
	import CourseCard from '#lib/components/CourseCard.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import CountUp from '#lib/components/CountUp.svelte';
	import PartnerMarquee from '#lib/components/PartnerMarquee.svelte';
	import { reveal, prefersReducedMotion } from '#lib/reveal.ts';
	import { blogPosts, categories, courses, instructors, site, testimonials } from '#lib/data/site.ts';

	let query = $state('');
	let activeCat = $state('All');
	let shown = $state(6);

	const filtered = $derived(
		courses.filter(
			(c) =>
				(activeCat === 'All' || c.category === activeCat) &&
				(query.trim() === '' || c.title.toLowerCase().includes(query.trim().toLowerCase()) || c.instructor.toLowerCase().includes(query.trim().toLowerCase()))
		)
	);
	const visible = $derived(filtered.slice(0, shown));

	const nextBatches = $derived([...courses].sort((a, b) => new Date(a.nextBatch.date).getTime() - new Date(b.nextBatch.date).getTime()).slice(0, 4));

	// Hero entrance (GSAP) — transform + opacity only, gated by reduced-motion.
	// Hero elements never carry .reveal, so no GSAP/reveal conflict.
	$effect(() => {
		if (prefersReducedMotion()) return;
		const ctx = gsap.context(() => {
			gsap.from('.hero-anim', { y: 26, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity' });
		});
		return () => ctx.revert();
	});

	// Testimonial carousel (Embla) — auto-advance with a pause control
	// (WCAG 2.2.2) and pause on hover/focus.
	let emblaApi: EmblaCarouselType | undefined = $state();
	let selected = $state(0);
	let paused = $state(false);
	let hoverPaused = $state(false);
	function onEmblaInit(e: CustomEvent<EmblaCarouselType>) {
		emblaApi = e.detail;
		emblaApi.on('select', () => (selected = emblaApi?.selectedScrollSnap() ?? 0));
	}
	$effect(() => {
		if (!emblaApi || prefersReducedMotion() || paused || hoverPaused) return;
		const id = window.setInterval(() => emblaApi?.scrollNext(), 6000);
		return () => window.clearInterval(id);
	});
</script>

<Seo
	title="EduLe — Computer Training Institute in Pune | Courses, Fees & Certificates"
	description="Learn from anywhere and build your bright career. Job-ready computer courses in Pune — development, data science, design, Tally & GST — with certificates and placement support."
	image="hero-student-transparent"
/>

<!-- HERO — faithful to the reference -->
<section class="overflow-hidden bg-mint">
	<div class="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-14 lg:grid-cols-2 lg:pt-16 lg:pb-20">
		<div>
			<p class="hero-anim text-sm font-bold tracking-wide text-leaf-dark uppercase">Start your favourite course</p>
			<h1 class="hero-anim mt-3 font-display text-4xl leading-[1.08] font-extrabold text-ink sm:text-5xl lg:text-[3.4rem]">
				Now learning from anywhere, and build your <span class="text-leaf-dark underline decoration-leaf decoration-4 underline-offset-8">bright</span> career.
			</h1>
			<p class="hero-anim mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
				Practical computer courses in Pune and live online — development, data science, design, accounting and business — taught by working professionals, with certificates and placement support.
			</p>
			<div class="hero-anim mt-7 flex flex-wrap items-center gap-3">
				<a href="/courses" class="min-h-12 rounded-full bg-leaf px-7 py-3.5 font-display text-base font-bold text-white transition-colors duration-200 hover:bg-leaf-dark">Start A Course</a>
				<a href="/demo" class="min-h-12 rounded-full border-2 border-leaf-dark px-7 py-3 font-display text-base font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf-dark hover:text-white">Book a Free Demo</a>
				<a href="/fees" class="min-h-12 rounded-full border-2 border-leaf-dark px-7 py-3 font-display text-base font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf-dark hover:text-white">View Fees in ₹</a>
			</div>
			<dl class="hero-anim mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
				<div><dt class="sr-only">Students trained</dt><dd class="font-display text-xl font-extrabold text-ink"><CountUp value={site.stats.students} suffix="+" /></dd><dd class="text-muted">students trained</dd></div>
				<div><dt class="sr-only">Courses</dt><dd class="font-display text-xl font-extrabold text-ink"><CountUp value={site.stats.courses} /></dd><dd class="text-muted">job-ready courses</dd></div>
				<div><dt class="sr-only">Placed students</dt><dd class="font-display text-xl font-extrabold text-ink"><CountUp value={site.stats.placed} suffix="+" /></dd><dd class="text-muted">placed in jobs</dd></div>
			</dl>
			<p class="hero-anim mt-3 text-xs text-muted">28,400+ unique students trained · {site.stats.enrolments.toLocaleString('en-IN')} total course enrolments across all courses.</p>
		</div>
		<div class="hero-anim relative mx-auto w-full max-w-lg">
			<div class="absolute top-2 left-2 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md" aria-label="Rated 4.8 out of 5">
				<span class="flex items-center gap-1 font-display text-lg font-extrabold text-ink">4.8 <Star size={18} class="fill-gold text-gold" aria-hidden="true" /></span>
				<span class="text-xs text-muted">rating (9.8K)</span>
			</div>
			<Picture name="hero-student-transparent" alt="Smiling student holding a laptop" width={1200} height={1200} eager={true} sizes="(max-width: 1024px) 90vw, 560px" imgClass="mx-auto w-full max-w-md rounded-[2rem] object-cover sm:max-w-lg" />
			<div class="absolute right-2 bottom-6 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-leaf text-center text-white shadow-lg sm:h-32 sm:w-32" aria-label="{site.stats.courses} courses">
				<BookOpen size={26} aria-hidden="true" />
				<span class="font-display text-xl leading-tight font-extrabold sm:text-2xl">{site.stats.courses}</span>
				<span class="text-xs font-semibold">courses</span>
			</div>
		</div>
	</div>
</section>

<!-- HIRING PARTNERS -->
<section class="border-b border-line bg-white py-5" aria-labelledby="partners-heading">
	<p id="partners-heading" class="text-center text-xs font-bold tracking-widest text-muted uppercase">Our graduates work at</p>
	<PartnerMarquee />
</section>

<!-- ALL COURSES -->
<section class="mx-auto max-w-7xl px-4 py-14 sm:py-20" aria-labelledby="courses-heading">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<h2 id="courses-heading" class="font-display text-3xl font-extrabold text-ink sm:text-4xl">All <span class="text-leaf-dark underline decoration-leaf decoration-4 underline-offset-8">Courses</span> of EduLe</h2>
		<label class="flex w-full max-w-sm items-center gap-2 rounded-full border border-line bg-white px-4 py-1 shadow-sm focus-within:border-leaf">
			<Search size={18} class="shrink-0 text-muted" aria-hidden="true" />
			<span class="sr-only">Search your course</span>
			<input type="search" bind:value={query} placeholder="Search your course" class="min-h-11 w-full bg-transparent text-base outline-none placeholder:text-muted" />
		</label>
	</div>

	<div class="mt-6 flex items-center gap-2 overflow-x-auto rounded-2xl bg-mint p-3" role="group" aria-label="Course categories">
		<button type="button" class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:flex" aria-label="Scroll categories left" onclick={() => document.getElementById('cat-scroll')?.scrollBy({ left: -200, behavior: 'smooth' })}>
			<ChevronLeft size={20} aria-hidden="true" />
		</button>
		<div id="cat-scroll" class="flex gap-2 overflow-x-auto">
			{#each categories as cat}
				<button
					type="button"
					class="min-h-11 shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 {activeCat === cat ? 'bg-leaf text-white' : 'bg-white text-ink hover:bg-mint-deep'}"
					aria-pressed={activeCat === cat}
					onclick={() => {
						activeCat = cat;
						shown = 6;
					}}
				>
					{cat}
				</button>
			{/each}
		</div>
		<button type="button" class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:flex" aria-label="Scroll categories right" onclick={() => document.getElementById('cat-scroll')?.scrollBy({ left: 200, behavior: 'smooth' })}>
			<ChevronRight size={20} aria-hidden="true" />
		</button>
	</div>

	{#if visible.length > 0}
		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each visible as course (course.id)}
				<CourseCard {course} />
			{/each}
		</div>
	{:else}
		<p class="mt-8 rounded-2xl border border-line bg-mint px-6 py-10 text-center text-lg font-semibold text-muted">
			No courses match “{query}” in {activeCat}. Try a different search or category.
		</p>
	{/if}

	<div class="mt-10 text-center">
		{#if shown < filtered.length}
			<button type="button" class="min-h-12 rounded-full border-2 border-leaf px-8 py-3 font-display text-base font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf hover:text-white" onclick={() => (shown += 6)}>Load More Courses</button>
		{:else}
			<a href="/courses" class="inline-block min-h-12 rounded-full border-2 border-leaf px-8 py-3 font-display text-base font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf hover:text-white">View All Courses</a>
		{/if}
	</div>
</section>

<!-- UPCOMING BATCHES -->
<section class="mx-auto max-w-7xl px-4 pb-14 sm:pb-20" aria-labelledby="batches-heading">
	<div class="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8" use:reveal>
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="flex items-center gap-2 text-sm font-bold tracking-wide text-leaf-dark uppercase"><CalendarClock size={16} aria-hidden="true" /> Starting soon</p>
				<h2 id="batches-heading" class="mt-2 font-display text-2xl font-extrabold text-ink sm:text-3xl">Upcoming batches — book your seat</h2>
			</div>
			<a href="/batches" class="min-h-11 rounded-full border-2 border-leaf px-5 py-2.5 text-sm font-bold text-leaf-dark hover:bg-leaf hover:text-white">Full Timetable</a>
		</div>
		<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each nextBatches as c}
				<a href="/admissions?course={c.id}" class="block rounded-2xl bg-mint p-5 transition-colors duration-200 hover:bg-mint-deep">
					<p class="text-sm font-bold text-leaf-dark">{c.nextBatch.date}</p>
					<p class="mt-1 font-display text-base leading-snug font-bold text-ink">{c.title.split('—')[0].trim()}</p>
					<p class="mt-2 text-sm text-muted">{c.nextBatch.days} · {c.nextBatch.time}</p>
					<p class="mt-1 text-sm font-bold text-ink">{c.nextBatch.seats} seats left</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- WHY EDULE -->
<section class="bg-mint/60">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:py-20">
		<h2 class="text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">Why students choose EduLe</h2>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ icon: GraduationCap, title: 'Learn by doing', text: 'Every course ends with real projects — not just theory. Your portfolio is your proof.' },
				{ icon: Award, title: 'Verifiable certificates', text: 'Every certificate carries a code employers can check online in under a minute.' },
				{ icon: Briefcase, title: 'Placement support', text: 'Resume workshops, mock interviews and drives with partner employers in Pune & Mumbai.' },
				{ icon: Users, title: 'Small batches, real faculty', text: `Max ${site.batchCapacity} students per batch, taught by working professionals — never recorded-only.` }
			] as item}
				<div use:reveal class="rounded-2xl border border-line bg-white p-6">
					<span class="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-leaf-dark" aria-hidden="true"><item.icon size={24} /></span>
					<h3 class="mt-4 font-display text-lg font-bold">{item.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
				</div>
			{/each}
		</div>
		<div class="mt-10 grid items-center gap-8 lg:grid-cols-2">
			<Picture name="classroom" alt="Students learning at computers in a bright EduLe classroom in Pune" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" imgClass="w-full rounded-2xl object-cover" />
			<div>
				<h3 class="font-display text-2xl font-extrabold sm:text-3xl">Classroom in Pune, live online across India</h3>
				<p class="mt-3 leading-relaxed text-muted">Morning, afternoon, evening and weekend batches. All live sessions are recorded, every batch has a weekly doubt-clearing slot, and you can repeat a missed module with the next batch free of charge.</p>
				<ul class="mt-5 space-y-2.5 text-sm font-semibold text-ink">
					<li class="flex items-center gap-2"><Clock size={17} class="text-leaf-dark" aria-hidden="true" /> Flexible batches — Mon–Sat, 9:00 am – 7:00 pm IST</li>
					<li class="flex items-center gap-2"><BookOpen size={17} class="text-leaf-dark" aria-hidden="true" /> Study material, practice sets &amp; recordings included</li>
					<li class="flex items-center gap-2"><Award size={17} class="text-leaf-dark" aria-hidden="true" /> Certificate + LinkedIn-ready credential on completion</li>
				</ul>
				<a href="/about" class="mt-6 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white transition-colors duration-200 hover:bg-leaf-dark">More About EduLe <ArrowRight size={17} class="inline" aria-hidden="true" /></a>
			</div>
		</div>
	</div>
</section>

<!-- INSTRUCTORS PREVIEW -->
<section class="mx-auto max-w-7xl px-4 py-14 sm:py-20">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">Meet your teachers</p>
			<h2 class="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">Learn from working professionals</h2>
		</div>
		<a href="/instructors" class="min-h-11 rounded-full border-2 border-leaf px-5 py-2.5 text-sm font-bold text-leaf-dark hover:bg-leaf hover:text-white">All Instructors</a>
	</div>
	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each instructors.slice(0, 4) as t}
			<article class="rounded-2xl border border-line bg-white p-5 text-center shadow-sm" use:reveal>
				<a href="/instructors/{t.slug}" aria-label="About {t.name}">
					{#if t.image}
						<Picture name={t.image} alt="Portrait of {t.name}" width={400} height={400} sizes="200px" imgClass="mx-auto h-28 w-28 rounded-full object-cover" />
					{:else}
						<span class="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-mint font-display text-3xl font-extrabold text-leaf-dark" aria-hidden="true">{t.name.charAt(0)}</span>
					{/if}
				</a>
				<h3 class="mt-4 font-display text-lg font-bold"><a href="/instructors/{t.slug}" class="hover:text-leaf-dark hover:underline">{t.name}</a></h3>
				<p class="text-sm font-semibold text-leaf-dark">{t.role}</p>
				<p class="mt-2 text-sm text-muted">{t.exp} experience · {t.students.toLocaleString('en-IN')}+ students</p>
			</article>
		{/each}
	</div>
</section>

<!-- TESTIMONIALS -->
<section class="bg-mint/60">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:py-20">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<h2 class="font-display text-3xl font-extrabold text-ink sm:text-4xl">What our students say</h2>
			<div class="flex gap-2">
				<button type="button" class="flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-line bg-white px-3 text-sm font-bold hover:bg-mint" aria-label={paused ? 'Resume testimonial auto-play' : 'Pause testimonial auto-play'} aria-pressed={paused} onclick={() => (paused = !paused)}>{#if paused}<Play size={18} aria-hidden="true" /> Resume{:else}<Pause size={18} aria-hidden="true" /> Pause{/if}</button>
				<button type="button" class="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white hover:bg-mint" aria-label="Previous testimonial" onclick={() => emblaApi?.scrollPrev()}><ChevronLeft size={20} aria-hidden="true" /></button>
				<button type="button" class="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white hover:bg-mint" aria-label="Next testimonial" onclick={() => emblaApi?.scrollNext()}><ChevronRight size={20} aria-hidden="true" /></button>
			</div>
		</div>
		<div class="mt-10 overflow-hidden" use:emblaCarouselSvelte={{ options: { loop: true }, plugins: [] }} onemblaInit={onEmblaInit} onmouseenter={() => (hoverPaused = true)} onmouseleave={() => (hoverPaused = false)} onfocusin={() => (hoverPaused = true)} onfocusout={() => (hoverPaused = false)}>
			<div class="flex">
				{#each testimonials as t}
					<figure class="mr-6 flex h-full min-w-0 flex-[0_0_100%] flex-col rounded-2xl border border-line bg-white p-6 shadow-sm md:flex-[0_0_50%]">
						<div class="flex gap-0.5" aria-label="Rated {t.rating} out of 5">
							{#each Array(t.rating) as _}<Star size={17} class="fill-gold text-gold" aria-hidden="true" />{/each}
						</div>
						<blockquote class="mt-3 leading-relaxed text-ink">“{t.text}”</blockquote>
						<figcaption class="mt-4 text-sm font-bold text-ink">{t.name} <span class="font-medium text-muted">— {t.course}</span></figcaption>
					</figure>
				{/each}
			</div>
		</div>
		<div class="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
			{#each testimonials as _, i}
				<button type="button" role="tab" aria-selected={selected === i} aria-label="Go to testimonial {i + 1}" class="flex min-h-11 min-w-11 items-center justify-center" onclick={() => emblaApi?.scrollTo(i)}><span class="block h-2.5 rounded-full transition-all duration-200 {selected === i ? 'w-8 bg-leaf' : 'w-2.5 bg-line'}" aria-hidden="true"></span></button>
			{/each}
		</div>
		<p class="mt-6 text-center"><a href="/alumni" class="font-bold text-leaf-dark hover:underline">Read full alumni success stories →</a> · <a href="/reviews" class="font-bold text-leaf-dark hover:underline">Read reviews & find us on Google →</a></p>
	</div>
</section>

<!-- CAMPUS & STUDENT WORK -->
<section class="mx-auto max-w-7xl px-4 pb-14 sm:pb-20">
	<div class="grid gap-6 md:grid-cols-2">
		<a href="/gallery" class="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm" use:reveal>
			<Picture name="classroom" alt="Students learning at computers in a bright EduLe classroom in Pune" width={1200} height={750} sizes="(max-width: 768px) 100vw, 50vw" imgClass="aspect-[8/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
			<span class="block p-6">
				<span class="font-display text-2xl font-extrabold text-ink group-hover:text-leaf-dark">See the campus</span>
				<span class="mt-2 block text-sm leading-relaxed text-muted">Classrooms, labs, workshops and graduation day — a look inside the Pune campus. →</span>
			</span>
		</a>
		<a href="/student-work" class="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm" use:reveal>
			<Picture name="course-web-dev" alt="Developer writing website code on a laptop" width={1200} height={750} sizes="(max-width: 768px) 100vw, 50vw" imgClass="aspect-[8/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
			<span class="block p-6">
				<span class="font-display text-2xl font-extrabold text-ink group-hover:text-leaf-dark">What students build</span>
				<span class="mt-2 block text-sm leading-relaxed text-muted">Real projects from real courses — websites, dashboards, audits and campaigns. →</span>
			</span>
		</a>
	</div>
</section>

<!-- FINDER CTA -->
<section class="mx-auto max-w-7xl px-4 py-14 sm:py-20">
	<div class="flex flex-col items-start gap-6 rounded-3xl bg-leaf-deep px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between" use:reveal>
		<div>
			<p class="flex items-center gap-2 text-sm font-bold tracking-wide text-mint-deep uppercase"><Compass size={16} aria-hidden="true" /> Not sure where to start?</p>
			<h2 class="mt-2 max-w-xl font-display text-3xl leading-tight font-extrabold sm:text-4xl">Find your course in 2 minutes</h2>
			<p class="mt-3 max-w-xl leading-relaxed text-white/85">Answer three quick questions about your goal and background — we will recommend the right course, batch and fee plan. No sign-up needed.</p>
		</div>
		<a href="/finder" class="min-h-12 shrink-0 rounded-full bg-white px-8 py-3.5 font-display text-base font-bold text-leaf-deep transition-colors duration-200 hover:bg-mint">Take the Course Finder</a>
	</div>
</section>

<!-- BECOME AN INSTRUCTOR -->
<section class="mx-auto max-w-7xl px-4 pb-14 sm:pb-20">
	<div class="flex flex-col items-start gap-6 rounded-3xl bg-mint px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between" use:reveal>
		<div>
			<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">Become an instructor</p>
			<h2 class="mt-2 max-w-xl font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">
				Join EduLe <span class="text-leaf-dark underline decoration-leaf decoration-4 underline-offset-8">as an instructor</span>
			</h2>
			<p class="mt-3 max-w-xl leading-relaxed text-muted">Working professionals who love teaching — share your craft with thousands of students, in classroom or live online, on your schedule.</p>
		</div>
		<a href="/contact" class="min-h-12 shrink-0 rounded-full bg-leaf px-8 py-3.5 font-display text-base font-bold text-white transition-colors duration-200 hover:bg-leaf-dark">Apply to Teach</a>
	</div>
</section>

<!-- BLOG PREVIEW -->
<section class="mx-auto max-w-7xl px-4 pb-14 sm:pb-20">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<h2 class="font-display text-3xl font-extrabold text-ink sm:text-4xl">From the blog</h2>
		<a href="/blog" class="min-h-11 rounded-full border-2 border-leaf px-5 py-2.5 text-sm font-bold text-leaf-dark hover:bg-leaf hover:text-white">All Articles</a>
	</div>
	<div class="mt-8 grid gap-6 md:grid-cols-3">
		{#each blogPosts.slice(0, 3) as post}
			<article class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm" use:reveal>
				<a href="/blog/{post.slug}" aria-label={post.title}>
					<Picture name={post.image} alt={post.title} width={800} height={500} sizes="(max-width: 768px) 100vw, 33vw" imgClass="aspect-[8/5] w-full object-cover" />
				</a>
				<div class="p-5">
					<p class="text-xs font-bold tracking-wide text-leaf-dark uppercase">{post.category} · {post.date}</p>
					<h3 class="mt-2 font-display text-lg leading-snug font-bold"><a href="/blog/{post.slug}" class="hover:text-leaf-dark hover:underline">{post.title}</a></h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
				</div>
			</article>
		{/each}
	</div>
</section>
