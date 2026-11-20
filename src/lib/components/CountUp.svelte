<script lang="ts">
	// Animated count-up number.
	// The FINAL value renders in the static HTML (crawlers / no-JS see the real
	// number); the animation only runs on the client, once scrolled into view.
	// Respects prefers-reduced-motion (no animation at all).
	let {
		value,
		suffix = '',
		prefix = '',
		duration = 1400
	}: { value: number; suffix?: string; prefix?: string; duration?: number } = $props();

	// svelte-ignore state_referenced_locally — `value` is a static prop;
	// `shown` intentionally starts at the final value so SSR renders it.
	let shown = $state(value);
	let el: HTMLSpanElement | undefined = $state();

	$effect(() => {
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const node = el;
		const io = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				io.disconnect();
				shown = 0;
				const start = performance.now();
				const tick = (t: number) => {
					const p = Math.min(1, (t - start) / duration);
					shown = Math.round(value * (1 - Math.pow(1 - p, 3)));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			},
			{ threshold: 0.4 }
		);
		io.observe(node);
		return () => io.disconnect();
	});
</script>

<span bind:this={el}>{prefix}{shown.toLocaleString('en-IN')}{suffix}</span>
