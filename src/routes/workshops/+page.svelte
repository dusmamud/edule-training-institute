<script lang="ts">
	import { CalendarClock, CheckCircle2, Users } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { site, workshops } from '#lib/data/site.ts';

	let booked = $state<string | null>(null);
	let name = $state('');
	let phone = $state('');

	function register(slug: string) {
		booked = slug;
	}

	const eventJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: workshops.map((w, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: {
				'@type': 'Event',
				name: w.title,
				startDate: '2026-11-21T11:00:00+05:30',
				eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
				location: { '@type': 'Place', name: 'EduLe Computer Training Institute, Pune', address: site.address },
				organizer: { '@type': 'EducationalOrganization', name: 'EduLe Computer Training Institute', url: site.url },
				description: w.desc,
				isAccessibleForFree: true
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

<PageHero eyebrow="Free Workshops" title="Learn something useful this weekend" text="Free 60–120 minute workshops every weekend — in our Pune classroom and live online. No fee, no obligation; just bring your curiosity." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-2">
		{#each workshops as w}
			<article class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
				<Picture name={w.image} alt={w.title} width={800} height={500} sizes="(max-width: 768px) 100vw, 50vw" imgClass="aspect-[8/5] w-full object-cover" />
				<div class="p-6">
					<p class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-leaf-dark">
						<span class="flex items-center gap-1.5"><CalendarClock size={15} aria-hidden="true" />{w.date} · {w.time}</span>
						<span class="flex items-center gap-1.5"><Users size={15} aria-hidden="true" />{w.seats} seats</span>
					</p>
					<h2 class="mt-2 font-display text-xl font-extrabold">{w.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
					<p class="mt-3 text-sm"><strong>Trainer:</strong> {w.trainer} · <strong>Mode:</strong> {w.mode}</p>
					{#if booked === w.slug}
						<p class="mt-4 rounded-xl bg-mint px-4 py-3 text-sm font-bold text-leaf-dark" role="status">✓ Seat reserved! We will confirm on WhatsApp. (Demo — nothing was sent.)</p>
					{:else}
						<button type="button" class="mt-4 min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark" onclick={() => register(w.slug)}>Reserve a Free Seat</button>
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
