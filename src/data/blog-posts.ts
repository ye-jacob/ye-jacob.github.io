export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

// Add or edit your blog posts here
export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications with React",
    date: "March 15, 2024",
    excerpt: "Learn best practices for structuring large-scale React applications, including component architecture, state management patterns, and performance optimization techniques.",
    tags: ["React", "Web Development", "Architecture"],
  },
  {
    title: "The Future of TypeScript",
    date: "March 1, 2024",
    excerpt: "Exploring upcoming TypeScript features and how they'll improve developer experience. A deep dive into the latest proposals and what they mean for your projects.",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    title: "Optimizing Database Queries",
    date: "February 20, 2024",
    excerpt: "Tips and tricks for improving database performance, including indexing strategies, query optimization, and caching mechanisms that can dramatically speed up your applications.",
    tags: ["Database", "Performance", "SQL"],
  },
  {
    title: "Modern CSS Techniques",
    date: "February 5, 2024",
    excerpt: "Discover the latest CSS features like container queries, cascade layers, and CSS grid advanced patterns that are revolutionizing how we build responsive layouts.",
    tags: ["CSS", "Frontend", "Design"],
  },
];
