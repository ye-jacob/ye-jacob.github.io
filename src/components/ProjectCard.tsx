interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="border-b border-border pb-6 mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground leading-relaxed mb-3">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech) => (
            <span key={tech} className="text-sm text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            Code
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
