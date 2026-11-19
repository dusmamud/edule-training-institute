<script lang="ts">
	import { Search } from '@lucide/svelte';
	import CourseCard from '#lib/components/CourseCard.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { categories, courses } from '#lib/data/site.ts';

	let query = $state('');
	let cat = $state('All');
	let level = $state('All Levels');
	let price = $state('All');
	let sort = $state('popular');

	const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

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
			.filter((c) => query.trim() === '' || c.title.toLowerCase().includes(query.trim().toLowerCase()) || c.instructor.toLowerCase().includes(query.trim().toLowerCase()))
			.sort((a, b) => {
				if (sort === 'price-low') return a.price - b.price;
				if (sort === 'price-high') return b.price - a.price;
				if (sort === 'shortest') return a.weeks - b.weeks;
				return b.students - a.students;
			})
	);
</script>

<svelte:head>
	<title>All Courses — EduLe Computer Training Institute</title>
	<meta name="description" content="Browse all EduLe courses — development, data science, UI/UX design, business and finance. Filter by category, level and price. Fees in ₹, certificates included." />
</svelte:head>

<PageHero eyebrow="All Courses" title="Find the course that fits your goal" text="Every course includes live faculty, recordings, practice projects and a verifiable certificate. Filter by category, level or budget." />

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
</div>
