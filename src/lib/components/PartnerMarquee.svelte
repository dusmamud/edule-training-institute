<script lang="ts">
	// Hiring-partner wordmark marquee (text wordmarks, never hotlinked logos).
	import { partners } from '#lib/data/site.ts';
</script>

<div class="marquee overflow-hidden py-2" aria-label="Our hiring partners">
	<div class="marquee-track items-center gap-10">
		{#each [...partners, ...partners] as p, i}
			<span class="flex items-center gap-10" aria-hidden={i >= partners.length}>
				<span class="font-display text-lg font-extrabold whitespace-nowrap text-leaf-deep/70">{p}</span>
				<span class="h-2 w-2 rounded-full bg-leaf" aria-hidden="true"></span>
			</span>
		{/each}
	</div>
</div>
