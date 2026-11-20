<script lang="ts">
	import { Award, CheckCircle2 } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { scholarships } from '#lib/data/site.ts';

	let name = $state('');
	let phone = $state('');
	let scholarship = $state(scholarships[0].name);
	let done = $state(false);

	function apply(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}
</script>

<Seo
	title="Scholarships — EduLe"
	description="EduLe scholarships: merit scholarship up to ₹10,000, 15% Women in Tech discount, 10% early-bird discount and Refer & Earn. Check eligibility and apply in a minute."
	image="classroom"
/>

<PageHero eyebrow="Scholarships" title="Good students should not miss out on fees" text="Four ways to pay less — merit, women in tech, early bird and referrals. Most are applied automatically at enrolment." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-2">
		{#each scholarships as s}
			<article class="rounded-2xl border border-line bg-white p-6">
				<Award size={26} class="text-leaf-dark" aria-hidden="true" />
				<h2 class="mt-3 font-display text-xl font-extrabold">{s.name}</h2>
				<p class="mt-1 font-display text-2xl font-extrabold text-leaf-dark">{s.amount}</p>
				<p class="mt-2 leading-relaxed text-muted">{s.desc}</p>
				<p class="mt-3 text-sm"><strong>Eligibility:</strong> {s.eligibility}</p>
			</article>
		{/each}
	</div>

	<div class="mx-auto mt-12 max-w-3xl">
		{#if done}
			<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
				<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
				<h2 class="mt-4 font-display text-2xl font-extrabold">Scholarship application received!</h2>
				<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. We will call {phone} within one working day about the <strong class="text-ink">{scholarship}</strong> and your entrance-test slot.</p>
				<p class="mt-3 text-xs text-muted">Demo form — nothing was sent anywhere.</p>
			</div>
		{:else}
			<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={apply}>
				<h2 class="font-display text-xl font-extrabold">Apply for a scholarship</h2>
				<p class="mt-2 text-sm text-muted">One minute. We confirm eligibility on a call and book your free entrance test if needed.</p>
				<label class="mt-5 block text-sm font-bold" for="scholarship">Scholarship</label>
				<select id="scholarship" bind:value={scholarship} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
					{#each scholarships as s}<option value={s.name}>{s.name} — {s.amount}</option>{/each}
				</select>
				<div class="mt-4 grid gap-4 sm:grid-cols-2">
					<div>
						<label class="block text-sm font-bold" for="name">Full name</label>
						<input id="name" bind:value={name} required minlength="2" autocomplete="name" placeholder="e.g. Priya Sharma" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="phone">Mobile number</label>
						<input id="phone" type="tel" bind:value={phone} required pattern="[0-9+\- ]{10,15}" autocomplete="tel" placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
				</div>
				<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Apply for Scholarship</button>
			</form>
		{/if}
	</div>
</div>
