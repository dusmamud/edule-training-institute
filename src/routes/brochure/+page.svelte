<script lang="ts">
	import { Download, Printer } from '@lucide/svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { careerPaths, courses, inr, site } from '#lib/data/site.ts';

	function printPage() {
		window.print();
	}
</script>

<Seo
	title="Download Brochure — EduLe"
	description="The EduLe brochure: all courses, fees, career paths, batches and scholarships in one printable page. Save as PDF or print."
	image="classroom"
/>

<div class="mx-auto max-w-3xl px-4 py-10 sm:py-14">
	<div class="no-print mb-6 flex flex-wrap gap-3">
		<button type="button" class="flex min-h-12 items-center gap-2 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark" onclick={printPage}><Printer size={18} aria-hidden="true" /> Print / Save as PDF</button>
		<a href="/courses" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">← Browse Courses</a>
	</div>

	<div class="rounded-2xl border border-line bg-white p-6 sm:p-10">
		<div class="flex items-start justify-between gap-4 border-b border-line pb-6">
			<div>
				<p class="font-display text-3xl font-extrabold">Edu<span class="text-leaf">Le</span></p>
				<p class="mt-1 font-bold text-leaf-dark">Computer Training Institute · Pune</p>
				<p class="mt-1 text-sm text-muted">Learn from anywhere. Build your bright career.</p>
			</div>
			<p class="text-right text-sm text-muted">{site.address}<br />{site.phoneDisplay}<br />{site.email}<br />{site.hours}</p>
		</div>

		<h2 class="mt-8 font-display text-xl font-extrabold">All courses &amp; fees</h2>
		<table class="mt-4 w-full text-left text-sm">
			<thead><tr class="border-b border-line"><th scope="col" class="py-2 pr-3">Course</th><th scope="col" class="py-2 pr-3">Weeks</th><th scope="col" class="py-2 pr-3">Mode</th><th scope="col" class="py-2 text-right">Fee</th></tr></thead>
			<tbody>
				{#each courses as c}
					<tr class="border-b border-line/60">
						<td class="py-2 pr-3 font-bold">{c.title}</td>
						<td class="py-2 pr-3">{c.weeks}</td>
						<td class="py-2 pr-3">{c.mode}</td>
						<td class="py-2 text-right font-bold text-leaf-dark">{c.price === 0 ? 'Free' : inr(c.price)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<p class="mt-2 text-sm text-muted">Up to 30% enrolment offer applied. Pay in full (extra 5% off), in 2 interest-free instalments, or on no-cost EMI.</p>

		<h2 class="mt-8 font-display text-xl font-extrabold">Career paths</h2>
		<ul class="mt-3 space-y-2 text-sm">
			{#each careerPaths as p}
				<li class="flex justify-between gap-4"><span><strong>{p.title}</strong> — {p.courses.length} courses, {p.weeks} weeks · Leads to {p.roles.join(', ')}</span><span class="font-bold whitespace-nowrap text-leaf-dark">{inr(p.bundle)}</span></li>
			{/each}
		</ul>

		<h2 class="mt-8 font-display text-xl font-extrabold">Why EduLe</h2>
		<ul class="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
			<li>• {site.stats.students.toLocaleString('en-IN')}+ students trained since 2016 · {site.stats.placed.toLocaleString('en-IN')}+ placed in jobs · 4.8/5 student rating</li>
			<li>• Small batches (max 25), working professionals as faculty, hands-on projects in every course</li>
			<li>• Verifiable certificates, placement support, 7-day refund window, free demo class for every course</li>
			<li>• Scholarships: merit up to ₹10,000, Women in Tech 15% off, early-bird 10% off, Refer &amp; Earn ₹1,000</li>
			<li>• Classroom in Pune + live online across India · Morning, afternoon, evening &amp; weekend batches</li>
		</ul>
		<p class="mt-8 text-xs text-muted">Brochure for design review — mock content. Fees and batch dates are illustrative; confirm at enrolment. {site.url}</p>
	</div>

	<p class="no-print mt-6 text-center text-sm text-muted">
		<Download size={15} class="inline" aria-hidden="true" /> Tip: in the print dialog, choose “Save as PDF” to download this brochure.
	</p>
</div>
