<script lang="ts">
	import Picture from '#lib/components/Picture.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { instructors } from '#lib/data/site.ts';
</script>

<Seo
	title="Our Instructors — EduLe Computer Training Institute"
	description="Meet the EduLe faculty — working professionals teaching development, data science, design, finance and marketing in Pune and live online."
	image="instructor-teaching"
/>

<PageHero eyebrow="Instructors" title="Learn from people who do the work" text="Our faculty are working professionals — engineers, designers, accountants and marketers — who teach what they practise every day." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each instructors as t}
			<article class="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
				<a href="/instructors/{t.slug}" aria-label="About {t.name}">
					{#if t.image}
						<Picture name={t.image} alt="Portrait of {t.name}" width={400} height={400} sizes="200px" imgClass="mx-auto h-32 w-32 rounded-full object-cover" />
					{:else}
						<span class="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-mint font-display text-4xl font-extrabold text-leaf-dark" aria-hidden="true">{t.name.charAt(0)}</span>
					{/if}
				</a>
				<h2 class="mt-4 font-display text-xl font-bold"><a href="/instructors/{t.slug}" class="hover:text-leaf-dark hover:underline">{t.name}</a></h2>
				<p class="text-sm font-bold text-leaf-dark">{t.role}</p>
				<p class="mt-3 text-sm leading-relaxed text-muted">{t.bio}</p>
				<p class="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-semibold text-ink">
					<span>{t.exp} experience</span><span>{t.students.toLocaleString('en-IN')}+ students</span><span>{t.courses} courses</span>
				</p>
			</article>
		{/each}
	</div>
	<div class="mt-10 rounded-3xl bg-mint px-6 py-10 text-center sm:px-10">
		<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Want to teach with EduLe?</h2>
		<p class="mx-auto mt-3 max-w-xl leading-relaxed text-muted">We are always looking for working professionals who love teaching. Share your details on the Contact page and our team will get in touch.</p>
		<a href="/contact" class="mt-6 inline-block min-h-12 rounded-full bg-leaf px-8 py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">Apply to Teach</a>
	</div>
</div>
