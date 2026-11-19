// Parallel image conversion: split masters across N workers (argv[2]=worker index, argv[3]=total workers).
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = new URL('../static/images/original/', import.meta.url);
const OUT = new URL('../static/images/', import.meta.url);
const WIDTHS = [480, 800, 1200, 1600];
const idx = Number(process.argv[2] ?? 0);
const total = Number(process.argv[3] ?? 1);

const files = (await readdir(SRC))
	.filter((f) => f.toLowerCase().endsWith('.png'))
	.filter((_, i) => i % total === idx);
await mkdir(OUT, { recursive: true });

for (const file of files) {
	const { name } = parse(file);
	const input = join(SRC.pathname, file);
	for (const width of WIDTHS) {
		const base = sharp(input).resize(width, null, { withoutEnlargement: true });
		await base.clone().avif({ quality: 50, effort: 3 }).toFile(join(OUT.pathname, `${name}-${width}.avif`));
		await base.clone().webp({ quality: 80 }).toFile(join(OUT.pathname, `${name}-${width}.webp`));
		await base.clone().flatten({ background: '#ffffff' }).jpeg({ quality: 84 }).toFile(join(OUT.pathname, `${name}-${width}.jpg`));
	}
	console.log(`✓ ${name} (worker ${idx})`);
}
console.log(`Worker ${idx} done — ${files.length} master(s).`);
