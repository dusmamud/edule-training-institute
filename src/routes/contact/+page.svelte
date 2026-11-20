<script lang="ts">
	import { CheckCircle2, Clock, Mail, MapPin, Phone } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { batches, site } from '#lib/data/site.ts';

	let name = $state('');
	let email = $state('');
	let topic = $state('Course enquiry');
	let message = $state('');
	let sent = $state(false);

	function submit(e: SubmitEvent) {
		e.preventDefault();
		sent = true;
	}
</script>

<Seo
	title="Contact EduLe — Computer Training Institute, Pune"
	description="Contact EduLe in Pune — visit the campus on MG Road, call +91 97026 21413 or send a message. We reply within one working day."
	image="classroom"
/>

<PageHero eyebrow="Contact" title="Talk to us — we reply within a day" text="Visit the Pune campus, call us, or send a message below. Free counselling and demo classes, no obligation." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-10 lg:grid-cols-5">
		<div class="lg:col-span-2">
			<h2 class="font-display text-2xl font-extrabold">Visit or call</h2>
			<ul class="mt-5 space-y-4 text-sm leading-relaxed">
				<li class="flex gap-3"><MapPin size={20} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong>{site.address}</strong><br /><span class="text-muted">Landmark: opposite City Mall, 2nd floor</span></span></li>
				<li class="flex gap-3"><Phone size={20} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><a href={site.phoneHref} class="font-bold hover:text-leaf-dark hover:underline">{site.phoneDisplay}</a></li>
				<li class="flex gap-3"><Mail size={20} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><a href="mailto:{site.email}" class="font-bold hover:text-leaf-dark hover:underline">{site.email}</a></li>
				<li class="flex gap-3"><Clock size={20} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span>{site.hours}</span></li>
			</ul>
			<h3 class="mt-8 font-display text-lg font-extrabold">Batch timings</h3>
			<ul class="mt-3 space-y-2 text-sm text-muted">
				{#each batches as b}<li class="flex justify-between gap-4 rounded-lg bg-mint px-4 py-2.5"><span class="font-bold text-ink">{b.name}</span><span>{b.time} · {b.days}</span></li>{/each}
			</ul>
			<div class="mt-6 overflow-hidden rounded-2xl border border-line">
				<iframe
					title="Map: EduLe Computer Training Institute, MG Road, Pune"
					src="https://www.openstreetmap.org/export/embed.html?bbox=73.8500%2C18.5100%2C73.8800%2C18.5300&layer=mapnik&marker=18.5200%2C73.8650"
					class="h-64 w-full border-0"
					loading="lazy"
				></iframe>
			</div>
			<p class="mt-2 text-xs text-muted">Map: MG Road, Pune area (OpenStreetMap embed).</p>
		</div>

		<div class="lg:col-span-3">
			{#if sent}
				<div class="rounded-2xl border border-leaf bg-mint p-8 text-center" role="status">
					<CheckCircle2 size={44} class="mx-auto text-leaf-dark" aria-hidden="true" />
					<h2 class="mt-4 font-display text-2xl font-extrabold">Message received!</h2>
					<p class="mx-auto mt-3 max-w-md leading-relaxed text-muted">Thank you, {name}. We will reply to {email} within one working day. This is a demo form — no message was actually sent.</p>
					<button type="button" class="mt-6 min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark" onclick={() => (sent = false)}>Send Another Message</button>
				</div>
			{:else}
				<form class="rounded-2xl border border-line bg-white p-6 sm:p-8" onsubmit={submit}>
					<h2 class="font-display text-xl font-extrabold">Send us a message</h2>
					<div class="mt-5 grid gap-4 sm:grid-cols-2">
						<div>
							<label class="block text-sm font-bold" for="c-name">Full name</label>
							<input id="c-name" bind:value={name} required minlength="2" autocomplete="name" placeholder="Your name" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
						</div>
						<div>
							<label class="block text-sm font-bold" for="c-email">Email address</label>
							<input id="c-email" type="email" bind:value={email} required autocomplete="email" placeholder="you@example.com" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
						</div>
					</div>
					<div class="mt-4">
						<label class="block text-sm font-bold" for="c-topic">Topic</label>
						<select id="c-topic" bind:value={topic} class="mt-2 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base">
							<option>Course enquiry</option>
							<option>Fees &amp; instalments</option>
							<option>Demo class booking</option>
							<option>Become an instructor</option>
							<option>Certificate verification</option>
							<option>Other</option>
						</select>
					</div>
					<div class="mt-4">
						<label class="block text-sm font-bold" for="c-message">Message</label>
						<textarea id="c-message" bind:value={message} required minlength="10" rows="5" placeholder="Tell us what you would like to learn…" class="mt-2 w-full rounded-xl border border-line px-4 py-3 text-base outline-none focus:border-leaf"></textarea>
					</div>
					<p class="mt-4 text-xs leading-relaxed text-muted">Demo form — your message is not sent anywhere.</p>
					<button type="submit" class="mt-5 min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Send Message</button>
				</form>
			{/if}
		</div>
	</div>
</div>
