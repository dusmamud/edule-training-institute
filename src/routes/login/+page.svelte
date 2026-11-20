<script lang="ts">
	import { GraduationCap, LogIn, UserPlus } from '@lucide/svelte';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import PageHero from '#lib/components/PageHero.svelte';
	import Seo from '#lib/components/Seo.svelte';

	let mode = $state<'login' | 'signup'>('login');
	let name = $state('');
	let email = $state('');
	let password = $state('');
	let error = $state('');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		if (password.length < 6) {
			error = 'Password must be at least 6 characters.';
			return;
		}
		if (mode === 'signup' && name.trim().length < 2) {
			error = 'Please enter your full name.';
			return;
		}
		const displayName = mode === 'signup' ? name.trim() : email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
		if (browser) {
			try {
				localStorage.setItem('edule-user', JSON.stringify({ name: displayName, email: email.trim() }));
			} catch {
				/* storage unavailable */
			}
		}
		goto('/dashboard');
	}

	function demoLogin() {
		email = 'demo@edule.in';
		password = 'demo1234';
		name = 'Demo Student';
		mode = 'login';
		if (browser) {
			try {
				localStorage.setItem('edule-user', JSON.stringify({ name: 'Demo Student', email: 'demo@edule.in' }));
			} catch {
				/* storage unavailable */
			}
		}
		goto('/dashboard');
	}
</script>

<Seo
	title="Student Sign In — EduLe"
	description="Sign in to your EduLe student account to track your courses, progress, batches and certificates. New here? Create a free account in a minute."
	image="classroom"
/>

<PageHero eyebrow="Student Account" title="Welcome back, learner" text="Sign in to see your courses, progress, upcoming batches and certificates — all in one place." />

<div class="mx-auto max-w-md px-4 py-10 sm:py-14">
	<div class="rounded-2xl border border-line bg-white p-6 sm:p-8">
		<div class="grid grid-cols-2 gap-2 rounded-full bg-mint p-1" role="tablist" aria-label="Account mode">
			<button type="button" role="tab" aria-selected={mode === 'login'} class="flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-bold {mode === 'login' ? 'bg-leaf text-white' : 'text-leaf-dark'}" onclick={() => (mode = 'login')}><LogIn size={16} aria-hidden="true" /> Sign In</button>
			<button type="button" role="tab" aria-selected={mode === 'signup'} class="flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-bold {mode === 'signup' ? 'bg-leaf text-white' : 'text-leaf-dark'}" onclick={() => (mode = 'signup')}><UserPlus size={16} aria-hidden="true" /> Sign Up</button>
		</div>

		<form class="mt-6 space-y-4" onsubmit={submit}>
			{#if mode === 'signup'}
				<div>
					<label class="block text-sm font-bold" for="name">Full name</label>
					<input id="name" bind:value={name} required minlength="2" autocomplete="name" placeholder="e.g. Priya Sharma" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
				</div>
			{/if}
			<div>
				<label class="block text-sm font-bold" for="email">Email address</label>
				<input id="email" type="email" bind:value={email} required autocomplete="email" placeholder="you@example.com" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
			</div>
			<div>
				<label class="block text-sm font-bold" for="password">Password</label>
				<input id="password" type="password" bind:value={password} required minlength="6" autocomplete="current-password" placeholder="At least 6 characters" class="mt-2 min-h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-leaf" />
			</div>
			{#if error}
				<p class="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700" role="alert">{error}</p>
			{/if}
			<button type="submit" class="min-h-12 w-full rounded-full bg-leaf py-3.5 font-display text-base font-bold text-white hover:bg-leaf-dark">
				{mode === 'login' ? 'Sign In to My Learning' : 'Create My Free Account'}
			</button>
		</form>

		<button type="button" class="mt-4 min-h-12 w-full rounded-full border-2 border-leaf py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white" onclick={demoLogin}>
			Use Demo Account
		</button>
		<p class="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted"><GraduationCap size={16} class="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" /> Demo login — no real account is created and nothing is sent anywhere. The demo dashboard shows sample enrolled courses and progress.</p>
		<p class="mt-3 text-center text-sm text-muted">New to EduLe? <a href="/courses" class="font-bold text-leaf-dark hover:underline">Browse courses first →</a></p>
	</div>
</div>
