<script lang="ts">
	import { browser } from '$app/env';
	import { CheckCircle2 } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { inr, mentors } from '#lib/data/site.ts';

	let mentorSlug = $state(mentors[0].slug);
	let topic = $state(mentors[0].topics[0]);
	let dates = $state<string[]>([]);
	let date = $state('');
	let slot = $state('6:30 – 7:15 pm');
	let name = $state('');
	let phone = $state('');
	let done = $state(false);

	const slots = ['9:00 – 9:45 am', '2:00 – 2:45 pm', '6:30 – 7:15 pm'];
	const mentor = $derived(mentors.find((m) => m.slug === mentorSlug) ?? mentors[0]);

	$effect(() => {
		if (!browser) return;
		const out: string[] = [];
		const now = new Date();
		for (let i = 1; i <= 7; i++) {
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
	title="1:1 Mentorship — EduLe | Book a Mentor Session"
	description="Book a 45-minute 1:1 mentorship session with an EduLe faculty member — portfolio reviews, project debugging, career roadmaps and interview prep. ₹499 per session."
	image="classroom"
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: '1:1 Mentorship' }]} />

<PageHero eyebrow="1:1 Mentorship" title="Forty-five minutes with a mentor, just for you" text="Stuck on a project? Unsure about your portfolio? Book a 1:1 session with the faculty member who teaches your subject — in the classroom or live online." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	{#if done}
		<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
			<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-4 font-display text-2xl font-extrabold">Mentorship session booked!</h2>
			<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. Your 45-minute session with <strong class="text-ink">{mentor.name}</strong> ({topic}) is set for <strong class="text-ink">{date}, {slot}</strong>. We will confirm on WhatsApp at {phone}. Fee: {inr(mentor.price)} — pay at the session or at the campus.</p>
			<p class="mt-3 text-xs text-muted">Demo booking — nothing was sent anywhere.</p>
			<a href="/courses" class="mt-6 inline-block min-h-12 rounded-full bg-leaf px-8 py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Browse Courses</a>
		</div>
	{:else}
		<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={book}>
			<label class="block text-sm font-bold" for="mentor">Choose your mentor</label>
			<select id="mentor" bind:value={mentorSlug} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base" onchange={() => (topic = mentor.topics[0])}>
				{#each mentors as m}<option value={m.slug}>{m.name} — {m.focus}</option>{/each}
			</select>
			<p class="mt-2 text-sm text-muted">{mentor.focus} · {inr(mentor.price)} for 45 minutes.</p>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">What do you want to work on?</legend>
				<div class="mt-2 flex flex-wrap gap-2" role="group" aria-label="Mentorship topics">
					{#each mentor.topics as t}
						<button type="button" class="min-h-12 rounded-xl border px-4 py-2 text-sm font-bold {topic === t ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={topic === t} onclick={() => (topic = t)}>{t}</button>
					{/each}
				</div>
			</fieldset>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">Pick a date (next 7 days)</legend>
				{#if dates.length === 0}
					<p class="mt-2 text-sm text-muted">Loading dates…</p>
				{:else}
					<div class="mt-2 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Mentorship dates">
						{#each dates as d}
							<button type="button" class="min-h-12 shrink-0 rounded-xl border px-4 py-2 text-sm font-bold {date === d ? 'border-leaf bg-leaf text-white' : 'border-line bg-white hover:border-leaf'}" aria-pressed={date === d} onclick={() => (date = d)}>{d}</button>
						{/each}
					</div>
				{/if}
			</fieldset>

			<fieldset class="mt-6 min-w-0">
				<legend class="text-sm font-bold">Pick a time slot</legend>
				<div class="mt-2 flex flex-wrap gap-2" role="group" aria-label="Mentorship time slots">
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
					<input id="phone" type="tel" bind:value={phone} required pattern="[0-9+\- ]{10,15}" autocomplete="tel" placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
			</div>
			<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Book My Mentorship Session — {inr(mentor.price)}</button>
			<p class="mt-4 text-center text-xs leading-relaxed text-muted">Enrolled EduLe students get one 1:1 doubt-clearing slot free every week as part of their batch.</p>
		</form>
	{/if}
</div>
