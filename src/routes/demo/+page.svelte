<script lang="ts">
	import { CalendarClock, CheckCircle2, Video } from '@lucide/svelte';
	import { browser } from '$app/env';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { courses, site } from '#lib/data/site.ts';

	let courseId = $state(courses[0].id);
	let dates = $state<string[]>([]);
	let date = $state('');
	let slot = $state('11:00 am – 12:00 pm');
	let name = $state('');
	let phone = $state('');
	let done = $state(false);

	const slots = ['9:00 – 10:00 am', '11:00 am – 12:00 pm', '2:00 – 3:00 pm', '6:30 – 7:30 pm'];
	const course = $derived(courses.find((c) => c.id === courseId) ?? courses[0]);

	// Next 14 days, generated client-side so dates never go stale.
	$effect(() => {
		if (!browser) return;
		const c = new URLSearchParams(window.location.search).get('course');
		if (c && courses.some((x) => x.id === c)) courseId = c;
		const out: string[] = [];
		const now = new Date();
		for (let i = 1; i <= 14; i++) {
			const d = new Date(now);
			d.setDate(now.getDate() + i);
			out.push(d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }));
		}
		dates = out;
		date = out[0];
	});

	function book(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}

	const waText = $derived(
		encodeURIComponent(`Hi EduLe! I booked a free demo for ${course.title} on ${date} at ${slot}. My name is ${name}.`)
	);
</script>

<Seo
	title="Book a Free Demo Class — EduLe"
	description="Try a real EduLe lesson free for 60 minutes — in our Pune classroom or live online. Pick your course, date and slot; we confirm on WhatsApp within a few hours."
	image="classroom"
/>

<PageHero eyebrow="Free Demo Class" title="Try a real lesson — free" text="Sixty minutes with a real faculty member, on the real course material. No fee, no obligation, and no sales pressure afterwards." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 sm:grid-cols-3">
		<div class="rounded-2xl bg-mint p-5 text-center"><CalendarClock size={24} class="mx-auto text-leaf-dark" aria-hidden="true" /><p class="mt-2 text-sm font-bold">Pick a date &amp; slot</p><p class="mt-1 text-xs text-muted">Next 14 days, 4 slots daily</p></div>
		<div class="rounded-2xl bg-mint p-5 text-center"><Video size={24} class="mx-auto text-leaf-dark" aria-hidden="true" /><p class="mt-2 text-sm font-bold">Join live or in class</p><p class="mt-1 text-xs text-muted">Pune classroom or live online</p></div>
		<div class="rounded-2xl bg-mint p-5 text-center"><CheckCircle2 size={24} class="mx-auto text-leaf-dark" aria-hidden="true" /><p class="mt-2 text-sm font-bold">We confirm on WhatsApp</p><p class="mt-1 text-xs text-muted">Within a few working hours</p></div>
	</div>

	{#if done}
		<div class="mt-8 rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
			<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-4 font-display text-2xl font-extrabold">Demo class booked!</h2>
			<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. Your free demo for <strong class="text-ink">{course.title}</strong> is set for <strong class="text-ink">{date}, {slot}</strong>. We will confirm on WhatsApp at {phone}.</p>
			<a href="https://wa.me/919702621413?text={waText}" target="_blank" rel="noopener" class="mt-6 inline-block min-h-12 rounded-full bg-[#25d366] px-8 py-3.5 font-display text-base font-bold text-white">Confirm on WhatsApp</a>
			<p class="mt-4"><a href="/courses" class="font-bold text-leaf-dark hover:underline">Browse more courses →</a></p>
			<p class="mt-3 text-xs text-muted">Demo booking — nothing was sent anywhere; this is a design demo.</p>
		</div>
	{:else}
		<form class="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={book}>
			<label class="block text-sm font-bold" for="course">Course for the demo</label>
			<select id="course" bind:value={courseId} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
				{#each courses as c}<option value={c.id}>{c.title}</option>{/each}
			</select>
			<p class="mt-2 text-sm text-muted">{course.short}</p>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">Pick a date</legend>
				{#if dates.length === 0}
					<p class="mt-2 text-sm text-muted">Loading dates…</p>
				{:else}
					<div class="mt-2 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Demo dates">
						{#each dates as d}
							<button type="button" class="min-h-12 shrink-0 rounded-xl border px-4 py-2 text-sm font-bold {date === d ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={date === d} onclick={() => (date = d)}>{d}</button>
						{/each}
					</div>
				{/if}
			</fieldset>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">Pick a time slot</legend>
				<div class="mt-2 flex flex-wrap gap-2" role="group" aria-label="Demo time slots">
					{#each slots as s}
						<button type="button" class="min-h-12 rounded-xl border px-4 py-2 text-sm font-bold {slot === s ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={slot === s} onclick={() => (slot = s)}>{s}</button>
					{/each}
				</div>
			</fieldset>

			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				<div>
					<label class="block text-sm font-bold" for="name">Full name</label>
					<input id="name" bind:value={name} required minlength="2" autocomplete="name" placeholder="e.g. Priya Sharma" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
				<div>
					<label class="block text-sm font-bold" for="phone">WhatsApp number</label>
					<input id="phone" type="tel" bind:value={phone} required pattern={'[0-9+\\- ]{10,15}'} autocomplete="tel" placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
			</div>
			<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Book My Free Demo</button>
			<p class="mt-4 text-center text-xs leading-relaxed text-muted">Free demo — no payment, no obligation. Prefer to talk first? Call <a href={site.phoneHref} class="font-bold text-leaf-dark">{site.phoneDisplay}</a>.</p>
		</form>
	{/if}
</div>
