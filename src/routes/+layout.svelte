<script lang="ts">
	import '@fontsource/plus-jakarta-sans/600.css';
	import '@fontsource/plus-jakarta-sans/700.css';
	import '@fontsource/plus-jakarta-sans/800.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { MessageCircle, Phone } from '@lucide/svelte';
	import Lenis from 'lenis';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import CompareBar from '#lib/components/CompareBar.svelte';
	import { prefersReducedMotion } from '#lib/reveal.ts';
	import { site } from '#lib/data/site.ts';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!('startViewTransition' in document)) return;
		if (prefersReducedMotion()) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	// Lenis smooth scroll — motion only, never for reduced-motion users.
	// Scroll reveals use the `use:reveal` action (IntersectionObserver), not
	// a mount-once querySelectorAll, so client-side navigation stays visible.
	$effect(() => {
		if (prefersReducedMotion()) return;
		const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
		let raf = 0;
		const loop = (time: number) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	});

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: 'EduLe Computer Training Institute',
		description: 'Computer training institute in Pune offering practical courses in development, data science, design, accounting and business with certificates and placement support.',
		telephone: site.phoneDisplay,
		email: site.email,
		address: { '@type': 'PostalAddress', streetAddress: '2nd Floor, Sunrise Plaza, MG Road', addressLocality: 'Pune', addressRegion: 'Maharashtra', postalCode: '411001', addressCountry: 'IN' },
		url: site.url
	};
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
	<noscript><style>
		/* Reveal content is hidden by JS only; without JS it must stay visible. */
		.reveal { opacity: 1 !important; transform: none !important; }
	</style></noscript>
</svelte:head>

<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-leaf-deep focus:px-5 focus:py-3 focus:text-white">
	Skip to main content
</a>

<Header />
<main id="main">{@render children()}</main>
<Footer />
<CompareBar />

<a
	href={site.whatsappHref}
	target="_blank"
	rel="noopener"
	aria-label="Chat with EduLe on WhatsApp"
	class="fixed right-5 bottom-24 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform duration-200 hover:scale-105 lg:bottom-6 lg:flex"
>
	<MessageCircle size={26} aria-hidden="true" />
</a>

<nav aria-label="Quick actions" class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
	<a href={site.phoneHref} class="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink">
		<Phone size={20} class="text-leaf-dark" aria-hidden="true" /> Call
	</a>
	<a href={site.whatsappHref} target="_blank" rel="noopener" class="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink">
		<MessageCircle size={20} class="text-[#25d366]" aria-hidden="true" /> WhatsApp
	</a>
	<a href="/admissions" class="flex min-h-14 items-center justify-center bg-leaf text-sm font-bold text-white">Enrol Now</a>
</nav>
<div class="h-14 lg:hidden" aria-hidden="true"></div>
