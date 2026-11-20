<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { blogPosts } from '#lib/data/site.ts';
</script>

<Seo
	title="Blog — EduLe | Career Guides & Learning Tips"
	description="EduLe blog — career guides, course advice and learning tips for students in India."
	image="classroom"
/>

<PageHero eyebrow="Blog" title="Guides, advice &amp; student stories" text="Honest, practical writing about computer careers in India — which course to pick, what employers want, and how to learn faster." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-3">
		{#each blogPosts as post}
			<article class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
				<a href="/blog/{post.slug}" aria-label={post.title}>
					<Picture name={post.image} alt={post.title} width={800} height={500} sizes="(max-width: 768px) 100vw, 33vw" imgClass="aspect-[8/5] w-full object-cover" />
				</a>
				<div class="p-5">
					<p class="text-xs font-bold tracking-wide text-leaf-dark uppercase">{post.category} · {post.date} · {post.read}</p>
					<p class="mt-1 text-xs text-muted">By {post.author}</p>
					<h2 class="mt-2 font-display text-lg leading-snug font-bold"><a href="/blog/{post.slug}" class="hover:text-leaf-dark hover:underline">{post.title}</a></h2>
					<p class="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
					<a href="/blog/{post.slug}" class="mt-4 inline-block min-h-11 rounded-full bg-mint px-4 py-2.5 text-sm font-bold text-leaf-dark hover:bg-leaf hover:text-white">Read Article</a>
				</div>
			</article>
		{/each}
	</div>
</div>
