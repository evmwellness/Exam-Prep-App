// Generates the PWA icons in public/icons from an inline SVG. Run: node scripts/make-icons.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const svg = (pad) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="${pad ? 0 : 112}" fill="#6B2D5C"/>
  <g transform="translate(256 256) scale(${pad ? 0.72 : 0.9}) translate(-256 -256)">
    <rect x="206" y="112" width="100" height="176" rx="50" fill="#F6F1ED"/>
    <path d="M150 250a106 106 0 0 0 212 0" fill="none" stroke="#F6F1ED" stroke-width="28" stroke-linecap="round"/>
    <path d="M256 356v44M206 400h100" fill="none" stroke="#F6F1ED" stroke-width="28" stroke-linecap="round"/>
  </g>
</svg>`;

mkdirSync('public/icons', { recursive: true });
await sharp(Buffer.from(svg(false))).resize(192, 192).png().toFile('public/icons/icon-192.png');
await sharp(Buffer.from(svg(false))).resize(512, 512).png().toFile('public/icons/icon-512.png');
await sharp(Buffer.from(svg(true))).resize(512, 512).png().toFile('public/icons/icon-maskable-512.png');
await sharp(Buffer.from(svg(true))).resize(180, 180).png().toFile('public/icons/apple-touch-icon.png');
await sharp(Buffer.from(svg(false))).resize(32, 32).png().toFile('public/favicon.png');
console.log('icons written');
