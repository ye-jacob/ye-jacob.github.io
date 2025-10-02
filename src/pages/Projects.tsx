import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A showcase of my technical work and personal projects
          </p>
          
          <div>
            {projects.map((project, index) => (
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

export default Projects;
