import { error } from '@sveltejs/kit';
import { careerPaths, getCareerPath } from '#lib/data/site.ts';

export function entries() {
	return careerPaths.map((p) => ({ slug: p.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const path = getCareerPath(params.slug);
	if (!path) error(404, 'Career path not found');
	return { path };
}

export const prerender = true;
