<script lang="ts">
	import { browser } from '$app/env';
	import { CheckCircle2 } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { courses, site } from '#lib/data/site.ts';

	let courseId = $state('any');
	let dates = $state<string[]>([]);
	let date = $state('');
	let slot = $state('11:00 am – 12:00 pm');
	let mode = $state('In person — Pune campus');
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let done = $state(false);

	const slots = ['9:00 – 10:00 am', '11:00 am – 12:00 pm', '2:00 – 3:00 pm', '6:30 – 7:30 pm'];

	$effect(() => {
		if (!browser) return;
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
</script>

<Seo
	title="Free Counselling — EduLe | Book a Free Counselling Session"
	description="Not sure which course fits your goal and budget? Book a free 30-minute counselling session with an EduLe counsellor — pick your date and slot, in person or online."
	image="classroom"
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free Counselling' }]} />

<PageHero eyebrow="Free Counselling" title="Talk it through before you pay anything" text="Thirty minutes with a counsellor who knows every course, fee and batch — your goal, your background, your budget. No fee, no obligation, no sales pressure." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	{#if done}
		<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
			<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-4 font-display text-2xl font-extrabold">Counselling session booked!</h2>
			<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. Your free counselling session is set for <strong class="text-ink">{date}, {slot}</strong> ({mode}). We will confirm on WhatsApp at {phone}.</p>
			<p class="mt-3 text-xs text-muted">Demo booking — nothing was sent anywhere.</p>
			<a href="/courses" class="mt-6 inline-block min-h-12 rounded-full bg-leaf px-8 py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Browse Courses Meanwhile</a>
		</div>
	{:else}
		<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={book}>
			<label class="block text-sm font-bold" for="course">Which course are you considering? (optional)</label>
			<select id="course" bind:value={courseId} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
				<option value="any">Not sure yet — help me choose</option>
				{#each courses as c}<option value={c.id}>{c.title}</option>{/each}
			</select>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">Pick a date (next 14 days)</legend>
				{#if dates.length === 0}
					<p class="mt-2 text-sm text-muted">Loading dates…</p>
				{:else}
					<div class="mt-2 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Counselling dates">
						{#each dates as d}
							<button type="button" class="min-h-12 shrink-0 rounded-xl border px-4 py-2 text-sm font-bold {date === d ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={date === d} onclick={() => (date = d)}>{d}</button>
						{/each}
					</div>
				{/if}
			</fieldset>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">Pick a time slot</legend>
				<div class="mt-2 flex flex-wrap gap-2" role="group" aria-label="Counselling time slots">
					{#each slots as s}
						<button type="button" class="min-h-12 rounded-xl border px-4 py-2 text-sm font-bold {slot === s ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={slot === s} onclick={() => (slot = s)}>{s}</button>
					{/each}
				</div>
			</fieldset>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">How would you like to meet?</legend>
				<div class="mt-2 flex flex-wrap gap-2" role="group" aria-label="Counselling mode">
					{#each ['In person — Pune campus', 'Live online — video call', 'Phone call'] as m}
						<button type="button" class="min-h-12 rounded-xl border px-4 py-2 text-sm font-bold {mode === m ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={mode === m} onclick={() => (mode = m)}>{m}</button>
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
					<input id="phone" type="tel" bind:value={phone} required pattern="[0-9+\- ]{10,15}" autocomplete="tel" placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
			</div>
			<div class="mt-4">
				<label class="block text-sm font-bold" for="email">Email address</label>
				<input id="email" type="email" bind:value={email} required autocomplete="email" placeholder="you@example.com" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
			</div>
			<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Book My Free Counselling Session</button>
			<p class="mt-4 text-center text-xs leading-relaxed text-muted">Prefer to talk now? Call <a href={site.phoneHref} class="font-bold text-leaf-dark">{site.phoneDisplay}</a> — Mon–Sat, 9:00 am – 7:00 pm IST.</p>
		</form>
	{/if}
</div>
