import { Info, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import BlogList from '../components/blog/BlogList';
import { getAllPosts, getAllTags, getFeaturedPosts } from '../lib/blog';

export default async function BlogPage() {
  const featuredPosts = await getFeaturedPosts();
  const allPosts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <main className="min-h-screen bg-black">
  {/* Hero Section */}
  <div className="relative h-[75vh] md:h-[65vh] mt-16 md:mt-20">
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
        <div className="absolute bottom-1/4 left-4 md:left-16 z-20 max-w-2xl px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5">
            {featuredPosts[0].title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
            {featuredPosts[0].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href={`/blog/${featuredPosts[0].slug}`}
              className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition w-full sm:w-auto"
            >
              <Play size={20} className="fill-black" />
              Mehr lesen
            </Link>
            <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-gray-500/50 text-white font-semibold rounded hover:bg-gray-500/70 transition w-full sm:w-auto">
              <Info size={20} />
              Mehr Info
            </button>
          </div>
        </div>
      </>
    )}
  </div>

  {/* Content Rows */}
  <div className="-mt-24 md:-mt-32 relative z-10 pb-12 md:pb-16 pt-6 md:pt-9">
    {/* Featured Row */}
    <Suspense fallback={<div className="h-48 md:h-64 bg-black/50" />}>
      <BlogList 
        posts={featuredPosts} 
        title="Empfohlene Beiträge"
      />
    </Suspense>

    {/* Tag-based Rows */}
    {tags.map(({ tag }) => (
      <Suspense key={tag} fallback={<div className="h-48 md:h-64 bg-black/50" />}>
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