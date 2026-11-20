<script lang="ts">
	import { Award, Check, GraduationCap, Users } from '@lucide/svelte';
	import CourseCard from '#lib/components/CourseCard.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { courses } from '#lib/data/site.ts';

	let { data } = $props();
	const t = $derived(data.instructor);
	const taught = $derived(courses.filter((c) => c.instructor === t.name));
</script>

<Seo
	title="{t.name} — {t.role} — EduLe"
	description="{t.bio} {t.exp} experience, {t.students.toLocaleString('en-IN')}+ students taught. Courses by {t.name} at EduLe Pune."
	image={t.image ?? 'classroom'}
/>

<section class="bg-mint">
	<div class="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:py-14 lg:grid-cols-3">
		<div class="text-center lg:text-left">
			{#if t.image}
				<Picture name={t.image} alt="Portrait of {t.name}" width={400} height={400} sizes="240px" imgClass="mx-auto h-48 w-48 rounded-full object-cover lg:mx-0" />
			{:else}
				<span class="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white font-display text-6xl font-extrabold text-leaf-dark lg:mx-0" aria-hidden="true">{t.name.charAt(0)}</span>
			{/if}
		</div>
		<div class="lg:col-span-2">
			<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">{t.role}</p>
			<h1 class="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{t.name}</h1>
			<p class="mt-3 max-w-2xl leading-relaxed text-muted">{t.bio}</p>
			<dl class="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
				<div><dt class="sr-only">Experience</dt><dd class="font-display text-xl font-extrabold">{t.exp}</dd><dd class="text-muted">experience</dd></div>
				<div><dt class="sr-only">Students taught</dt><dd class="font-display text-xl font-extrabold">{t.students.toLocaleString('en-IN')}+</dd><dd class="text-muted">students taught</dd></div>
				<div><dt class="sr-only">Courses</dt><dd class="font-display text-xl font-extrabold">{taught.length}</dd><dd class="text-muted">courses at EduLe</dd></div>
			</dl>
			<p class="mt-4 text-sm"><strong>Background:</strong> {t.credentials} · Previously: {t.companies}</p>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-10 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Courses by {t.name.split(' ')[0]}</h2>
			{#if taught.length > 0}
				<div class="mt-6 grid gap-6 sm:grid-cols-2">
					{#each taught as course (course.id)}
						<CourseCard {course} />
					{/each}
				</div>
			{:else}
				<p class="mt-6 rounded-2xl border border-line bg-mint px-6 py-8 text-muted">New courses by {t.name} are being scheduled — check the full course list meanwhile.</p>
			{/if}
		</div>
		<aside class="space-y-6">
			<div class="rounded-2xl border border-line bg-white p-6">
				<h2 class="flex items-center gap-2 font-display text-xl font-extrabold"><Award size={22} class="text-leaf-dark" aria-hidden="true" /> Highlights</h2>
				<ul class="mt-4 space-y-3 text-sm leading-relaxed text-muted">
					{#each t.highlights as h}
						<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" />{h}</li>
					{/each}
				</ul>
			</div>
			<div class="rounded-2xl bg-leaf-deep p-6 text-white">
				<h2 class="flex items-center gap-2 font-display text-xl font-extrabold"><GraduationCap size={22} aria-hidden="true" /> Learn from {t.name.split(' ')[0]}</h2>
				<p class="mt-2 text-sm leading-relaxed text-white/85">Book a free demo class on any of {t.name.split(' ')[0]}’s courses and meet the faculty before you enrol.</p>
				<a href="/demo" class="mt-4 block min-h-12 rounded-full bg-white py-3 text-center font-display text-base font-bold text-leaf-deep">Book a Free Demo</a>
			</div>
			<p class="text-sm"><a href="/instructors" class="font-bold text-leaf-dark hover:underline">← All instructors</a></p>
		</aside>
	</div>
</div>
