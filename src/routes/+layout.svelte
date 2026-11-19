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
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { site } from '#lib/data/site.ts';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!('startViewTransition' in document)) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	$effect(() => {
		const els = document.querySelectorAll('.reveal');
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
			},
			{ threshold: 0.12 }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
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
	<title>EduLe — Computer Training Institute in Pune | Courses, Fees &amp; Certificates</title>
	<meta name="description" content="Learn from anywhere and build your bright career. Job-ready computer courses in Pune — development, data science, design, Tally & GST — with certificates and placement support." />
	<link rel="canonical" href={site.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="EduLe — Computer Training Institute in Pune" />
	<meta property="og:description" content="Job-ready computer courses with certificates and placement support. 25% off all courses." />
	<meta property="og:url" content={site.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-leaf-deep focus:px-5 focus:py-3 focus:text-white">
	Skip to main content
</a>

<Header />
<main id="main">{@render children()}</main>
<Footer />

<a
	href={site.whatsappHref}
	target="_blank"
	rel="noopener"
	aria-label="Chat with EduLe on WhatsApp"
	class="fixed right-5 bottom-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform duration-200 hover:scale-105 md:flex"
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
