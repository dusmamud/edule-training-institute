// Convert only masters missing any delivery file (resume after interruption).
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = new URL('../static/images/original/', import.meta.url);
const OUT = new URL('../static/images/', import.meta.url);
const WIDTHS = [480, 800, 1200, 1600];

const files = (await readdir(SRC)).filter((f) => f.toLowerCase().endsWith('.png'));
await mkdir(OUT, { recursive: true });

for (const file of files) {
	const { name } = parse(file);
	const missing = WIDTHS.filter(
		(w) => !existsSync(join(OUT.pathname, `${name}-${w}.avif`)) || !existsSync(join(OUT.pathname, `${name}-${w}.webp`)) || !existsSync(join(OUT.pathname, `${name}-${w}.jpg`))
	);
	if (missing.length === 0) {
		console.log(`skip ${name} (complete)`);
		continue;
	}
	const input = join(SRC.pathname, file);
	for (const width of missing) {
		const base = sharp(input).resize(width, null, { withoutEnlargement: true });
		await base.clone().avif({ quality: 50, effort: 3 }).toFile(join(OUT.pathname, `${name}-${width}.avif`));
		await base.clone().webp({ quality: 80 }).toFile(join(OUT.pathname, `${name}-${width}.webp`));
		await base.clone().flatten({ background: '#ffffff' }).jpeg({ quality: 84 }).toFile(join(OUT.pathname, `${name}-${width}.jpg`));
	}
	console.log(`✓ ${name}: widths ${missing.join('/')}`);
}
console.log('Resume conversion done.');
