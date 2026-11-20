<script lang="ts">
	import { Calculator, Check } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { courses, inr } from '#lib/data/site.ts';

	let courseId = $state('data-science-python');
	let plan = $state<'full' | 'two' | 'emi'>('full');
	let months = $state(6);

	const course = $derived(courses.find((c) => c.id === courseId) ?? courses[0]);
	const fee = $derived(course.price);
	// Full payment gets an extra 5% off; instalments are interest-free.
	const fullPrice = $derived(Math.round(fee * 0.95));
	const instalment = $derived(Math.ceil(fee / 2));
	const instalment2 = $derived(fee - instalment);
	const emi = $derived(months > 0 ? Math.ceil(fee / months) : 0);
	const saving = $derived(fee - fullPrice);
</script>

<Seo
	title="EMI & Fee Calculator — EduLe"
	description="Work out your EduLe course fee before you enrol: pay in full and save 5% extra, split into 2 interest-free instalments, or take a no-cost EMI over 3–12 months."
	image="classroom"
/>

<PageHero eyebrow="EMI Calculator" title="Know your exact monthly cost" text="Pick a course and a payment plan. No hidden charges, no interest on instalments or EMI — the number you see is the number you pay." />

<div class="mx-auto max-w-5xl px-4 py-10 sm:py-14">
	<div class="grid gap-8 lg:grid-cols-5">
		<div class="rounded-2xl border border-line bg-white p-6 sm:p-8 lg:col-span-3">
			<label class="block text-sm font-bold" for="course">Choose a course</label>
			<select id="course" bind:value={courseId} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
				{#each courses as c}<option value={c.id}>{c.title} — {c.price === 0 ? 'Free' : inr(c.price)}</option>{/each}
			</select>

			<fieldset class="mt-8 min-w-0">
				<legend class="text-sm font-bold">Choose a payment plan</legend>
				<div class="mt-3 space-y-3">
					<label class="flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 {plan === 'full' ? 'border-leaf bg-mint' : 'border-line'}">
						<input type="radio" name="plan" value="full" bind:group={plan} class="mt-1 h-5 w-5 accent-[#16a34a]" />
						<span class="flex-1"><strong>Pay in full</strong><span class="block text-sm text-muted">Extra 5% off — the cheapest way to enrol.</span></span>
					</label>
					<label class="flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 {plan === 'two' ? 'border-leaf bg-mint' : 'border-line'}">
						<input type="radio" name="plan" value="two" bind:group={plan} class="mt-1 h-5 w-5 accent-[#16a34a]" />
						<span class="flex-1"><strong>2 instalments</strong><span class="block text-sm text-muted">Half at enrolment, half midway. No extra charge.</span></span>
					</label>
					<label class="flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 {plan === 'emi' ? 'border-leaf bg-mint' : 'border-line'}">
						<input type="radio" name="plan" value="emi" bind:group={plan} class="mt-1 h-5 w-5 accent-[#16a34a]" />
						<span class="flex-1"><strong>No-cost EMI</strong><span class="block text-sm text-muted">Split the fee over 3, 6, 9 or 12 months at 0% interest.</span></span>
					</label>
				</div>
			</fieldset>

			{#if plan === 'emi'}
				<div class="mt-6">
					<label class="flex justify-between text-sm font-bold" for="months"><span>EMI duration</span><span class="text-leaf-dark">{months} months</span></label>
					<input id="months" type="range" min="3" max="12" step="3" bind:value={months} class="mt-3 w-full accent-[#16a34a]" />
					<div class="mt-1 flex justify-between text-xs font-semibold text-muted"><span>3 mo</span><span>6 mo</span><span>9 mo</span><span>12 mo</span></div>
				</div>
			{/if}
		</div>

		<div class="rounded-2xl bg-leaf-deep p-6 text-white sm:p-8 lg:col-span-2" aria-live="polite">
			<p class="flex items-center gap-2 text-sm font-bold tracking-wide text-mint-deep uppercase"><Calculator size={16} aria-hidden="true" /> Your plan</p>
			<h2 class="mt-3 font-display text-xl font-extrabold">{course.title.split('—')[0].trim()}</h2>
			{#if fee === 0}
				<p class="mt-4 font-display text-4xl font-extrabold">Free</p>
				<p class="mt-2 text-sm leading-relaxed text-white/85">This course is free — no payment plan needed. Enrol and start learning.</p>
			{:else if plan === 'full'}
				<p class="mt-4 font-display text-4xl font-extrabold">{inr(fullPrice)}</p>
				<p class="mt-1 text-sm text-white/70 line-through">Full fee {inr(fee)}</p>
				<p class="mt-3 flex items-center gap-2 text-sm font-bold text-mint-deep"><Check size={17} aria-hidden="true" /> You save {inr(saving)} by paying in full</p>
				<p class="mt-2 text-sm leading-relaxed text-white/85">One payment at enrolment. UPI, cards, net banking and cash accepted.</p>
			{:else if plan === 'two'}
				<p class="mt-4 font-display text-4xl font-extrabold">{inr(instalment)}{#if instalment !== instalment2} <span class="text-lg font-bold text-white/70">+ {inr(instalment2)}</span>{:else} <span class="text-lg font-bold text-white/70">× 2</span>{/if}</p>
				<p class="mt-1 text-sm text-white/70">Total {inr(fee)} — no extra charge{#if instalment !== instalment2} (halves differ by ₹1){/if}</p>
				<p class="mt-3 text-sm leading-relaxed text-white/85">First instalment at enrolment, second midway through the batch.</p>
			{:else}
				<p class="mt-4 font-display text-4xl font-extrabold">{inr(emi)}<span class="text-lg font-bold text-white/70"> / month</span></p>
				<p class="mt-1 text-sm text-white/70">for {months} months · Total {inr(fee)} · 0% interest</p>
				<p class="mt-3 text-sm leading-relaxed text-white/85">No-cost EMI on cards and BNPL. Our team sets it up with you at enrolment.</p>
			{/if}
			<a href="/admissions?course={course.id}" class="mt-6 block min-h-12 rounded-full bg-white py-3 text-center font-display text-base font-bold text-leaf-deep">Enrol with This Plan</a>
			<a href="/fees" class="mt-3 block text-center text-sm font-semibold text-white/85 hover:text-white hover:underline">See all course fees</a>
		</div>
	</div>

	<div class="mt-8 rounded-2xl border border-line bg-white p-6">
		<h2 class="font-display text-xl font-extrabold">More ways to save</h2>
		<ul class="mt-4 grid gap-3 text-sm leading-relaxed text-muted sm:grid-cols-2">
			<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Early-bird 10% extra off</strong> — enrol 2 weeks before batch start.</span></li>
			<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Women in Tech 15% off</strong> Development and Data Science courses.</span></li>
			<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Merit scholarship up to ₹10,000</strong> for top entrance-test scorers.</span></li>
			<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Refer &amp; Earn ₹1,000</strong> for you and a friend who enrols.</span></li>
		</ul>
		<p class="mt-4"><a href="/scholarships" class="font-bold text-leaf-dark hover:underline">See all scholarships →</a></p>
	</div>
</div>
