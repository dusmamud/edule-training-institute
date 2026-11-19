<script lang="ts">
	import { Award, BookOpen, Check, ChevronDown, Clock, Star, Users } from '@lucide/svelte';
	import Picture from '#lib/components/Picture.svelte';
	import CourseCard from '#lib/components/CourseCard.svelte';
	import { courses, inr, site } from '#lib/data/site.ts';

	let { data } = $props();
	const course = $derived(data.course);

	let openModule = $state(0);
	const related = courses.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3);
	const shownRelated = related.length ? related : courses.filter((c) => c.id !== course.id).slice(0, 3);
	const instalments = course.price === 0 ? [] : [Math.ceil(course.price / 2), course.price - Math.ceil(course.price / 2)];

	const courseJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: course.title,
		description: course.short,
		provider: { '@type': 'EducationalOrganization', name: 'EduLe Computer Training Institute', url: site.url },
		hasCourseInstance: { '@type': 'CourseInstance', courseMode: course.mode, courseWorkload: course.duration },
		offers: { '@type': 'Offer', price: course.price, priceCurrency: 'INR', availability: 'https://schema.org/InStock' }
	};
</script>

<svelte:head>
	<title>{course.title} — EduLe</title>
	<meta name="description" content="{course.short} Fees {course.price === 0 ? 'Free' : inr(course.price)}, {course.weeks} weeks, {course.lectures} lectures, certificate included. Classroom in Pune + live online." />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(courseJsonLd)}</script>`}
</svelte:head>

<section class="bg-mint">
	<div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:py-14 lg:grid-cols-5">
		<div class="lg:col-span-3">
			<p class="text-sm font-bold tracking-wide text-leaf-dark uppercase">{course.category} · {course.level}</p>
			<h1 class="mt-2 font-display text-3xl leading-tight font-extrabold text-ink sm:text-4xl">{course.title}</h1>
			<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{course.short}</p>
			<p class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink">
				<span class="flex items-center gap-1"><Star size={16} class="fill-gold text-gold" aria-hidden="true" />{course.rating.toFixed(1)} rating</span>
				<span class="flex items-center gap-1.5"><Users size={16} aria-hidden="true" />{course.students.toLocaleString('en-IN')} students</span>
				<span class="flex items-center gap-1.5"><Clock size={16} aria-hidden="true" />{course.duration} · {course.weeks} weeks</span>
				<span class="flex items-center gap-1.5"><BookOpen size={16} aria-hidden="true" />{course.lectures} lectures</span>
			</p>
			<div class="mt-5 flex items-center gap-3">
				{#if course.instructorImage}
					<Picture name={course.instructorImage} alt="Portrait of {course.instructor}" width={96} height={96} sizes="48px" imgClass="h-12 w-12 rounded-full object-cover" />
				{:else}
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-leaf-dark" aria-hidden="true">{course.instructor.charAt(0)}</span>
				{/if}
				<div>
					<p class="text-sm text-muted">Taught by</p>
					<p class="font-bold text-ink">{course.instructor}</p>
				</div>
			</div>
		</div>
		<div class="lg:col-span-2">
			<div class="overflow-hidden rounded-2xl border border-line bg-white shadow-md">
				<Picture name={course.image} alt={course.imageAlt} width={1200} height={750} eager={true} sizes="(max-width: 1024px) 100vw, 40vw" imgClass="aspect-[8/5] w-full object-cover" />
				<div class="p-6">
					<p class="font-display text-3xl font-extrabold text-leaf-dark">
						{#if course.price === 0}Free{:else}{inr(course.price)}{/if}
						{#if course.oldPrice}<span class="ml-2 text-lg font-medium text-muted line-through">{inr(course.oldPrice)}</span>{/if}
					</p>
					{#if course.price > 0}
						<p class="mt-1 text-sm text-muted">or 2 instalments of {inr(instalments[0])} — no extra charge. 25% enrolment offer applied.</p>
					{/if}
					<a href="/admissions?course={course.id}" class="mt-5 block min-h-12 rounded-full bg-leaf py-3.5 text-center font-display text-base font-bold text-white transition-colors duration-200 hover:bg-leaf-dark">Enrol Now</a>
					<a href="/fees" class="mt-3 block min-h-12 rounded-full border-2 border-leaf py-3 text-center font-display text-base font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf hover:text-white">See Full Fee Details</a>
					<ul class="mt-5 space-y-2 text-sm text-muted">
						<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> {course.mode}</li>
						<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> Recordings + study material included</li>
						<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> Verifiable certificate on completion</li>
						<li class="flex gap-2"><Check size={17} class="shrink-0 text-leaf-dark" aria-hidden="true" /> Placement support included</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-10 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">What you’ll learn</h2>
			<ul class="mt-5 grid gap-3 sm:grid-cols-2">
				{#each course.learn as item}
					<li class="flex gap-2.5 rounded-xl border border-line bg-white p-4 text-sm leading-relaxed font-medium"><Check size={18} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" />{item}</li>
				{/each}
			</ul>

			<h2 class="mt-10 font-display text-2xl font-extrabold sm:text-3xl">Course curriculum</h2>
			<div class="mt-5 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
				{#each course.curriculum as mod, i}
					<div>
						<button type="button" class="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold sm:text-lg" aria-expanded={openModule === i} onclick={() => (openModule = openModule === i ? -1 : i)}>
							<span>Module {i + 1}: {mod.title}</span>
							<ChevronDown size={20} class="shrink-0 text-leaf-dark transition-transform duration-200 {openModule === i ? 'rotate-180' : ''}" aria-hidden="true" />
						</button>
						{#if openModule === i}
							<ul class="space-y-2 px-5 pb-5">
								{#each mod.lessons as lesson}
									<li class="flex items-center gap-2 text-sm text-muted"><BookOpen size={15} class="shrink-0 text-leaf-dark" aria-hidden="true" />{lesson}</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/each}
			</div>

			<div class="mt-10 rounded-2xl bg-mint p-6">
				<h2 class="flex items-center gap-2 font-display text-xl font-extrabold"><Award size={22} class="text-leaf-dark" aria-hidden="true" /> Certificate included</h2>
				<p class="mt-2 leading-relaxed text-muted">Finish the course and pass the final assessment to earn a verifiable EduLe certificate with a unique code employers can check on our <a href="/certificates" class="font-semibold text-leaf-dark underline">Certificates page</a>. Add it to your CV and LinkedIn — we help with both.</p>
			</div>
		</div>

		<aside class="space-y-6">
			<div class="rounded-2xl border border-line bg-white p-6">
				<h2 class="font-display text-xl font-extrabold">Course facts</h2>
				<dl class="mt-4 space-y-3 text-sm">
					<div class="flex justify-between gap-4"><dt class="text-muted">Duration</dt><dd class="font-bold">{course.weeks} weeks · {course.duration}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Lectures</dt><dd class="font-bold">{course.lectures}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Level</dt><dd class="font-bold">{course.level}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Mode</dt><dd class="font-bold text-right">{course.mode}</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Batch size</dt><dd class="font-bold">Max 25 students</dd></div>
					<div class="flex justify-between gap-4"><dt class="text-muted">Language</dt><dd class="font-bold">English + Hindi</dd></div>
				</dl>
			</div>
			<div class="rounded-2xl bg-leaf-deep p-6 text-white">
				<h2 class="font-display text-xl font-extrabold">Not sure yet?</h2>
				<p class="mt-2 text-sm leading-relaxed text-white/85">Book a free counselling session or attend a demo class before you enrol. No fee, no obligation.</p>
				<a href="/contact" class="mt-4 block min-h-12 rounded-full bg-white py-3 text-center font-display text-base font-bold text-leaf-deep">Book a Free Demo Class</a>
			</div>
		</aside>
	</div>

	<h2 class="mt-14 font-display text-2xl font-extrabold sm:text-3xl">Related courses</h2>
	<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each shownRelated as c (c.id)}
			<CourseCard course={c} />
		{/each}
	</div>
</div>
