interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

export function ExperienceCard({ title, company, period, description, skills }: ExperienceCardProps) {
  return (
    <div className="border-b border-border pb-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground mt-1">{company}</p>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-foreground leading-relaxed mb-3">{description}</p>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="text-sm text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
