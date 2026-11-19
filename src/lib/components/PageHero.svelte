<script lang="ts">
	let { eyebrow, title, text }: { eyebrow: string; title: string; text?: string } = $props();
</script>

<section class="bg-mint">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:py-16">
		<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">{eyebrow}</p>
		<h1 class="mt-2 max-w-3xl font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl lg:text-5xl">{title}</h1>
		{#if text}<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{text}</p>{/if}
	</div>
</section>
