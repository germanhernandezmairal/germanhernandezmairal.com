/**
 * One-shot image optimizer: converts every PNG/JPG in public/imgs to WebP
 * (max width 1600px, quality 82). Originals are left in place — move or
 * delete them manually after checking the output.
 *
 * Usage: npm install --no-save sharp && node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const dir = 'public/imgs';

for (const file of readdirSync(dir)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const input = join(dir, file);
  const output = join(dir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  const before = Math.round(statSync(input).size / 1024);
  const info = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  console.log(`${file}: ${before} KB -> ${Math.round(info.size / 1024)} KB`);
}
