<script lang="ts">
	import { Award, GraduationCap, MapPin, Users } from '@lucide/svelte';
	import Picture from '#lib/components/Picture.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { site } from '#lib/data/site.ts';
</script>

<svelte:head>
	<title>About EduLe — Computer Training Institute in Pune</title>
	<meta name="description" content="EduLe is a computer training institute in Pune. Since 2016 we have trained 28,400+ students in development, data, design, accounting and business — with certificates and placement support." />
</svelte:head>

<PageHero eyebrow="About EduLe" title="Practical computer education, since 2016" text="We started with one classroom in Pune and a simple idea: teach the skills employers actually ask for, with real projects and honest fees." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid items-center gap-8 lg:grid-cols-2">
		<Picture name="lab-students" alt="Students collaborating around a laptop in an EduLe computer lab" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" imgClass="w-full rounded-2xl object-cover" />
		<div>
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Our story</h2>
			<p class="mt-4 leading-relaxed text-muted">EduLe began in 2016 when our founder — then a software trainer — kept meeting bright graduates who could pass exams but could not do the job. We built the institute we wished existed: small batches, working professionals as faculty, and every course ending in something a student can show an employer.</p>
			<p class="mt-3 leading-relaxed text-muted">Today we run classroom batches in Pune and live online batches across India, with 42 instructors and 1,235 courses on our catalogue — from a 4-week budgeting course to a 16-week full-stack programme.</p>
			<dl class="mt-6 grid grid-cols-3 gap-4 text-center">
				<div class="rounded-2xl bg-mint p-4"><dt class="sr-only">Students trained</dt><dd class="font-display text-2xl font-extrabold text-leaf-dark">{site.stats.students.toLocaleString('en-IN')}+</dd><dd class="text-xs font-semibold text-muted">students trained</dd></div>
				<div class="rounded-2xl bg-mint p-4"><dt class="sr-only">Placed</dt><dd class="font-display text-2xl font-extrabold text-leaf-dark">{site.stats.placed.toLocaleString('en-IN')}+</dd><dd class="text-xs font-semibold text-muted">placed in jobs</dd></div>
				<div class="rounded-2xl bg-mint p-4"><dt class="sr-only">Instructors</dt><dd class="font-display text-2xl font-extrabold text-leaf-dark">{site.stats.instructors}</dd><dd class="text-xs font-semibold text-muted">instructors</dd></div>
			</dl>
		</div>
	</div>

	<div class="mt-14 grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl border border-line bg-white p-6"><GraduationCap size={26} class="text-leaf-dark" aria-hidden="true" /><h3 class="mt-3 font-display text-lg font-bold">Our mission</h3><p class="mt-2 text-sm leading-relaxed text-muted">Make job-ready computer skills affordable and practical for every student in India — whatever their background or budget.</p></div>
		<div class="rounded-2xl border border-line bg-white p-6"><Users size={26} class="text-leaf-dark" aria-hidden="true" /><h3 class="mt-3 font-display text-lg font-bold">How we teach</h3><p class="mt-2 text-sm leading-relaxed text-muted">Small batches, live faculty, hands-on labs and assessed projects. Theory is always followed by doing — in the same session.</p></div>
		<div class="rounded-2xl border border-line bg-white p-6"><Award size={26} class="text-leaf-dark" aria-hidden="true" /><h3 class="mt-3 font-display text-lg font-bold">What you leave with</h3><p class="mt-2 text-sm leading-relaxed text-muted">A portfolio of real work, a verifiable certificate, interview practice — and a team that keeps helping until you are placed.</p></div>
	</div>

	<div class="mt-14 grid items-center gap-8 lg:grid-cols-2">
		<div>
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Visit the campus</h2>
			<p class="mt-3 leading-relaxed text-muted">Drop in for a free counselling session or a demo class — weekdays 9:00 am to 7:00 pm IST, or book a slot on the Contact page.</p>
			<p class="mt-4 flex items-start gap-2 font-semibold"><MapPin size={20} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" />{site.address}</p>
			<p class="mt-2 text-muted">{site.hours}</p>
			<a href="/contact" class="mt-5 inline-block min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Get Directions &amp; Contact</a>
		</div>
		<Picture name="classroom" alt="Bright EduLe classroom with students at desktop computers" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" imgClass="w-full rounded-2xl object-cover" />
	</div>
</div>
