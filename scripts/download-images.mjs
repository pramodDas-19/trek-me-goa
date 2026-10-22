import fs from 'fs';
import path from 'path';

const images = {
  'hero-bg.jpg': 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=80',
  'service-waterfall-treks.jpg': 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
  'service-dudhsagar.jpg': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'exp-fishing-boat.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'gallery-waterfall-swim.jpg': 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80',
  'gallery-stream-cross.jpg': 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
  'gallery-coastal-trail.jpg': 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80',
  'gallery-cave-torch.jpg': 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
  'gallery-backwater-kayak.jpg': 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=800&q=80',
  'gallery-summit-view.jpg': 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80'
};

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadAll() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(outputDir, filename);
    try {
      console.log(`Downloading ${filename}...`);
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed ${filename}: HTTP ${res.status}`);
        continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`Saved ${filename} (${arrayBuffer.byteLength} bytes)`);
    } catch (err) {
      console.error(`Error ${filename}:`, err.message);
    }
  }
}

downloadAll();
