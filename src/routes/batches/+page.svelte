<script lang="ts">
	import { CalendarClock } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { batches, courses } from '#lib/data/site.ts';

	const sorted = [...courses].sort((a, b) => new Date(a.nextBatch.date).getTime() - new Date(b.nextBatch.date).getTime());
</script>

<Seo
	title="Batch Timetable — EduLe"
	description="Upcoming batch dates for every EduLe course — morning, afternoon, evening and weekend batches in Pune and live online. See seats left and enrol in the batch that fits your day."
	image="classroom"
/>

<PageHero eyebrow="Batch Timetable" title="Upcoming batches" text="Every course starts a fresh batch every few weeks. Pick the date and timing that fits your day — seats are capped at 25 per batch." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Next batch for every course</h2>
	<div class="mt-6 overflow-x-auto rounded-2xl border border-line">
		<table class="w-full min-w-[760px] bg-white text-left text-sm">
			<thead>
				<tr class="bg-leaf-deep text-white">
					<th scope="col" class="px-5 py-4 font-display">Course</th>
					<th scope="col" class="px-5 py-4 font-display">Starts</th>
					<th scope="col" class="px-5 py-4 font-display">Days &amp; Time</th>
					<th scope="col" class="px-5 py-4 font-display">Mode</th>
					<th scope="col" class="px-5 py-4 font-display">Seats Left</th>
					<th scope="col" class="px-5 py-4 font-display">Enrol</th>
				</tr>
			</thead>
			<tbody>
				{#each sorted as c, i}
					<tr class={i % 2 === 0 ? 'bg-white' : 'bg-mint/50'}>
						<th scope="row" class="px-5 py-4 font-bold"><a href="/courses/{c.id}" class="hover:text-leaf-dark hover:underline">{c.title}</a></th>
						<td class="px-5 py-4 font-bold text-leaf-dark">{c.nextBatch.date}</td>
						<td class="px-5 py-4">{c.nextBatch.days} · {c.nextBatch.time}</td>
						<td class="px-5 py-4">{c.nextBatch.mode}</td>
						<td class="px-5 py-4"><span class="font-bold {c.nextBatch.seats <= 4 ? 'text-red-700' : 'text-ink'}">{c.nextBatch.seats} left</span></td>
						<td class="px-5 py-4"><a href="/admissions?course={c.id}" class="inline-block min-h-11 rounded-full bg-leaf px-4 py-2.5 text-xs font-bold whitespace-nowrap text-white hover:bg-leaf-dark">Enrol</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Regular batch timings</h2>
	<p class="mt-2 text-sm text-muted">These four timings run every week at the Pune campus and online. Your course page shows the exact next start date.</p>
	<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each batches as b}
			<div class="rounded-2xl border border-line bg-white p-6">
				<CalendarClock size={24} class="text-leaf-dark" aria-hidden="true" />
				<h3 class="mt-3 font-display text-lg font-bold">{b.name}</h3>
				<p class="mt-2 text-sm text-muted">{b.time}</p>
				<p class="text-sm text-muted">{b.days}</p>
				<p class="mt-2 text-sm font-bold text-ink">{b.mode}</p>
			</div>
		{/each}
	</div>

	<div class="mt-10 rounded-3xl bg-leaf-deep p-6 text-white sm:p-8">
		<h2 class="font-display text-2xl font-extrabold">Missed a class? No problem.</h2>
		<p class="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">All live sessions are recorded and shared the same day, and you can repeat any missed module with the next batch free of charge.</p>
		<a href="/demo" class="mt-5 inline-block min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Try a Free Demo First</a>
	</div>
</div>
