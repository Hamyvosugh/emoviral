import { Suspense } from 'react';
import { getAllPosts, getFeaturedPosts, getAllTags } from '../lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock, Tag, TrendingUp, Search, Filter } from 'lucide-react';
import StyledMetadata from '@/components/blog/StyledMetadata';

async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();
  
  if (featuredPosts.length === 0) return null;
  
  return (
    
    <section className="mb-16">
      <StyledMetadata />
      <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2 text-white">
        <TrendingUp className="text-primary-500" />
        Featured Articles
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
          >
            {post.coverImage && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {post.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={14}
                    height={14}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{post.author.name}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

async function BlogPosts() {
  const posts = await getAllPosts();
  const tags = await getAllTags();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {post.coverImage && (
                    <div className="relative w-full md:w-48 h-48 md:h-32 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="font-display text-xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span>{post.author.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span>
                          {format(post.publishedAt, 'dd. MMM yyyy', { locale: de })}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      
      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-24 space-y-8">
          {/* Search */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Artikel suchen..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Tags */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <Tag className="text-primary-500" size={18} />
              Themen
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {tags.map(({ tag, count }) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  {tag} ({count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default async function BlogPage() {
  return (
    <main className="min-h-screen bg-primary-950 from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        
        
        {/* Content */}
        <Suspense fallback={<div>Loading featured posts...</div>}>
          <FeaturedPosts />
        </Suspense>
        
        <Suspense fallback={<div>Loading posts...</div>}>
          <BlogPosts />
        </Suspense>
      </div>
    </main>
  );
}