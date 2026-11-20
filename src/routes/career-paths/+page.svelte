<script lang="ts">
	import { ArrowRight, Briefcase } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { careerPaths, inr } from '#lib/data/site.ts';
</script>

<Seo
	title="Career Paths — EduLe"
	description="Structured learning paths that take you from beginner to job-ready: Data Analyst, Full-Stack Developer, UI/UX Designer and Accountant. Bundled courses, one goal, one certificate set."
	image="classroom"
/>

<PageHero eyebrow="Career Paths" title="Don’t just take a course — follow a path" text="Each path bundles the courses, projects and certificate you need for one job — in the right order, at a bundled price." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-2">
		{#each careerPaths as p}
			<article class="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
				<Picture name={p.image} alt={p.title} width={800} height={500} sizes="(max-width: 768px) 100vw, 50vw" imgClass="aspect-[8/5] w-full object-cover" />
				<div class="p-6">
					<p class="text-xs font-bold tracking-wide text-leaf-dark uppercase">{p.courses.length} courses · {p.weeks} weeks</p>
					<h2 class="mt-2 font-display text-2xl font-extrabold">{p.title}</h2>
					<p class="mt-2 leading-relaxed text-muted">{p.goal}</p>
					<p class="mt-4 flex items-center gap-2 text-sm font-bold"><Briefcase size={16} class="text-leaf-dark" aria-hidden="true" /> Leads to: {p.roles.join(', ')}</p>
					<p class="mt-1 text-sm text-muted">Typical starting salary {p.salary}</p>
					<div class="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-line pt-5">
						<p class="font-display text-2xl font-extrabold text-leaf-dark">{inr(p.bundle)} <span class="text-sm font-medium text-muted line-through">{inr(p.fee)}</span></p>
						<a href="/career-paths/{p.slug}" class="flex min-h-12 items-center gap-2 rounded-full bg-leaf px-6 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">View Path <ArrowRight size={17} aria-hidden="true" /></a>
					</div>
				</div>
			</article>
		{/each}
	</div>
	<p class="mt-6 text-sm text-muted">* Salary bands are indicative mock figures for design review — actual salaries depend on the student, the role and the employer.</p>
</div>
