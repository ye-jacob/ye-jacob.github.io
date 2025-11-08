// ============================================================================
// WEBSITE DATA - Edit everything here!
// ============================================================================
// This is the ONLY file you need to edit to update your website content.
// Just modify the data below and save - your site will update automatically!

// ============================================================================
// PROFILE / HOMEPAGE INFO
// ============================================================================
// Edit your name, title, bio, and profile picture here
export const profile = {
  name: "Jacob Ye",
  title: "Senior at Cornell University | Studying Economics, Finance, and Computer Science",
  bio: "My creative, professional, and self-improvement journey.",
  headshotUrl: "/IMG_6049.jpg", // Path to your image in the /public folder
};

// ============================================================================
// EXPERIENCES
// ============================================================================
// Add, remove, or edit your work experiences here
// To add a new experience, copy one of the objects below and modify it
export const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: "Leading development of cloud-based solutions and mentoring junior developers. Implemented microservices architecture that improved system performance by 40%. Key achievements include: architecting a new deployment pipeline that reduced deployment time by 60%, leading a team of 5 developers, and introducing best practices for code review and testing.",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"], // Optional: list of skills/technologies
  },
  {
    title: "Full Stack Developer",
    company: "StartUp XYZ",
    period: "2020 - 2022",
    description: "Built and maintained multiple client-facing applications serving over 100K users. Collaborated with design team to create intuitive user interfaces. Implemented RESTful APIs and optimized database queries resulting in 50% faster load times.",
    skills: ["Vue.js", "Python", "PostgreSQL", "Docker", "Redis", "GraphQL"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency ABC",
    period: "2018 - 2020",
    description: "Developed responsive websites and web applications for various clients. Worked closely with senior developers to learn best practices and improve coding skills. Participated in agile development process and daily stand-ups.",
    skills: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "WordPress"],
  },
  {
    title: "Software Engineering Intern",
    company: "Innovation Labs",
    period: "Summer 2018",
    description: "Contributed to the development of internal tools and automation scripts. Participated in code reviews and learned software development lifecycle. Gained hands-on experience with version control and collaborative coding.",
    skills: ["Python", "Git", "Linux", "Bash"],
  },
];

// ============================================================================
// PROJECTS
// ============================================================================
// Add, remove, or edit your projects here
// githubUrl and liveUrl are optional - leave them out if you don't have them
export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, user authentication, and real-time inventory management. Built with modern web technologies and optimized for performance.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"], // Optional
    githubUrl: "https://github.com", // Optional: link to GitHub repo
    liveUrl: "https://example.com", // Optional: link to live demo
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team chat, and productivity analytics. Features drag-and-drop interface and customizable workflows.",
    technologies: ["TypeScript", "Next.js", "Supabase", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization. Integrates with multiple weather APIs for accurate predictions.",
    technologies: ["React", "D3.js", "OpenWeather API", "Leaflet"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics platform for social media metrics and insights. Features include sentiment analysis, engagement tracking, and automated reporting with beautiful visualizations.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com",
    // No liveUrl - this project doesn't have a live demo
  },
  {
    title: "Portfolio Generator",
    description: "Automated portfolio website generator with customizable themes and layouts. Users can create professional portfolios in minutes without coding knowledge.",
    technologies: ["Vue.js", "Firebase", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Recipe Finder App",
    description: "Mobile-friendly recipe discovery app with ingredient-based search, nutritional information, and meal planning features. Includes user favorites and shopping list functionality.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    // No liveUrl
  },
];

// ============================================================================
// BLOG POSTS
// ============================================================================
// Add, remove, or edit your blog posts here
// The slug is used in the URL (e.g., /blog/building-scalable-web-applications-with-react)
// Use ## for headings in the content
export const blogPosts = [
  {
    title: "Building Scalable Web Applications with React",
    date: "March 15, 2024",
    excerpt: "Learn best practices for structuring large-scale React applications, including component architecture, state management patterns, and performance optimization techniques.",
    tags: ["React", "Web Development", "Architecture"],
    slug: "building-scalable-web-applications-with-react", // URL-friendly version of title
    content: `Learn best practices for structuring large-scale React applications, including component architecture, state management patterns, and performance optimization techniques.

## Component Architecture

When building large-scale applications, proper component architecture is crucial. Start by organizing your components into logical folders based on their functionality.

## State Management

Choose the right state management solution for your needs. For simpler apps, React Context may suffice, while larger applications benefit from solutions like Redux or Zustand.

## Performance Optimization

Optimize your React applications by implementing code splitting, lazy loading, and memoization where appropriate.`,
  },
  {
    title: "The Future of TypeScript",
    date: "March 1, 2024",
    excerpt: "Exploring upcoming TypeScript features and how they'll improve developer experience. A deep dive into the latest proposals and what they mean for your projects.",
    tags: ["TypeScript", "JavaScript", "Programming"],
    slug: "the-future-of-typescript",
    content: `Exploring upcoming TypeScript features and how they'll improve developer experience. A deep dive into the latest proposals and what they mean for your projects.

## New Features

TypeScript continues to evolve with exciting new features that make development more efficient and type-safe.

## Developer Experience

The latest improvements focus on better error messages, faster compilation times, and improved IDE integration.`,
  },
  {
    title: "Optimizing Database Queries",
    date: "February 20, 2024",
    excerpt: "Tips and tricks for improving database performance, including indexing strategies, query optimization, and caching mechanisms that can dramatically speed up your applications.",
    tags: ["Database", "Performance", "SQL"],
    slug: "optimizing-database-queries",
    content: `Tips and tricks for improving database performance, including indexing strategies, query optimization, and caching mechanisms that can dramatically speed up your applications.

## Indexing Strategies

Proper indexing is the foundation of database performance. Learn when and how to create indexes for optimal query performance.

## Query Optimization

Understand how to write efficient queries that minimize database load and return results quickly.

## Caching Mechanisms

Implement smart caching strategies to reduce database hits and improve application responsiveness.`,
  },
  {
    title: "Modern CSS Techniques",
    date: "February 5, 2024",
    excerpt: "Discover the latest CSS features like container queries, cascade layers, and CSS grid advanced patterns that are revolutionizing how we build responsive layouts.",
    tags: ["CSS", "Frontend", "Design"],
    slug: "modern-css-techniques",
    content: `Discover the latest CSS features like container queries, cascade layers, and CSS grid advanced patterns that are revolutionizing how we build responsive layouts.

## Container Queries

Container queries allow you to style elements based on their container's size, not just the viewport.

## Cascade Layers

Manage CSS specificity and organization with the new cascade layers feature.

## CSS Grid Advanced Patterns

Explore advanced CSS Grid techniques for creating complex, responsive layouts with minimal code.`,
  },
];
