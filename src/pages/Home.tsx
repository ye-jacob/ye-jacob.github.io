import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section with Bio */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted shadow-large flex items-center justify-center overflow-hidden">
              <div className="text-6xl text-muted-foreground">👤</div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4">Your Name</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Software Engineer | Full Stack Developer
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Passionate developer with expertise in building scalable web applications. 
                I love solving complex problems and creating intuitive user experiences. 
                Currently focused on React, TypeScript, and modern web technologies.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2>Experience</h2>
            <Button variant="ghost" asChild>
              <Link to="/experiences">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="space-y-6">
            <ExperienceCard
              title="Senior Software Engineer"
              company="Tech Company Inc."
              period="2022 - Present"
              description="Leading development of cloud-based solutions and mentoring junior developers. Implemented microservices architecture that improved system performance by 40%."
              skills={["React", "TypeScript", "Node.js", "AWS"]}
            />
            
            <ExperienceCard
              title="Full Stack Developer"
              company="StartUp XYZ"
              period="2020 - 2022"
              description="Built and maintained multiple client-facing applications. Collaborated with design team to create intuitive user interfaces."
              skills={["Vue.js", "Python", "PostgreSQL", "Docker"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2>Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link to="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online shopping platform with payment integration, user authentication, and real-time inventory management."
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard
              title="Task Management App"
              description="Collaborative task management tool with real-time updates, team chat, and productivity analytics."
              technologies={["TypeScript", "Next.js", "Supabase", "TailwindCSS"]}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
