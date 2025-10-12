export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
  content: string;
}

// Add or edit your blog posts here
export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications with React",
    date: "March 15, 2024",
    excerpt: "Learn best practices for structuring large-scale React applications, including component architecture, state management patterns, and performance optimization techniques.",
    tags: ["React", "Web Development", "Architecture"],
    slug: "building-scalable-web-applications-with-react",
    content: "Learn best practices for structuring large-scale React applications, including component architecture, state management patterns, and performance optimization techniques.\n\n## Component Architecture\n\nWhen building large-scale applications, proper component architecture is crucial. Start by organizing your components into logical folders based on their functionality.\n\n## State Management\n\nChoose the right state management solution for your needs. For simpler apps, React Context may suffice, while larger applications benefit from solutions like Redux or Zustand.\n\n## Performance Optimization\n\nOptimize your React applications by implementing code splitting, lazy loading, and memoization where appropriate.",
  },
  {
    title: "The Future of TypeScript",
    date: "March 1, 2024",
    excerpt: "Exploring upcoming TypeScript features and how they'll improve developer experience. A deep dive into the latest proposals and what they mean for your projects.",
    tags: ["TypeScript", "JavaScript", "Programming"],
    slug: "the-future-of-typescript",
    content: "Exploring upcoming TypeScript features and how they'll improve developer experience. A deep dive into the latest proposals and what they mean for your projects.\n\n## New Features\n\nTypeScript continues to evolve with exciting new features that make development more efficient and type-safe.\n\n## Developer Experience\n\nThe latest improvements focus on better error messages, faster compilation times, and improved IDE integration.",
  },
  {
    title: "Optimizing Database Queries",
    date: "February 20, 2024",
    excerpt: "Tips and tricks for improving database performance, including indexing strategies, query optimization, and caching mechanisms that can dramatically speed up your applications.",
    tags: ["Database", "Performance", "SQL"],
    slug: "optimizing-database-queries",
    content: "Tips and tricks for improving database performance, including indexing strategies, query optimization, and caching mechanisms that can dramatically speed up your applications.\n\n## Indexing Strategies\n\nProper indexing is the foundation of database performance. Learn when and how to create indexes for optimal query performance.\n\n## Query Optimization\n\nUnderstand how to write efficient queries that minimize database load and return results quickly.\n\n## Caching Mechanisms\n\nImplement smart caching strategies to reduce database hits and improve application responsiveness.",
  },
  {
    title: "Modern CSS Techniques",
    date: "February 5, 2024",
    excerpt: "Discover the latest CSS features like container queries, cascade layers, and CSS grid advanced patterns that are revolutionizing how we build responsive layouts.",
    tags: ["CSS", "Frontend", "Design"],
    slug: "modern-css-techniques",
    content: "Discover the latest CSS features like container queries, cascade layers, and CSS grid advanced patterns that are revolutionizing how we build responsive layouts.\n\n## Container Queries\n\nContainer queries allow you to style elements based on their container's size, not just the viewport.\n\n## Cascade Layers\n\nManage CSS specificity and organization with the new cascade layers feature.\n\n## CSS Grid Advanced Patterns\n\nExplore advanced CSS Grid techniques for creating complex, responsive layouts with minimal code.",
  },
];
