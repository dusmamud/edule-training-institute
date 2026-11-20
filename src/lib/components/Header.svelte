<script lang="ts">
	import { BookOpen, Mail, Menu, Phone, X } from '@lucide/svelte';
	import SocialIcon from '#lib/components/SocialIcon.svelte';
	import { site } from '#lib/data/site.ts';

	let open = $state(false);
	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/courses', label: 'All Courses' },
		{ href: '/fees', label: 'Fees' },
		{ href: '/certificates', label: 'Certificates' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<!-- Top bar -->
<div class="bg-leaf-deep text-white">
	<div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-xs sm:text-sm">
		<p class="font-semibold">Up to 30% off all courses for new enrolments</p>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-1">
			<a href={site.phoneHref} class="flex min-h-8 items-center gap-1.5 hover:underline">
				<Phone size={14} aria-hidden="true" /> {site.phoneDisplay}
			</a>
			<a href="mailto:{site.email}" class="flex min-h-8 items-center gap-1.5 hover:underline">
				<Mail size={14} aria-hidden="true" /> {site.email}
			</a>
			<span class="hidden items-center gap-3 md:flex" aria-label="Social links">
				<a href={site.facebook} target="_blank" rel="noopener" aria-label="EduLe on Facebook" class="hover:opacity-80"><SocialIcon name="facebook" size={15} /></a>
				<a href={site.twitter} target="_blank" rel="noopener" aria-label="EduLe on X" class="hover:opacity-80"><SocialIcon name="x" size={15} /></a>
				<a href={site.instagram} target="_blank" rel="noopener" aria-label="EduLe on Instagram" class="hover:opacity-80"><SocialIcon name="instagram" size={15} /></a>
				<a href={site.youtube} target="_blank" rel="noopener" aria-label="EduLe on YouTube" class="hover:opacity-80"><SocialIcon name="youtube" size={15} /></a>
				<a href={site.linkedin} target="_blank" rel="noopener" aria-label="EduLe on LinkedIn" class="hover:opacity-80"><SocialIcon name="linkedin" size={15} /></a>
			</span>
		</div>
	</div>
</div>

<header class="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
		<a href="/" class="flex min-h-11 items-center gap-2" aria-label="EduLe home">
			<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf text-white" aria-hidden="true">
				<BookOpen size={24} />
			</span>
			<span class="font-display text-2xl font-extrabold tracking-tight text-ink">Edu<span class="text-leaf">Le</span></span>
		</a>
		<nav class="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
			{#each nav as item}
				<a href={item.href} class="rounded-full px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-mint hover:text-leaf-dark">{item.label}</a>
			{/each}
		</nav>
		<div class="hidden items-center gap-2 lg:flex">
			<a href="/login" class="rounded-full px-4 py-2.5 text-sm font-semibold text-ink hover:text-leaf-dark">Sign In</a>
			<a href="/demo" class="min-h-11 rounded-full bg-leaf px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-leaf-dark">Free Demo Class</a>
			<a href="/admissions" class="min-h-11 rounded-full border-2 border-leaf px-5 py-2.5 text-sm font-bold text-leaf-dark transition-colors duration-200 hover:bg-leaf hover:text-white">Sign Up</a>
		</div>
		<button
			type="button"
			class="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line lg:hidden"
			aria-expanded={open}
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={() => (open = !open)}
		>
			{#if open}<X size={24} aria-hidden="true" />{:else}<Menu size={24} aria-hidden="true" />{/if}
		</button>
	</div>
	{#if open}
		<nav class="border-t border-line bg-white px-4 py-3 lg:hidden" aria-label="Mobile navigation">
			{#each nav as item}
				<a href={item.href} onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">{item.label}</a>
			{/each}
			<a href="/about" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">About</a>
			<a href="/instructors" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Instructors</a>
			<a href="/placements" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Placements</a>
			<a href="/demo" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Free Demo Class</a>
			<a href="/batches" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Batch Timetable</a>
			<a href="/career-paths" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Career Paths</a>
			<a href="/workshops" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Free Workshops</a>
			<a href="/scholarships" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Scholarships</a>
			<a href="/faq" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">FAQ</a>
			<a href="/login" onclick={() => (open = false)} class="block min-h-11 rounded-lg px-3 py-3 text-base font-semibold hover:bg-mint">Student Sign In</a>
			<a href="/admissions" onclick={() => (open = false)} class="mt-2 block min-h-12 rounded-full bg-leaf px-5 py-3 text-center text-base font-bold text-white">Sign Up — Enrol Now</a>
		</nav>
	{/if}
</header>
