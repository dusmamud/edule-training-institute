<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
</script>

<Seo
	title="Accessibility — EduLe"
	description="EduLe accessibility statement: how this website meets WCAG 2.2 AA — contrast, keyboard navigation, focus indicators, reduced-motion support and alt text."
	image="classroom"
/>

<PageHero eyebrow="Accessibility" title="Learning for everyone" text="We build this website to WCAG 2.2 AA so every student — including students using keyboards, screen readers or reduced-motion settings — can explore courses and enrol." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<div class="space-y-6">
		<section class="rounded-2xl border border-line bg-white p-6">
			<h2 class="font-display text-xl font-extrabold">What we do</h2>
			<ul class="mt-3 space-y-2 text-sm leading-relaxed text-muted">
				<li>• Text contrast of at least 4.5:1, and a visible focus ring on every interactive element.</li>
				<li>• Full keyboard support: menus, filters, accordions, carousels and forms all work without a mouse.</li>
				<li>• A “Skip to main content” link at the top of every page.</li>
				<li>• Meaningful alt text on every image, and descriptive labels on every form field.</li>
				<li>• All animation respects your <code>prefers-reduced-motion</code> setting — motion is removed or shortened automatically.</li>
				<li>• Tap targets of at least 44–48px, and layouts that work at 320px wide with no horizontal scrolling.</li>
				<li>• Pages that keep working at 200% zoom.</li>
			</ul>
		</section>
		<section class="rounded-2xl border border-line bg-white p-6">
			<h2 class="font-display text-xl font-extrabold">Known limits</h2>
			<p class="mt-2 leading-relaxed text-muted">Some course images are decorative photographs; the OpenStreetMap embed on the Contact page is a third-party widget and may not be fully keyboard-operable — the same address, phone and hours are always listed as text beside it.</p>
		</section>
		<section class="rounded-2xl border border-line bg-white p-6">
			<h2 class="font-display text-xl font-extrabold">Tell us about a barrier</h2>
			<p class="mt-2 leading-relaxed text-muted">If you hit any barrier on this site — a page that is hard to read, a control you cannot reach by keyboard, or anything else — email <a href="mailto:hello@edule.in" class="font-bold text-leaf-dark hover:underline">hello@edule.in</a> or call <a href="tel:+919702621413" class="font-bold text-leaf-dark hover:underline">+91 97026 21413</a>. We aim to respond within 2 working days.</p>
		</section>
	</div>
</div>
