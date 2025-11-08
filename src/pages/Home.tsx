import { Link } from "react-router-dom";
import { profile, projects } from "@/data";

const Home = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12 mb-16">
            <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] flex-shrink-0 bg-muted flex items-center justify-center overflow-hidden border border-border rounded-lg shadow-lg">
              {profile.headshotUrl ? (
                <img 
                  src={profile.headshotUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover scale-100"
                  style={{
                    imageRendering: '-webkit-optimize-contrast' as any,
                  }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
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
