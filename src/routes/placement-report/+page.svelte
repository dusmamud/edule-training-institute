<script lang="ts">
	import { Download } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import { placementReport } from '#lib/data/site.ts';

	const totalStudents = $derived(placementReport.reduce((a, r) => a + r.students, 0));
	const totalPlaced = $derived(placementReport.reduce((a, r) => a + r.placed, 0));
	const rate = $derived(Math.round((totalPlaced / totalStudents) * 100));
</script>

<Seo
	title="Placement Report — EduLe | Batch-wise Placement Outcomes"
	description="EduLe placement report: batch-wise students placed, roles and average packages. Published openly so you can judge us on outcomes, not promises."
	image="classroom"
/>

<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Placement Report' }]} />

<PageHero eyebrow="Placement Report" title="Outcomes, published openly" text="Most institutes say “100% placement assistance”. We publish the numbers instead — batch by batch, so you can judge us on outcomes." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="rounded-2xl border-2 border-gold bg-amber-50 p-5 sm:p-6" role="note">
		<p class="font-display text-lg font-extrabold text-ink">⚠ Illustrative mock data — read before you rely on it</p>
		<p class="mt-2 text-sm leading-relaxed text-muted">The figures on this page are <strong class="text-ink">illustrative mock data for design review</strong>, not EduLe’s real placement records. They show the format of the report we will publish once real batch data is verified. We do not guarantee jobs or salaries — see our honest placement disclaimer on the <a href="/placements" class="font-bold text-leaf-dark hover:underline">Placements page</a>.</p>
	</div>

	<div class="mt-8 grid grid-cols-3 gap-4 text-center">
		<div class="rounded-2xl bg-mint p-4"><p class="font-display text-2xl font-extrabold text-leaf-dark sm:text-3xl">{totalStudents}</p><p class="text-xs font-semibold text-muted">students in these batches</p></div>
		<div class="rounded-2xl bg-mint p-4"><p class="font-display text-2xl font-extrabold text-leaf-dark sm:text-3xl">{totalPlaced}</p><p class="text-xs font-semibold text-muted">placed (mock figures)</p></div>
		<div class="rounded-2xl bg-mint p-4"><p class="font-display text-2xl font-extrabold text-leaf-dark sm:text-3xl">{rate}%</p><p class="text-xs font-semibold text-muted">placement rate (mock)</p></div>
	</div>

	<h2 class="mt-10 font-display text-2xl font-extrabold sm:text-3xl">Batch-wise outcomes</h2>
	<div class="mt-5 overflow-x-auto rounded-2xl border border-line">
		<table class="w-full min-w-[760px] bg-white text-left text-sm">
			<thead>
				<tr class="bg-leaf-deep text-white">
					<th scope="col" class="px-5 py-4 font-display">Batch</th>
					<th scope="col" class="px-5 py-4 font-display">Students</th>
					<th scope="col" class="px-5 py-4 font-display">Placed</th>
					<th scope="col" class="px-5 py-4 font-display">Rate</th>
					<th scope="col" class="px-5 py-4 font-display">Top roles</th>
					<th scope="col" class="px-5 py-4 font-display">Avg. package*</th>
				</tr>
			</thead>
			<tbody>
				{#each placementReport as r, i}
					<tr class={i % 2 === 0 ? 'bg-white' : 'bg-mint/50'}>
						<th scope="row" class="px-5 py-4 font-bold">{r.batch}</th>
						<td class="px-5 py-4">{r.students}</td>
						<td class="px-5 py-4 font-bold text-leaf-dark">{r.placed}</td>
						<td class="px-5 py-4">{Math.round((r.placed / r.students) * 100)}%</td>
						<td class="px-5 py-4">{r.topRoles}</td>
						<td class="px-5 py-4">{r.avgPackage}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="mt-3 text-sm text-muted">* Average starting packages are indicative mock figures. “Placed” means the student accepted a job offer within 3 months of completing the course (mock definition).</p>

	<div class="mt-8 flex flex-wrap gap-3">
		<button type="button" class="flex min-h-12 items-center gap-2 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark" onclick={() => window.print()}><Download size={18} aria-hidden="true" /> Print / Save as PDF</button>
		<a href="/placements" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">How Placements Work</a>
		<a href="/alumni" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Alumni Stories</a>
	</div>
</div>
