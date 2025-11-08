import { projects } from "@/data";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A showcase of my technical work and personal projects
          </p>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="text-xl font-semibold mb-3">{proj.title}</h3>
                <p className="text-foreground leading-relaxed mb-3">{proj.description}</p>
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="text-sm text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4">
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">Code</a>
                  )}
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">Live Demo</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
