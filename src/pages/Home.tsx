import { Link } from "react-router-dom";
import { profile, experiences, projects } from "@/data";

const Home = () => {
  const featuredExperiences = experiences.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12 mb-16">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-muted flex items-center justify-center overflow-hidden border border-border rounded-lg">
              {profile.headshotUrl ? (
                <img src={profile.headshotUrl} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-4xl text-muted-foreground">👤</div>
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{profile.title}</p>
              <p className="text-base text-foreground leading-relaxed mb-6">{profile.bio}</p>
              <Link to="/resume" className="text-primary underline hover:no-underline">
                View Resume →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <Link to="/experiences" className="text-sm underline">View All</Link>
          </div>
          <div className="space-y-6">
            {featuredExperiences.map((exp, i) => (
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

      <section className="container mx-auto px-4 py-12 pb-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <Link to="/projects" className="text-sm underline">View All</Link>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((proj, i) => (
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

export default Home;
