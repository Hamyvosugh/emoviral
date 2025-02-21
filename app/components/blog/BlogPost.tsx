import { BlogPost } from '../../types/blog';
import Image from 'next/image';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        {post.coverImage && (
          <div className="relative h-96 w-full mb-6">
            <Image
              src={post.coverImage}
              alt={post.imageAlt || post.title}
              title={post.imageTitle || post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600">
          {post.author.image && (
            <div className="relative w-10 h-10 mr-3">
              <Image
                src={post.author.image}
                alt={`Profile of ${post.author.name}`}
                fill
                className="object-cover rounded-full"
              />
            </div>
          )}
          <span>{post.author.name}</span>
          <span className="mx-2">•</span>
          <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
          {post.updatedAt && (
            <>
              <span className="mx-2">•</span>
              <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
            </>
          )}
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
      <footer className="mt-8 pt-8 border-t">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}