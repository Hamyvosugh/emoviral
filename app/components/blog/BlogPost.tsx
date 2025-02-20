import { BlogPost } from '../../types/blog';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600">
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