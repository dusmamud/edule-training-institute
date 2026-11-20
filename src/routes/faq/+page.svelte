<script lang="ts">
	import FaqAccordion from '#lib/components/FaqAccordion.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo
	title="FAQ — EduLe Computer Training Institute"
	description="Frequently asked questions about EduLe courses, fees, certificates, batches and placements."
	image="classroom"
/>

<PageHero eyebrow="FAQ" title="Frequently asked questions" text="Everything students usually ask before enrolling — courses, fees, certificates, batches and placements." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<FaqAccordion />
	<div class="mt-8 rounded-2xl bg-mint p-6 text-center">
		<h2 class="font-display text-xl font-extrabold">Still have a question?</h2>
		<p class="mt-2 text-muted">Call us or send a message — we reply within one working day.</p>
		<a href="/contact" class="mt-4 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Contact Us</a>
	</div>
</div>
