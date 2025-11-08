import { blogPosts } from "@/data";
import { Link } from "react-router-dom";

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
              <Link 
                key={index} 
                to={`/blog/${post.slug}`}
                className="block border-b border-border pb-6 mb-6 hover:bg-accent/5 -mx-4 px-4 py-2 rounded-lg transition-colors"
              >
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground leading-relaxed mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
