<script lang="ts">
	import { ArrowRight, CheckCircle2 } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { browser } from '$app/env';
	import { batches, courses, inr } from '#lib/data/site.ts';

	let step = $state(1);
	let courseId = $state(courses[0].id);

	// Preselect a course from ?course=… — client-side only, so prerendering stays safe.
	$effect(() => {
		if (!browser) return;
		const c = new URLSearchParams(window.location.search).get('course');
		if (c && courses.some((x) => x.id === c)) courseId = c;
	});
	let batch = $state(batches[2].name);
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let done = $state(false);
	let ref = $state('');

	const course = $derived(courses.find((c) => c.id === courseId) ?? courses[0]);

	function next(e: SubmitEvent) {
		e.preventDefault();
		if (step < 3) step += 1;
	}
	function confirm(e: SubmitEvent) {
		e.preventDefault();
		ref = 'EDULE-' + new Date().getFullYear() + '-' + String(Math.floor(1000 + Math.random() * 9000));
		done = true;
	}
</script>

<Seo
	title="Admissions & Enrolment — EduLe"
	description="Enrol at EduLe in three steps: choose your course, pick a batch, confirm your details. Fees in ₹ with instalment options."
	image="classroom"
/>

<PageHero eyebrow="Admissions" title="Enrol in three simple steps" text="Choose a course, pick a batch that fits your day, and confirm your details. Our team calls you within one working day to complete enrolment." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<ol class="flex items-center justify-between gap-2 text-center text-xs font-bold sm:text-sm" aria-label="Enrolment progress">
		{#each ['1. Course', '2. Batch', '3. Your details'] as label, i}
			<li class="flex-1 rounded-full px-2 py-2.5 {step >= i + 1 || done ? 'bg-leaf text-white' : 'bg-mint text-leaf-dark'}">{label}</li>
		{/each}
	</ol>

	{#if done}
		<div class="mt-8 rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
			<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-4 font-display text-2xl font-extrabold">Enrolment request received!</h2>
			<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. Your reference number is <strong class="text-ink">{ref}</strong>. We will call {phone} within one working day to confirm your {course.title} seat in the {batch}.</p>
			<p class="mt-3 text-sm text-muted">Fee: {course.price === 0 ? 'Free' : inr(course.price)} (or 2 instalments). Please keep your reference number safe — this is a demo form, no payment was taken.</p>
			<a href="/courses" class="mt-6 inline-block min-h-12 rounded-full bg-leaf px-8 py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Browse More Courses</a>
		</div>
	{:else if step === 1}
		<form class="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={next}>
			<h2 class="font-display text-xl font-extrabold">Step 1 — Choose your course</h2>
			<label class="mt-5 block text-sm font-bold" for="course">Course</label>
			<select id="course" bind:value={courseId} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
				{#each courses as c}<option value={c.id}>{c.title} — {c.price === 0 ? 'Free' : inr(c.price)}</option>{/each}
			</select>
			<div class="mt-4 rounded-xl bg-mint p-4 text-sm leading-relaxed text-muted">
				<strong class="text-ink">{course.title}</strong><br />{course.short}<br />{course.weeks} weeks · {course.lectures} lectures · {course.mode} · Taught by {course.instructor}
			</div>
			<button type="submit" class="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Continue to Batch <ArrowRight size={18} aria-hidden="true" /></button>
		</form>
	{:else if step === 2}
		<form class="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={next}>
			<h2 class="font-display text-xl font-extrabold">Step 2 — Pick your batch</h2>
			<p class="mt-2 text-sm text-muted">Course: <strong class="text-ink">{course.title}</strong></p>
			<fieldset class="mt-5 min-w-0 space-y-3">
				<legend class="sr-only">Batch</legend>
				<label class="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 {batch === course.nextBatch.date ? 'border-leaf bg-mint' : 'border-line'}">
					<input type="radio" name="batch" value={course.nextBatch.date} bind:group={batch} class="h-5 w-5 accent-[#16a34a]" />
					<span class="flex-1"><strong>Next batch — {course.nextBatch.date}</strong><span class="block text-sm text-muted">{course.nextBatch.time} · {course.nextBatch.days} · {course.nextBatch.mode} · {course.nextBatch.seats} seats left</span></span>
				</label>
				{#each batches as b}
					<label class="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 {batch === b.name ? 'border-leaf bg-mint' : 'border-line'}">
						<input type="radio" name="batch" value={b.name} bind:group={batch} class="h-5 w-5 accent-[#16a34a]" />
						<span class="flex-1"><strong>{b.name}</strong><span class="block text-sm text-muted">{b.time} · {b.days} · {b.mode}</span></span>
					</label>
				{/each}
			</fieldset>
			<div class="mt-6 flex gap-3">
				<button type="button" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark" onclick={() => (step = 1)}>Back</button>
				<button type="submit" class="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Continue to Details <ArrowRight size={18} aria-hidden="true" /></button>
			</div>
		</form>
	{:else}
		<form class="mt-8 rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={confirm}>
			<h2 class="font-display text-xl font-extrabold">Step 3 — Your details</h2>
			<p class="mt-2 text-sm text-muted">{course.title} · {batch} · Fee: <strong class="text-ink">{course.price === 0 ? 'Free' : inr(course.price)}</strong></p>
			<div class="mt-5 space-y-4">
				<div>
					<label class="block text-sm font-bold" for="name">Full name</label>
					<input id="name" bind:value={name} required minlength="2" placeholder="e.g. Priya Sharma" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
				<div>
					<label class="block text-sm font-bold" for="phone">Mobile number</label>
					<input id="phone" type="tel" bind:value={phone} required pattern={'[0-9+ -]{10,15}'} placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
				<div>
					<label class="block text-sm font-bold" for="email">Email address</label>
					<input id="email" type="email" bind:value={email} required placeholder="you@example.com" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
			</div>
			<p class="mt-4 text-xs leading-relaxed text-muted">Demo form — your details are not sent anywhere. By submitting you agree to be contacted about this enrolment.</p>
			<div class="mt-6 flex gap-3">
				<button type="button" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark" onclick={() => (step = 2)}>Back</button>
				<button type="submit" class="min-h-12 flex-1 rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Confirm Enrolment Request</button>
			</div>
		</form>
	{/if}
</div>
