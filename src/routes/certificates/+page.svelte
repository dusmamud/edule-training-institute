<script lang="ts">
	import { Award, BadgeCheck, CheckCircle2, Search, ShieldCheck, XCircle } from '@lucide/svelte';
	import PageHero from '#lib/components/PageHero.svelte';

	let code = $state('');
	let result = $state<'idle' | 'valid' | 'invalid'>('idle');
	let verifiedName = $state('');

	// Mock verification: demo codes EDULE-2026-0142 (Ananya Deshmukh, Data Science)
	// and EDULE-2026-0087 (Rohit Patil, Tally Prime). Anything else is "not found".
	function verify(e: SubmitEvent) {
		e.preventDefault();
		const c = code.trim().toUpperCase();
		if (c === 'EDULE-2026-0142') {
			verifiedName = 'Ananya Deshmukh — Data Science and Machine Learning with Python, completed 12 Oct 2026, Grade A';
			result = 'valid';
		} else if (c === 'EDULE-2026-0087') {
			verifiedName = 'Rohit Patil — Tally Prime with GST, completed 28 Sep 2026, Grade A';
			result = 'valid';
		} else {
			result = 'invalid';
		}
	}
</script>

<svelte:head>
	<title>Certificates — EduLe | Verifiable Course Certificates</title>
	<meta name="description" content="Every EduLe certificate is verifiable online with a unique code. See a sample certificate, try the demo verification, and learn what employers get." />
</svelte:head>

<PageHero eyebrow="Certificates" title="A certificate employers can actually check" text="Every EduLe certificate carries a unique verification code. Employers enter it here and see the student, course, completion date and grade — in under a minute." />

<div class="mx-auto max-w-7xl px-4 py-10 sm:py-14">
	<div class="grid items-start gap-8 lg:grid-cols-2">
		<!-- Sample certificate (CSS-built, no image needed) -->
		<div>
			<div class="rounded-2xl border-4 border-double border-leaf bg-white p-8 text-center shadow-md sm:p-10" aria-label="Sample EduLe certificate">
				<Award size={40} class="mx-auto text-leaf-dark" aria-hidden="true" />
				<p class="mt-3 text-xs font-bold tracking-[0.25em] text-leaf-dark uppercase">EduLe Computer Training Institute</p>
				<p class="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">Certificate of Completion</p>
				<p class="mt-4 text-sm text-muted">This is to certify that</p>
				<p class="mt-1 font-display text-2xl font-bold text-ink">Ananya Deshmukh</p>
				<p class="mt-3 text-sm leading-relaxed text-muted">has successfully completed the course</p>
				<p class="mt-1 font-display text-lg font-bold text-ink">Data Science and Machine Learning with Python</p>
				<p class="mt-4 text-sm text-muted">12 October 2026 · Grade A · Pune, India</p>
				<div class="mt-6 flex items-center justify-between border-t border-line pt-4 text-left text-xs text-muted">
					<span>Certificate No.<br /><strong class="text-ink">EDULE-2026-0142</strong></span>
					<span>Director, EduLe<br /><strong class="text-ink">EduLe Institute</strong></span>
					<span class="flex items-center gap-1 font-bold text-leaf-dark"><ShieldCheck size={16} aria-hidden="true" /> Verified</span>
				</div>
			</div>
			<p class="mt-3 text-center text-sm text-muted">Sample certificate — your name, course and dates appear here on completion.</p>
		</div>

		<div>
			<h2 class="font-display text-2xl font-extrabold sm:text-3xl">Verify a certificate</h2>
			<p class="mt-2 leading-relaxed text-muted">Enter the certificate number exactly as printed. Try the demo code <code class="rounded bg-mint px-2 py-0.5 font-bold text-leaf-deep">EDULE-2026-0142</code>.</p>
			<form class="mt-5 flex flex-col gap-3 sm:flex-row" onsubmit={verify}>
				<label class="sr-only" for="cert-code">Certificate number</label>
				<input id="cert-code" bind:value={code} placeholder="e.g. EDULE-2026-0142" required class="min-h-12 flex-1 rounded-full border border-line px-5 text-base outline-none focus:border-leaf" />
				<button type="submit" class="flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">
					<Search size={18} aria-hidden="true" /> Verify
				</button>
			</form>
			{#if result === 'valid'}
				<div class="mt-4 flex gap-3 rounded-2xl border border-leaf bg-mint p-5" role="status">
					<CheckCircle2 size={24} class="shrink-0 text-leaf-dark" aria-hidden="true" />
					<div><p class="font-bold text-leaf-deep">Certificate verified</p><p class="mt-1 text-sm text-ink">{verifiedName}</p></div>
				</div>
			{:else if result === 'invalid'}
				<div class="mt-4 flex gap-3 rounded-2xl border border-red-300 bg-red-50 p-5" role="status">
					<XCircle size={24} class="shrink-0 text-red-700" aria-hidden="true" />
					<div><p class="font-bold text-red-800">Certificate not found</p><p class="mt-1 text-sm text-red-900">Check the code and try again, or contact us at hello@edule.in. Demo codes: EDULE-2026-0142 and EDULE-2026-0087.</p></div>
				</div>
			{/if}

			<h3 class="mt-8 font-display text-xl font-extrabold">What employers get</h3>
			<ul class="mt-4 space-y-3 text-sm leading-relaxed text-muted">
				<li class="flex gap-2"><BadgeCheck size={18} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Verified identity</strong> — student name, course, completion date and grade, straight from our records.</span></li>
				<li class="flex gap-2"><BadgeCheck size={18} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">Real skills</strong> — every certificate course ends with assessed projects, not just attendance.</span></li>
				<li class="flex gap-2"><BadgeCheck size={18} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /><span><strong class="text-ink">LinkedIn-ready</strong> — we help graduates add the credential to LinkedIn with the verification link.</span></li>
			</ul>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/courses" class="min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Browse Certificate Courses</a>
				<a href="/blog/how-to-verify-certificate" class="flex min-h-12 items-center gap-2 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white"><ShieldCheck size={18} aria-hidden="true" /> How verification works</a>
			</div>
		</div>
	</div>
</div>
