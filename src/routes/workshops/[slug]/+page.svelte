<script lang="ts">
	import { CalendarClock, CheckCircle2, MapPin, Users } from '@lucide/svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { instructorSlug, site } from '#lib/data/site.ts';

	let { data } = $props();
	const w = $derived(data.workshop);
	const trainerSlug = $derived(instructorSlug(w.trainer));

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let booked = $state(false);

	function register(e: SubmitEvent) {
		e.preventDefault();
		booked = true;
	}

	const eventJsonLd = $derived({
		'@context': 'https://schema.org',
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
	});
</script>

<Seo
	title="{w.title} — Free Workshop — EduLe"
	description="{w.desc} {w.date}, {w.time} with {w.trainer}. Free at EduLe Pune — reserve your seat."
	image={w.image}
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(eventJsonLd)}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free Workshops', href: '/workshops' }, { label: w.title }]} />

<section class="bg-mint">
	<div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:py-14 lg:grid-cols-2">
		<div>
			<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">Free Workshop · {w.mode}</p>
			<h1 class="mt-2 font-display text-3xl leading-tight font-extrabold sm:text-4xl">{w.title}</h1>
			<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{w.desc}</p>
			<ul class="mt-5 space-y-2 text-sm font-semibold text-ink">
				<li class="flex items-center gap-2"><CalendarClock size={17} class="text-leaf-dark" aria-hidden="true" /> {w.date} · {w.time}</li>
				<li class="flex items-center gap-2"><MapPin size={17} class="text-leaf-dark" aria-hidden="true" /> {site.address}</li>
				<li class="flex items-center gap-2"><Users size={17} class="text-leaf-dark" aria-hidden="true" /> {w.seats} seats · Free, no fee</li>
			</ul>
			<p class="mt-4 text-sm text-muted">
				Trainer:
				{#if trainerSlug}<a href="/instructors/{trainerSlug}" class="font-bold text-leaf-dark hover:underline">{w.trainer}</a>{:else}<strong>{w.trainer}</strong>{/if}
			</p>
		</div>
		<Picture name={w.image} alt={w.title} width={1200} height={750} eager={true} sizes="(max-width: 1024px) 100vw, 50vw" imgClass="aspect-[8/5] w-full rounded-2xl object-cover" />
	</div>
</section>

<div class="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:py-14 lg:grid-cols-3">
	<div class="lg:col-span-2">
		<h2 class="font-display text-2xl font-extrabold sm:text-3xl">What happens in this workshop</h2>
		<ol class="mt-6 space-y-3">
			{#each w.agenda as step, i}
				<li class="flex gap-4 rounded-2xl border border-line bg-white p-5">
					<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf font-display text-base font-extrabold text-white" aria-hidden="true">{i + 1}</span>
					<span class="text-sm leading-relaxed font-medium sm:text-base">{step}</span>
				</li>
			{/each}
		</ol>
		<div class="mt-8 rounded-2xl bg-mint p-6">
			<h2 class="font-display text-xl font-extrabold">Who should come</h2>
			<p class="mt-2 text-sm leading-relaxed text-muted">Anyone curious about the topic — no experience needed, no preparation required. Bring a laptop if you have one; we have computers in the classroom if you don’t. Friends and parents are welcome too.</p>
			<p class="mt-3 text-sm"><a href="/workshops" class="font-bold text-leaf-dark hover:underline">← All free workshops</a></p>
		</div>
	</div>
	<aside>
		<div class="rounded-2xl border border-leaf bg-white p-6 shadow-sm">
			<h2 class="font-display text-xl font-extrabold">Reserve your free seat</h2>
			<p class="mt-2 text-sm text-muted">{w.date} · {w.time} · {w.seats} seats</p>
			{#if booked}
				<p class="mt-4 rounded-xl bg-mint px-4 py-3 text-sm font-bold text-leaf-dark" role="status">✓ Seat reserved for {name}! We will confirm on WhatsApp at {phone}. (Demo — nothing was sent.)</p>
			{:else}
				<form class="mt-4 space-y-3" onsubmit={register}>
					<div>
						<label class="block text-sm font-bold" for="name">Full name</label>
						<input id="name" bind:value={name} required minlength="2" autocomplete="name" placeholder="e.g. Priya Sharma" class="mt-1 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="phone">Mobile number</label>
						<input id="phone" type="tel" bind:value={phone} required pattern={'[0-9+ -]{10,15}'} autocomplete="tel" placeholder="e.g. 98765 43210" class="mt-1 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<div>
						<label class="block text-sm font-bold" for="email">Email address</label>
						<input id="email" type="email" bind:value={email} required autocomplete="email" placeholder="you@example.com" class="mt-1 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
					</div>
					<button type="submit" class="min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Reserve a Free Seat</button>
					<p class="text-xs text-muted">Demo form — nothing is sent anywhere.</p>
				</form>
			{/if}
		</div>
	</aside>
</div>
