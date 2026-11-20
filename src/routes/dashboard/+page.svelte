<script lang="ts">
	import { Award, BookOpen, CalendarClock, LogOut, PlayCircle } from '@lucide/svelte';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { courses, getCourse } from '#lib/data/site.ts';

	type Enrolled = { id: string; progress: number; nextLesson: string };

	const demoEnrolled: Enrolled[] = [
		{ id: 'data-science-python', progress: 62, nextLesson: 'Module 3: Regression & classification' },
		{ id: 'web-development', progress: 34, nextLesson: 'Module 2: JavaScript, DOM & fetch APIs' }
	];

	let user = $state<{ name: string; email: string } | null>(null);
	// Signed-out visitors see NO personal enrolments, instalments or
	// certificates (P2-8 fix) — the demo data only appears after sign-in.
	let enrolled = $state<Enrolled[]>([]);

	$effect(() => {
		if (!browser) return;
		try {
			const raw = localStorage.getItem('edule-user');
			if (raw) {
				user = JSON.parse(raw);
				enrolled = demoEnrolled;
			}
		} catch {
			/* ignore */
		}
	});

	function logout() {
		if (browser) {
			try {
				localStorage.removeItem('edule-user');
			} catch {
				/* ignore */
			}
		}
		goto('/login');
	}

	const totalProgress = $derived(Math.round(enrolled.reduce((a, e) => a + e.progress, 0) / Math.max(1, enrolled.length)));
</script>

<Seo
	title="My Learning Dashboard — EduLe"
	description="Your EduLe student dashboard: enrolled courses, progress, next lessons, upcoming batches and certificates."
	image="classroom"
/>

<PageHero eyebrow="My Learning" title="Welcome back{user ? `, ${user.name.split(' ')[0]}` : ''}" text={user ? `Signed in as ${user.email} — here is where your learning stands.` : 'This is a demo dashboard with sample enrolments. Sign in to see your own courses.'} />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	{#if user}
	<div class="flex flex-wrap items-center justify-between gap-4">
		<div class="grid grid-cols-3 gap-4">
			<div class="rounded-2xl bg-mint p-4 text-center"><p class="font-display text-2xl font-extrabold text-leaf-dark">{enrolled.length}</p><p class="text-xs font-semibold text-muted">courses enrolled</p></div>
			<div class="rounded-2xl bg-mint p-4 text-center"><p class="font-display text-2xl font-extrabold text-leaf-dark">{totalProgress}%</p><p class="text-xs font-semibold text-muted">average progress</p></div>
			<div class="rounded-2xl bg-mint p-4 text-center"><p class="font-display text-2xl font-extrabold text-leaf-dark">1</p><p class="text-xs font-semibold text-muted">certificate earned</p></div>
		</div>
			<button type="button" class="flex min-h-12 items-center gap-2 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white" onclick={logout}><LogOut size={18} aria-hidden="true" /> Sign Out</button>
	</div>
	{:else}
	<div class="rounded-2xl border border-leaf bg-mint p-8 text-center">
		<h2 class="font-display text-2xl font-extrabold">Sign in to see your courses</h2>
		<p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">Your enrolled courses, progress, next lessons and certificates appear here after you sign in. This is a demo dashboard — try it with the demo account.</p>
		<a href="/login" class="mt-5 inline-block min-h-12 rounded-full bg-leaf px-8 py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Sign In</a>
		<p class="mt-3 text-sm text-muted">Demo: demo@edule.in / demo1234</p>
	</div>
	{/if}

	{#if user}
	<h2 class="mt-10 font-display text-2xl font-extrabold sm:text-3xl">Continue learning</h2>
	<div class="mt-6 grid gap-6 md:grid-cols-2">
		{#each enrolled as e}
			{@const c = getCourse(e.id)}
			{#if c}
				<article class="rounded-2xl border border-line bg-white p-6">
					<p class="text-xs font-bold tracking-wide text-leaf-dark uppercase">{c.category} · {c.weeks} weeks</p>
					<h3 class="mt-2 font-display text-lg font-bold"><a href="/courses/{c.id}" class="hover:text-leaf-dark hover:underline">{c.title}</a></h3>
					<div class="mt-4 h-3 overflow-hidden rounded-full bg-mint" role="progressbar" aria-valuenow={e.progress} aria-valuemin={0} aria-valuemax={100} aria-label="Progress in {c.title}">
						<div class="h-full rounded-full bg-leaf transition-all duration-700" style="width: {e.progress}%"></div>
					</div>
					<p class="mt-2 text-sm font-bold">{e.progress}% complete</p>
					<p class="mt-1 flex items-center gap-2 text-sm text-muted"><PlayCircle size={16} class="text-leaf-dark" aria-hidden="true" /> Next: {e.nextLesson}</p>
					<div class="mt-4 flex flex-wrap gap-3">
						<a href="/courses/{c.id}" class="min-h-11 rounded-full bg-leaf px-5 py-2.5 text-sm font-bold text-white hover:bg-leaf-dark">Continue Lesson</a>
						<a href="/batches" class="min-h-11 rounded-full border-2 border-leaf px-5 py-2.5 text-sm font-bold text-leaf-dark hover:bg-leaf hover:text-white">Batch: {c.nextBatch.date}</a>
					</div>
				</article>
			{/if}
		{/each}
	</div>

	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		<div class="rounded-2xl border border-line bg-white p-6">
			<h2 class="flex items-center gap-2 font-display text-xl font-extrabold"><Award size={22} class="text-leaf-dark" aria-hidden="true" /> My certificates</h2>
			<ul class="mt-4 space-y-3 text-sm">
				<li class="flex items-center justify-between gap-3 rounded-xl bg-mint px-4 py-3"><span><strong>Finance Series: Budget &amp; Net Worth</strong><span class="block text-xs text-muted">Completed · Code EDULE-2026-0213</span></span><a href="/certificates" class="font-bold whitespace-nowrap text-leaf-dark hover:underline">Verify →</a></li>
				<li class="rounded-xl border border-line px-4 py-3 text-muted">Data Science with Python — in progress (62%). Certificate unlocks at 100% + final assessment.</li>
				<li class="rounded-xl border border-line px-4 py-3 text-muted">Full-Stack Web Development — in progress (34%).</li>
			</ul>
		</div>
		<div class="rounded-2xl bg-leaf-deep p-6 text-white">
			<h2 class="flex items-center gap-2 font-display text-xl font-extrabold"><CalendarClock size={22} aria-hidden="true" /> Coming up</h2>
			<ul class="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
				<li><strong class="text-white">Mon, 23 Nov — Data Science batch, 9:00 am</strong><br />Module 3 live session + doubt-clearing slot.</li>
				<li><strong class="text-white">Sat, 28 Nov — Free workshop: AI Tools for Office Work</strong><br />11:00 am, live online. <a href="/workshops" class="font-bold text-white underline">Reserve a seat →</a></li>
				<li><strong class="text-white">Your next instalment</strong><br />₹16,250 due midway through the Data Science batch. <a href="/fees" class="font-bold text-white underline">See fee details →</a></li>
			</ul>
		</div>
	</div>

	<div class="mt-10 rounded-2xl bg-mint p-6">
		<h2 class="flex items-center gap-2 font-display text-xl font-extrabold"><BookOpen size={22} class="text-leaf-dark" aria-hidden="true" /> Keep going</h2>
		<p class="mt-2 text-sm leading-relaxed text-muted">Explore more courses, career paths, or book a free demo of your next course.</p>
		<div class="mt-4 flex flex-wrap gap-3">
			<a href="/courses" class="min-h-12 rounded-full bg-leaf px-6 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Browse Courses</a>
			<a href="/career-paths" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Career Paths</a>
			<a href="/demo" class="min-h-12 rounded-full border-2 border-leaf px-6 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Free Demo Class</a>
		</div>
	</div>
	{/if}
</div>
