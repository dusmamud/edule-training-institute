import { error } from '@sveltejs/kit';
import { getInstructor, instructors } from '#lib/data/site.ts';

export function entries() {
	return instructors.map((t) => ({ slug: t.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const instructor = getInstructor(params.slug);
	if (!instructor) error(404, 'Instructor not found');
	return { instructor };
}

export const prerender = true;
