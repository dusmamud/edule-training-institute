import { error } from '@sveltejs/kit';
import { courses, getCourse } from '#lib/data/site.ts';

export function entries() {
	return courses.map((c) => ({ id: c.id }));
}

export function load({ params }: { params: { id: string } }) {
	const course = getCourse(params.id);
	if (!course) error(404, 'Course not found');
	return { course };
}

export const prerender = true;
