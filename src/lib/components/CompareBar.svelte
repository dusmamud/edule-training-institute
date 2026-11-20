<script lang="ts">
	// Floating compare tray — appears when the visitor selects courses to
	// compare (max 3). Sits above the mobile quick-actions bar.
	import { GitCompareArrows, X } from '@lucide/svelte';
	import { clearCompare, compareStore, MAX_COMPARE } from '#lib/compare.svelte.ts';
	import { courses } from '#lib/data/site.ts';

	const selected = $derived(compareStore.ids.map((id) => courses.find((c) => c.id === id)).filter((c) => c !== undefined));
	const href = $derived(`/compare?ids=${compareStore.ids.join(',')}`);
</script>

{#if compareStore.ids.length > 0}
	<div class="fixed inset-x-3 bottom-[4.75rem] z-40 flex items-center gap-3 rounded-2xl border border-line bg-white/97 px-4 py-3 shadow-xl backdrop-blur sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[26rem] lg:bottom-24" role="status">
		<GitCompareArrows size={22} class="shrink-0 text-leaf-dark" aria-hidden="true" />
		<div class="min-w-0 flex-1">
			<p class="text-sm font-bold text-ink">Compare {compareStore.ids.length}/{MAX_COMPARE} courses</p>
			<p class="truncate text-xs text-muted">{selected.map((c) => c?.title.split('—')[0].split(':')[0].trim()).join(' · ')}</p>
		</div>
		<a href={href} class="min-h-11 shrink-0 rounded-full bg-leaf px-4 py-2.5 text-sm font-bold text-white hover:bg-leaf-dark">Compare now</a>
		<button type="button" class="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full hover:bg-mint" aria-label="Clear comparison" onclick={clearCompare}>
			<X size={18} aria-hidden="true" />
		</button>
	</div>
{/if}
