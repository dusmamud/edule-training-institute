<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { courses, studentWork } from '#lib/data/site.ts';

	let filter = $state('all');
	const shown = $derived(filter === 'all' ? studentWork : studentWork.filter((w) => w.course === filter));
</script>

<Seo
	title="Student Work & Portfolios — EduLe"
	description="Real projects built by EduLe students — websites, ML models, dashboards, security audits and campaigns. This is the portfolio you graduate with."
	image="course-web-dev"
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Student Work' }]} />

<PageHero eyebrow="Student Work" title="Don’t take our word for it — see the work" text="Every EduLe course ends with a real project. These are the websites, dashboards, audits and campaigns our students built — and what those projects did for them." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="flex flex-wrap items-center gap-3">
		<label class="text-sm font-bold" for="course-filter">Show work from:</label>
		<select id="course-filter" bind:value={filter} class="min-h-12 w-full min-w-0 rounded-xl border border-line bg-white px-4 text-base sm:w-auto">
			<option value="all">All courses</option>
			{#each courses as c}<option value={c.id}>{c.title.split('—')[0].trim()}</option>{/each}
		</select>
	</div>

	<div class="mt-8 grid gap-6 md:grid-cols-2">
		{#each shown as w}
			<article class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
				<Picture name={w.image} alt={w.title} width={800} height={500} sizes="(max-width: 768px) 100vw, 50vw" imgClass="aspect-[8/5] w-full object-cover" />
				<div class="p-6">
					<p class="text-xs font-bold tracking-wide text-leaf-dark uppercase">{w.courseTitle}</p>
					<h2 class="mt-2 font-display text-xl font-extrabold">{w.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
					<p class="mt-3 text-sm"><strong>Built by {w.student}</strong></p>
					<p class="mt-2 flex flex-wrap gap-2">
						{#each w.tools as t}<span class="rounded-full border border-line bg-mint px-3 py-1 text-xs font-bold text-ink">{t}</span>{/each}
					</p>
					<p class="mt-3 rounded-xl bg-mint px-4 py-3 text-sm font-bold text-leaf-dark">Outcome: {w.outcome}</p>
					<p class="mt-3 text-sm"><a href="/courses/{w.course}" class="font-bold text-leaf-dark hover:underline">Learn {w.courseTitle} →</a></p>
				</div>
			</article>
		{/each}
	</div>

	<p class="mt-8 rounded-2xl bg-mint p-5 text-sm leading-relaxed text-muted">Student projects shown here are illustrative mock examples for design review — real student work, names and outcomes will replace them once the client supplies verified projects with student consent.</p>

	<div class="mt-8 rounded-3xl bg-leaf-deep p-6 text-white sm:p-8">
		<h2 class="font-display text-2xl font-extrabold">Your portfolio starts on day one</h2>
		<p class="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">Every course ends with a project you can show an employer — not just a certificate. Book a free demo and see how a lesson turns into portfolio work.</p>
		<a href="/demo" class="mt-5 inline-block min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Book a Free Demo Class</a>
	</div>
</div>
