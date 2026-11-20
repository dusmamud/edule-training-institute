<script lang="ts">
	import { Quote } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { alumni } from '#lib/data/site.ts';
</script>

<Seo
	title="Alumni Success Stories — EduLe"
	description="Meet EduLe alumni: what they did before, the course they took, and where they work now — data analysts, developers, designers, accountants and marketers across Pune and Mumbai."
	image="alumni-graduate"
/>

<PageHero eyebrow="Alumni Stories" title="They started where you are" text="Real journeys from our classrooms to real jobs. Every story below names the person, the course, and the role they moved into." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each alumni as a}
			<article class="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
				<div class="flex items-center gap-4">
					{#if a.image}
						<Picture name={a.image} alt="Portrait of {a.name}" width={400} height={400} sizes="96px" imgClass="h-16 w-16 rounded-full object-cover" />
					{:else}
						<span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-mint font-display text-2xl font-extrabold text-leaf-dark" aria-hidden="true">{a.name.charAt(0)}</span>
					{/if}
					<div>
						<h2 class="font-display text-lg font-bold">{a.name}</h2>
						<p class="text-sm font-semibold text-leaf-dark">{a.current} · {a.company}</p>
					</div>
				</div>
				<Quote size={22} class="mt-5 text-leaf" aria-hidden="true" />
				<blockquote class="mt-2 flex-1 leading-relaxed">“{a.quote}”</blockquote>
				<dl class="mt-5 space-y-1.5 border-t border-line pt-4 text-sm">
					<div class="flex justify-between gap-4"><dt class="text-muted">Before EduLe</dt><dd class="text-right font-bold">{a.previous}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Course</dt><dd class="text-right font-bold">{a.course}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Now</dt><dd class="text-right font-bold">{a.current}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Package</dt><dd class="text-right font-bold text-leaf-dark">{a.salary}</dd></div>
				</dl>
			</article>
		{/each}
	</div>
	<p class="mt-6 text-sm text-muted">Alumni stories are mock placeholders for design review — names, roles and salary figures are illustrative. EduLe does not guarantee a job or a salary; outcomes depend on the student’s effort, attendance and the job market.</p>

	<div class="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-leaf-deep px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
		<div>
			<h2 class="font-display text-2xl font-extrabold">Your story could be next</h2>
			<p class="mt-2 max-w-xl text-sm leading-relaxed text-white/85">Pick a career path, book a free demo, and see where 12 weeks can take you.</p>
		</div>
		<div class="flex flex-wrap gap-3">
			<a href="/career-paths" class="min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Explore Career Paths</a>
			<a href="/demo" class="min-h-12 rounded-full border-2 border-white px-7 py-3 font-display text-base font-bold text-white">Free Demo Class</a>
		</div>
	</div>
</div>
