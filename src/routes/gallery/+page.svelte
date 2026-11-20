<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { gallery } from '#lib/data/site.ts';

	let filter = $state('All');
	const cats = ['All', 'Classroom', 'Lab', 'Events'];
	const shown = $derived(filter === 'All' ? gallery : gallery.filter((g) => g.category === filter));
</script>

<Seo
	title="Campus Gallery — EduLe | Classrooms, Labs & Events in Pune"
	description="Inside the EduLe campus in Pune: classrooms, computer labs, free workshops and graduation day. See where you will learn before you enrol."
	image="classroom"
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Campus Gallery' }]} />

<PageHero eyebrow="Campus Life" title="Inside the EduLe campus" text="Our Pune campus on MG Road — bright classrooms, hands-on labs and a full calendar of free workshops. Come and see it in person any weekday." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
		{#each cats as c}
			<button type="button" class="min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 {filter === c ? 'bg-leaf text-white' : 'bg-mint text-leaf-dark hover:bg-mint-deep'}" aria-pressed={filter === c} onclick={() => (filter = c)}>{c}</button>
		{/each}
	</div>

	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each shown as g}
			<figure class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
				<Picture name={g.image} alt={g.alt} width={800} height={500} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" imgClass="aspect-[8/5] w-full object-cover" />
				<figcaption class="p-5">
					<p class="text-xs font-bold tracking-wide text-leaf-dark uppercase">{g.category}</p>
					<p class="mt-1 text-sm leading-relaxed font-semibold text-ink">{g.caption}</p>
				</figcaption>
			</figure>
		{/each}
	</div>

	<p class="mt-8 rounded-2xl bg-mint p-5 text-sm leading-relaxed text-muted">Photos are illustrative mock images for design review — real campus photos will replace them once the client supplies them. Want to see the campus for real? <a href="/demo" class="font-bold text-leaf-dark hover:underline">Book a free demo class</a> or <a href="/counselling" class="font-bold text-leaf-dark hover:underline">book a free counselling session</a> and visit us on MG Road, Pune.</p>

	<div class="mt-8 flex flex-wrap gap-3">
		<a href="/demo" class="min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Book a Free Demo Class</a>
		<a href="/student-work" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">See Student Work</a>
	</div>
</div>
