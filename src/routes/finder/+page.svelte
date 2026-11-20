<script lang="ts">
	import { ArrowRight, Compass, RotateCcw } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import CourseCard from '#lib/components/CourseCard.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { careerPaths, courses, getCourse, type Course } from '#lib/data/site.ts';

	let step = $state(0);
	let goal = $state('');
	let background = $state('');
	let time = $state('');

	const goals = [
		{ id: 'job', label: 'Get a job', desc: 'I want a job as soon as possible' },
		{ id: 'switch', label: 'Switch careers', desc: 'I work now, but want a new field' },
		{ id: 'business', label: 'Grow my business', desc: 'I run a shop or small business' },
		{ id: 'skill', label: 'Learn a new skill', desc: 'For myself, at my own pace' }
	];
	const backgrounds = [
		{ id: 'student', label: 'Student / recent graduate', desc: '12th pass, graduate, or studying' },
		{ id: 'working', label: 'Working professional', desc: 'Employed full-time' },
		{ id: 'business', label: 'Business owner', desc: 'Shop, agency or small business' },
		{ id: 'homemaker', label: 'Homemaker / returning to work', desc: 'Restarting a career' }
	];
	const times = [
		{ id: 'low', label: '2–4 hours a week', desc: 'Evenings or weekends only' },
		{ id: 'mid', label: '5–8 hours a week', desc: 'A few evenings a week' },
		{ id: 'high', label: '9+ hours a week', desc: 'I can study most days' }
	];

	const recommendations = $derived.by(() => {
		if (step < 3) return [] as Course[];
		let ids: string[] = [];
		if (goal === 'job') ids = ['data-science-python', 'web-development', 'tally-gst'];
		else if (goal === 'switch') ids = ['python-programming', 'ux-color-schemes', 'cloud-computing-aws'];
		else if (goal === 'business') ids = ['brand-marketing', 'excel-advanced', 'tally-gst'];
		else ids = ['finance-budget', 'ux-color-schemes', 'python-programming'];
		if (background === 'business' && goal !== 'business') ids = ['brand-marketing', 'excel-advanced', 'finance-budget'];
		// Low time (2–4 hrs/week) must only ever recommend short courses.
		// Old fallback appended 16-week web-development — defeating the filter.
		if (time === 'low') {
			const short = courses.filter((c) => c.weeks <= 8).map((c) => c.id);
			ids = ids.filter((id) => (getCourse(id)?.weeks ?? 99) <= 8);
			for (const id of short) if (ids.length < 3 && !ids.includes(id)) ids.push(id);
			ids = ids.slice(0, 3);
		} else if (ids.length < 2) ids = [...ids, 'web-development', 'excel-advanced'].filter((v, i, a) => a.indexOf(v) === i).slice(0, 3);
		return ids.slice(0, 3).map((id) => getCourse(id)).filter((c) => c !== undefined) as Course[];
	});

	const suggestedPath = $derived.by(() => {
		if (step < 3) return null;
		if (goal === 'job') return careerPaths.find((p) => p.slug === 'data-analyst');
		if (goal === 'switch') return careerPaths.find((p) => p.slug === 'full-stack-developer');
		if (goal === 'business') return careerPaths.find((p) => p.slug === 'accountant');
		return null;
	});

	function reset() {
		step = 0;
		goal = '';
		background = '';
		time = '';
	}
</script>

<Seo
	title="Course Finder — EduLe"
	description="Not sure which course to take? Answer 3 quick questions about your goal, background and available time — EduLe recommends the right course in 2 minutes."
	image="classroom"
/>

<PageHero eyebrow="Course Finder" title="Find your course in 2 minutes" text="Three quick questions. No sign-up, no sales call — just a recommendation that fits your goal, your background and your week." />

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<ol class="flex items-center justify-between gap-2 text-center text-xs font-bold sm:text-sm" aria-label="Finder progress">
		{#each ['1. Your goal', '2. Background', '3. Your time'] as label, i}
			<li class="flex-1 rounded-full px-2 py-2.5 {step >= i ? 'bg-leaf text-white' : 'bg-mint text-leaf-dark'}">{label}</li>
		{/each}
	</ol>

	{#if step === 0}
		<div class="mt-8">
			<h2 class="font-display text-2xl font-extrabold">What do you want to achieve?</h2>
			<div class="mt-5 grid gap-3 sm:grid-cols-2">
				{#each goals as g}
					<button type="button" class="min-h-16 rounded-2xl border border-line bg-white p-5 text-left hover:border-leaf hover:bg-mint" onclick={() => { goal = g.id; step = 1; }}>
						<span class="block font-display text-base font-bold">{g.label}</span>
						<span class="mt-1 block text-sm text-muted">{g.desc}</span>
					</button>
				{/each}
			</div>
		</div>
	{:else if step === 1}
		<div class="mt-8">
			<h2 class="font-display text-2xl font-extrabold">Which best describes you?</h2>
			<div class="mt-5 grid gap-3 sm:grid-cols-2">
				{#each backgrounds as b}
					<button type="button" class="min-h-16 rounded-2xl border border-line bg-white p-5 text-left hover:border-leaf hover:bg-mint" onclick={() => { background = b.id; step = 2; }}>
						<span class="block font-display text-base font-bold">{b.label}</span>
						<span class="mt-1 block text-sm text-muted">{b.desc}</span>
					</button>
				{/each}
			</div>
			<button type="button" class="mt-6 font-bold text-leaf-dark hover:underline" onclick={() => (step = 0)}>← Back</button>
		</div>
	{:else if step === 2}
		<div class="mt-8">
			<h2 class="font-display text-2xl font-extrabold">How much time can you give each week?</h2>
			<div class="mt-5 grid gap-3 sm:grid-cols-3">
				{#each times as t}
					<button type="button" class="min-h-16 rounded-2xl border border-line bg-white p-5 text-left hover:border-leaf hover:bg-mint" onclick={() => { time = t.id; step = 3; }}>
						<span class="block font-display text-base font-bold">{t.label}</span>
						<span class="mt-1 block text-sm text-muted">{t.desc}</span>
					</button>
				{/each}
			</div>
			<button type="button" class="mt-6 font-bold text-leaf-dark hover:underline" onclick={() => (step = 1)}>← Back</button>
		</div>
	{:else}
		<div class="mt-8">
			<h2 class="flex items-center gap-2 font-display text-2xl font-extrabold"><Compass size={24} class="text-leaf-dark" aria-hidden="true" /> Your recommended courses</h2>
			<p class="mt-2 text-sm text-muted">Based on your goal, background and available time. Tap any course to see its full syllabus, fees and next batch.</p>
			{#if time === 'low'}<p class="mt-2 rounded-xl bg-mint px-4 py-3 text-sm font-bold text-leaf-dark">Showing short courses only (8 weeks or less) — these fit 2–4 hours a week.</p>{/if}
			<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each recommendations as course (course.id)}
					<CourseCard {course} />
				{/each}
			</div>
			{#if suggestedPath}
				<div class="mt-8 rounded-2xl bg-mint p-6">
					<h3 class="font-display text-xl font-extrabold">Want the full journey? Try the {suggestedPath.title} path</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{suggestedPath.goal} Bundled at a lower price than buying the courses separately.</p>
					<a href="/career-paths/{suggestedPath.slug}" class="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-leaf px-6 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">View Career Path <ArrowRight size={17} aria-hidden="true" /></a>
				</div>
			{/if}
			<div class="mt-8 flex flex-wrap gap-3">
				<button type="button" class="flex min-h-12 items-center gap-2 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white" onclick={reset}><RotateCcw size={17} aria-hidden="true" /> Start Over</button>
				<a href="/demo" class="min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Book a Free Demo</a>
				<a href="/courses" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Browse All Courses</a>
			</div>
		</div>
	{/if}
</div>
