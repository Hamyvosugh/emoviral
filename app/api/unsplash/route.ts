import { createApi } from 'unsplash-js';
import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';

// Initialize Unsplash API
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

async function downloadImage(url: string, filepath: string) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filepath))
      .on('finish', () => resolve('success'))
      .on('error', (e: Error) => reject(e));
  });
}

export async function POST(req: Request) {
  try {
    const { prompt, topic } = await req.json();

    // Search for images
    const result = await unsplash.search.getPhotos({
      query: prompt,
      orientation: 'landscape',
      perPage: 3,
    });

    if (!result.response) {
      throw new Error('Failed to fetch images');
    }

    const images = result.response.results;
    const downloadUrls = images.map(img => img.urls.full);

    // Create directory if it doesn't exist
    const dirPath = path.join(process.cwd(), 'public', 'images', topic);
    await fs.ensureDir(dirPath);

    // Download images
    const downloads = await Promise.all(
      downloadUrls.map(async (url, index) => {
        const filepath = path.join(dirPath, `${index + 1}.jpg`);
        await downloadImage(url, filepath);
        return `images/${topic}/${index + 1}.jpg`;
      })
    );

    return NextResponse.json({ 
      success: true, 
      paths: downloads 
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
