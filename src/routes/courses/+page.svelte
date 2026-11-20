<script lang="ts">
	import { Search } from '@lucide/svelte';
	import { browser } from '$app/env';
	import CourseCard from '#lib/components/CourseCard.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { categories, courses, site } from '#lib/data/site.ts';

	let query = $state('');
	let cat = $state('All');
	let level = $state('All Levels');
	let price = $state('All');
	let mode = $state('All Modes');
	let duration = $state('All Durations');
	let sort = $state('popular');

	const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
	const modes = ['All Modes', 'Classroom', 'Live Online', 'Self-paced'];
	const durations = ['All Durations', 'Under 8 weeks', '8–12 weeks', 'Above 12 weeks'];

	// Filter state lives in the URL (?q=&cat=&level=&price=&mode=&duration=&sort=)
	// so filtered views can be shared, bookmarked and indexed.
	$effect(() => {
		if (!browser) return;
		const p = new URLSearchParams(window.location.search);
		const q = p.get('q');
		if (q) query = q;
		const c = p.get('cat');
		if (c && categories.includes(c)) cat = c;
		const l = p.get('level');
		if (l && levels.includes(l)) level = l;
		const pr = p.get('price');
		if (pr) price = pr;
		const m = p.get('mode');
		if (m && modes.includes(m)) mode = m;
		const d = p.get('duration');
		if (d && durations.includes(d)) duration = d;
		const s = p.get('sort');
		if (s) sort = s;
	});

	$effect(() => {
		if (!browser) return;
		const p = new URLSearchParams();
		if (query.trim()) p.set('q', query.trim());
		if (cat !== 'All') p.set('cat', cat);
		if (level !== 'All Levels') p.set('level', level);
		if (price !== 'All') p.set('price', price);
		if (mode !== 'All Modes') p.set('mode', mode);
		if (duration !== 'All Durations') p.set('duration', duration);
		if (sort !== 'popular') p.set('sort', sort);
		const qs = p.toString();
		window.history.replaceState(null, '', qs ? `/courses?${qs}` : '/courses');
	});

	const filtered = $derived(
		courses
			.filter((c) => (cat === 'All' || c.category === cat) && (level === 'All Levels' || c.level === level))
			.filter((c) => {
				if (price === 'Free') return c.price === 0;
				if (price === 'Under ₹10,000') return c.price > 0 && c.price < 10000;
				if (price === '₹10,000 – ₹25,000') return c.price >= 10000 && c.price <= 25000;
				if (price === 'Above ₹25,000') return c.price > 25000;
				return true;
			})
			.filter((c) => {
				if (mode === 'Classroom') return c.mode.includes('Classroom');
				if (mode === 'Live Online') return c.mode.includes('Live Online');
				if (mode === 'Self-paced') return c.mode.includes('Self-paced');
				return true;
			})
			.filter((c) => {
				if (duration === 'Under 8 weeks') return c.weeks < 8;
				if (duration === '8–12 weeks') return c.weeks >= 8 && c.weeks <= 12;
				if (duration === 'Above 12 weeks') return c.weeks > 12;
				return true;
			})
			.filter((c) => query.trim() === '' || c.title.toLowerCase().includes(query.trim().toLowerCase()) || c.instructor.toLowerCase().includes(query.trim().toLowerCase()))
			.sort((a, b) => {
				if (sort === 'price-low') return a.price - b.price;
				if (sort === 'price-high') return b.price - a.price;
				if (sort === 'shortest') return a.weeks - b.weeks;
				return b.students - a.students;
			})
	);

	// Course List rich result (the one course carousel Google still shows):
	// summary page, ≥3 courses, each with name + description, in an ItemList.
	const itemListJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: courses.map((c, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: { '@type': 'Course', name: c.title, description: c.short, url: `${site.url}/courses/${c.id}` }
		}))
	};
</script>

<Seo
	title="All Courses — EduLe Computer Training Institute"
	description="Browse all EduLe courses — development, data science, UI/UX design, business and finance. Filter by category, level and price. Fees in ₹, certificates included."
	image="classroom"
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(itemListJsonLd)}</script>`}
</svelte:head>

<PageHero eyebrow="All Courses" title="Find the course that fits your goal" text="Every course includes live faculty, recordings, practice projects and a verifiable certificate. Filter by category, level, mode or budget — and compare up to 3 courses side by side." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="flex flex-col gap-3 rounded-2xl border border-line bg-mint p-4 sm:p-5 lg:flex-row lg:items-center">
		<label class="flex flex-1 items-center gap-2 rounded-full border border-line bg-white px-4 py-1">
			<Search size={18} class="shrink-0 text-muted" aria-hidden="true" />
			<span class="sr-only">Search courses</span>
			<input type="search" bind:value={query} placeholder="Search courses or instructors" class="min-h-11 w-full bg-transparent text-base outline-none placeholder:text-muted" />
		</label>
		<div class="flex flex-wrap gap-2">
			<label class="sr-only" for="cat">Category</label>
			<select id="cat" bind:value={cat} class="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold">
				{#each categories as c}<option value={c}>{c === 'All' ? 'All Categories' : c}</option>{/each}
			</select>
			<label class="sr-only" for="level">Level</label>
			<select id="level" bind:value={level} class="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold">
				{#each levels as l}<option value={l}>{l}</option>{/each}
			</select>
			<label class="sr-only" for="mode">Mode</label>
			<select id="mode" bind:value={mode} class="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold">
				{#each modes as m}<option value={m}>{m}</option>{/each}
			</select>
			<label class="sr-only" for="duration">Duration</label>
			<select id="duration" bind:value={duration} class="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold">
				{#each durations as d}<option value={d}>{d}</option>{/each}
			</select>
			<label class="sr-only" for="price">Price</label>
			<select id="price" bind:value={price} class="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold">
				<option value="All">Any Price</option>
				<option value="Free">Free</option>
				<option value="Under ₹10,000">Under ₹10,000</option>
				<option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
				<option value="Above ₹25,000">Above ₹25,000</option>
			</select>
			<label class="sr-only" for="sort">Sort by</label>
			<select id="sort" bind:value={sort} class="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold">
				<option value="popular">Most Popular</option>
				<option value="price-low">Price: Low to High</option>
				<option value="price-high">Price: High to Low</option>
				<option value="shortest">Shortest First</option>
			</select>
		</div>
	</div>

	<p class="mt-6 text-sm font-semibold text-muted" role="status">{filtered.length} course{filtered.length === 1 ? '' : 's'} found</p>

	{#if filtered.length > 0}
		<div class="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as course (course.id)}
				<CourseCard {course} />
			{/each}
		</div>
	{:else}
		<p class="mt-6 rounded-2xl border border-line bg-mint px-6 py-10 text-center text-lg font-semibold text-muted">No courses match your filters. Try clearing the search or choosing a different category.</p>
	{/if}

	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		<div class="rounded-2xl bg-mint p-6">
			<h2 class="font-display text-xl font-extrabold">Compare before you choose</h2>
			<p class="mt-2 text-sm leading-relaxed text-muted">Tap “Compare” on any course card, pick up to 3, and see fees, duration, mode, tools and jobs side by side.</p>
			<a href="/compare" class="mt-4 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Compare Courses</a>
		</div>
		<div class="rounded-2xl bg-leaf-deep p-6 text-white">
			<h2 class="font-display text-xl font-extrabold">Not sure which course fits?</h2>
			<p class="mt-2 text-sm leading-relaxed text-white/85">Take the 2-minute Course Finder — or book a free demo class and try a real lesson first.</p>
			<a href="/finder" class="mt-4 mr-3 inline-block min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Course Finder</a>
			<a href="/demo" class="mt-3 inline-block min-h-12 rounded-full border-2 border-white px-7 py-3 font-display text-base font-bold text-white sm:mt-0">Free Demo Class</a>
		</div>
	</div>
</div>
