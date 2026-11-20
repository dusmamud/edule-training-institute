<script lang="ts">
	import { Check, GitCompareArrows, Star } from '@lucide/svelte';
	import { browser } from '$app/env';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { courses, inr } from '#lib/data/site.ts';
	import { clearCompare, compareStore, isComparing, toggleCompare, MAX_COMPARE } from '#lib/compare.svelte.ts';

	// Read ?ids=… on the client (prerender-safe) and seed the tray.
	$effect(() => {
		if (!browser) return;
		const ids = new URLSearchParams(window.location.search).get('ids');
		if (ids) {
			const valid = ids.split(',').map((x) => x.trim()).filter((x) => courses.some((c) => c.id === x)).slice(0, MAX_COMPARE);
			if (valid.length > 0 && compareStore.ids.length === 0) compareStore.ids.push(...valid);
		}
	});

	const selected = $derived(compareStore.ids.map((id) => courses.find((c) => c.id === id)).filter((c) => c !== undefined));

	const rows = [
		{ label: 'Full fee', get: (c: (typeof courses)[number]) => (c.price === 0 ? 'Free' : inr(c.price)) },
		{ label: 'Was', get: (c: (typeof courses)[number]) => (c.oldPrice ? inr(c.oldPrice) : '—') },
		{ label: 'EMI from', get: (c: (typeof courses)[number]) => (c.price === 0 ? '—' : `${inr(Math.ceil(c.price / 6))}/mo`) },
		{ label: 'Duration', get: (c: (typeof courses)[number]) => `${c.weeks} weeks · ${c.duration}` },
		{ label: 'Lectures', get: (c: (typeof courses)[number]) => String(c.lectures) },
		{ label: 'Level', get: (c: (typeof courses)[number]) => c.level },
		{ label: 'Mode', get: (c: (typeof courses)[number]) => c.mode },
		{ label: 'Rating', get: (c: (typeof courses)[number]) => `${c.rating.toFixed(1)} / 5` },
		{ label: 'Students', get: (c: (typeof courses)[number]) => c.students.toLocaleString('en-IN') },
		{ label: 'Next batch', get: (c: (typeof courses)[number]) => `${c.nextBatch.date} · ${c.nextBatch.seats} seats left` },
		{ label: 'Tools taught', get: (c: (typeof courses)[number]) => c.tools.join(', ') },
		{ label: 'Jobs it prepares you for', get: (c: (typeof courses)[number]) => c.jobs.join(', ') },
		{ label: 'Certificate', get: () => 'Included — verifiable' }
	];
</script>

<Seo
	title="Compare Courses — EduLe"
	description="Compare up to 3 EduLe courses side by side: fees, EMI, duration, mode, tools taught and jobs. Pick the course that fits your goal and budget."
	image="classroom"
/>

<PageHero eyebrow="Compare Courses" title="Side-by-side, no guesswork" text="Pick up to 3 courses and compare fees, duration, mode, tools and jobs — then enrol in the one that fits." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	{#if selected.length >= 2}
		<div class="overflow-x-auto rounded-2xl border border-line">
			<table class="w-full min-w-[720px] bg-white text-left text-sm">
				<thead>
					<tr class="bg-mint">
						<th scope="col" class="px-5 py-4 font-display">Course</th>
						{#each selected as c}
							<th scope="col" class="px-5 py-4">
								<a href="/courses/{c.id}" class="font-display text-base font-extrabold text-ink hover:text-leaf-dark hover:underline">{c.title}</a>
								<span class="mt-1 block text-xs font-semibold text-muted">{c.category} · {c.instructor}</span>
								<span class="mt-1 flex items-center gap-1 text-xs font-bold"><Star size={13} class="fill-gold text-gold" aria-hidden="true" />{c.rating.toFixed(1)} · {c.students.toLocaleString('en-IN')} students</span>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each rows as row, i}
						<tr class={i % 2 === 0 ? 'bg-white' : 'bg-mint/50'}>
							<th scope="row" class="px-5 py-4 font-bold whitespace-nowrap">{row.label}</th>
							{#each selected as c}
								<td class="px-5 py-4 align-top {row.label === 'Full fee' ? 'font-extrabold text-leaf-dark' : ''}">{row.get(c)}</td>
							{/each}
						</tr>
					{/each}
					<tr class="bg-white">
						<th scope="row" class="px-5 py-4"></th>
						{#each selected as c}
							<td class="px-5 py-4"><a href="/admissions?course={c.id}" class="inline-block min-h-11 rounded-full bg-leaf px-5 py-2.5 text-sm font-bold whitespace-nowrap text-white hover:bg-leaf-dark">Enrol Now</a></td>
						{/each}
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mt-6 flex flex-wrap gap-3">
			<button type="button" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark" onclick={clearCompare}>Clear Comparison</button>
			<a href="/courses" class="min-h-12 rounded-full bg-mint px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-mint-deep">Add More Courses</a>
		</div>
	{:else}
		<div class="rounded-2xl border border-line bg-white p-6 sm:p-8">
			<p class="flex items-center gap-2 font-display text-xl font-extrabold"><GitCompareArrows size={22} class="text-leaf-dark" aria-hidden="true" /> Pick at least 2 courses to compare</p>
			<p class="mt-2 text-sm text-muted">Tap “Compare” on any course card, or tick courses below (up to {MAX_COMPARE}).</p>
			<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each courses as c}
					<label class="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 {isComparing(c.id) ? 'border-leaf bg-mint' : 'border-line'}">
						<input type="checkbox" checked={isComparing(c.id)} onchange={() => toggleCompare(c.id)} class="h-5 w-5 accent-[#16a34a]" />
						<span class="flex-1"><strong class="text-sm">{c.title}</strong><span class="block text-xs text-muted">{c.category} · {c.price === 0 ? 'Free' : inr(c.price)}</span></span>
					</label>
				{/each}
			</div>
			{#if selected.length === 1}
				<p class="mt-6 flex items-center gap-2 text-sm font-bold text-leaf-dark"><Check size={17} aria-hidden="true" /> 1 course picked — pick one more to see the comparison.</p>
			{/if}
		</div>
	{/if}
</div>
