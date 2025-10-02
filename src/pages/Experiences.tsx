import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground mb-12">
            My professional journey and career milestones
          </p>
          
          <div>
            {experiences.map((experience, index) => (
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
    </div>
  );
};

export default Experiences;
