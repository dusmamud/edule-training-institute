<script lang="ts">
	import { BookOpen, Clock, Star } from '@lucide/svelte';
	import Picture from '#lib/components/Picture.svelte';
	import { inr, type Course } from '#lib/data/site.ts';

	let { course }: { course: Course } = $props();
</script>

<article class="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg">
	<a href="/courses/{course.id}" class="block" aria-label={course.title}>
		<div class="relative">
			<Picture name={course.image} alt={course.imageAlt} width={800} height={500} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" imgClass="aspect-[8/5] w-full object-cover" />
			{#if course.badge}
				<span class="absolute top-3 left-3 rounded-full bg-leaf px-3 py-1 text-xs font-bold text-white">{course.badge}</span>
			{/if}
			<span class="absolute right-3 bottom-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-leaf-dark">{course.category}</span>
		</div>
	</a>
	<div class="flex flex-1 flex-col p-5">
		<div class="flex items-center gap-2 text-sm">
			{#if course.instructorImage}
				<Picture name={course.instructorImage} alt="Portrait of {course.instructor}" width={96} height={96} sizes="48px" imgClass="h-8 w-8 rounded-full object-cover" />
			{:else}
				<span class="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-sm font-bold text-leaf-dark" aria-hidden="true">{course.instructor.charAt(0)}</span>
			{/if}
			<span class="font-semibold text-ink">{course.instructor}</span>
			<span class="ml-auto flex items-center gap-1 font-bold text-ink"><Star size={15} class="fill-gold text-gold" aria-hidden="true" />{course.rating.toFixed(1)}</span>
		</div>
		<h3 class="mt-3 font-display text-lg leading-snug font-bold">
			<a href="/courses/{course.id}" class="hover:text-leaf-dark hover:underline">{course.title}</a>
		</h3>
		<p class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
			<span class="flex items-center gap-1.5"><Clock size={15} aria-hidden="true" />{course.duration}</span>
			<span class="flex items-center gap-1.5"><BookOpen size={15} aria-hidden="true" />{course.lectures} Lectures</span>
			<span>{course.level}</span>
		</p>
		<div class="mt-4 flex items-end justify-between border-t border-line pt-4">
			<p class="text-lg font-extrabold text-leaf-dark">
				{#if course.price === 0}Free{:else}{inr(course.price)}{/if}
				{#if course.oldPrice}<span class="ml-1 text-sm font-medium text-muted line-through">{inr(course.oldPrice)}</span>{/if}
			</p>
			<a href="/courses/{course.id}" class="min-h-11 rounded-full bg-mint px-4 py-2.5 text-sm font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf hover:text-white">View Course</a>
		</div>
	</div>
</article>
