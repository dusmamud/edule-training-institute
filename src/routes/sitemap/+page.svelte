<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { blogPosts, careerPaths, courses, instructors, workshops } from '#lib/data/site.ts';

	const groups = [
		{ title: 'Main pages', links: [
			{ href: '/', label: 'Home' },
			{ href: '/courses', label: 'All Courses' },
			{ href: '/career-paths', label: 'Career Paths' },
			{ href: '/fees', label: 'Fees & Instalments' },
			{ href: '/emi-calculator', label: 'EMI Calculator' },
			{ href: '/compare', label: 'Compare Courses' },
			{ href: '/certificates', label: 'Certificates' },
			{ href: '/about', label: 'About EduLe' },
			{ href: '/instructors', label: 'Instructors' },
			{ href: '/placements', label: 'Placements' },
			{ href: '/placement-report', label: 'Placement Report (mock-labelled)' },
			{ href: '/gallery', label: 'Campus Gallery' },
			{ href: '/student-work', label: 'Student Work' },
			{ href: '/reviews', label: 'Reviews & Location' },
			{ href: '/mentorship', label: '1:1 Mentorship' },
			{ href: '/counselling', label: 'Free Counselling' },
			{ href: '/demo-lesson', label: 'Free Demo Lesson' },
			{ href: '/alumni', label: 'Alumni Stories' },
			{ href: '/blog', label: 'Blog' },
			{ href: '/faq', label: 'FAQ' },
			{ href: '/contact', label: 'Contact' }
		] },
		{ title: 'Admissions & offers', links: [
			{ href: '/admissions', label: 'Admissions & Enrolment' },
			{ href: '/demo', label: 'Free Demo Class' },
			{ href: '/batches', label: 'Batch Timetable' },
			{ href: '/finder', label: 'Course Finder' },
			{ href: '/scholarships', label: 'Scholarships' },
			{ href: '/referral', label: 'Refer & Earn' },
			{ href: '/workshops', label: 'Free Workshops' },
			{ href: '/brochure', label: 'Download Brochure' }
		] },
		{ title: 'Students & employers', links: [
			{ href: '/login', label: 'Student Sign In' },
			{ href: '/dashboard', label: 'My Learning Dashboard' },
			{ href: '/corporate', label: 'Corporate Training' },
			{ href: '/employers', label: 'Hire from EduLe' }
		] },
		{ title: 'Policies', links: [
			{ href: '/refund', label: 'Refund Policy' },
			{ href: '/privacy', label: 'Privacy Policy' },
			{ href: '/terms', label: 'Terms of Service' },
			{ href: '/accessibility', label: 'Accessibility' }
		] },
		{ title: 'Courses', links: courses.map((c) => ({ href: `/courses/${c.id}`, label: c.title })) },
		{ title: 'Course syllabuses', links: courses.map((c) => ({ href: `/courses/${c.id}/syllabus`, label: `${c.title.split('—')[0].trim()} — Syllabus` })) },
		{ title: 'Workshops', links: [{ href: '/workshops', label: 'All Free Workshops' }, ...workshops.map((w) => ({ href: `/workshops/${w.slug}`, label: w.title }))] },
		{ title: 'Career paths', links: careerPaths.map((p) => ({ href: `/career-paths/${p.slug}`, label: p.title })) },
		{ title: 'Instructors', links: instructors.map((t) => ({ href: `/instructors/${t.slug}`, label: t.name })) },
		{ title: 'Blog', links: blogPosts.map((b) => ({ href: `/blog/${b.slug}`, label: b.title })) }
	];
</script>

<Seo
	title="Sitemap — EduLe"
	description="Every page on the EduLe website: courses, career paths, fees, batches, scholarships, workshops, admissions, student dashboard and policies."
	image="classroom"
/>

<PageHero eyebrow="Sitemap" title="Every page, in one place" text="Browse the full EduLe website — courses, career paths, fees, admissions, student tools and policies." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
		{#each groups as g}
			<section>
				<h2 class="font-display text-lg font-extrabold">{g.title}</h2>
				<ul class="mt-3 space-y-2 text-sm">
					{#each g.links as l}
						<li><a href={l.href} class="text-leaf-dark hover:underline">{l.label}</a></li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</div>
