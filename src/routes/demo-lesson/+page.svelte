<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { demoLesson, site } from '#lib/data/site.ts';

	const videoJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'VideoObject',
		name: demoLesson.title,
		description: demoLesson.description,
		thumbnailUrl: `${site.url}/images/course-python-1200.jpg`,
		uploadDate: '2026-11-20',
		duration: demoLesson.duration,
		contentUrl: `${site.url}/videos/demo-lesson-python.mp4`,
		embedUrl: `${site.url}/demo-lesson`,
		transcript: demoLesson.transcript.map((l) => `${l.t} ${l.text}`).join(' ')
	};
</script>

<Seo
	title="Free Demo Lesson — Your First Python Script in 20 Minutes — EduLe"
	description="Watch a free EduLe demo lesson: your first Python script in 20 minutes, taught by Meera Iyer. Full transcript and captions included."
	image="course-python"
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(videoJsonLd)}</script>`}
</svelte:head>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free Demo Lesson' }]} />

<PageHero eyebrow="Free Demo Lesson" title={demoLesson.title} text={demoLesson.description} />

<div class="mx-auto max-w-4xl px-4 py-10 sm:py-14">
	<!-- Captioned video with poster + full transcript (WCAG 1.2.2). -->
	<figure class="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
		<video controls preload="metadata" poster="/images/course-python-1200.jpg" class="aspect-[8/5] w-full bg-black object-cover" aria-label="Free demo lesson: your first Python script in 20 minutes">
			<source src="/videos/demo-lesson-python.mp4" type="video/mp4" />
			<track kind="captions" src="/videos/demo-lesson-python.vtt" srclang="en" label="English captions" default />
			Your browser does not support video — read the full transcript below.
		</video>
		<figcaption class="p-6">
			<p class="font-display text-xl font-extrabold">Your first Python script, in 20 minutes</p>
			<p class="mt-2 text-sm leading-relaxed text-muted">A captioned teaser from the Python Programming course, taught by Meera Iyer. Captions are on by default; the complete transcript is below. Prefer a live lesson instead? <a href="/demo" class="font-bold text-leaf-dark hover:underline">Book a free demo class →</a></p>
		</figcaption>
	</figure>

	<h2 class="mt-10 font-display text-2xl font-extrabold sm:text-3xl">Full transcript (with timestamps)</h2>
	<p class="mt-2 text-sm text-muted">Taught by Meera Iyer · Python Programming course · 20 minutes</p>
	<ol class="mt-6 space-y-4">
		{#each demoLesson.transcript as line}
			<li class="flex gap-4 rounded-2xl border border-line bg-white p-5">
				<span class="w-14 shrink-0 font-display text-sm font-extrabold text-leaf-dark">{line.t}</span>
				<span class="text-sm leading-relaxed sm:text-base">{line.text}</span>
			</li>
		{/each}
	</ol>

	<div class="mt-10 rounded-3xl bg-leaf-deep p-6 text-white sm:p-8">
		<h2 class="font-display text-2xl font-extrabold">Like this lesson? Try the full course</h2>
		<p class="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">Python Programming runs 10 weeks, 36 lectures, with 3 portfolio projects and a verifiable certificate. EMI from ₹2,500/month.</p>
		<div class="mt-5 flex flex-wrap gap-3">
			<a href="/courses/python-programming" class="min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Python Programming Course</a>
			<a href="/demo?course=python-programming" class="min-h-12 rounded-full border-2 border-white px-7 py-3 font-display text-base font-bold text-white">Book a Free Demo</a>
		</div>
	</div>
</div>
