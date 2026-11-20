<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { faqs } from '#lib/data/site.ts';

	let openIndex = $state(0);
</script>

<div class="divide-y divide-line rounded-2xl border border-line bg-white">
	{#each faqs as item, i}
		<div>
			<button
				type="button"
				class="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-ink sm:text-lg"
				aria-expanded={openIndex === i}
				aria-controls="faq-answer-{i}"
				onclick={() => (openIndex = openIndex === i ? -1 : i)}
			>
				<span>{item.q}</span>
				<ChevronDown size={20} class="shrink-0 text-leaf-dark transition-transform duration-200 {openIndex === i ? 'rotate-180' : ''}" aria-hidden="true" />
			</button>
			<div id="faq-answer-{i}" class="grid transition-all duration-300 ease-out {openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}" aria-hidden={openIndex !== i}>
				<p class="overflow-hidden px-5 pb-5 leading-relaxed text-muted">{item.a}</p>
			</div>
		</div>
	{/each}
</div>
