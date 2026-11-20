<script lang="ts">
	import { Building2, Check, CheckCircle2 } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { courses } from '#lib/data/site.ts';

	let company = $state('');
	let contact = $state('');
	let phone = $state('');
	let team = $state('5–10 people');
	let done = $state(false);

	function enquire(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}
</script>

<Seo
	title="Corporate Training — EduLe"
	description="Upskill your team with EduLe corporate training: Excel, Tally + GST, data analysis, AI tools, web development and design — custom batches at your office or our Pune campus."
	image="corporate-training"
/>

<PageHero eyebrow="For Companies" title="Upskill your whole team" text="Practical, job-focused training for teams of 5 to 500 — at your office, our Pune campus, or live online. Custom curriculum, flexible timings, one point of contact." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl border border-line bg-white p-6"><Building2 size={26} class="text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">Custom curriculum</h2><p class="mt-2 text-sm leading-relaxed text-muted">We build the syllabus around your team’s actual work — your spreadsheets, your tools, your processes.</p></div>
		<div class="rounded-2xl border border-line bg-white p-6"><Check size={26} class="text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">Flexible delivery</h2><p class="mt-2 text-sm leading-relaxed text-muted">Weekday, weekend or evening batches; on-site, on campus or live online — whatever fits your team’s calendar.</p></div>
		<div class="rounded-2xl border border-line bg-white p-6"><Check size={26} class="text-leaf-dark" aria-hidden="true" /><h2 class="mt-3 font-display text-lg font-bold">Measured outcomes</h2><p class="mt-2 text-sm leading-relaxed text-muted">Pre- and post-training assessments, attendance reports and verifiable certificates for every participant.</p></div>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Popular team programmes</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each courses.slice(0, 6) as c}
			<a href="/courses/{c.id}" class="block rounded-2xl border border-line bg-white p-5 hover:border-leaf">
				<p class="font-display text-base font-bold">{c.title}</p>
				<p class="mt-1 text-sm text-muted">{c.weeks} weeks · {c.mode}</p>
			</a>
		{/each}
	</div>

	<div class="mx-auto mt-12 max-w-3xl">
		{#if done}
			<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
				<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
				<h2 class="mt-4 font-display text-2xl font-extrabold">Enquiry received!</h2>
				<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {contact}. Our corporate team will call {phone} within one working day with a training plan and quote for {company}.</p>
				<p class="mt-3 text-xs text-muted">Demo form — nothing was sent anywhere.</p>
			</div>
		{:else}
			<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={enquire}>
				<h2 class="font-display text-xl font-extrabold">Request a training plan &amp; quote</h2>
				<div class="mt-5 grid gap-4 sm:grid-cols-2">
					<div>
						<label class="block text-sm font-bold" for="company">Company name</label>
						<input id="company" bind:value={company} required minlength="2" placeholder="e.g. BrightAccounts LLP" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="contact">Your name</label>
						<input id="contact" bind:value={contact} required minlength="2" placeholder="e.g. Neha Shah" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="phone">Mobile number</label>
						<input id="phone" type="tel" bind:value={phone} required pattern="[0-9+\- ]{10,15}" placeholder="e.g. 98765 43210" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="team">Team size</label>
						<select id="team" bind:value={team} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
							<option>5–10 people</option>
							<option>11–25 people</option>
							<option>26–50 people</option>
							<option>50+ people</option>
						</select>
					</div>
				</div>
				<button type="submit" class="mt-6 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Request Plan &amp; Quote</button>
			</form>
		{/if}
	</div>

	<div class="mt-10 grid items-center gap-8 lg:grid-cols-2">
		<Picture name="corporate-training" alt="Corporate training session with a trainer guiding professionals around laptops" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" imgClass="w-full rounded-2xl object-cover" />
		<div>
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Training that respects work hours</h2>
			<p class="mt-3 leading-relaxed text-muted">Sessions run in 2-hour blocks that fit around your team’s day, with recordings for anyone who misses a session. Every participant leaves with a verifiable certificate and a project built on your real data.</p>
			<p class="mt-4"><a href="/employers" class="font-bold text-leaf-dark hover:underline">Hiring instead? See how to hire from EduLe →</a></p>
		</div>
	</div>
</div>
