// Reveal-on-scroll as a Svelte action.
// The `.reveal` class is added by JS only, so with JS disabled (or if the
// action never runs) content stays visible — there is no no-JS blank state.
// Safety net: a per-node timeout forces visibility even if the
// IntersectionObserver never fires (e.g. tall elements, fast scroll, headless
// fullPage captures). Reduced-motion users always see content immediately.
let io: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
	if (io) return io;
	io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					e.target.classList.add('is-visible');
					io?.unobserve(e.target);
				}
			}
		},
		{ threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
	);
	return io;
}

export function reveal(node: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return {};
	}
	node.classList.add('reveal');
	getObserver().observe(node);
	// Fallback: never leave content hidden longer than 1.2s after mount.
	const timer = window.setTimeout(() => node.classList.add('is-visible'), 1200);
	return {
		destroy() {
			window.clearTimeout(timer);
			io?.unobserve(node);
		}
	};
}

export function prefersReducedMotion(): boolean {
	return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
