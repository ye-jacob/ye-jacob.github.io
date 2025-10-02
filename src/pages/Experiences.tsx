import { ExperienceCard } from "@/components/ExperienceCard";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4">Experience</h1>
          <p className="text-xl text-muted-foreground mb-12">
            My professional journey and career milestones
          </p>
          
          <div className="space-y-6">
            <ExperienceCard
              title="Senior Software Engineer"
              company="Tech Company Inc."
              period="2022 - Present"
              description="Leading development of cloud-based solutions and mentoring junior developers. Implemented microservices architecture that improved system performance by 40%. Key achievements include: architecting a new deployment pipeline that reduced deployment time by 60%, leading a team of 5 developers, and introducing best practices for code review and testing."
              skills={["React", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"]}
            />
            
            <ExperienceCard
              title="Full Stack Developer"
              company="StartUp XYZ"
              period="2020 - 2022"
              description="Built and maintained multiple client-facing applications serving over 100K users. Collaborated with design team to create intuitive user interfaces. Implemented RESTful APIs and optimized database queries resulting in 50% faster load times."
              skills={["Vue.js", "Python", "PostgreSQL", "Docker", "Redis", "GraphQL"]}
            />
            
            <ExperienceCard
              title="Junior Developer"
              company="Digital Agency ABC"
              period="2018 - 2020"
              description="Developed responsive websites and web applications for various clients. Worked closely with senior developers to learn best practices and improve coding skills. Participated in agile development process and daily stand-ups."
              skills={["JavaScript", "HTML/CSS", "PHP", "MySQL", "WordPress"]}
            />
            
            <ExperienceCard
              title="Software Engineering Intern"
              company="Innovation Labs"
              period="Summer 2018"
              description="Contributed to the development of internal tools and automation scripts. Participated in code reviews and learned software development lifecycle. Gained hands-on experience with version control and collaborative coding."
              skills={["Python", "Git", "Linux", "Bash"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
