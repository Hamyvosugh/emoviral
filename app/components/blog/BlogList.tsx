// app/components/blog/BlogList.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogListProps {
  posts: BlogPost[];
  title: string;
}

export default function BlogList({ posts, title }: BlogListProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-4 px-8">{title}</h2>
      
      <div className="relative group">
        <div 
          ref={rowRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-8"
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex-none w-64 relative group/item"
            >
              <div className="relative h-36 rounded-md overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover/item:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800" />
                )}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-4 text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Scroll Buttons */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}