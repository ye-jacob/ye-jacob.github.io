import { ProjectCard } from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A showcase of my technical work and personal projects
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online shopping platform with payment integration, user authentication, and real-time inventory management. Built with modern web technologies and optimized for performance."
              technologies={["React", "Node.js", "MongoDB", "Stripe", "Redis"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard
              title="Task Management App"
              description="Collaborative task management tool with real-time updates, team chat, and productivity analytics. Features drag-and-drop interface and customizable workflows."
              technologies={["TypeScript", "Next.js", "Supabase", "TailwindCSS"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard
              title="Weather Dashboard"
              description="Real-time weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization. Integrates with multiple weather APIs for accurate predictions."
              technologies={["React", "D3.js", "OpenWeather API", "Leaflet"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard
              title="Social Media Analytics"
              description="Analytics platform for social media metrics and insights. Features include sentiment analysis, engagement tracking, and automated reporting with beautiful visualizations."
              technologies={["Python", "FastAPI", "PostgreSQL", "Chart.js"]}
              githubUrl="https://github.com"
            />
            
            <ProjectCard
              title="Portfolio Generator"
              description="Automated portfolio website generator with customizable themes and layouts. Users can create professional portfolios in minutes without coding knowledge."
              technologies={["Vue.js", "Firebase", "Vite", "TailwindCSS"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard
              title="Recipe Finder App"
              description="Mobile-friendly recipe discovery app with ingredient-based search, nutritional information, and meal planning features. Includes user favorites and shopping list functionality."
              technologies={["React Native", "Node.js", "Express", "MongoDB"]}
              githubUrl="https://github.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
