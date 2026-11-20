<script lang="ts">
	import { Download, Printer } from '@lucide/svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { inr, site } from '#lib/data/site.ts';

	let { data } = $props();
	const course = $derived(data.course);

	function printPage() {
		window.print();
	}
</script>

<Seo
	title="Syllabus — {course.title} — EduLe"
	description="Full syllabus for {course.title} at EduLe: modules, lessons, tools, fees and batch details. Download or print the syllabus."
	image={course.image}
/>

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<div class="no-print mb-6 flex flex-wrap gap-3">
		<button type="button" class="flex min-h-12 items-center gap-2 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark" onclick={printPage}><Printer size={18} aria-hidden="true" /> Print / Save as PDF</button>
		<a href="/courses/{course.id}" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">← Back to Course</a>
	</div>

	<div class="rounded-2xl border border-line bg-white p-6 sm:p-10">
		<div class="flex items-start justify-between gap-4 border-b border-line pb-6">
			<div>
				<p class="font-display text-2xl font-extrabold">Edu<span class="text-leaf">Le</span></p>
				<p class="text-sm text-muted">Computer Training Institute · Pune</p>
			</div>
			<p class="text-right text-sm text-muted">{site.address}<br />{site.phoneDisplay} · {site.email}</p>
		</div>

		<p class="mt-6 text-xs font-bold tracking-widest text-leaf-dark uppercase">Course Syllabus · {course.category} · {course.level}</p>
		<h1 class="mt-2 font-display text-3xl leading-tight font-extrabold">{course.title}</h1>
		<p class="mt-3 leading-relaxed text-muted">{course.short}</p>

		<dl class="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-mint p-5 text-sm sm:grid-cols-4">
			<div><dt class="text-muted">Duration</dt><dd class="font-bold">{course.weeks} weeks · {course.duration}</dd></div>
			<div><dt class="text-muted">Lectures</dt><dd class="font-bold">{course.lectures}</dd></div>
			<div><dt class="text-muted">Fee</dt><dd class="font-bold">{course.price === 0 ? 'Free' : inr(course.price)}</dd></div>
			<div><dt class="text-muted">Mode</dt><dd class="font-bold">{course.mode}</dd></div>
			<div><dt class="text-muted">Next batch</dt><dd class="font-bold">{course.nextBatch.date}</dd></div>
			<div><dt class="text-muted">Batch size</dt><dd class="font-bold">Max 25 students</dd></div>
			<div><dt class="text-muted">Language</dt><dd class="font-bold">English + Hindi</dd></div>
			<div><dt class="text-muted">Certificate</dt><dd class="font-bold">Verifiable, included</dd></div>
		</dl>

		<h2 class="mt-8 font-display text-xl font-extrabold">What you will learn</h2>
		<ul class="mt-3 space-y-2">
			{#each course.learn as item}
				<li class="flex gap-2 text-sm leading-relaxed"><span class="text-leaf-dark" aria-hidden="true">✓</span>{item}</li>
			{/each}
		</ul>

		<h2 class="mt-8 font-display text-xl font-extrabold">Curriculum</h2>
		{#each course.curriculum as mod, i}
			<h3 class="mt-5 font-display text-base font-bold">Module {i + 1}: {mod.title}</h3>
			<ul class="mt-2 space-y-1.5">
				{#each mod.lessons as lesson}
					<li class="flex gap-2 text-sm text-muted"><span aria-hidden="true">•</span>{lesson}</li>
				{/each}
			</ul>
		{/each}

		<h2 class="mt-8 font-display text-xl font-extrabold">Tools taught</h2>
		<p class="mt-2 text-sm leading-relaxed text-muted">{course.tools.join(' · ')}</p>

		<h2 class="mt-8 font-display text-xl font-extrabold">Jobs this prepares you for</h2>
		<p class="mt-2 text-sm leading-relaxed text-muted">{course.jobs.join(' · ')}</p>

		<div class="mt-8 rounded-2xl bg-mint p-5 text-sm leading-relaxed text-muted">
			<p><strong class="text-ink">Fees &amp; instalments:</strong> {course.price === 0 ? 'This course is free.' : `Full fee ${inr(course.price)}${course.oldPrice ? ` (was ${inr(course.oldPrice)})` : ''} — or 2 interest-free instalments, or no-cost EMI. See the Fees page for the full table.`}</p>
			<p class="mt-2"><strong class="text-ink">Certificate:</strong> verifiable EduLe certificate on completion, with a unique code employers can check online.</p>
			<p class="mt-2"><strong class="text-ink">Placement support:</strong> resume workshops, mock interviews and drives with partner employers — free for certificate-course students.</p>
		</div>
		<p class="mt-6 text-xs text-muted">Syllabus for design review — mock content. Batch dates and fees are illustrative; confirm at enrolment. {site.url}</p>
	</div>

	<p class="no-print mt-6 text-center text-sm text-muted">
		<Download size={15} class="inline" aria-hidden="true" /> Tip: in the print dialog, choose “Save as PDF” to download this syllabus.
	</p>
</div>
