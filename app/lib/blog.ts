import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import { Plugin } from 'unified';
import { Root } from 'hast';
import { cache } from 'react';

// Import the Node.js file system APIs exposed by Next.js
import { promises as fs } from 'node:fs';

export interface BlogPost {
  date: string | number | Date;
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  readingTime: string;
  author: {
    name: string;
    image: string;
    bio?: string;
  };
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  draft?: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
}

// Use process.cwd() to get the correct path in Next.js
const postsDirectory = path.join(process.cwd(), 'content/blog');

async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight as Plugin<[], Root>)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

function calculateReadingTime(content: string): string {
  const stats = readingTime(content);
  return `${Math.ceil(stats.minutes)} Min. Lesezeit`;
}

export const getAllPosts = cache(async (options: { 
  includeDrafts?: boolean,
  onlyFeatured?: boolean 
} = {}): Promise<BlogPost[]> => {
  const fileNames = await fs.readdir(postsDirectory);
  
  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const post = await getPostBySlug(fileName.replace(/\.md$/, ''));
    return post;
  }));

  const filteredPosts = posts
    .filter((post): post is BlogPost => {
      if (!post) return false;
      if (!options.includeDrafts && post.draft) return false;
      if (options.onlyFeatured && !post.featured) return false;
      return true;
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return filteredPosts;
});

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const htmlContent = await markdownToHtml(content);
    
    if (!data.title || !data.author) {
      console.warn(`Missing required fields in post: ${slug}`);
      return null;
    }

    const publishedAt = new Date(data.publishedAt);
    if (isNaN(publishedAt.getTime())) {
      console.warn(`Invalid publishedAt date in post: ${slug}`);
      return null;
    }

    const updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
    if (updatedAt && isNaN(updatedAt.getTime())) {
      console.warn(`Invalid updatedAt date in post: ${slug}`);
      return null;
    }

    return {
      id: slug,
      slug: data.slug || slug,
      title: data.title,
      description: data.description || content.slice(0, 160) + '...',
      content: htmlContent,
      date: data.date,
      readingTime: calculateReadingTime(content),
      author: {
        name: data.author.name,
        image: data.author.image || '/images/default-author.jpg',
        bio: data.author.bio,
      },
      publishedAt,
      updatedAt,
      tags: data.tags || [],
      coverImage: data.coverImage,
      featured: data.featured || false,
      draft: data.draft || false,
      seo: {
        title: data.seo?.title || data.title,
        description: data.seo?.description || data.description,
        keywords: data.seo?.keywords || data.tags,
        ogImage: data.seo?.ogImage || data.coverImage,
      },
    };
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    return null;
  }
});

export const getPostsByTag = cache(async (tag: string): Promise<BlogPost[]> => {
  const posts = await getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
});

export const getAllTags = cache(async (): Promise<{ tag: string; count: number }[]> => {
  const posts = await getAllPosts();
  const tags = posts.flatMap(post => post.tags);
  
  return Object.entries(
    tags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  )
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
});

export const getFeaturedPosts = cache(async (): Promise<BlogPost[]> => {
  return getAllPosts({ onlyFeatured: true });
});

export const searchPosts = cache(async (query: string): Promise<BlogPost[]> => {
  const posts = await getAllPosts();
  const searchTerms = query.toLowerCase().split(' ');
  
  return posts.filter(post => {
    const searchableText = `
      ${post.title} 
      ${post.description} 
      ${post.tags.join(' ')} 
      ${post.author.name}
    `.toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
});