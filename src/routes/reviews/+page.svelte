<script lang="ts">
	import { MapPin, Star } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { site, testimonials } from '#lib/data/site.ts';
</script>

<Seo
	title="Reviews & Location — EduLe | Google Reviews, Pune Campus"
	description="Read what EduLe students say, find us on Google, and leave your own review. Rated 4.8/5 — visit our Pune campus on MG Road or read reviews on Google, Justdial and Sulekha."
	image="classroom"
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Reviews & Location' }]} />

<PageHero eyebrow="Reviews" title="What Pune says about EduLe" text="Rated 4.8 out of 5 by our students. Read their stories below, check us on Google, or come and see the campus for yourself." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 lg:grid-cols-3">
		<div class="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
			<p class="flex items-center justify-center gap-1 font-display text-4xl font-extrabold text-ink">4.8 <Star size={26} class="fill-gold text-gold" aria-hidden="true" /></p>
			<p class="mt-1 text-sm text-muted">Average student rating (9.8K ratings, on-site feedback)</p>
			<a href={site.gbpUrl} target="_blank" rel="noopener" class="mt-4 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Find Us on Google</a>
			<p class="mt-3 text-sm"><a href={site.gbpUrl} target="_blank" rel="noopener" class="font-bold text-leaf-dark hover:underline">Review us on Google →</a></p>
		</div>
		<div class="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
			<p class="font-display text-2xl font-extrabold">Also listed on</p>
			<p class="mt-2 text-sm leading-relaxed text-muted">Check our ratings and reviews on local directories.</p>
			<div class="mt-4 flex flex-wrap justify-center gap-3">
				<a href={site.justdialUrl} target="_blank" rel="noopener" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Justdial</a>
				<a href={site.sulekhaUrl} target="_blank" rel="noopener" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Sulekha</a>
			</div>
		</div>
		<div class="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
			<p class="font-display text-2xl font-extrabold">Visit the campus</p>
			<p class="mt-2 flex items-start justify-center gap-2 text-sm text-muted"><MapPin size={18} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" />{site.address}</p>
			<p class="mt-2 text-sm text-muted">{site.hours}</p>
			<a href={site.mapsUrl} target="_blank" rel="noopener" class="mt-4 inline-block min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Open in Google Maps</a>
		</div>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Find us on the map</h2>
	<div class="mt-5 overflow-hidden rounded-2xl border border-line">
		<iframe title="EduLe Computer Training Institute on Google Maps — MG Road, Pune" src={site.mapsEmbed} class="h-[360px] w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Student reviews</h2>
	<p class="mt-2 text-sm text-muted">Reviews collected on-site from past students (shown as text — we never mark up our own reviews for search stars).</p>
	<div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as t}
			<figure class="rounded-2xl border border-line bg-white p-6 shadow-sm">
				<div class="flex gap-0.5" aria-label="Rated {t.rating} out of 5">
					{#each Array(t.rating) as _}<Star size={17} class="fill-gold text-gold" aria-hidden="true" />{/each}
				</div>
				<blockquote class="mt-3 leading-relaxed text-ink">“{t.text}”</blockquote>
				<figcaption class="mt-4 text-sm font-bold text-ink">{t.name} <span class="font-medium text-muted">— {t.course}</span></figcaption>
			</figure>
		{/each}
	</div>
	<p class="mt-6 text-center text-sm"><a href="/alumni" class="font-bold text-leaf-dark hover:underline">Read full alumni success stories →</a></p>
</div>
