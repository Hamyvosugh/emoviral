import { getPostBySlug, getAllPosts } from '../../lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { Clock, Tag, Share2, BookmarkPlus } from 'lucide-react';
import BlogCTA from '../../components/blog/calltoaction';
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }

  return {
    // Use SEO title if available, fallback to post title
    title: post.seo?.title || post.title,
    // Use SEO description if available, fallback to post description
    description: post.seo?.description || post.description,
    keywords: post.seo?.keywords,
    authors: [{ 
      name: post.author.name,
      url: post.author.bio // Include bio URL if you want to link to author page
    }],
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.description,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: post.seo?.ogImage || post.coverImage || '',
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.description,
      images: [post.seo?.ogImage || post.coverImage || ''],
    }
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="animate-fade-in mb-12">
          {post.coverImage && (
            <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8 mt-14">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          {/* Title and Meta Section */}
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-display text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-y border-gray-200 dark:border-gray-700 py-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {format(new Date(post.publishedAt), 'dd. MMMM yyyy', { locale: de })}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto">
          <div className=" prose prose-lg dark:prose-invert prose-primary prose-img:rounded-xl prose-headings:font-display prose-a:text-primary-600 dark:prose-a:text-primary-400">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
              {post.description}
            </p>
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
      

          {/* Share and Bookmark Section */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <Share2 size={18} />
                  <span>Teilen</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <BookmarkPlus size={18} />
                  <span>Speichern</span>
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/tags/${tag}`}
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Tag size={14} />
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
        <BlogCTA 
  title={post.title}
  coverImage={post.coverImage || ''}
/>
      </main>
      
    </div>
  );
}