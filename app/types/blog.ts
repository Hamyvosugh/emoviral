export interface BlogPost {
  coverImage: any;
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
}