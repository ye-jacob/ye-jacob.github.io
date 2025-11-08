import { experiences } from "@/data";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground mb-12">
            My professional journey and career milestones
          </p>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="border-b border-border pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-foreground leading-relaxed mb-3">{exp.description}</p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-sm text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
