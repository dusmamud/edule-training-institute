<script lang="ts">
	import { Briefcase, Check, CheckCircle2 } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import PartnerMarquee from '#lib/components/PartnerMarquee.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { partners, placements } from '#lib/data/site.ts';

	let company = $state('');
	let contact = $state('');
	let phone = $state('');
	let role = $state('');
	let done = $state(false);

	function enquire(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}
</script>

<Seo
	title="Hire from EduLe — For Employers"
	description="Hire job-ready graduates from EduLe: data analysts, developers, designers, accountants and marketers — pre-screened, project-tested and available in Pune, Mumbai and remotely."
	image="classroom"
/>

<PageHero eyebrow="For Employers" title="Hire graduates who can do the job" text="Our students finish with real projects, a verifiable certificate and interview practice. Tell us the role — we shortlist candidates who fit." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<section aria-labelledby="partners-heading">
		<p id="partners-heading" class="text-center text-xs font-bold tracking-widest text-muted uppercase">Employers who hire from EduLe</p>
		<PartnerMarquee />
	</section>

	<div class="mt-8 grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl border border-line bg-white p-6"><Briefcase size={26} class="text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">Pre-screened candidates</h2><p class="mt-2 text-sm leading-relaxed text-muted">Every candidate is assessed on projects, not just exams. You see their actual work before the first interview.</p></div>
		<div class="rounded-2xl border border-line bg-white p-6"><Check size={26} class="text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">Roles we place for</h2><p class="mt-2 text-sm leading-relaxed text-muted">Data Analyst, Frontend Developer, UI Designer, Accounts Executive, GST Assistant, Digital Marketing Executive, Cloud Support and more.</p></div>
		<div class="rounded-2xl border border-line bg-white p-6"><Check size={26} class="text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">No placement fee</h2><p class="mt-2 text-sm leading-relaxed text-muted">Hiring from EduLe is free for employers. We run drives monthly, on campus and online.</p></div>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Recent hiring highlights</h2>
	<div class="mt-6 overflow-x-auto rounded-2xl border border-line">
		<table class="w-full min-w-[560px] bg-white text-left text-sm">
			<thead><tr class="bg-leaf-deep text-white"><th scope="col" class="px-5 py-4 font-display">Employer (mock)</th><th scope="col" class="px-5 py-4 font-display">Typical role</th><th scope="col" class="px-5 py-4 font-display">EduLe graduates</th></tr></thead>
			<tbody>
				{#each placements as p, i}
					<tr class={i % 2 === 0 ? 'bg-white' : 'bg-mint/50'}>
						<th scope="row" class="px-5 py-4 font-bold">{p.company}</th>
						<td class="px-5 py-4">{p.role}</td>
						<td class="px-5 py-4 font-bold text-leaf-dark">{p.students}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="mt-3 text-sm text-muted">Employer names and counts are illustrative placeholders for design review. Partner list: {partners.join(', ')}.</p>

	<div class="mx-auto mt-12 max-w-3xl">
		{#if done}
			<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
				<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
				<h2 class="mt-4 font-display text-2xl font-extrabold">Hiring enquiry received!</h2>
				<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {contact}. Our placements team will call {phone} within one working day with shortlisted candidates for the <strong class="text-ink">{role}</strong> role at {company}.</p>
				<p class="mt-3 text-xs text-muted">Demo form — nothing was sent anywhere.</p>
			</div>
		{:else}
			<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={enquire}>
				<h2 class="font-display text-xl font-extrabold">Tell us who you need</h2>
				<div class="mt-5 grid gap-4 sm:grid-cols-2">
					<div>
						<label class="block text-sm font-bold" for="company">Company name</label>
						<input id="company" bind:value={company} required minlength="2" placeholder="e.g. TechServe Solutions" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="contact">Your name</label>
						<input id="contact" bind:value={contact} required minlength="2" placeholder="e.g. Neha Shah" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="phone">Mobile number</label>
						<input id="phone" type="tel" bind:value={phone} required pattern={'[0-9+ -]{10,15}'} placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="role">Role to fill</label>
						<input id="role" bind:value={role} required minlength="2" placeholder="e.g. Junior Data Analyst" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
				</div>
				<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Request Shortlisted Candidates</button>
			</form>
		{/if}
	</div>
</div>
