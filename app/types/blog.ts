export interface BlogPost {
  date: string | number | Date;
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;  
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