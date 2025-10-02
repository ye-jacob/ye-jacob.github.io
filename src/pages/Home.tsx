import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { resumePath } from "@/data/navigation";

const Home = () => {
  // Show first 2 experiences and projects on home page
  const featuredExperiences = experiences.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section with Bio */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted shadow-large flex items-center justify-center overflow-hidden">
              {profileData.headshotUrl ? (
                <img 
                  src={profileData.headshotUrl} 
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-6xl text-muted-foreground">👤</div>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4">{profileData.name}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                {profileData.title}
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                {profileData.bio}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={resumePath} download>
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
            {featuredExperiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                skills={experience.skills}
              />
            ))}
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
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
