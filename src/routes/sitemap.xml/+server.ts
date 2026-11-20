import { blogPosts, careerPaths, courses, instructors, site } from '#lib/data/site.ts';

export const prerender = true;

const TODAY = '2026-11-19';

const staticPages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/courses', priority: '0.9', changefreq: 'weekly' },
	{ path: '/fees', priority: '0.9', changefreq: 'weekly' },
	{ path: '/emi-calculator', priority: '0.8', changefreq: 'monthly' },
	{ path: '/compare', priority: '0.7', changefreq: 'monthly' },
	{ path: '/career-paths', priority: '0.8', changefreq: 'weekly' },
	{ path: '/certificates', priority: '0.8', changefreq: 'monthly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/instructors', priority: '0.7', changefreq: 'monthly' },
	{ path: '/admissions', priority: '0.9', changefreq: 'weekly' },
	{ path: '/demo', priority: '0.9', changefreq: 'weekly' },
	{ path: '/batches', priority: '0.8', changefreq: 'weekly' },
	{ path: '/finder', priority: '0.7', changefreq: 'monthly' },
	{ path: '/placements', priority: '0.8', changefreq: 'monthly' },
	{ path: '/alumni', priority: '0.7', changefreq: 'monthly' },
	{ path: '/scholarships', priority: '0.7', changefreq: 'monthly' },
	{ path: '/referral', priority: '0.6', changefreq: 'monthly' },
	{ path: '/workshops', priority: '0.8', changefreq: 'weekly' },
	{ path: '/corporate', priority: '0.6', changefreq: 'monthly' },
	{ path: '/employers', priority: '0.6', changefreq: 'monthly' },
	{ path: '/blog', priority: '0.8', changefreq: 'weekly' },
	{ path: '/faq', priority: '0.7', changefreq: 'monthly' },
	{ path: '/contact', priority: '0.8', changefreq: 'monthly' },
	{ path: '/login', priority: '0.5', changefreq: 'monthly' },
	{ path: '/dashboard', priority: '0.5', changefreq: 'monthly' },
	{ path: '/brochure', priority: '0.5', changefreq: 'monthly' },
	{ path: '/refund', priority: '0.5', changefreq: 'yearly' },
	{ path: '/accessibility', priority: '0.4', changefreq: 'yearly' },
	{ path: '/sitemap', priority: '0.4', changefreq: 'monthly' },
	{ path: '/privacy', priority: '0.3', changefreq: 'yearly' },
	{ path: '/terms', priority: '0.3', changefreq: 'yearly' }
];

const url = (loc: string, changefreq: string, priority: string) =>
	`  <url><loc>${site.url}${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;

export function GET() {
	const urls = [
		...staticPages.map((p) => url(p.path, p.changefreq, p.priority)),
		...courses.map((c) => url(`/courses/${c.id}`, 'monthly', '0.8')),
		...courses.map((c) => url(`/courses/${c.id}/syllabus`, 'monthly', '0.5')),
		...careerPaths.map((p) => url(`/career-paths/${p.slug}`, 'monthly', '0.7')),
		...instructors.map((t) => url(`/instructors/${t.slug}`, 'monthly', '0.6')),
		...blogPosts.map((b) => url(`/blog/${b.slug}`, 'monthly', '0.7'))
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
