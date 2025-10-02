import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Thoughts on technology, software development, and beyond
          </p>
          
          <div>
            {blogPosts.map((post, index) => (
              <div key={index} className="border-b border-border pb-6 mb-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                <p className="text-foreground leading-relaxed mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
