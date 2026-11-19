<script lang="ts">
	import { BadgePercent, CalendarClock, Check, Wallet } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { courses, inr } from '#lib/data/site.ts';

	function instalments(price: number): number[] {
		if (price === 0) return [];
		const first = Math.ceil(price / 2);
		return [first, price - first];
	}
</script>

<svelte:head>
	<title>Fees — EduLe Computer Training Institute | Course Fees in ₹ &amp; Instalments</title>
	<meta name="description" content="EduLe course fees in ₹ with instalment options and discounts. All courses 25% off. Pay in 2 instalments at no extra charge." />
</svelte:head>

<PageHero eyebrow="Fees" title="Clear fees. No hidden charges." text="Every fee below is the full course fee — study material, recordings, certificate and placement support included. 25% enrolment discount already applied." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid gap-6 md:grid-cols-3">
		<div class="rounded-2xl border border-line bg-mint p-6">
			<BadgePercent size={26} class="text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-3 font-display text-lg font-bold">25% off all courses</h2>
			<p class="mt-2 text-sm leading-relaxed text-muted">Our enrolment offer applies to every course. The price you see on each course page is the discounted price — what you see is what you pay.</p>
		</div>
		<div class="rounded-2xl border border-line bg-mint p-6">
			<Wallet size={26} class="text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-3 font-display text-lg font-bold">Pay in instalments</h2>
			<p class="mt-2 text-sm leading-relaxed text-muted">Split any paid course into 2 equal instalments at no extra charge. First instalment at enrolment, second midway through the batch. UPI, cards, net banking and cash accepted.</p>
		</div>
		<div class="rounded-2xl border border-line bg-mint p-6">
			<CalendarClock size={26} class="text-leaf-dark" aria-hidden="true" />
			<h2 class="mt-3 font-display text-lg font-bold">7-day refund window</h2>
			<p class="mt-2 text-sm leading-relaxed text-muted">Withdraw within the first 7 days of your batch and we refund the unused portion of your fees minus a ₹1,000 processing charge. Full details on the Terms page.</p>
		</div>
	</div>

	<h2 class="mt-12 font-display text-2xl font-extrabold sm:text-3xl">Course-wise fees</h2>
	<div class="mt-6 overflow-x-auto rounded-2xl border border-line">
		<table class="w-full min-w-[720px] bg-white text-left text-sm">
			<thead>
				<tr class="bg-leaf-deep text-white">
					<th scope="col" class="px-5 py-4 font-display">Course</th>
					<th scope="col" class="px-5 py-4 font-display">Duration</th>
					<th scope="col" class="px-5 py-4 font-display">Full Fee</th>
					<th scope="col" class="px-5 py-4 font-display">Was</th>
					<th scope="col" class="px-5 py-4 font-display">2 Instalments</th>
					<th scope="col" class="px-5 py-4 font-display">Certificate</th>
				</tr>
			</thead>
			<tbody>
				{#each courses as c, i}
					<tr class={i % 2 === 0 ? 'bg-white' : 'bg-mint/50'}>
						<th scope="row" class="px-5 py-4 font-bold"><a href="/courses/{c.id}" class="hover:text-leaf-dark hover:underline">{c.title}</a><span class="block text-xs font-medium text-muted">{c.category} · {c.level}</span></th>
						<td class="px-5 py-4">{c.weeks} weeks</td>
						<td class="px-5 py-4 font-extrabold text-leaf-dark">{c.price === 0 ? 'Free' : inr(c.price)}</td>
						<td class="px-5 py-4 text-muted">{c.oldPrice ? inr(c.oldPrice) : '—'}</td>
						<td class="px-5 py-4">{c.price === 0 ? '—' : instalments(c.price).map(inr).join(' + ')}</td>
						<td class="px-5 py-4"><span class="flex items-center gap-1 font-semibold"><Check size={16} class="text-leaf-dark" aria-hidden="true" /> Included</span></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="mt-3 text-sm text-muted">Fees include GST. Study material, recordings, practice sets, certificate and placement support are included in every fee — nothing is charged separately.</p>

	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		<div class="rounded-2xl border border-line bg-white p-6">
			<h2 class="font-display text-xl font-extrabold">More ways to save</h2>
			<ul class="mt-4 space-y-3 text-sm leading-relaxed text-muted">
				<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Early-bird 10% extra off</strong> — enrol 2 weeks before batch start.</span></li>
				<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Bring-a-friend ₹1,000 off</strong> for both students when you enrol together.</span></li>
				<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Second course 15% off</strong> for existing EduLe students.</span></li>
				<li class="flex gap-2"><Check size={17} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Student &amp; group discounts</strong> — ask at the Pune campus or on WhatsApp.</span></li>
			</ul>
		</div>
		<div class="rounded-2xl bg-leaf-deep p-6 text-white">
			<h2 class="font-display text-xl font-extrabold">Need help choosing?</h2>
			<p class="mt-2 text-sm leading-relaxed text-white/85">Tell us your goal and budget — we will suggest the right course and batch, with the exact fee and instalment plan, before you pay anything.</p>
			<a href="/admissions" class="mt-5 inline-block min-h-12 rounded-full bg-white px-7 py-3 font-display text-base font-bold text-leaf-deep">Enrol Now</a>
			<a href="/contact" class="mt-3 ml-3 inline-block min-h-12 rounded-full border-2 border-white px-7 py-3 font-display text-base font-bold text-white sm:mt-0">Talk to a Counsellor</a>
		</div>
	</div>
</div>
