import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications with React",
    date: "March 15, 2024",
    excerpt: "Learn best practices for structuring large-scale React applications, including component architecture, state management patterns, and performance optimization techniques.",
    tags: ["React", "Web Development", "Architecture"]
  },
  {
    title: "The Future of TypeScript",
    date: "March 1, 2024",
    excerpt: "Exploring upcoming TypeScript features and how they'll improve developer experience. A deep dive into the latest proposals and what they mean for your projects.",
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
  {
    title: "Optimizing Database Queries",
    date: "February 20, 2024",
    excerpt: "Tips and tricks for improving database performance, including indexing strategies, query optimization, and caching mechanisms that can dramatically speed up your applications.",
    tags: ["Database", "Performance", "SQL"]
  },
  {
    title: "Modern CSS Techniques",
    date: "February 5, 2024",
    excerpt: "Discover the latest CSS features like container queries, cascade layers, and CSS grid advanced patterns that are revolutionizing how we build responsive layouts.",
    tags: ["CSS", "Frontend", "Design"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Thoughts on technology, software development, and beyond
          </p>
          
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
