<script lang="ts">
	// Visual breadcrumbs + BreadcrumbList JSON-LD (still supported by Google).
	// items: [{ label, href? }] — the last item is the current page (no href).
	import { site } from '#lib/data/site.ts';

	let { items }: { items: { label: string; href?: string }[] } = $props();

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.label,
			...(item.href ? { item: site.url + item.href } : {})
		}))
	});
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 pt-5">
	<ol class="flex flex-wrap items-center gap-1.5 text-sm">
		{#each items as item, i}
			<li class="flex items-center gap-1.5">
				{#if i > 0}<span class="text-muted" aria-hidden="true">/</span>{/if}
				{#if item.href}
					<a href={item.href} class="min-h-11 inline-flex items-center font-semibold text-leaf-dark hover:underline">{item.label}</a>
				{:else}
					<span aria-current="page" class="inline-flex min-h-11 items-center font-semibold text-ink">{item.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
