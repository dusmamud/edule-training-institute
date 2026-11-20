<script lang="ts">
	// Per-page SEO: title, description, canonical (derived from the real
	// pathname — the old layout set the homepage canonical on EVERY page),
	// Open Graph + Twitter cards with a real preview image.
	import { page } from '$app/state';
	import { site } from '#lib/data/site.ts';

	let {
		title,
		description,
		image = 'classroom',
		type = 'website'
	}: { title: string; description: string; image?: string; type?: string } = $props();

	const canonical = $derived(site.url + page.url.pathname);
	const img = $derived(`${site.url}/images/${image}-1200.jpg`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={img} />
</svelte:head>
