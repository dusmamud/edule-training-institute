<script lang="ts">
	import { CalendarClock, CheckCircle2, Users } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { site, workshops } from '#lib/data/site.ts';

	let selected = $state<string | null>(null);
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let booked = $state<string | null>(null);

	function startReserve(slug: string) {
		selected = slug;
		booked = null;
	}

	function register(e: SubmitEvent) {
		e.preventDefault();
		booked = selected;
		selected = null;
	}

	// One Event per workshop, each with its own real date/time (P1-2 fix).
	const eventJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: workshops.map((w, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: {
				'@type': 'Event',
				name: w.title,
				startDate: w.startDate,
				endDate: w.endDate,
				eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
				eventStatus: 'https://schema.org/EventScheduled',
				location: { '@type': 'Place', name: 'EduLe Computer Training Institute, Pune', address: site.address },
				organizer: { '@type': 'EducationalOrganization', name: 'EduLe Computer Training Institute', url: site.url },
				description: w.desc,
				isAccessibleForFree: true,
				offers: { '@type': 'Offer', price: 0, priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${site.url}/workshops/${w.slug}` }
			}
		}))
	};
</script>

<Seo
	title="Free Workshops & Webinars — EduLe"
	description="Free weekend workshops at EduLe Pune — build a website in 2 hours, AI tools for office work, Tally + GST live, logo design in Figma. Reserve your seat, no fee."
	image="workshop-seminar"
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(eventJsonLd)}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free Workshops' }]} />

<PageHero eyebrow="Free Workshops" title="Learn something useful this weekend" text="Free 60–120 minute workshops every weekend — in our Pune classroom and live online. No fee, no obligation; just bring your curiosity." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-2">
		{#each workshops as w}
			<article class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
				<a href="/workshops/{w.slug}" aria-label={w.title}>
					<Picture name={w.image} alt={w.title} width={800} height={500} sizes="(max-width: 768px) 100vw, 50vw" imgClass="aspect-[8/5] w-full object-cover" />
				</a>
				<div class="p-6">
					<p class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-leaf-dark">
						<span class="flex items-center gap-1.5"><CalendarClock size={15} aria-hidden="true" />{w.date} · {w.time}</span>
						<span class="flex items-center gap-1.5"><Users size={15} aria-hidden="true" />{w.seats} seats</span>
					</p>
					<h2 class="mt-2 font-display text-xl font-extrabold"><a href="/workshops/{w.slug}" class="hover:text-leaf-dark hover:underline">{w.title}</a></h2>
					<p class="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
					<p class="mt-3 text-sm"><strong>Trainer:</strong> {w.trainer} · <strong>Mode:</strong> {w.mode}</p>
					<p class="mt-3"><a href="/workshops/{w.slug}" class="text-sm font-bold text-leaf-dark hover:underline">Workshop details & agenda →</a></p>
					{#if booked === w.slug}
						<p class="mt-4 rounded-xl bg-mint px-4 py-3 text-sm font-bold text-leaf-dark" role="status">✓ Seat reserved for {name}! We will confirm on WhatsApp at {phone}. (Demo — nothing was sent.)</p>
					{:else if selected === w.slug}
						<form class="mt-4 space-y-3 rounded-2xl bg-mint p-4" onsubmit={register}>
							<p class="text-sm font-bold">Reserve your seat — {w.title}</p>
							<div>
								<label class="block text-sm font-bold" for="ws-name-{w.slug}">Full name</label>
								<input id="ws-name-{w.slug}" bind:value={name} required minlength="2" autocomplete="name" placeholder="e.g. Priya Sharma" class="mt-1 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base outline-none focus:border-leaf" />
							</div>
							<div class="grid gap-3 sm:grid-cols-2">
								<div>
									<label class="block text-sm font-bold" for="ws-phone-{w.slug}">Mobile number</label>
									<input id="ws-phone-{w.slug}" type="tel" bind:value={phone} required pattern={'[0-9+ -]{10,15}'} autocomplete="tel" placeholder="98765 43210" class="mt-1 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base outline-none focus:border-leaf" />
								</div>
								<div>
									<label class="block text-sm font-bold" for="ws-email-{w.slug}">Email address</label>
									<input id="ws-email-{w.slug}" type="email" bind:value={email} required autocomplete="email" placeholder="you@example.com" class="mt-1 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base outline-none focus:border-leaf" />
								</div>
							</div>
							<div class="flex flex-wrap gap-3">
								<button type="submit" class="min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Confirm Reservation</button>
								<button type="button" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark" onclick={() => (selected = null)}>Cancel</button>
							</div>
							<p class="text-xs text-muted">Demo form — nothing is sent anywhere.</p>
						</form>
					{:else}
						<button type="button" class="mt-4 min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark" onclick={() => startReserve(w.slug)}>Reserve a Free Seat</button>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-10 rounded-3xl bg-mint p-6 sm:p-8">
		<h2 class="font-display text-2xl font-extrabold">Want a workshop on another topic?</h2>
		<p class="mt-2 max-w-2xl leading-relaxed text-muted">Tell us what you want to learn — Excel shortcuts, interview prep, freelancing basics — and we will schedule it. Workshops are also a great way to meet our faculty before enrolling.</p>
		<a href="/contact" class="mt-5 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Suggest a Topic</a>
	</div>
</div>
