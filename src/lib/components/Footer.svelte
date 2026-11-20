<script lang="ts">
	import { BookOpen, Mail, MapPin, Phone } from '@lucide/svelte';
	import SocialIcon from '#lib/components/SocialIcon.svelte';
	import { site } from '#lib/data/site.ts';
</script>

<footer class="bg-leaf-deep text-white">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
		<div>
			<a href="/" class="flex items-center gap-2" aria-label="EduLe home">
				<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-leaf-dark" aria-hidden="true"><BookOpen size={24} /></span>
				<span class="font-display text-2xl font-extrabold">Edu<span class="text-mint-deep">Le</span></span>
			</a>
			<p class="mt-4 text-sm leading-relaxed text-white/80">
				Computer Training Institute in Pune — practical, job-ready courses in development, data, design, accounting and business, taught by working professionals.
			</p>
			<div class="mt-4 flex gap-2">
				<a href={site.facebook} target="_blank" rel="noopener" aria-label="EduLe on Facebook" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><SocialIcon name="facebook" size={18} /></a>
				<a href={site.twitter} target="_blank" rel="noopener" aria-label="EduLe on X" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><SocialIcon name="x" size={18} /></a>
				<a href={site.instagram} target="_blank" rel="noopener" aria-label="EduLe on Instagram" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><SocialIcon name="instagram" size={18} /></a>
				<a href={site.youtube} target="_blank" rel="noopener" aria-label="EduLe on YouTube" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><SocialIcon name="youtube" size={18} /></a>
				<a href={site.linkedin} target="_blank" rel="noopener" aria-label="EduLe on LinkedIn" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><SocialIcon name="linkedin" size={18} /></a>
			</div>
		</div>
		<nav aria-label="Courses">
			<h2 class="font-display text-lg font-bold">Popular Courses</h2>
			<ul class="mt-4 space-y-2.5 text-sm text-white/80">
				<li><a class="hover:text-white hover:underline" href="/courses/data-science-python">Data Science with Python</a></li>
				<li><a class="hover:text-white hover:underline" href="/courses/web-development">Full-Stack Web Development</a></li>
				<li><a class="hover:text-white hover:underline" href="/courses/tally-gst">Tally Prime with GST</a></li>
				<li><a class="hover:text-white hover:underline" href="/courses/ux-color-schemes">UX Design</a></li>
				<li><a class="hover:text-white hover:underline" href="/courses/excel-advanced">Advanced Excel</a></li>
			</ul>
		</nav>
		<nav aria-label="Institute">
			<h2 class="font-display text-lg font-bold">Institute</h2>
			<ul class="mt-4 space-y-2.5 text-sm text-white/80">
				<li><a class="hover:text-white hover:underline" href="/about">About Us</a></li>
				<li><a class="hover:text-white hover:underline" href="/instructors">Our Instructors</a></li>
				<li><a class="hover:text-white hover:underline" href="/fees">Fees &amp; Instalments</a></li>
				<li><a class="hover:text-white hover:underline" href="/certificates">Certificates</a></li>
				<li><a class="hover:text-white hover:underline" href="/placements">Placements</a></li>
				<li><a class="hover:text-white hover:underline" href="/alumni">Alumni Stories</a></li>
				<li><a class="hover:text-white hover:underline" href="/faq">FAQ</a></li>
			</ul>
		</nav>
		<nav aria-label="Explore">
			<h2 class="font-display text-lg font-bold">Explore</h2>
			<ul class="mt-4 space-y-2.5 text-sm text-white/80">
				<li><a class="hover:text-white hover:underline" href="/demo">Free Demo Class</a></li>
				<li><a class="hover:text-white hover:underline" href="/batches">Batch Timetable</a></li>
				<li><a class="hover:text-white hover:underline" href="/career-paths">Career Paths</a></li>
				<li><a class="hover:text-white hover:underline" href="/workshops">Free Workshops</a></li>
				<li><a class="hover:text-white hover:underline" href="/scholarships">Scholarships</a></li>
				<li><a class="hover:text-white hover:underline" href="/emi-calculator">EMI Calculator</a></li>
				<li><a class="hover:text-white hover:underline" href="/compare">Compare Courses</a></li>
				<li><a class="hover:text-white hover:underline" href="/corporate">Corporate Training</a></li>
				<li><a class="hover:text-white hover:underline" href="/employers">Hire from EduLe</a></li>
				<li><a class="hover:text-white hover:underline" href="/referral">Refer &amp; Earn</a></li>
			</ul>
		</nav>
		<div>
			<h2 class="font-display text-lg font-bold">Contact</h2>
			<ul class="mt-4 space-y-3 text-sm text-white/80">
				<li class="flex gap-2"><MapPin size={18} class="shrink-0" aria-hidden="true" /><span>{site.address}</span></li>
				<li class="flex gap-2"><Phone size={18} class="shrink-0" aria-hidden="true" /><a href={site.phoneHref} class="hover:text-white hover:underline">{site.phoneDisplay}</a></li>
				<li class="flex gap-2"><Mail size={18} class="shrink-0" aria-hidden="true" /><a href="mailto:{site.email}" class="hover:text-white hover:underline">{site.email}</a></li>
				<li class="text-white/70">{site.hours}</li>
			</ul>
		</div>
	</div>
	<div class="border-t border-white/15">
		<div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-white/70">
			<p>© 2026 EduLe Computer Training Institute, Pune. All rights reserved. Demo site — mock data only.</p>
			<p class="flex flex-wrap gap-4"><a href="/privacy" class="hover:text-white hover:underline">Privacy Policy</a><a href="/terms" class="hover:text-white hover:underline">Terms of Service</a><a href="/refund" class="hover:text-white hover:underline">Refund Policy</a><a href="/accessibility" class="hover:text-white hover:underline">Accessibility</a><a href="/sitemap" class="hover:text-white hover:underline">Sitemap</a></p>
		</div>
	</div>
</footer>
