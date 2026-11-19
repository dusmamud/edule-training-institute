<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head><title>Page not found — EduLe</title></svelte:head>

<div class="mx-auto max-w-2xl px-4 py-20 text-center sm:py-28">
	<p class="font-display text-7xl font-extrabold text-leaf">404</p>
	<h1 class="mt-4 font-display text-3xl font-extrabold text-ink">This page doesn’t exist</h1>
	<p class="mt-3 leading-relaxed text-muted">The page “{page.url.pathname}” could not be found. It may have moved, or the link may be mistyped.</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a href="/" class="min-h-12 rounded-full bg-leaf px-7 py-3 font-display text-base font-bold text-white hover:bg-leaf-dark">Back to Home</a>
		<a href="/courses" class="min-h-12 rounded-full border-2 border-leaf px-7 py-3 font-display text-base font-bold text-leaf-dark hover:bg-leaf hover:text-white">Browse Courses</a>
	</div>
</div>
