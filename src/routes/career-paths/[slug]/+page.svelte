<script lang="ts">
	import { ArrowRight, Briefcase, Check, Clock } from '@lucide/svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { courses, getCourse, inr } from '#lib/data/site.ts';

	let { data } = $props();
	const path = $derived(data.path);
	const pathCourses = $derived(path.courses.map((id: string) => getCourse(id)).filter((c) => c !== undefined));
</script>

<Seo
	title="{path.title} — Career Path — EduLe"
	description="{path.goal} {path.courses.length} courses over {path.weeks} weeks, bundled at {inr(path.bundle)}. Leads to {path.roles.join(', ')}."
	image={path.image}
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Career Paths', href: '/career-paths' }, { label: path.title }]} />

<section class="bg-mint">
	<div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:py-14 lg:grid-cols-2">
		<div>
			<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">Career Path · {path.courses.length} courses · {path.weeks} weeks</p>
			<h1 class="mt-2 font-display text-3xl leading-tight font-extrabold sm:text-4xl">{path.title}</h1>
			<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{path.goal}</p>
			<p class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
				<span class="flex items-center gap-1.5"><Briefcase size={16} aria-hidden="true" /> {path.roles.join(', ')}</span>
				<span class="flex items-center gap-1.5"><Clock size={16} aria-hidden="true" /> {path.weeks} weeks</span>
			</p>
			<p class="mt-3 text-sm text-muted">Typical starting salary {path.salary} <span class="text-xs">(* indicative mock figure)</span> · {path.weeks} weeks in total — the courses run back-to-back, so the path length is the sum of the course lengths.</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/admissions?path={path.slug}" class="min-h-12 rounded-full bg-leaf px-7 py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Start This Path — {inr(path.bundle)}</a>
				<a href="/demo?course={path.courses[0]}" class="min-h-12 rounded-full border-2 border-leaf-dark px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf-dark hover:text-white">Try a Free Demo</a>
			</div>
			<p class="mt-3 text-sm text-muted">Bundle EMI from {inr(Math.ceil(path.bundle / 6))}/month · <a href="/emi-calculator" class="font-bold text-leaf-dark hover:underline">calculate your plan</a></p>
		</div>
		<Picture name={path.image} alt={path.title} width={1200} height={750} eager={true} sizes="(max-width: 1024px) 100vw, 50vw" imgClass="aspect-[8/5] w-full rounded-2xl object-cover" />
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Your path, step by step</h2>
	<ol class="mt-8 space-y-6">
		{#each pathCourses as c, i}
			<li class="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center">
				<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf font-display text-lg font-extrabold text-white" aria-hidden="true">{i + 1}</span>
				<div class="flex-1">
					<h3 class="font-display text-lg font-bold"><a href="/courses/{c.id}" class="hover:text-leaf-dark hover:underline">{c.title}</a></h3>
					<p class="mt-1 text-sm leading-relaxed text-muted">{c.short}</p>
					<p class="mt-2 text-sm font-semibold text-ink">{c.weeks} weeks · {c.lectures} lectures · {c.mode} · Taught by {c.instructor}</p>
				</div>
				<p class="font-display text-xl font-extrabold whitespace-nowrap text-leaf-dark">{c.price === 0 ? 'Free' : inr(c.price)}</p>
			</li>
		{/each}
	</ol>

	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		<div class="rounded-2xl bg-mint p-6">
			<h2 class="font-display text-xl font-extrabold">Bundled price</h2>
			<p class="mt-3 font-display text-3xl font-extrabold text-leaf-dark">{inr(path.bundle)} <span class="text-lg font-medium text-muted line-through">{inr(path.fee)}</span></p>
			<p class="mt-2 text-sm leading-relaxed text-muted">You save {inr(path.fee - path.bundle)} versus buying the courses separately. Pay in full, in 2 instalments, or on no-cost EMI — <a href="/emi-calculator" class="font-bold text-leaf-dark hover:underline">calculate your monthly cost</a>.</p>
			<ul class="mt-4 space-y-2 text-sm">
				<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> One certificate per course, all verifiable</li>
				<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> Portfolio projects in every course</li>
				<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> Placement support for the whole path</li>
			</ul>
		</div>
		<div class="rounded-2xl bg-leaf-deep p-6 text-white">
			<h2 class="font-display text-xl font-extrabold">Not sure this is the right path?</h2>
			<p class="mt-2 text-sm leading-relaxed text-white/85">Take the 2-minute Course Finder, or book a free counselling session and we will map the right path for your goal and budget.</p>
			<a href="/finder" class="mt-5 inline-block min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Take the Course Finder</a>
			<a href="/counselling" class="mt-3 ml-3 inline-block min-h-12 rounded-full border-2 border-white px-7 py-3 font-display text-base font-bold text-white sm:mt-0">Free Counselling</a>
			<a href="/career-paths" class="mt-3 ml-3 inline-block min-h-12 rounded-full border-2 border-white px-7 py-3 font-display text-base font-bold text-white sm:mt-0">All Career Paths</a>
		</div>
	</div>
</div>
