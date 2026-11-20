<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { blogPosts, site } from '#lib/data/site.ts';

	let { data } = $props();
	const post = $derived(data.post);
	const others = blogPosts.filter((b) => b.slug !== post.slug);

	const articleJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description: post.excerpt,
		image: `${site.url}/images/${post.image}-1200.jpg`,
		author: { '@type': 'Person', name: post.author },
		publisher: { '@type': 'EducationalOrganization', name: 'EduLe Computer Training Institute', url: site.url },
		datePublished: '2026-11-12'
	});
</script>

<Seo
	title="{post.title} — EduLe Blog"
	description={post.excerpt}
	image={post.image}
	type="article"
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>`}
</svelte:head>

<article class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">{post.category} · {post.date} · {post.read}</p>
	<p class="mt-1 text-sm text-muted">By {post.author}, EduLe faculty</p>
	<h1 class="mt-3 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">{post.title}</h1>
	<Picture name={post.image} alt={post.title} width={1200} height={700} eager={true} sizes="(max-width: 768px) 100vw, 768px" imgClass="mt-6 aspect-[12/7] w-full rounded-2xl object-cover" />
	{#each post.body as para}
		<p class="mt-5 text-base leading-relaxed text-ink sm:text-lg">{para}</p>
	{/each}
	<div class="mt-10 rounded-2xl bg-mint p-6">
		<h2 class="font-display text-xl font-extrabold">Want to learn this properly?</h2>
		<p class="mt-2 leading-relaxed text-muted">Our courses cover this topic hands-on, with a certificate and placement support.</p>
		<a href="/courses" class="mt-4 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Browse Courses</a>
	</div>
	{#if others.length}
		<h2 class="mt-12 font-display text-2xl font-extrabold">More from the blog</h2>
		<ul class="mt-4 space-y-3">
			{#each others as o}
				<li><a href="/blog/{o.slug}" class="block min-h-11 rounded-xl border border-line px-5 py-3.5 font-bold hover:border-leaf hover:text-leaf-dark">{o.title}</a></li>
			{/each}
		</ul>
	{/if}
</article>
