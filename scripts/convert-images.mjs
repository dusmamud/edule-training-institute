// Convert PNG masters in originals/ (project root, NOT deployed) into the delivery chain:
//   <name>-<width>.avif  (quality 50)
//   <name>-<width>.webp  (quality 80)
//   <name>-<width>.jpg   (quality 84) + <name>-800.jpg fallback
// Widths: 480 / 800 / 1200 / 1600. Run: npm run images
// Pass master names to convert only those: node scripts/convert-images.mjs instructor-priya
// Transparent PNG masters keep their alpha in AVIF/WebP; JPG is skipped
// for them only if the filename ends with -transparent.
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = new URL('../originals/', import.meta.url);
const OUT = new URL('../static/images/', import.meta.url);
const WIDTHS = [480, 800, 1200, 1600];

const only = new Set(process.argv.slice(2));
const files = (await readdir(SRC))
	.filter((f) => f.toLowerCase().endsWith('.png'))
	.filter((f) => only.size === 0 || only.has(parse(f).name));
if (files.length === 0) {
	console.log('No PNG masters in originals/ — nothing to convert.');
	process.exit(0);
}
await mkdir(OUT, { recursive: true });

for (const file of files) {
	const { name } = parse(file);
	const transparent = name.endsWith('-transparent');
	const input = join(SRC.pathname, file);
	for (const width of WIDTHS) {
		const base = sharp(input).resize(width, null, { withoutEnlargement: true });
		await base.clone().avif({ quality: 50 }).toFile(join(OUT.pathname, `${name}-${width}.avif`));
		await base.clone().webp({ quality: 80 }).toFile(join(OUT.pathname, `${name}-${width}.webp`));
		if (!transparent) {
			await base
				.clone()
				.flatten({ background: '#ffffff' })
				.jpeg({ quality: 84 })
				.toFile(join(OUT.pathname, `${name}-${width}.jpg`));
		}
	}
	console.log(`✓ ${name}: avif + webp${transparent ? '' : ' + jpg'} @ ${WIDTHS.join('/')}`);
}
console.log(`Done — ${files.length} master(s) converted.`);
