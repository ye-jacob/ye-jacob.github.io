import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";


const Home = () => {
  // Show first 2 experiences and projects on home page
  const featuredExperiences = experiences.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Bio */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-muted flex items-center justify-center overflow-hidden border border-border">
              {profileData.headshotUrl ? (
                <img 
                  src={profileData.headshotUrl} 
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-4xl text-muted-foreground">👤</div>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="mb-2">{profileData.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {profileData.title}
              </p>
              <p className="text-base text-foreground leading-relaxed mb-6">
                {profileData.bio}
              </p>
              <div className="flex gap-4">
                <Link to="/projects" className="underline">
                  View Projects
                </Link>
                <Link to="/resume" className="underline">
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2>Experience</h2>
            <Link to="/experiences" className="text-sm underline">
              View All
            </Link>
          </div>
          
          <div>
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
      <section className="container mx-auto px-4 py-16 pb-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2>Featured Projects</h2>
            <Link to="/projects" className="text-sm underline">
              View All
            </Link>
          </div>
          
          <div>
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
