import { error } from '@sveltejs/kit';
import { workshops } from '#lib/data/site.ts';

export function entries() {
	return workshops.map((w) => ({ slug: w.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const workshop = workshops.find((w) => w.slug === params.slug);
	if (!workshop) error(404, 'Workshop not found');
	return { workshop };
}

export const prerender = true;
