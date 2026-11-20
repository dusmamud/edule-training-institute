<script lang="ts">
	import { CheckCircle2, Gift, Share2, Users } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { site } from '#lib/data/site.ts';

	let name = $state('');
	let phone = $state('');
	let friend = $state('');
	let done = $state(false);

	function refer(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}

	const waText = $derived(
		encodeURIComponent(`Hi! I'm learning at EduLe Computer Training Institute in Pune. If you enrol through my referral, we BOTH get ₹1,000 off. Check out their courses: ${site.url}/courses`)
	);
</script>

<Seo
	title="Refer & Earn — EduLe"
	description="Refer a friend to EduLe and you both get ₹1,000 off your next course. No limit on referrals — share your link on WhatsApp and earn every time a friend enrols."
	image="classroom"
/>

<PageHero eyebrow="Refer & Earn" title="Bring a friend. Both save ₹1,000." text="Learning is better together. Refer a friend to any EduLe course — when they enrol, you both get ₹1,000 off your next course." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl bg-mint p-6 text-center"><Share2 size={26} class="mx-auto text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">1. Share your link</h2><p class="mt-2 text-sm leading-relaxed text-muted">Send your friend the EduLe courses page on WhatsApp — or fill the form below and we will invite them.</p></div>
		<div class="rounded-2xl bg-mint p-6 text-center"><Users size={26} class="mx-auto text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">2. Friend enrols</h2><p class="mt-2 text-sm leading-relaxed text-muted">Your friend mentions your name at enrolment. Any course, any batch.</p></div>
		<div class="rounded-2xl bg-mint p-6 text-center"><Gift size={26} class="mx-auto text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">3. Both save ₹1,000</h2><p class="mt-2 text-sm leading-relaxed text-muted">₹1,000 off your next course, and ₹1,000 off theirs. No limit — refer as many friends as you like.</p></div>
	</div>

	<div class="mx-auto mt-12 max-w-3xl">
		{#if done}
			<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
				<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
				<h2 class="mt-4 font-display text-2xl font-extrabold">Referral sent!</h2>
				<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. We will invite <strong class="text-ink">{friend}</strong> and link the referral to your number {phone}. When they enrol, you both save ₹1,000.</p>
				<p class="mt-3 text-xs text-muted">Demo form — nothing was sent anywhere.</p>
			</div>
		{:else}
			<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={refer}>
				<h2 class="font-display text-xl font-extrabold">Refer a friend</h2>
				<div class="mt-5 grid gap-4 sm:grid-cols-2">
					<div>
						<label class="block text-sm font-bold" for="name">Your name</label>
						<input id="name" bind:value={name} required minlength="2" autocomplete="name" placeholder="e.g. Priya Sharma" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="phone">Your mobile number</label>
						<input id="phone" type="tel" bind:value={phone} required pattern={'[0-9+ -]{10,15}'} autocomplete="tel" placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
				</div>
				<div class="mt-4">
					<label class="block text-sm font-bold" for="friend">Friend’s name</label>
					<input id="friend" bind:value={friend} required minlength="2" placeholder="e.g. Rahul Verma" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
				<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Send Referral</button>
				<p class="mt-4 text-center text-sm text-muted">Or share directly:</p>
				<p class="text-center"><a href="https://wa.me/?text={waText}" target="_blank" rel="noopener" class="inline-block min-h-12 rounded-full bg-[#25d366] px-7 py-3 font-display text-base font-bold text-white">Share on WhatsApp</a></p>
			</form>
		{/if}
	</div>
</div>
