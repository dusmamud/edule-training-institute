<script lang="ts">
	import { Briefcase, Check, Star } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { placements, site, testimonials } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>Placements &amp; Career Support — EduLe</title>
	<meta name="description" content="EduLe placement support: resume workshops, mock interviews and drives with partner employers. 18,200+ students placed in Pune, Mumbai and across India." />
</svelte:head>

<PageHero eyebrow="Placements" title="We teach. Then we help you get hired." text="Placement support is free for every certificate-course student — resume workshops, mock interviews, and drives with partner employers in Pune and Mumbai." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 text-center sm:grid-cols-3">
		<div class="rounded-2xl bg-mint p-6"><p class="font-display text-3xl font-extrabold text-leaf-dark">{site.stats.placed.toLocaleString('en-IN')}+</p><p class="mt-1 text-sm font-semibold text-muted">students placed since 2016</p></div>
		<div class="rounded-2xl bg-mint p-6"><p class="font-display text-3xl font-extrabold text-leaf-dark">120+</p><p class="mt-1 text-sm font-semibold text-muted">partner employers</p></div>
		<div class="rounded-2xl bg-mint p-6"><p class="font-display text-3xl font-extrabold text-leaf-dark">4.8 / 5</p><p class="mt-1 text-sm font-semibold text-muted">student rating (9.8K reviews)</p></div>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Where our students work</h2>
	<div class="mt-6 overflow-x-auto rounded-2xl border border-line">
		<table class="w-full min-w-[560px] bg-white text-left text-sm">
			<thead><tr class="bg-leaf-deep text-white"><th scope="col" class="px-5 py-4 font-display">Employer (mock)</th><th scope="col" class="px-5 py-4 font-display">Typical role</th><th scope="col" class="px-5 py-4 font-display">EduLe graduates</th></tr></thead>
			<tbody>
				{#each placements as p, i}
					<tr class={i % 2 === 0 ? 'bg-white' : 'bg-mint/50'}>
						<th scope="row" class="px-5 py-4 font-bold">{p.company}</th>
						<td class="px-5 py-4">{p.role}</td>
						<td class="px-5 py-4 font-bold text-leaf-dark">{p.students}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="mt-3 text-sm text-muted">Employer names are illustrative placeholders for design review.</p>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">How placement support works</h2>
	<div class="mt-6 grid gap-6 md:grid-cols-4">
		{#each [
			{ n: '1', t: 'Resume & portfolio', d: 'We rebuild your CV and portfolio around the projects you actually built.' },
			{ n: '2', t: 'Mock interviews', d: 'Two practice interviews with feedback — technical and HR — before the real one.' },
			{ n: '3', t: 'Placement drives', d: 'Monthly drives with partner employers, on campus and online.' },
			{ n: '4', t: 'Until you are placed', d: 'Support continues after the course ends, at no extra charge.' }
		] as s}
			<div class="rounded-2xl border border-line bg-white p-6">
				<span class="flex h-11 w-11 items-center justify-center rounded-full bg-leaf font-display text-lg font-extrabold text-white" aria-hidden="true">{s.n}</span>
				<h3 class="mt-4 font-display text-lg font-bold">{s.t}</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
			</div>
		{/each}
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Placed students</h2>
	<div class="mt-6 grid gap-6 md:grid-cols-2">
		{#each testimonials as t}
			<figure class="rounded-2xl border border-line bg-white p-6 shadow-sm">
				<div class="flex gap-0.5" aria-label="Rated {t.rating} out of 5">{#each Array(t.rating) as _}<Star size={17} class="fill-gold text-gold" aria-hidden="true" />{/each}</div>
				<blockquote class="mt-3 leading-relaxed">“{t.text}”</blockquote>
				<figcaption class="mt-4 text-sm font-bold">{t.name} <span class="font-medium text-muted">— {t.course}</span></figcaption>
			</figure>
		{/each}
	</div>

	<div class="mt-10 flex flex-col items-start gap-4 rounded-3xl bg-leaf-deep px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
		<div>
			<h2 class="flex items-center gap-2 font-display text-2xl font-extrabold"><Briefcase size={24} aria-hidden="true" /> Ready to start your career?</h2>
			<p class="mt-2 max-w-xl text-sm leading-relaxed text-white/85">Pick a course, and placement support comes with it — free.</p>
		</div>
		<a href="/admissions" class="min-h-12 shrink-0 rounded-full bg-white px-8 py-3.5 font-display text-base font-bold text-leaf-deep">Enrol Now</a>
	</div>
	<p class="mt-6 flex items-start gap-2 text-sm text-muted"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /> Placement outcomes depend on the student’s effort, attendance and the job market. EduLe does not guarantee a job or a salary — we guarantee the support, training and introductions.</p>
</div>
