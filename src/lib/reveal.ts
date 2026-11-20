// Reveal-on-scroll as a Svelte action.
// Replaces the old layout $effect that only observed elements present at
// first mount — after client-side navigation, new .reveal elements were
// never observed and stayed invisible forever.
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
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
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
	return {
		destroy() {
			io?.unobserve(node);
		}
	};
}

export function prefersReducedMotion(): boolean {
	return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
