import { error } from '@sveltejs/kit';
import { blogPosts } from '#lib/data/site.ts';

export function entries() {
	return blogPosts.map((b) => ({ slug: b.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const post = blogPosts.find((b) => b.slug === params.slug);
	if (!post) error(404, 'Article not found');
	return { post };
}

export const prerender = true;
