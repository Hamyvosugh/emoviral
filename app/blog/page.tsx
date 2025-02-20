import { Suspense } from 'react';
import { getAllPosts, getFeaturedPosts, getAllTags } from '../lib/blog';
import { Play, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BlogList from  '../components/blog/BlogList';

export default async function BlogPage() {
  const featuredPosts = await getFeaturedPosts();
  const allPosts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <main className="min-h-screen bg-black  ">
      {/* Hero Section */}
      <div className="relative h-[65vh] mt-20 ">
        {featuredPosts[0] && (
          <>
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src={featuredPosts[0].coverImage || ''}
              alt={featuredPosts[0].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-1/4 left-16 z-20 max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-5">{featuredPosts[0].title}</h1>
              <p className="text-lg text-gray-200 mb-8">{featuredPosts[0].description}</p>
              <div className="flex gap-4">
                <Link
                  href={`/blog/${featuredPosts[0].slug}`}
                  className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition"
                >
                  <Play size={24} className="fill-black" />
                  Mehr lesen
                </Link>
                <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/50 text-white font-semibold rounded hover:bg-gray-500/70 transition">
                  <Info size={24} />
                  Mehr Info
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content Rows */}
      <div className="-mt-32 relative z-10 pb-16 pt-9">
        {/* Featured Row */}
        <Suspense fallback={<div className="h-64 bg-black/50" />}>
          <BlogList 
            posts={featuredPosts} 
            title="Featured Posts"
          />
        </Suspense>

        {/* Tag-based Rows */}
        {tags.map(({ tag }) => (
          <Suspense key={tag} fallback={<div className="h-64 bg-black/50" />}>
            <BlogList 
              posts={allPosts.filter(post => post.tags.includes(tag))}
              title={tag}
            />
          </Suspense>
        ))}
      </div>
    </main>
  );
}